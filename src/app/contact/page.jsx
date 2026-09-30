import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Heapware to discuss your website, app, SaaS or ERP project.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div>
      <PageHeader eyebrow="Get In Touch" title="Contact" />
      <ContactSection />
    </div>
  );
}
