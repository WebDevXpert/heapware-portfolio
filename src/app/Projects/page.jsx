"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Projects from "./project1/page";
import Image from "next/image";
import { motion } from "framer-motion";

// Projects Array
const projects = [
  {
    id: 1,
    title: "Autoupscale",
    description:
      "Enhanced user experience by 40%, Improved site speed by 50%, Increased mobile traffic by 35%",
    benefits: [
      "Enhanced user experience by 40%",
      "Improved site speed by 50%",
      "Increased mobile traffic by 35%",
    ],
    image: "/autoupscale.png",
    link: "https://autoupscale.com/",
    company: "Quantum Dynamics",
    year: "2023",
  },
  {
    id: 2,
    title: "Code Upscale",
    description:
      "Boosted conversion rates by 25%, Reduced cart abandonment by 15%, Enhanced mobile shopping experience",
    benefits: [
      "Boosted conversion rates by 25%",
      "Reduced cart abandonment by 15%",
      "Enhanced mobile shopping experience",
    ],
    image: "/codeupscale.png",
    link: "https://codeupscale.com/",
    company: "Tech Innovators",
    year: "2022",
  },
  {
    id: 3,
    title: "Fidak Farms",
    description:
      "Improved analytics by 60%, Enhanced user interface, Real-time insights",
    benefits: [
      "Improved analytics by 60%",
      "Enhanced user interface",
      "Real-time insights",
    ],
    image: "/innovation.png",
    link: "https://www.fidakfarms.com/",
    company: "SocialX Labs",
    year: "2021",
  },
  {
    id: 4,
    title: "SehatGhar",
    description:
      "Improved healthcare access and streamlined services across regions",
    benefits: [
      "Improved healthcare access",
      "Streamlined services",
      "Enhanced user interface",
    ],
    image: "/altern.png",
    link: "https://www.sehatghar.com/",
    company: "SocialX Labs",
    year: "2021",
  },
  {
    id: 5,
    title: "Alezay Fashion",
    description:
      "Improved shopping experience and online engagement by 50%, Enhanced user interface",
    benefits: [
      "Improved shopping experience",
      "Online engagement up by 50%",
      "Enhanced UI",
    ],
    image: "/alezy.png",
    link: "https://www.alezay.com/",
    company: "SocialX Labs",
    year: "2021",
  },
  {
    id: 6,
    title: "ThumbTack",
    description:
      "Increased contractor engagement by 40%, Enhanced task management",
    benefits: [
      "Increased contractor engagement",
      "Task management improved",
      "Real-time updates",
    ],
    image: "/ThumbTack.png",
    link: "https://www.thumbtack.com/",
    company: "SocialX Labs",
    year: "2021",
  },
  {
    id: 7,
    title: "Fly Hyer",
    description:
      "Boosted travel bookings by 30%, Enhanced flight search functionality",
    benefits: [
      "Boosted travel bookings by 30%",
      "Improved flight search",
      "Streamlined user journey",
    ],
    image: "/Hyper.png",
    link: "https://www.flyhyer.com/",
    company: "SocialX Labs",
    year: "2021",
  },
  {
    id: 8,
    title: "WishTender",
    description:
      "Streamlined wishlists and gifting process, Increased site traffic by 20%",
    benefits: [
      "Streamlined wishlists",
      "Increased traffic by 20%",
      "Improved user experience",
    ],
    image: "/WishTender.png",
    link: "https://www.wishtender.com/",
    company: "SocialX Labs",
    year: "2021",
  },
  {
    id: 9,
    title: "Patientory",
    description:
      "Improved healthcare data analytics, Streamlined patient care, Enhanced security",
    benefits: [
      "Improved healthcare analytics",
      "Streamlined patient care",
      "Enhanced data security",
    ],
    image: "/Patientoryinc.png",
    link: "https://patientory.com/",
    company: "SocialX Labs",
    year: "2021",
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProjectPage = () => {
  const [scrolling, setScrolling] = useState(0);
  const projectRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shouldBlur = (index) => {
    if (!projectRefs.current[index]) return false;

    const card = projectRefs.current[index];
    const cardRect = card.getBoundingClientRect();
    const blurThreshold = 105; // Threshold from the top where blur starts

    // Check if the card is scrolled past the threshold
    return cardRect.top < blurThreshold;
  };

  return (
    <div>
      <Projects />
      <div className="min-h-screen bg-white text-gray-900">
        <section className="flex flex-col items-center justify-center py-16">
          <h1 className="text-4xl font-semibold text-teal-600 mb-8">
            Project Page
          </h1>

          {/* Mapping over the projects array */}
          <div className="w-11/12 md:w-10/12 lg:w-8/12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                ref={(el) => (projectRefs.current[index] = el)}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 items-center mb-12 transition-all duration-300 ${shouldBlur(index) ? 'blur-sm' : ''}`}
                style={{ position: 'sticky', top: '90px', zIndex: 10 }} // Make sure the sticky behavior works
              >
                {/* Left Section - Text */}
                <div className="md:w-1/2">
                  <p className="text-teal-600 uppercase tracking-wider">
                    {project.company} • {project.year}
                  </p>
                  <h2 className="text-3xl font-bold mt-4">{project.title}</h2>
                  <ul className="mt-4 space-y-2">
                    {project.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="w-6 h-6 text-teal-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link href={project.link} passHref target="_blank">
                    <div className="inline-block mt-6 px-6 py-2 bg-teal-600 text-white rounded-full font-bold hover:bg-teal-700">
                      Visit Live Site &rarr;
                    </div>
                  </Link>
                </div>

                {/* Right Section - Image */}
                <div className="md:w-1/2">
                  <Image
                    width={400}
                    height={400}
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectPage;
