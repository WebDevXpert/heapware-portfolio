"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const cardsData = [
  {
    imageSrc: "/1.png",
    title: "CYBER SECURITY",
    number: "01",
  },
  {
    imageSrc: "/2.png",
    title: "IT MANAGEMENT",
    number: "02",
  },
  {
    imageSrc: "/3.png",
    title: "BACKUP & RECOVERY",
    number: "03",
  },
];

export default function ShowcaseSection() {
  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="mx-auto w-[90%] max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Case Studies
          </p>

          <h2 className="text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
            Latest <span className="text-blue-600">Showcase & Solutions</span>
            <br />
            To IT Solutions
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] overflow-hidden rounded-2xl"
            >
              <Image
                src={card.imageSrc}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Default gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-blue-600/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Number */}
              <div className="absolute left-6 top-6 text-5xl font-bold text-white/40">
                {card.number}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <motion.div
                  initial={{ y: 15 }}
                  whileHover={{ y: 0 }}
                  className="flex items-end justify-between"
                >
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                      Heapware
                    </p>

                    <h3 className="text-2xl font-bold">{card.title}</h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-blue-400 group-hover:bg-blue-600">
                    <ArrowUpRight size={22} />
                  </div>
                </motion.div>
              </div>

              {/* Border */}
              <div className="pointer-events-none absolute inset-3 rounded-xl border border-white/20" />
            </motion.div>
          ))}
        </div>

        {/* Optional link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/Projects"
            className="inline-flex items-center gap-2 rounded-full border border-blue-600 px-6 py-3 font-medium text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
          >
            View All Projects
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
