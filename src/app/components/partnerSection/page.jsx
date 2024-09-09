"use client";
import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const ItPartnerSection = () => {
  const [startCounting, setStartCounting] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setStartCounting(true);
    }
  }, [inView]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".anim-default-section-card",
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".anim-default-section-card",
          start: "top 90%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="achieve-section bg-black relative px-14 text-white min-h-screen overflow-hidden">
      <div
        className="absolute bg-fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/download.jpeg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-black" />

      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-between min-h-screen">
          <div className="leading-relaxed anim-default-section-card opacity-0 flex flex-col px-3 md:px-3 items-center justify-center">
            <div className="text-center lg:text-left">
              <h3 className="text-teal-400 mb-2 text-xl">Welcome to Heapware</h3>
              <h2 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                Let Us Be Your
                <br />
                <span className="text-teal-400">IT Partner</span>
              </h2>
              <p className="mb-6">
                At Heapware, we provide comprehensive IT solutions tailored to your business needs. 
                From cloud management to software development, our team of experts is dedicated to ensuring 
                your systems run smoothly, securely, and efficiently.
              </p>
              <div className="mb-4 leading-10">
                <div className="flex justify-between">
                  <span>Workflow Automation</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-teal-400 h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-4 leading-10">
                <div className="flex justify-between">
                  <span>Cloud Infrastructure Expertise</span>
                  <span>58%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-teal-400 h-2.5 rounded-full"
                    style={{ width: "58%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between leading-10">
                  <span>FinTech Software Solutions</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-teal-400 h-2.5 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:ml-0 lg:text-left">
            <div className="flex justify-center lg:ml-36 mb-5" ref={ref}>
              <div className="anim-default-section-card opacity-0 text-center md:mr-12 mr-12">
                <h2 className="text-5xl md:text-6xl text-teal-400 font-bold mb-1">
                  {startCounting ? (
                    <CountUp start={0} end={19} duration={4} suffix="+" />
                  ) : (
                    "0+"
                  )}
                </h2>
                <p className="text-sm mb-2">Years of Experience</p>
              </div>
              <div className="anim-default-section-card opacity-0 text-center">
                <h2 className="text-5xl md:text-6xl text-teal-400 font-bold mb-1">
                  {startCounting ? (
                    <CountUp start={0} end={152} duration={4} suffix="k" />
                  ) : (
                    "0k"
                  )}
                </h2>
                <p className="text-sm mb-2">Projects Completed</p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Image
                src="/waleed.jpeg"
                width={400}
                height={400}
                alt="Decorative"
                className="anim-default-section-card sm:ml-16 md:ml-20 lg:ml-28 opacity-0 rounded-lg w-3/4 lg:w-4/5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItPartnerSection;
