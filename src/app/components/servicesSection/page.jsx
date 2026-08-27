"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Database Management",
    description:
      "Robust and secure database solutions tailored to your business needs.",
    imageSrc: "/database.png",
  },
  {
    title: "Performance Optimization",
    description:
      "Enhancing system performance for better speed, efficiency, and reliability.",
    imageSrc: "/performance.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-[90%] max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Why Choose Us?
          </p>

          <h2 className="text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
            Our Goal Is
            <br />
            <span className="text-blue-600">Delivering Excellence</span>
            <br />
            In IT Services.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
            Our team of experts is committed to providing top-notch IT
            solutions, including database management, performance optimization,
            and customized software development. We focus on scalability,
            security, and efficiency to support your business growth.
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 h-px max-w-md bg-blue-200"
          />
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.25 },
              }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-blue-100/60"
            >
              <div className="mb-7 flex justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-600">
                  <Image
                    src={card.imageSrc}
                    alt={card.title}
                    width={90}
                    height={90}
                    className="h-20 w-20 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <h3 className="text-center text-xl font-semibold text-gray-950">
                {card.title}
              </h3>

              <p className="mt-3 text-center text-sm leading-6 text-gray-600">
                {card.description}
              </p>

              <div className="mx-auto mt-6 h-1 w-10 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
