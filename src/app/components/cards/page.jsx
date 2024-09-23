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
  FaShoppingCart,
  FaFacebook,
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
      title: "Web Development",
      description:
        "Crafting high-impact websites tailored to your brand’s needs. Our team specializes in user-friendly interfaces and scalable solutions that drive engagement and enhance user experience.",
      icon: <FaDatabase className="text-3xl text-teal-600" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Bringing your ideas to life with cutting-edge mobile applications. Whether you need native or cross-platform apps, our developers ensure a seamless user experience that meets your business goals.",
      icon: <FaCloud className="text-3xl text-teal-600" />,
    },
    {
      title: "Digital Marketing",
      description:
        "Elevate your brand visibility with our comprehensive digital marketing strategies. From PPC to content marketing, we ensure your message reaches the right audience effectively.",
      icon: <FaServer className="text-3xl text-teal-600" />,
    },
    {
      title: "SEO Services",
      description:
        "Enhance your online presence with our SEO expertise. We implement strategies that improve your search engine rankings and drive organic traffic to your website.",
      icon: <FaShieldAlt className="text-3xl text-teal-600" />,
    },
    {
      title: "E-commerce Solutions",
      description:
        "Launch your online store with our tailored e-commerce solutions. We integrate advanced features to help you sell efficiently and provide unparalleled shopping experiences for your customers.",
      icon: <FaShoppingCart className="text-3xl text-teal-600" />,
    },
    {
      title: "Social Media Management",
      description:
        "Connect with your audience better. Our social media experts craft and manage your content, ensuring brand consistency and engagement across all platforms.",
      icon: <FaFacebook className="text-3xl text-teal-600" />,
    },
  ];

  return (
    <div>
      <div className="relative flex flex-col justify-center items-center md:px-20 bg-white p-8">
        <div className="absolute inset-0 bg-[url('/Banner-2-light.jpg')] bg-fixed bg-cover bg-center opacity-75"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white"></div>

        <div className="relative z-10 text-center mb-8">
          <h2 className="text-base text-teal-600 uppercase">Our Expertise</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Comprehensive <span className="text-teal-600">IT Solutions</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of services to meet all your IT needs. Explore
            our comprehensive solutions designed to help your business thrive in
            the digital age.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="cards-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border anim-card opacity-0 border-gray-300 text-black p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col justify-between transform hover:scale-105 hover:-rotate-1 transition-transform duration-300"
                style={{ maxWidth: "24rem" }}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <FaArrowRight className="mt-9 text-3xl self-end transition-transform duration-300 transform hover:translate-x-2 text-teal-600" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
