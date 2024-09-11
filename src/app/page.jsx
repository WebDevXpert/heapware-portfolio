"use client";
import React, {  useEffect } from "react";
import Cards from "./components/cards/page";
import CaseStudio from "./components/casestudio/page";
import ContactSection from "./components/contactSection/page";
import ITSection from "./components/itSection/page"
import Mission from "./components/mission/page";
import ItPartnerSection from "./components/partnerSection/page";
import Pricing from "./components/pricing/page";
import ServicesSection from "./components/servicesSection/page";
import TrustedBySection from "./components/trustedSection/page";
import Waleed from "./components/testimonials/page";
// import DraggableSliderTabs from "./components/slider/page";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <div>
      <ITSection />
      {/* <DraggableSliderTabs/> */}
      <ItPartnerSection />
      <Cards />
      <TrustedBySection />
      <ServicesSection />
      <CaseStudio />
      <Mission />
      <ContactSection />
      <Pricing />
      <Waleed />
    </div>
  );
}
