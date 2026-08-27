"use client";

import {
  FaDatabase,
  FaCloud,
  FaServer,
  FaShieldAlt,
  FaArrowRight,
  FaShoppingCart,
  FaFacebook,
} from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Crafting high-impact websites tailored to your brand’s needs. Our team specializes in user-friendly interfaces and scalable solutions that drive engagement and enhance user experience.",
    icon: <FaDatabase />,
    href: "web-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Bringing your ideas to life with cutting-edge mobile applications. Whether you need native or cross-platform apps, our developers ensure a seamless user experience that meets your business goals.",
    icon: <FaCloud />,
    href: "app-development",
  },
  {
    title: "SAAS Development",
    description:
      "Elevate your business with scalable SaaS products built around your goals, workflows, and customers.",
    icon: <FaServer />,
    href: "saas-development",
  },
  {
    title: "ERP System Development",
    description:
      "Streamline your operations with secure and scalable ERP systems built to support your growing organization.",
    icon: <FaShieldAlt />,
    href: "erp-development",
  },
  {
    title: "SEO Services",
    description:
      "Improve your online visibility with search strategies designed to attract relevant traffic and sustainable growth.",
    icon: <FaShoppingCart />,
    href: "seo-services",
  },
  {
    title: "Digital Marketing",
    description:
      "Connect with your audience through modern digital campaigns that build awareness, engagement, and growth.",
    icon: <FaFacebook />,
    href: "digital-marketing",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Cards() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 md:px-12 lg:px-20">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Our Expertise
          </p>

          <h2 className="text-4xl font-bold leading-tight text-gray-950 md:text-5xl">
            Comprehensive <span className="text-blue-600">IT Solutions</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg">
            We offer a wide range of services to meet your IT needs. Explore our
            solutions designed to help your business thrive in the digital age.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.25 },
              }}
              className="group"
            >
              <Link href={`/services/${service.href}`}>
                <div className="relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/60">
                  {/* Number */}
                  <span className="absolute right-5 top-4 text-6xl font-bold text-gray-100 transition-colors duration-300 group-hover:text-blue-50">
                    0{index + 1}
                  </span>

                  {/* Icon */}
                  <div className="relative z-10 mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-3">
                    {service.icon}
                  </div>

                  <h3 className="relative z-10 mb-3 text-2xl font-semibold text-gray-950">
                    {service.title}
                  </h3>

                  <p className="relative z-10 flex-1 text-gray-600">
                    {service.description}
                  </p>

                  <div className="relative z-10 mt-8 flex items-center gap-2 font-medium text-blue-600">
                    Explore Service
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
