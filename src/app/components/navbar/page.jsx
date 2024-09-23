"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { gsap } from "gsap";
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
      className={`fixed z-50 w-full py-5 md:px-16 px-6 transition-all duration-300 ${isScrolled
          ? "bg-opacity-70 backdrop-blur-xl shadow-lg bg-white"
          : ""
        }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-2xl font-bold">
          <Link href="/" passHref>
            <div onClick={handleLinkClick} className="text-2xl font-bold cursor-pointer flex items-baseline">
              <Image
                src="/heapware-logo.png"
                alt="logo"
                width={400}
                height={50}
                className="w-60 h-20 sm:w-56 sm:h-12 md:w-40 md:h-40 lg:w-48 lg:h-16 object-contain"
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
                className="hover:text-[#2DD4BF] transition duration-300"
              />
            ) : (
              <HiMenu
                size={32}
                className="hover:text-[#2DD4BF] transition duration-300"
              />
            )}
          </button>
        </div>
        <div
          className={`fixed inset-0 bg-white bg-opacity-90 z-10 flex flex-col items-center justify-center space-y-4 text-black transform ${isOpen ? "translate-x-0 h-screen" : "translate-x-full h-0"} transition-transform duration-300 md:relative md:bg-transparent md:inset-auto md:flex md:flex-row md:space-y-0 md:space-x-4 md:translate-x-0 md:h-auto`}
        >
          {/* Home Link */}
          <Link href="/" passHref>
            <div onClick={handleLinkClick} className="hover:text-[#2DD4BF] cursor-pointer pb-1 relative group">
              Home
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-[#2DD4BF] transition-all duration-500 group-hover:w-full mt-2"></span>
            </div>
          </Link>

          {/* Projects Link */}
          <Link href="/Projects" passHref>
            <div onClick={handleLinkClick} className="hover:text-[#2DD4BF] cursor-pointer pb-1 relative group">
              Projects
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-[#2DD4BF] transition-all duration-500 group-hover:w-full mt-2"></span>
            </div>
          </Link>

          {/* Services Link */}
          <Link href="/services" passHref>
            <div onClick={handleLinkClick} className="hover:text-[#2DD4BF] cursor-pointer pb-1 relative group">
              Services
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-[#2DD4BF] transition-all duration-500 group-hover:w-full mt-2"></span>
            </div>
          </Link>

          {/* About Link */}
          <Link href="/about" passHref>
            <div onClick={handleLinkClick} className="hover:text-[#2DD4BF] cursor-pointer pb-1 relative group">
              About
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-[#2DD4BF] transition-all duration-500 group-hover:w-full mt-2"></span>
            </div>
          </Link>
          {/* Team Link */}
          <Link href="/team" passHref>
            <div onClick={handleLinkClick} className="hover:text-[#2DD4BF] cursor-pointer pb-1 relative group">
              Team
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-[#2DD4BF] transition-all duration-500 group-hover:w-full mt-2"></span>
            </div>
          </Link>
          {/* Career Link */}
          <Link href="/career" passHref>
            <div onClick={handleLinkClick} className="hover:text-[#2DD4BF] cursor-pointer pb-1 relative group">
              Career
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-[#2DD4BF] transition-all duration-500 group-hover:w-full mt-2"></span>
            </div>
          </Link>

          {/* Blog Link */}
          <Link href="/blogs" passHref>
            <div onClick={handleLinkClick} className="hover:text-[#2DD4BF] cursor-pointer pb-1 relative group">
              Blog
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-[#2DD4BF] transition-all duration-500 group-hover:w-full mt-2"></span>
            </div>
          </Link>

          {/* Get Started Button for Mobile */}
          <Link href="/contact" passHref>
            <div onClick={handleLinkClick} className="text-[#2DD4BF] border-2 border-[#2DD4BF] py-2 px-4 rounded hover:bg-[#2DD4BF] hover:text-white transition cursor-pointer md:hidden">
              Get In Touch
            </div>
          </Link>
        </div>

        {/* Get Started Button for Desktop */}
        <Link href="/contact" passHref>
          <div onClick={handleLinkClick} className="text-[#2DD4BF] border-2 border-[#2DD4BF] py-2 px-4 hover:bg-[#2DD4BF] hover:text-white transition cursor-pointer hidden md:block">
            Get In Touch
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
