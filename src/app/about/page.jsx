import PageHeader from "@/components/PageHeader";
import PartnerSection from "@/components/PartnerSection";
import ServiceCards from "@/components/ServiceCards";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Mission from "@/components/Mission";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Heapware, a software company in Lahore building websites, mobile apps, SaaS products and ERP systems for growing businesses.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div>
      <PageHeader eyebrow="Who We Are" title="About Us" />
      <PartnerSection />
      <ServiceCards />
      <Testimonials />
      <ContactSection />
      <Mission />
    </div>
  );
}
