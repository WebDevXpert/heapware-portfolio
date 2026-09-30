// Posts a form payload to /api/contact. Throws an Error with a user-facing
// message when the request fails.
export async function sendForm(payload) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, source: window.location.pathname }),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(
      data.error || "Something went wrong. Please try again in a moment.",
    );
  }
}
