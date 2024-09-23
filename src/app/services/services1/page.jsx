"use client";
import Link from 'next/link';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';

const Services = () => {
  useLayoutEffect(() => {
    gsap.to(".anim-headline", {
      duration: 5,
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
  }, []);

  return (
    <section className="relative bg-white bg-cover bg-center">
      {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-70"></div> */}
      <div className="container mx-auto pt-40 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold anim-headline opacity-0 text-teal-600">Services</h1>
        <div className="flex justify-center anim-subheadline opacity-0 space-x-2 text-gray-800 mt-4">
          <Link href="/">
            <div className="hover:underline text-teal-600">Home</div>
          </Link>
          <span>—</span>
          <span className="text-teal-600">Services</span>
        </div>
      </div>
    </section>
  );
}

export default Services;
