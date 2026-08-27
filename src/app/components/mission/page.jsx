"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Mission() {
  const router = useRouter();

  return (
    <section
      id="mission"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
    >
      {/* Decorative elements */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid w-[90%] max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Our Mission
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Mission is to <span className="text-blue-400">Protect</span>
            <br />
            Your Businesses
            <br />& Much More.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 md:text-lg">
            We believe technology should make businesses stronger, safer, and
            more efficient. Our mission is to build dependable digital solutions
            that help organizations move forward with confidence.
          </p>

          <motion.button
            whileHover={{
              scale: 1.04,
              x: 4,
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push("/services")}
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-blue-600 px-7 py-3.5 font-medium text-white transition-colors duration-300 hover:bg-blue-700"
          >
            Discover More
            <ArrowRight size={19} />
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 70, scale: 0.95 }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          <motion.div
            whileHover={{
              scale: 1.02,
              rotate: 0.5,
            }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-blue-950/40"
          >
            <Image
              src="/p1.png"
              alt="Heapware mission"
              width={700}
              height={700}
              className="w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-transparent" />
          </motion.div>

          {/* Floating accent */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 -left-5 hidden h-20 w-20 rounded-xl border border-blue-400/30 bg-blue-600/20 backdrop-blur-md md:block"
          />
        </motion.div>
      </div>
    </section>
  );
}
