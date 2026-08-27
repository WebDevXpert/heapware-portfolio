"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Projects from "./project1/page";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    slug: "autoupscale",
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
    slug: "code-upscale",
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
    id: 4,
    slug: "sehatghar",
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
    slug: "alezay-fashion",
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
    slug: "thumbtack",
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
    slug: "fly-hyer",
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
    id: 9,
    slug: "patientory",
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
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
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
    const blurThreshold = 105;

    return cardRect.top < blurThreshold;
  };

  return (
    <div>
      <Projects />

      <div className="min-h-screen bg-white text-gray-900">
        <section className="flex flex-col items-center justify-center py-16">
          <div className="w-11/12 md:w-10/12 lg:w-8/12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                ref={(el) => (projectRefs.current[index] = el)}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className={`bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 items-center mb-12 transition-all duration-300 ${
                  shouldBlur(index) ? "blur-sm" : ""
                }`}
                style={{
                  position: "sticky",
                  top: "90px",
                  zIndex: 10,
                }}
              >
                {/* Left Section - Text */}
                <div className="md:w-1/2">
                  <p className="text-blue-600 uppercase tracking-wider">
                    {project.company} • {project.year}
                  </p>

                  <h2 className="text-3xl font-bold mt-4">{project.title}</h2>

                  <ul className="mt-4 space-y-2">
                    {project.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0"
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

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {/* Updated Link to use project.slug */}
                    <Link
                      href={`/Projects/${project.slug}`}
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white rounded-full font-bold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200"
                    >
                      Project Details →
                    </Link>

                    {/* Live Site Button */}
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2.5 bg-white text-blue-600 border-2 border-blue-600 rounded-full font-bold transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-200"
                    >
                      Visit Live Site ↗
                    </Link>
                  </div>
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
