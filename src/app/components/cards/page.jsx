"use client";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaDatabase,
  FaCloud,
  FaServer,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function Cards() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".anim-card", {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".cards-wrapper",
        start: "top 60%",
        end: "bottom 70%",
        scrub: true,
      },
    });

    return () => gsap.killTweensOf(".anim-card");
  }, []);

  const services = [
    {
      title: "Data Center",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
      icon: <FaDatabase className="text-3xl text-teal-400" />,
    },
    {
      title: "Cloud Services",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
      icon: <FaCloud className="text-3xl text-teal-400" />,
    },
    {
      title: "IT Management",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
      icon: <FaServer className="text-3xl text-teal-400" />,
    },
    {
      title: "Cyber Security",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
      icon: <FaShieldAlt className="text-3xl text-teal-400" />,
    },
  ];

  return (
    <div id="services" className="">
      <div className="relative flex flex-col justify-center items-center md:px-20 bg-black p-8">
        <div className="absolute inset-0 bg-[url('/teal-bg.jpeg')] bg-fixed bg-cover bg-center opacity-75"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black"></div>

        <div className="relative z-10 text-center mb-8">
          <h2 className="text-base text-teal-400 uppercase">Our Services</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive <span className="text-teal-400">IT Solutions</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer a wide range of services to meet all your IT needs. Explore
            our comprehensive solutions designed to help your business thrive in
            the digital age.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="cards-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black border anim-card translate-y-4 opacity-0 border-white text-white p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col justify-between transform hover:scale-105 hover:-rotate-1 transition-transform duration-300"
                style={{ maxWidth: "24rem" }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                <FaArrowRight className="mt-9 text-3xl self-end transition-transform duration-300 transform hover:translate-x-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
