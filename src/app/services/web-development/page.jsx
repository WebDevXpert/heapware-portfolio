import ChooseUs from "../../components/services-components/chooseUs";
import ContactForm from "../../components/services-components/contactForm";
import DevelopmentProcess from "../../components/services-components/DevelopmentProcess";
import FAQSection from "../../components/services-components/FAQSection";
import HeroSection from "../../components/services-components/heroSection";
import OurServices from "../../components/services-components/ourServices";
import Services from "../../components/services-components/services";
import TeamWork from "../../components/services-components/TeamWork";
import WebPlatforms from "../../components/services-components/webPlatforms";

export default function WebDevelopment() {
  return (
    <div>
      <Services />
      <OurServices />
      <ChooseUs />
      <HeroSection />
      <DevelopmentProcess />
      <TeamWork />
      <WebPlatforms />
      <FAQSection />
      <ContactForm />
    </div>
  );
}
