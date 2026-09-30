"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ProjectList() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="flex flex-col items-center justify-center py-16">
        <div className="w-11/12 md:w-10/12 lg:w-8/12">
          {projects.map((project) => (
            <motion.div
              key={project.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="sticky top-[90px] z-10 mb-12 flex flex-col items-center space-y-6 rounded-lg bg-white p-8 shadow-lg md:flex-row md:space-x-6 md:space-y-0"
            >
              {/* Text */}
              <div className="md:w-1/2">
                <p className="uppercase tracking-wider text-blue-600">
                  Case Study • {project.year}
                </p>

                <h2 className="mt-4 text-3xl font-bold">{project.title}</h2>

                <ul className="mt-4 space-y-2">
                  {project.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center">
                      <svg
                        className="mr-2 h-6 w-6 flex-shrink-0 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
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

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={`/Projects/${project.slug}`}
                    className="inline-block rounded-full bg-blue-600 px-6 py-2.5 font-bold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200"
                  >
                    Project Details →
                  </Link>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border-2 border-blue-600 bg-white px-6 py-2.5 font-bold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-200"
                  >
                    Visit Live Site ↗
                  </a>
                </div>
              </div>

              {/* Image */}
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
  );
}
