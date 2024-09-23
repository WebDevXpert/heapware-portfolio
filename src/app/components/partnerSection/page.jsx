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

  return (
    <div className="achieve-section bg-white text-black relative px-14 min-h-screen overflow-hidden">
      <div
        className="absolute bg-fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/Banner-1-light.jpg')", // Update background image if needed for light mode
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white" />
      <div className="absolute inset-0 bg-gradient-to-b from-white" />

      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-between min-h-screen">
          <div className="leading-relaxed flex flex-col px-3 md:px-3 items-center justify-center">
            <div className="text-center lg:text-left">
              <h3 className="text-teal-600 mb-2 text-xl">Welcome to Heapware</h3>
              <h2 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                Let Us Be Your
                <br />
                <span className="text-teal-600">IT Partner</span>
              </h2>
              <p className="mb-6 text-gray-700">
                At Heapware, we provide comprehensive IT solutions tailored to
                your business needs. From cloud management to software
                development, our team of experts is dedicated to ensuring your
                systems run smoothly, securely, and efficiently.
              </p>
              <div className="mb-4 leading-10">
                <div className="flex justify-between">
                  <span>Workflow Automation</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-teal-600 h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="mb-4 leading-10">
                <div className="flex justify-between">
                  <span>Cloud Infrastructure Expertise</span>
                  <span>58%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-teal-600 h-2.5 rounded-full"
                    style={{ width: "58%" }}
                  ></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between leading-10">
                  <span>FinTech Software Solutions</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                  <div
                    className="bg-teal-600 h-2.5 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center lg:ml-0 lg:text-left">
            <div className="flex justify-center lg:ml-36 mb-5" ref={ref}>
              <div className="text-center md:mr-12 mr-12">
                <h2 className="text-5xl md:text-6xl text-teal-600 font-bold mb-1">
                  {startCounting ? (
                    <CountUp start={0} end={8} duration={4} suffix="+" />
                  ) : (
                    "0+"
                  )}
                </h2>
                <p className="text-sm mb-2 text-gray-700">Years of Experience</p>
              </div>
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl text-teal-600 font-bold mb-1">
                  {startCounting ? (
                    <CountUp start={0} end={100} duration={4} suffix="k" />
                  ) : (
                    "0k"
                  )}
                </h2>
                <p className="text-sm mb-2 text-gray-700">Projects Completed</p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Image
                src="/waleed.webp" // Update image if needed for light mode
                width={400}
                height={400}
                alt="Decorative"
                className="sm:ml-16 md:ml-20 lg:ml-28 rounded-lg w-3/4 lg:w-4/5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItPartnerSection;
