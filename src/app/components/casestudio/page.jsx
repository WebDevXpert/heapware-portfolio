"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ imageSrc, title, index, isCenter }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative z-10 w-full md:w-[350px] h-[450px] shadow-lg overflow-hidden ${
        isCenter ? "mx-auto" : index === 0 ? " md:ml-0" : "mr-4 md:mr-0"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={imageSrc}
        alt="Background"
        height={450}
        width={350}
        className="w-full h-full object-cover"
      />
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 ${
          isHovered || isCenter ? "opacity-100" : "opacity-0"
        } transition-opacity duration-500`}
      >
        <div className="absolute bottom-4 left-4 text-white transform translate-y-0">
          <div className=" mb-2">
            <div className="w-8 h-8 rounded-full mb-5 flex items-center justify-center mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className=" border rounded-full p-1 border-teal-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <h2 className="text-xl mb-5">{title}</h2>
          </div>
          <Link href="/get-started">
            <div className="text-[#2DD4BF] border-2 border-[#2DD4BF] py-2 px-4 rounded hover:bg-[#2DD4BF] hover:text-gray-900 transition cursor-pointer ">
              Read More
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ShowcaseSection = () => {
  const cardsData = [
    {
      imageSrc: "/1.png",
      title: "CYBER SECURITY",
    },
    {
      imageSrc: "/2.png",
      title: "IT MANAGEMENT",
    },
    {
      imageSrc: "/3.png",
      title: "BACKUP & RECOVERY",
    },
  ];

  return (
    <div
      className="relative py-12 bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url('/Banner-2.jpg')` }}
      id="case-studies"

    >
      <div className="absolute inset-0 bg-gradient-to-t from-black " />
      <div className="absolute inset-0 bg-gradient-to-b from-black " />
      <div className="bg-opacity-75 relative z-10 text-center py-8 shadow-md">
        <h2 className="text-base text-teal-400 uppercase">Case Studies</h2>
        <h1 className="text-3xl md:text-3xl font-bold text-white">
          Latest <span className="text-teal-400">Showcase & Solutions</span> to{" "}
          <br />
          IT <span className="text-teal-400">Solutions</span>
        </h1>
      </div>
      <div className="flex justify-center my-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              index={index}
              isCenter={index === 1} // Center the second card
            />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ShowcaseSection;
