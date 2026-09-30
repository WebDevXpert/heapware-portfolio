"use client";

import { motion } from "framer-motion";

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-32 md:pt-36">
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-3 text-4xl font-bold text-gray-950 md:text-6xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 md:text-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
