  "use client";
  import Image from "next/image";

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
      <div id="home" className="relative flex p-6  items-center bg-fixed min-h-screen w-full md:px-6  text-white">
        <Image
          src="/logo-com.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />

        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
          <div className="absolute inset-0 bg-black opacity-15" />
        </div>

        <div className="relative z-10 max-w-full p-0 md:p-8 m-auto">
          <h1 className="anim-headline opacity-0 text-3xl font-semibold sm:text-5xl lg:text-7xl leading-tight">
            Creating a Better <br className="sm:hidden" />
            <span className="text-[#2DD4BF] block text-3xl sm:text-4xl lg:text-6xl">
              IT Solutions.
            </span>
          </h1>
          <p className="anim-subheadline opacity-0 my-6 text-base sm:my-10 sm:text-lg lg:text-xl">
            Transform your ideas into reality with Heapware. From startups to large enterprises, we&apos;ve got you covered.
          </p>
          <div className="anim-btn scale-125 opacity-0 flex mt-8">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
            >
              <div className="bg-teal-500 cursor-pointer text-white px-6 py-3 rounded hover:bg-teal-700 transition duration-300">
                Get Free Consult
              </div>
            </ScrollLink>
          </div>
        </div>

        <div className="anim-cel opacity-0 relative mr-56 z-10 hidden sm:block">
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            className="mt-8 sm:mt-0"
            height={400}
            width={400}
            priority
          />
        </div>
      </div>
    );
  };

  export default ITSection;
