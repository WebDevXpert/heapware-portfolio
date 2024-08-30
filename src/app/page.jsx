"use client";
import React, { lazy, Suspense, useEffect } from 'react';
const Cards = lazy(() => import('./components/cards/page'));
const CaseStudio = lazy(() => import('./components/casestudio/page'));
const ContactSection = lazy(() => import('./components/contactSection/page'));
const ITSection = lazy(() => import('./components/itSection/page'));
const Mission = lazy(() => import('./components/mission/page'));
const ItPartnerSection = lazy(() => import('./components/partnerSection/page'));
const Pricing = lazy(() => import('./components/pricing/page'));
const ServicesSection = lazy(() => import('./components/servicesSection/page'));
const TrustedBySection = lazy(() => import('./components/trustedSection/page'));
const Waleed = lazy(() => import('./components/testimonials/page'));
// Uncomment if you want to lazy-load these as well
// const Navbar = lazy(() => import('./components/navbar/page'));
// const Footer = lazy(() => import('./components/footer/page'));
// const PreLoader = lazy(() => import('./components/preloader/page'));


export default function Home() {
    useEffect(() => {
        (
            async () => {
                const LocomotiveScroll = (await import('locomotive-scroll')).default;
                const locomotiveScroll = new LocomotiveScroll();
            }
        )();
    }, []);

    return (
        <div>
            {/* Uncomment if you want to include PreLoader and Navbar */}
            {/* <Suspense fallback={<div>Loading PreLoader...</div>}>
              <PreLoader />
            </Suspense> */}
            {/* <Suspense fallback={<div>Loading Navbar...</div>}>
              <Navbar />
            </Suspense> */}

            <Suspense fallback={<div>Loading...</div>}>
                <ITSection />
                <ItPartnerSection />
                <Cards />
                <TrustedBySection />
                <ServicesSection />
                <CaseStudio />
                <Mission />
                <ContactSection />
                <Pricing />
                <Waleed />
            </Suspense>

            {/* Uncomment if you want to include Footer */}
            {/* <Suspense fallback={<div>Loading Footer...</div>}>
              <Footer />
            </Suspense> */}
        </div>
    );
}

