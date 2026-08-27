"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Link as ScrollLink } from "react-scroll";

const slides = [
  {
    image: "/hero-slider-1.jpg",
    eyebrow: "Smart Technology Solutions",
    title: "Creating a Better",
    highlight: "IT Solutions.",
    description:
      "Transform your ideas into powerful digital experiences with Heapware. We build solutions that help businesses move faster and grow smarter.",
  },
  {
    image: "/hero-slider-2.jpg",
    eyebrow: "Digital Transformation",
    title: "Technology That",
    highlight: "Moves Your Business Forward.",
    description:
      "From modern websites to scalable software systems, Heapware helps turn complex business challenges into reliable digital solutions.",
  },
  {
    image: "/software-house-team.jpg",
    eyebrow: "Built Around Your Business",
    title: "Your Vision.",
    highlight: "Our Technology.",
    description:
      "We combine strategy, design, and technology to deliver secure, scalable, and user-focused digital products for businesses of every size.",
  },
];

const ITSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const textRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const highlightRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animate text whenever slide changes
  useLayoutEffect(() => {
    const elements = [
      eyebrowRef.current,
      titleRef.current,
      highlightRef.current,
      descriptionRef.current,
      buttonRef.current,
    ].filter(Boolean);

    gsap.killTweensOf(elements);

    gsap.set(elements, {
      opacity: 0,
      y: 30,
    });

    const tl = gsap.timeline();

    tl.to(eyebrowRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
    })
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.35",
      )
      .to(
        highlightRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5",
      )
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "back.out(1.4)",
        },
        "-=0.3",
      );

    return () => {
      tl.kill();
    };
  }, [currentSlide]);

  const slide = slides[currentSlide];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black text-white"
    >
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((item, index) => (
          <div
            key={item.image}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Blue brand glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-transparent to-black/30" />
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-[90%] mx-auto">
          <div ref={textRef} className="max-w-3xl pt-24 md:pt-28 lg:pt-20">
            <p
              ref={eyebrowRef}
              className="mb-4 text-base font-medium uppercase tracking-[0.2em] text-blue-300 sm:text-lg"
            >
              {slide.eyebrow}
            </p>

            <h1
              ref={titleRef}
              className="text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl"
            >
              {slide.title}
            </h1>

            <h2
              ref={highlightRef}
              className="mt-1 text-4xl font-bold leading-tight text-blue-400 sm:text-6xl lg:text-7xl"
            >
              {slide.highlight}
            </h2>

            <p
              ref={descriptionRef}
              className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg lg:text-xl"
            >
              {slide.description}
            </p>

            <div ref={buttonRef} className="mt-8">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
              >
                <button className="cursor-pointer rounded-md bg-blue-600 px-7 py-3.5 font-medium text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:bg-blue-700 hover:shadow-blue-500/30">
                  Get a free consultant call
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-10 bg-blue-500"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ITSection;
