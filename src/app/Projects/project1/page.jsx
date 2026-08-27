"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function Projects() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-headline",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      );

      gsap.fromTo(
        ".projects-subheadline",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.15, ease: "power3.out" }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-32 md:pt-36">
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <p className="projects-subheadline text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 opacity-0">
          Our Work
        </p>
        <h1 className="projects-headline mt-3 text-4xl font-bold text-gray-950 opacity-0 md:text-6xl">
          Projects
        </h1>
        <p className="projects-subheadline mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 opacity-0 md:text-lg">
          Explore selected projects delivered by Heapware and discover the
          outcomes, approach, and solutions behind each one.
        </p>
      </div>
    </section>
  );
}
