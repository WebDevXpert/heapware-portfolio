"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Code2,
  Building2,
  TrendingUp,
  Megaphone,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
    document.body.style.overflow = "auto";
  };

  const toggleMobileMenu = () => {
    setIsOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? "hidden" : "auto";
      return next;
    });
  };

  const serviceCategories = [
    {
      title: "Digital Development",
      icon: Code2,
      links: [
        {
          name: "Web Development",
          href: "/services/web-development",
          desc: "Modern, scalable websites built around your business.",
        },
        {
          name: "Mobile App Development",
          href: "/services/app-development",
          desc: "High-quality mobile experiences for your customers.",
        },
      ],
    },
    {
      title: "Business Systems",
      icon: Building2,
      links: [
        {
          name: "SaaS Development",
          href: "/services/saas-development",
          desc: "Scalable SaaS products built for long-term growth.",
        },
        {
          name: "ERP System Development",
          href: "/services/erp-development",
          desc: "Connected systems that streamline your operations.",
        },
      ],
    },
    {
      title: "Growth & Visibility",
      icon: TrendingUp,
      links: [
        {
          name: "SEO Services",
          href: "/services/seo-services",
          desc: "Improve search visibility and attract relevant traffic.",
        },
      ],
    },
    {
      title: "Digital Marketing",
      icon: Megaphone,
      links: [
        {
          name: "Digital Marketing",
          href: "/services/digital-marketing",
          desc: "Campaigns designed to grow reach, engagement and leads.",
        },
      ],
    },
  ];

  const allMobileServices = serviceCategories.flatMap(
    (category) => category.links,
  );

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      {/* Navbar */}
      <div
        className={`w-full border-b transition-all duration-300 ${
          isScrolled
            ? "border-blue-100 bg-white/95 shadow-lg shadow-blue-100/40 backdrop-blur-xl"
            : "border-blue-50 bg-white/80 backdrop-blur-lg"
        }`}
      >
        <div className="relative mx-auto flex h-[88px] w-[90%] items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="flex items-center">
            <motion.div
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
              className="flex items-center"
            >
              <Image
                src="/new-heap-logo.png"
                alt="Heapware"
                width={400}
                height={80}
                priority
                className="h-auto w-56 object-contain"
              />
            </motion.div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {/* Home */}
            <Link href="/">
              <motion.div
                whileHover={{ y: -1 }}
                className="group relative rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-gray-950"
              >
                <span>Home</span>
                <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-5" />
              </motion.div>
            </Link>

            {/* Projects */}
            <Link href="/Projects">
              <motion.div
                whileHover={{ y: -1 }}
                className="group relative rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-gray-950"
              >
                <span>Projects</span>
                <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-5" />
              </motion.div>
            </Link>

            {/* ================= SERVICES ================= */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <motion.button
                whileHover={{ y: -1 }}
                onClick={() => setServicesOpen((prev) => !prev)}
                className="group relative flex items-center gap-1 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-gray-950"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    servicesOpen ? "rotate-180 text-blue-600" : "text-gray-400"
                  }`}
                />
                <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-5" />
              </motion.button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 12,
                      scale: 0.98,
                      x: "-50%",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      x: "-50%",
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                      scale: 0.98,
                      x: "-50%",
                    }}
                    transition={{
                      duration: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="fixed left-1/2 top-[88px] mt-3 w-[min(980px,calc(100vw-40px))] rounded-2xl border border-blue-100 bg-white p-6 shadow-[0_25px_70px_rgba(37,99,235,0.14)]"
                  >
                    <div className="grid grid-cols-4 gap-5">
                      {serviceCategories.map((category) => {
                        const Icon = category.icon;

                        return (
                          <div key={category.title} className="flex flex-col">
                            <div className="mb-3 flex items-center gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <Icon size={16} />
                              </div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                                {category.title}
                              </h4>
                            </div>

                            <div className="space-y-1">
                              {category.links.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  onClick={closeMenu}
                                  className="group block rounded-xl p-3 transition-all duration-200 hover:bg-blue-50"
                                >
                                  <div className="flex items-center gap-1 text-sm font-semibold text-gray-800 transition-colors group-hover:text-blue-600">
                                    <ChevronRight
                                      size={14}
                                      className="text-blue-500 transition-transform duration-200 group-hover:translate-x-1"
                                    />
                                    {service.name}
                                  </div>
                                  <p className="mt-1 pl-5 text-xs leading-5 text-gray-500">
                                    {service.desc}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* About */}
            <Link href="/about">
              <motion.div
                whileHover={{ y: -1 }}
                className="group relative rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-gray-950"
              >
                <span>About</span>
                <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-5" />
              </motion.div>
            </Link>

            {/* Career */}
            <Link href="/career">
              <motion.div
                whileHover={{ y: -1 }}
                className="group relative rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-gray-950"
              >
                <span>Career</span>
                <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-300 group-hover:w-5" />
              </motion.div>
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link href="/contact" onClick={closeMenu}>
              <motion.div
                whileHover={{
                  y: -2,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group inline-flex items-center gap-3 rounded-lg border border-blue-600 bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
              >
                <span>Get In Touch</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-white transition-all duration-300 group-hover:bg-white group-hover:text-blue-600">
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </motion.div>
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-gray-900 transition-all hover:border-blue-200 hover:bg-blue-100"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                  >
                    <X size={21} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                  >
                    <Menu size={21} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="overflow-hidden border-b border-blue-100 bg-white shadow-xl md:hidden"
          >
            <div className="mx-auto w-[90%] py-5">
              <nav className="flex flex-col gap-1">
                <Link href="/" onClick={closeMenu}>
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0 }}
                    className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:bg-blue-50 hover:text-gray-950"
                  >
                    <span>Home</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-50 text-gray-400 transition-all group-hover:bg-blue-600 group-hover:text-white">
                      <ChevronRight size={14} />
                    </span>
                  </motion.div>
                </Link>

                <Link href="/Projects" onClick={closeMenu}>
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 }}
                    className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:bg-blue-50 hover:text-gray-950"
                  >
                    <span>Projects</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-50 text-gray-400 transition-all group-hover:bg-blue-600 group-hover:text-white">
                      <ChevronRight size={14} />
                    </span>
                  </motion.div>
                </Link>

                {/* Mobile Services */}
                <div className="mt-2 border-t border-gray-100 pt-3">
                  <div className="mb-2 px-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">
                      Services
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Explore our technology solutions
                    </p>
                  </div>

                  <div className="space-y-1">
                    {allMobileServices.map((service, index) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 + index * 0.04 }}
                      >
                        <Link href={service.href} onClick={closeMenu}>
                          <div className="group flex items-center justify-between rounded-xl px-4 py-3 transition-all hover:bg-blue-50">
                            <div>
                              <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
                                {service.name}
                              </p>
                              <p className="mt-0.5 text-[11px] text-gray-500">
                                {service.desc}
                              </p>
                            </div>
                            <ChevronRight
                              size={16}
                              className="shrink-0 text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-600"
                            />
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <Link href="/about" onClick={closeMenu}>
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:bg-blue-50 hover:text-gray-950"
                  >
                    <span>About</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-50 text-gray-400 transition-all group-hover:bg-blue-600 group-hover:text-white">
                      <ChevronRight size={14} />
                    </span>
                  </motion.div>
                </Link>

                <Link href="/career" onClick={closeMenu}>
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 }}
                    className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:bg-blue-50 hover:text-gray-950"
                  >
                    <span>Career</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-50 text-gray-400 transition-all group-hover:bg-blue-600 group-hover:text-white">
                      <ChevronRight size={14} />
                    </span>
                  </motion.div>
                </Link>

                <Link href="/contact" onClick={closeMenu}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-3 flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white transition-all hover:bg-blue-700"
                  >
                    <span>Get In Touch</span>
                    <ArrowRight size={16} />
                  </motion.div>
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
