import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us – Software House in Lahore",
  description:
    "Contact Heapware in Lahore to discuss your website, mobile app, SaaS or ERP project. Call +92 314-4594049 or send a message for a free quote.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div>
      <PageHeader eyebrow="Get In Touch" title="Contact" />
      <ContactSection />
    </div>
  );
}
