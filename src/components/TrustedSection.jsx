"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const TrustedSection = () => {
  return (
    <section className="relative bg-white py-12 text-black">
      <div className="m-auto flex w-[90%] flex-col-reverse items-center justify-between gap-10 lg:flex-row">
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 lg:w-1/2">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link
                href={`/Projects/${project.slug}`}
                className="flex h-24 items-center justify-center rounded-xl border border-gray-200 bg-slate-50 px-4 text-center text-lg font-bold tracking-tight text-gray-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                {project.title}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col justify-center text-center lg:w-1/2 lg:pl-12 lg:text-left">
          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl md:leading-normal">
            Trusted By <span className="text-blue-600">Growing</span>
            <br />
            <span className="text-blue-600">Businesses</span> Across
            <br />
            Industries.
          </h2>
          <p className="mx-auto max-w-md leading-7 text-gray-700 lg:mx-0">
            From healthcare and travel to ecommerce and SaaS, we&apos;ve helped
            companies launch faster, perform better and reach more customers.
            Explore the work behind each project.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
