"use client";
import Image from "next/image";
import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Card = ({ title, description, imageSrc, imageAlt }) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.anim-quote', {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: '.review-section',
        scrub: true,
        start: 'top 60%',
        end: 'bottom 70%',
      },
    });
    gsap.to('.anim-text', {
      opacity: 1,
      x: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.review-section',
        start: 'top 60%',
        end: 'bottom 70%',
      },
    });
    gsap.to('.review-section', {
      opacity: 1,
    });
    gsap.to('.anim-review-card', {
      opacity: 1,
      x: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.review-section',
        start: 'top 80%',
        end: 'bottom 70%',
        scrub: true,
      },
    });
  }, []);
  
  return (
    <div className="review-section bg-white border-gray-200 border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex anim-quote opacity-0 justify-center mb-4">
        <Image src={imageSrc} alt={imageAlt} width={100} height={100} />
      </div>
      <h3 className="text-xl font-bold anim-text opacity-0 text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 anim-text opacity-0 mb-4">{description}</p>
      <div className="anim-text opacity-0 text-teal-500 hover:text-teal-700">
        <a href="#">Learn More &rarr;</a>
      </div>
    </div>
  );
};

const CardList = () => {
  const cards = [
    {
      title: "Database Management",
      description: "Robust and secure database solutions tailored to your business needs.",
      imageSrc: "/database.png",
      imageAlt: "Database Image",
    },
    {
      title: "Performance Optimization",
      description: "Enhancing system performance for better speed and efficiency.",
      imageSrc: "/performance.png",
      imageAlt: "Performance Image",
    },
  ];

  return (
    <div className="flex bg-white items-center justify-center py-12 px-2">
      <div className=" w-[90%] mx-auto flex flex-col md:flex-row items-center">
        {/* Left Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8 text-center md:text-left">
          <h1 className="text-teal-500 font-bold mb-5 ml-1">Why Choose Us?</h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Goal is{" "}
            <span className="text-teal-500">
              {" "}
              <br /> Delivering Excellence <br />{" "}
            </span>
            <span className="text-teal-500">in IT Services.</span>
          </h2>
          <p className="text-sm text-gray-600">
            Our team of experts is committed to providing top-notch IT solutions,
            including database management, performance optimization, and customized
            software development. We focus on ensuring scalability, security, and efficiency
            to support your business growth.
          </p>
        </div>
        {/* Right Cards Section */}
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="anim-review-card opacity-0">
              <Card
                title={card.title}
                description={card.description}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
