"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const TeamWork = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const toggleCard = (index) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  const teamData = [
    {
      title: "Designer",
      description:
        "Designing Brilliance: Our maestros craft user-centric masterpieces, turning visions into visually stunning software realities. Join forces with our designers for a journey into digital brilliance!",
      icon: "/icons/designer.png",
    },
    {
      title: "iOS Development",
      description:
        "Seek the helping hand of our 500+ pre-vetted developers adept in the most loved languages and frameworks. Elixir, Python, RoR, Flutter, Ionic — you want it, you got it. You name it, here it is.",
      icon: "/icons/ios.png",
    },
    {
      title: "Android Developers",
      description:
        "Seek the helping hand of our 500+ pre-vetted developers adept in the most loved languages and frameworks. Elixir, Python, RoR, Flutter, Ionic — you want it, you got it. You name it, here it is.",
      icon: "/icons/android.png",
    },
    {
      title: "Product Manager",
      description:
        "Elevate your project with our Product Managers – the architects of innovation. At Code Upscale, they blend technology and creativity, crafting software masterpieces that define success as an art, not just a process.",
      icon: "/icon/front.svg",
    },
    {
      title: "QA Tester",
      description:
        "The unsung heroes ensure every line of code dances to perfection. We turn bugs into extinct species, ensuring your software shines bright in the digital galaxy!",
      icon: "/icons/qa.png",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto bg-gray-50 py-16 px-6">
      <div className="text-center">
        <h4 className="text-teal-500 font-semibold">Team Work</h4>
        <h2 className="text-3xl font-bold mt-2">Team Work On Your Project</h2>
        <p className="text-gray-600 mt-4">
          We deliver profitable and gratifying offshore BlockChain development
          services. You may connect with a large talent pool in 60 seconds at a
          cost roughly 50% lower than Western marketplaces. We can demonstrate
          it to you through a trial.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full mt-10 relative">
        {/* Left Accordion */}
        <div className="flex-1 space-y-4">
          {teamData.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold"
                onClick={() => toggleCard(index)}
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={25}
                    height={25}
                  />
                  <span>{item.title}</span>
                </div>
                {openIndices.includes(index) ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndices.includes(index) ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <div className="px-6 py-4 text-gray-600">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:w-1/3 relative flex flex-col items-center space-y-4">
          <div className="relative">
            <Image
              src="/image/laptop.png"
              alt="Laptop"
              width={350}
              height={350}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamWork;
