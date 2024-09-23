"use client";
import Image from "next/image";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TrustedBySection = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".anim-icon", {
      opacity: 1,
      y: 0,
      ease: "back.out",
      stagger: 0.2,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".integrations-section",
        start: "top 20%",
        end: "bottom 40%",
      },
    });
  }, []);

  return (
    <div className="integrations-section relative bg-cover bg-center flex flex-col justify-center md:h-[500px] bg-white bg-fixed text-black py-12">
      <div className="absolute inset-0 bg-gray-200 opacity-80 "></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white"></div>
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex justify-center items-center p-2">
              <Image
                src={"/company.png"}
                alt="Facebook"
                className="anim-icon opacity-0 h-auto max-w-full"
                width={200}
                height={200}
              />
            </div>
            <div className="flex justify-center items-center p-2">
              <Image
                src={"/max.png"}
                alt="Instagram"
                className="anim-icon opacity-0 h-auto max-w-full"
                width={150}
                height={150}
              />
            </div>
            <div className="flex justify-center items-center p-2">
              <Image
                src={"/zylo.png"}
                alt="Microsoft"
                className="anim-icon opacity-0 h-auto max-w-full"
                width={150}
                height={150}
              />
            </div>
            <div className="flex justify-center items-center p-2">
              <Image
                src={"/zety.png"}
                alt="Google"
                className="anim-icon opacity-0 h-auto max-w-full"
                width={200}
                height={200}
              />
            </div>
            <div className="flex justify-center items-center p-2">
              <Image
                src={"/instagram.png"}
                alt="Booster"
                className="anim-icon opacity-0 h-auto max-w-full"
                width={200}
                height={200}
              />
            </div>
            <div className="flex justify-center items-center p-2">
              <Image
                src={"/microsoft.png"}
                alt="Digit"
                width={150}
                height={150}
                className="anim-icon opacity-0 h-auto max-w-full"
              />
            </div>
          </div>
          <div className="text-center md:ml-2 lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-9 leading-tight md:leading-normal">
              Trusted By <span className="text-[#2DD4BF] ">1,790+</span>
              <br />
              World&apos;s Leading <br />
              <span className="text-[#2DD4BF]">IT Companies.</span>
            </h2>
            <p className="text-gray-700 max-w-md mx-auto lg:mx-0 leading-6">
              Consectetur adipiscing elit. Maecenas quis faucibus ligula.
              Maecenas a purus massa. Ut elementum sem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;
