"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { gsap } from "gsap";

const ItPartnerSection = () => {
  const [startCounting, setStartCounting] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    if (inView) {
      setStartCounting(true);

      const bars = gsap.utils.toArray(".skill-bar");

      gsap.fromTo(
        bars,
        {
          width: "0%",
        },
        {
          width: (index) => {
            const values = [85, 58, 75];
            return `${values[index]}%`;
          },
          duration: 1.8,
          stagger: 0.25,
          ease: "power3.out",
        },
      );
    }
  }, [inView]);

  return (
    <section
      ref={sectionRef}
      className="achieve-section relative bg-white py-16 text-black md:py-24 lg:py-32"
    >
      <div className="mx-auto grid w-[90%] grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col items-center justify-center px-3 md:px-3">
          <div className="w-full max-w-2xl text-center lg:text-left">
            <h3 ref={ref} className="mb-2 text-xl font-medium text-blue-600">
              Welcome to Heapware
            </h3>

            <h2 className="mb-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Let Us Be Your
              <br />
              <span className="text-blue-600">IT Partner</span>
            </h2>

            <p className="mb-8 text-base leading-7 text-gray-600 sm:text-lg">
              At Heapware, we provide comprehensive IT solutions tailored to
              your business needs. From cloud management to software
              development, our team of experts is dedicated to ensuring your
              systems run smoothly, securely, and efficiently.
            </p>

            {/* Workflow Automation */}
            <div className="mb-6">
              <div className="mb-2 flex justify-between text-sm font-medium sm:text-base">
                <span>Workflow Automation</span>
                <span>85%</span>
              </div>

              <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="skill-bar h-full w-0 rounded-full bg-blue-600" />
              </div>
            </div>

            {/* Cloud Infrastructure */}
            <div className="mb-6">
              <div className="mb-2 flex justify-between text-sm font-medium sm:text-base">
                <span>Cloud Infrastructure Expertise</span>
                <span>58%</span>
              </div>

              <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="skill-bar h-full w-0 rounded-full bg-blue-600" />
              </div>
            </div>

            {/* FinTech */}
            <div>
              <div className="mb-2 flex justify-between text-sm font-medium sm:text-base">
                <span>FinTech Software Solutions</span>
                <span>75%</span>
              </div>

              <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200">
                <div className="skill-bar h-full w-0 rounded-full bg-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          {/* Statistics */}
          <div className="mb-8 flex justify-center gap-12 lg:justify-start lg:pl-24">
            <div className="text-center">
              <h2 className="mb-1 text-5xl font-bold text-blue-600 md:text-6xl">
                {startCounting ? (
                  <CountUp start={0} end={8} duration={4} suffix="+" />
                ) : (
                  "0+"
                )}
              </h2>

              <p className="text-sm text-gray-600">Years of Experience</p>
            </div>

            <div className="text-center">
              <h2 className="mb-1 text-5xl font-bold text-blue-600 md:text-6xl">
                {startCounting ? (
                  <CountUp start={0} end={100} duration={4} suffix="k" />
                ) : (
                  "0k"
                )}
              </h2>

              <p className="text-sm text-gray-600">Projects Completed</p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/team-collab.jpg"
              width={400}
              height={400}
              alt="Heapware team collaboration"
              className="w-3/4 rounded-xl object-cover shadow-lg sm:w-4/5 lg:w-4/5 xl:w-2/3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItPartnerSection;
