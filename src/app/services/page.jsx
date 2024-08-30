// pages/services.js
"use client";
import Head from 'next/head';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Services from "../services/services1/page";
import Link from 'next/link';

const services = [
  {
    title: "Web Development",
    description: "We build responsive and scalable web applications tailored to your business needs.",
    icon: "&#127760;",
  },
  {
    title: "Mobile App Development",
    description: "Our team creates high-quality mobile apps for both Android and iOS platforms.",
    icon: "&#128241;",
  },
  {
    title: "Digital Marketing",
    description: "We help you reach your target audience through effective digital marketing strategies.",
    icon: "&#128188;",
  },
  {
    title: "UI/UX Design",
    description: "Our designers create intuitive and engaging user interfaces and experiences.",
    icon: "&#127912;",
  },
  {
    title: "SEO Services",
    description: "Improve your website's visibility on search engines with our SEO services.",
    icon: "&#128269;",
  },
  {
    title: "Content Creation",
    description: "We create engaging and high-quality content that resonates with your audience.",
    icon: "&#9997;&#65039;",
  },
  {
    title: "Social Media Management",
    description: "Our experts manage your social media accounts to increase engagement and reach.",
    icon: "&#128227;",
  },
  {
    title: "Branding",
    description: "We help you establish a strong and consistent brand identity.",
    icon: "&#128640;",
  },
  {
    title: "E-commerce Solutions",
    description: "We build and optimize e-commerce platforms to enhance your online sales.",
    icon: "&#128722;",
  },
];

export default function ServicesUs() {
  const serviceRefs = useRef([]);

  useEffect(() => {
    serviceRefs.current.forEach((ref, index) => {
      gsap.fromTo(ref,
        { scale: 1 },
        {
          scale: 1.05,
          paused: true,
          reversed: true,
          ease: 'power1.inOut',
          duration: 0.3,
          onReverseComplete: () => gsap.set(ref, { clearProps: 'all' })
        });
    });
  }, []);

  const handleMouseEnter = index => {
    const animation = gsap.getTweensOf(serviceRefs.current[index])[0];
    if (animation) {
      animation.play();
    }
  };

  const handleMouseLeave = index => {
    const animation = gsap.getTweensOf(serviceRefs.current[index])[0];
    if (animation) {
      animation.reverse();
    }
  };

  return (
    <div>
      <Services />

      <main className="py-12 bg-black">
        <section className="container mx-auto px-4 mb-12">
          <h2 className="text-4xl font-bold text-teal-500 text-center mb-8">What We Do</h2>
          <p className="text-center text-lg px-9 text-gray-300">Our digital agency offers a comprehensive suite of services to meet your business needs. From web development to digital marketing, we have the expertise to help you succeed.</p>
        </section>

        <section className="container mx-auto px-4 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black border cursor-pointer border-gray-200 p-6 rounded-lg shadow-lg transform transition-transform duration-300"
                ref={el => serviceRefs.current[index] = el}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="text-6xl mb-4" dangerouslySetInnerHTML={{ __html: service.icon }}></div>
                <h2 className="text-2xl text-teal-500 font-bold mb-2">{service.title}</h2>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className=" relative bg-fixed bg-[url('/teal-bg.jpeg')] bg-cover bg-center py-12">
        <div className="absolute inset-0 bg-gradient-to-t from-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-black" />
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h2 className="text-4xl text-teal-500 font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-300 mb-8">Contact us today to discuss your project and find out how we can help you achieve your business goals.</p>
            <Link href={"/contact"} className="bg-black border border-teal-500 text-teal-500 px-6 py-3 rounded-full font-bold hover:bg-teal-500 hover:text-black transition-colors">Contact Us</Link>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-teal-500 text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-200 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 mb-4">&ldquo;The team at Digital Agency is phenomenal! They helped us increase our online presence and grow our business.&rdquo;</p>
              <p className="font-bold text-teal-500">&ndash; Client A</p>
            </div>
            <div className="bg-black border border-gray-200 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 mb-4">&ldquo;Their web development services are top-notch. Our new website is fast, responsive, and looks great.&rdquo;</p>
              <p className="font-bold text-teal-500">&ndash; Client B</p>
            </div>
            <div className="bg-black border border-gray-200 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 mb-4">&ldquo;Thanks to their SEO and digital marketing efforts, we&lsquo;ve seen a significant increase in traffic and sales.&rdquo;</p>
              <p className="font-bold text-teal-500">&ndash; Client C</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
