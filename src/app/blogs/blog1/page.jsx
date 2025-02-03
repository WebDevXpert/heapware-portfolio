"use client";
import Link from "next/link";
import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function BlogUs() {
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
      <div className="container mx-auto pt-40 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold anim-headline opacity-0 text-teal-600">
          Blogs
        </h1>
      </div>
    </section>
  );
}
