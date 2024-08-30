"use client";
import Image from "next/image";
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Card = ({ title, description, imageSrc, imageAlt }) => {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.anim-quote', {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: '.review-section',
        scrub: true,
        start: 'top 60%',
        end: 'bottom 70%',
      },
    })
    gsap.to('.anim-text', {
      opacity: 1,
      x: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.review-section',
        start: 'top 60%',
        end: 'bottom 70%',
      },
    })
    gsap.to('.review-section', {
      opacity: 1,
    })
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
    })
  }, [])
  return (
    <div className="review-section bg-black border-white border rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex anim-quote opacity-0 justify-center mb-4">
        <Image src={imageSrc} alt={imageAlt} width={100} height={100} />
      </div>
      <h3 className="text-xl font-bold anim-text opacity-0 text-white mb-2">{title}</h3>
      <p className="text-gray-400 anim-text opacity-0 mb-4">{description}</p>
      <div className="anim-text opacity-0 text-[#2DD4BF] hover:text-[#3ba092]">
        <a href="#">Learn More &rarr;</a>
      </div>
    </div>
  );
};

const CardList = () => {
  const cards = [
    {
      title: "Data Base",
      description: "Secure Database",
      imageSrc: "/database.png",
      imageAlt: "Database Image",
    },
    {
      title: "Performance",
      description: "Performance Speed",
      imageSrc: "/performance.png",
      imageAlt: "Performance Image",
    },
  ];

  return (
    <div className="flex bg-black items-center justify-center py-12 px-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8 text-center md:text-left">
          <h1 className="text-[#2DD4BF] font-bold mb-5 ml-1">Why Choose Us?</h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Goal is{" "}
            <span className="text-[#2DD4BF]">
              {" "}
              <br /> Giving the Best <br />{" "}
            </span>
             <span className="text-[#2DD4BF]">For IT Services.</span>
          </h2>
          <p className="text-sm text-gray-400">
            Aliquam in tristique lorem. Quisque varius ultrices ex at
            ullamcorper. Donec vitae lacus eu ligula tincidunt feugiat non eu
            metus. Quisque ut ullamcorper sapien. Maecenas gravida elit vel
            augue vulputate, non iaculis diam aliquam. Suspendisse condimentum
            ut justo a dapibus. Mauris eleifend dolor.
          </p>
        </div>
        {/* Right Cards Section */}
        <div className=" w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
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
