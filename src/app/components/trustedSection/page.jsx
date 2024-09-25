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
    <div className="integrations-section relative  bg-white text-black py-12">
      <div className=" flex flex-col justify-between w-[90%] m-auto ">
        <div className="flex flex-wrap justify-center lg:justify-between">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center p-2">
              <Image
                src={"/company.png"}
                alt="Facebook"
                className="anim-icon opacity-0 h-auto max-w-full"
                width={200}
                height={200}
              />
            </div>
            <div className="flex items-center p-2">
              <Image
                src={"/max.png"}
                alt="Instagram"
                className="anim-icon opacity-0 h-auto max-w-full"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center p-2">
              <Image
                src={"/zylo.png"}
                alt="Microsoft"
                className="anim-icon opacity-0 h-auto max-w-full"
                width={150}
                height={150}
              />
            </div>
            <div className="flex items-center p-2">
              <Image
                src={"/zety.png"}
                alt="Google"
                className="anim-icon opacity-0 h-auto max-w-full"
                width={200}
                height={200}
              />
            </div>
            <div className="flex items-center p-2">
              <Image
                src={"/instagram.png"}
                alt="Booster"
                className="anim-icon opacity-0 h-auto max-w-full"
                width={200}
                height={200}
              />
            </div>
            <div className="flex items-center p-2">
              <Image
                src={"/microsoft.png"}
                alt="Digit"
                className="anim-icon opacity-0 h-auto max-w-full"
                width={150}
                height={150}
              />
            </div>
          </div>


          <div className="text-center mt-6 lg:text-left flex justify-center flex-col  ">
            <h2 className="text-4xl md:text-5xl font-bold mb-9 leading-tight md:leading-normal">
              Trusted By <span className="text-[#2DD4BF] ">1,790+</span>
              <br />
              World&apos;s Leading <br />
              <span className="text-[#2DD4BF]">IT Companies.</span>
            </h2>
            <p className="text-gray-700 max-w-md  lg:mx-0 leading-6">
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
