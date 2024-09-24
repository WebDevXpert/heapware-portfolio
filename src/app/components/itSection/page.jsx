"use client";
import { gsap } from "gsap";
import { Link as ScrollLink } from "react-scroll";
import React, { useLayoutEffect } from "react";

const ITSection = () => {
  useLayoutEffect(() => {
    gsap.to(".anim-headline", {
      duration: 3,
      y: 0,
      opacity: 1,
      ease: "power2.out",
    });
    gsap.to(".anim-subheadline", {
      duration: 2,
      opacity: 1,
      y: 0,
      delay: 0.3,
      ease: "power2.out",
    });
    gsap.to(".anim-cel", {
      duration: 2,
      y: 0,
      opacity: 1,
      delay: 0.9,
    });
    gsap.to(".anim-btn", {
      duration: 2,
      scale: 1,
      opacity: 1,
      ease: "back.out",
      delay: 0.6,
    });
    gsap.to(".anim-btn-2", {
      duration: 1,
      y: 0,
      opacity: 1,
      ease: "power2.out",
      delay: 0.9,
    });
  }, []);

  return (
    <div id="home" className="it-section relative">
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://youtu.be/fS4cH2fky5M?si=v3TvSnSBocnD3Quh" type="video" />
      </video>
      <div className="background-overlays relative z-10">
        <div className="gradient-overlay"></div>
        <div className="white-overlay"></div>
      </div> */}

      {/* Content */}
      <div className="content relative z-20 text-black">
        <h1 className="anim-headline">
          Creating a Better <br className="sm-hidden" />
          <span className="highlight">IT Solutions.</span>
        </h1>
        <p className="anim-subheadline">
          Transform your ideas into reality with Heapware. From startups to large enterprises, we&apos;ve got you covered.
        </p>
        <div className="anim-btn opacity-0 duration-500">
          <ScrollLink to="contact" smooth={true} duration={500}>
            <div className="btn bg-teal-500  text-white cursor-pointer px-6 py-3 rounded-lg mt-5 hover:bg-teal-600 transition duration-300">
              Get Free Consult
            </div>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default ITSection;
