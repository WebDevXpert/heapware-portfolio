import ServiceCards from "@/components/ServiceCards";
import CaseStudies from "@/components/CaseStudies";
import ContactSection from "@/components/ContactSection";
import HeroSlider from "@/components/HeroSlider";
import Mission from "@/components/Mission";
import PartnerSection from "@/components/PartnerSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustedSection from "@/components/TrustedSection";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <PartnerSection />
      <ServiceCards />
      <TrustedSection />
      <WhyChooseUs />
      <CaseStudies />
      <Mission />
      <ContactSection />
      <Testimonials />
    </div>
  );
}
