import PageHeader from "@/components/PageHeader";
import PartnerSection from "@/components/PartnerSection";
import ServiceCards from "@/components/ServiceCards";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Mission from "@/components/Mission";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us – Software House in Lahore",
  description:
    "Meet Heapware, a software house in Lahore, Pakistan building websites, mobile apps, SaaS products and ERP systems for growing businesses worldwide.",
  path: "/about",
  image: "/team-collab.jpg",
});

export default function AboutPage() {
  return (
    <div>
      <PageHeader eyebrow="Who We Are" title="About Heapware" />
      <PartnerSection />
      <ServiceCards />
      <Testimonials />
      <ContactSection />
      <Mission />
    </div>
  );
}
