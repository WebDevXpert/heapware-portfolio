import React from "react";
import Link from "next/link";
import Projects from "./project1/page";
import Image from "next/image";

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
      "Improved analytics by 60%, Enhanced user interface, Real-time insights",
    benefits: [
      "Improved analytics by 60%",
      "Enhanced user interface",
      "Real-time insights",
    ],
    image: "/altern.png",
    link: "https://www.sehatghar.com/",
    company: "SocialX Labs",
    year: "2021",
  },
  {
    id: 5,
    title: "Alezay",
    description:
      "Improved analytics by 60%, Enhanced user interface, Real-time insights",
    benefits: [
      "Improved analytics by 60%",
      "Enhanced user interface",
      "Real-time insights",
    ],
    image: "/alezy.png",
    link: "https://www.alezay.com/",
    company: "SocialX Labs",
    year: "2021",
  }
];

const ProjectPage = () => {
  return (
    <div>
      <Projects />
      <div className="min-h-screen bg-black text-white">
        <section className="flex flex-col items-center justify-center py-16">
          <h1 className="text-4xl font-semibold text-teal-400 mb-8">
            Project Page
          </h1>

          {/* Mapping over the projects array */}
          <div className="space-y-12 w-11/12 md:w-10/12 lg:w-8/12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-black border border-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 items-center sticky top-28"
              >
                {/* Left Section - Text */}
                <div className="md:w-1/2">
                  <p className="text-teal-400 uppercase tracking-wider">
                    {project.company} • {project.year}
                  </p>
                  <h2 className="text-3xl font-bold mt-4">{project.title}</h2>
                  <ul className="mt-4 space-y-2">
                    {project.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="w-6 h-6 text-teal-400 mr-2"
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
                  <Link target="_blank" href={project.link}>
                    <div className="inline-block mt-6 px-6 py-2 bg-teal-400 text-gray-900 rounded-full font-bold hover:bg-teal-500">
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectPage;
