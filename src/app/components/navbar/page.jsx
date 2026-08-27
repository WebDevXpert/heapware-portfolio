"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full h-[88px] transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-blue-100/60 border-b border-blue-100"
          : "bg-white/60 backdrop-blur-md"
      }`}
    >
      <div className="w-[90%] h-full mx-auto flex items-center justify-between">
        <div className="text-black text-2xl font-bold">
          <Link href="/" passHref>
            <div
              onClick={handleLinkClick}
              className="cursor-pointer flex items-center"
            >
              <Image
                src="/new-heap-logo.png"
                alt="Heapware logo"
                width={400}
                height={80}
                priority
                className="w-56 h-auto object-contain"
              />
            </div>
          </Link>
        </div>
        <div className="md:hidden flex justify-end w-full">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none z-20 relative"
          >
            {isOpen ? (
              <HiX
                size={32}
                className="hover:text-blue-600 transition duration-300"
              />
            ) : (
              <HiMenu
                size={32}
                className="hover:text-blue-600 transition duration-300"
              />
            )}
          </button>
        </div>
        <div
          className={`fixed inset-0 bg-white/95 z-10 flex flex-col items-center justify-center space-y-4 text-black transform ${
            isOpen ? "translate-x-0 h-screen" : "translate-x-full h-0"
          } transition-transform duration-300 md:relative md:bg-transparent md:inset-auto md:flex md:flex-row md:space-y-0 md:space-x-4 md:translate-x-0 md:h-auto`}
        >
          <Link href="/" passHref>
            <div
              onClick={handleLinkClick}
              className="hover:text-blue-600 cursor-pointer pb-1 relative group"
            >
              Home
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full mt-2"></span>
            </div>
          </Link>
          <Link href="/Projects" passHref>
            <div
              onClick={handleLinkClick}
              className="hover:text-blue-600 cursor-pointer pb-1 relative group"
            >
              Projects
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full mt-2"></span>
            </div>
          </Link>
          <Link href="/services" passHref>
            <div
              onClick={handleLinkClick}
              className="hover:text-blue-600 cursor-pointer pb-1 relative group"
            >
              Services
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full mt-2"></span>
            </div>
          </Link>
          <Link href="/about" passHref>
            <div
              onClick={handleLinkClick}
              className="hover:text-blue-600 cursor-pointer pb-1 relative group"
            >
              About
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full mt-2"></span>
            </div>
          </Link>
          <Link href="/career" passHref>
            <div
              onClick={handleLinkClick}
              className="hover:text-blue-600 cursor-pointer pb-1 relative group"
            >
              Career
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full mt-2"></span>
            </div>
          </Link>
          {/* <Link href="/blogs" passHref>
            <div
              onClick={handleLinkClick}
              className="hover:text-blue-600 cursor-pointer pb-1 relative group"
            >
              Blog
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full mt-2"></span>
            </div>
          </Link> */}
          <Link href="/contact" passHref>
            <div
              onClick={handleLinkClick}
              className="text-blue-600 border-2 border-blue-600 py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition cursor-pointer md:hidden"
            >
              Get In Touch
            </div>
          </Link>
        </div>
        <Link href="/contact" passHref>
          <div
            onClick={handleLinkClick}
            className="text-blue-600 border-2 border-blue-600 py-2 px-4 hover:bg-blue-600 hover:text-white transition cursor-pointer hidden md:block"
          >
            Get In Touch
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
