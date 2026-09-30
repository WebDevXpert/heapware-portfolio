import nodemailer from "nodemailer";
import { site } from "@/lib/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 100, email: 200, phone: 40, company: 150, message: 5000 };

const clean = (value, max) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;

  const port = Number(SMTP_PORT || 465);
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot field: real visitors never see or fill it.
  if (body.website) return Response.json({ ok: true });

  const type = body.type === "subscribe" ? "subscribe" : "contact";
  const email = clean(body.email, LIMITS.email);
  const name = clean(body.name, LIMITS.name);
  const phone = clean(body.phone, LIMITS.phone);
  const company = clean(body.company, LIMITS.company);
  const message = clean(body.message, LIMITS.message);
  const services = Array.isArray(body.services)
    ? body.services.filter((s) => typeof s === "string").slice(0, 10)
    : [];
  const source = clean(body.source, 200);

  if (!EMAIL_RE.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (type === "contact" && !name) {
    return Response.json({ error: "Please enter your name." }, { status: 400 });
  }

  const transport = getTransport();
  if (!transport) {
    console.error("Contact form: SMTP_* environment variables are not set.");
    return Response.json(
      {
        error: `We couldn't send your message right now. Please email us at ${site.email}.`,
      },
      { status: 500 },
    );
  }

  const lines =
    type === "subscribe"
      ? [`New newsletter subscriber: ${email}`]
      : [
          `Name: ${name}`,
          `Email: ${email}`,
          phone ? `Phone: ${phone}` : null,
          company ? `Company: ${company}` : null,
          services.length ? `Services: ${services.join(", ")}` : null,
          "",
          message || "(no message)",
        ];
  if (source) lines.push("", `Sent from: ${source}`);

  try {
    await transport.sendMail({
      from: process.env.CONTACT_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO || site.email,
      replyTo: email,
      subject:
        type === "subscribe"
          ? "New newsletter subscriber"
          : `New inquiry from ${name}${services.length ? ` (${services.join(", ")})` : ""}`,
      text: lines.filter((l) => l !== null).join("\n"),
    });
  } catch (err) {
    console.error("Contact form: failed to send email", err);
    return Response.json(
      {
        error: `We couldn't send your message right now. Please email us at ${site.email}.`,
      },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
