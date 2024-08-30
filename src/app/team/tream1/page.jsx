// components/AboutUs.js
"use client"
import Link from 'next/link';
import { useLayoutEffect } from 'react';
import gsap from 'gsap';

const TeamUs= ()=> {
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
    <section className="relative bg-black bg-cover bg-center" >
      <div className="absolute inset-0
       opacity-50"></div>
      <div className="container mx-auto pt-40 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold anim-headline opacity-0 text-teal-400">Team</h1>
        <div className="flex justify-center anim-subheadline opacity-0 space-x-2 text-white mt-4">
          <Link href="/">
            <div className="hover:underline">Home</div>
          </Link>
          <span>—</span>
          <span className="text-teal-400">Team</span>
        </div>
      </div>
    </section>
  );
}

export default TeamUs
