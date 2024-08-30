"use client";

import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";
import { gsap } from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const handleDropdownEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownOpen(false);
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

  useEffect(() => {
    if (isDropdownOpen) {
      gsap.to(".dropdown-menu", {
        duration: 0.5,
        opacity: 1,
        y: 0,
        display: "block",
        ease: "power2.out",
      });
    } else {
      gsap.to(".dropdown-menu", {
        duration: 0.5,
        opacity: 0,
        y: -20,
        display: "none",
        ease: "power2.in",
      });
    }
  }, [isDropdownOpen]);

  return (
    <nav
      className={`fixed z-50 w-full py-5 md:px-20 px-4 transition-all duration-300 ${
        isScrolled
          ? "bg-opacity-70 backdrop-blur-xl shadow-lg bg-[#080f0f]"
          : ""
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/" passHref>
            <div onClick={handleLinkClick} className="text-2xl font-bold cursor-pointer flex items-baseline">
              <span className="text-teal-500 text-2xl">Heap</span>
              <span className="text-white text-2xl">ware</span>
            </div>
          </Link>
        </div>
        <div className="md:hidden flex justify-end w-full">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none z-20 relative"
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
          className={`fixed inset-0 bg-[#0D1B1B] bg-opacity-90 z-10 flex flex-col items-center justify-center space-y-4 text-white transform ${isOpen ? "translate-x-0 h-screen" : "translate-x-full h-0"} transition-transform duration-300 md:relative md:bg-transparent md:inset-auto md:flex md:flex-row md:space-y-0 md:space-x-4 md:translate-x-0 md:h-auto`}
        >
          <Link href="/" passHref>
            <div onClick={handleLinkClick} className="hover:text-[#2DD4BF] cursor-pointer pb-1 relative group">
              Home
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-[#2DD4BF] transition-all duration-500 group-hover:w-full mt-2"></span>
            </div>
          </Link>
          <Link href="/services" passHref>
            <div onClick={handleLinkClick} className="hover:text-[#2DD4BF] cursor-pointer pb-1 relative group">
              Services
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-[#2DD4BF] transition-all duration-500 group-hover:w-full mt-2"></span>
            </div>
          </Link>

          <div
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <Link href="/about" passHref>
              <div onClick={handleLinkClick} className="hover:text-[#2DD4BF] cursor-pointer pb-2 relative group">
                About <span className="text-teal-500 text-2xl">+</span>
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-[#2DD4BF] transition-all duration-500 group-hover:w-full mt-2"></span>
              </div>
            </Link>
            <div className="dropdown-menu absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-[#0D1B1B] p-4 rounded-lg shadow-lg opacity-0 transform -translate-y-2 z-20 hidden md:block">
              <Link href="/team" passHref>
                <div onClick={handleLinkClick} className="hover:text-[#2DD4BF] cursor-pointer pb-1 relative group">
                  Team
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-[#2DD4BF] transition-all duration-500 group-hover:w-full mt-2"></span>
                </div>
              </Link>
              <Link href="/career" passHref>
                <div onClick={handleLinkClick} className="hover:text-[#2DD4BF] cursor-pointer pb-1 relative group">
                  Career
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-[#2DD4BF] transition-all duration-500 group-hover:w-full mt-2"></span>
                </div>
              </Link>
            </div>
          </div>
          <Link href="/blogs" passHref>
            <div onClick={handleLinkClick} className="hover:text-[#2DD4BF] cursor-pointer pb-1 relative group">
              Blog
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-[#2DD4BF] transition-all duration-500 group-hover:w-full mt-2"></span>
            </div>
          </Link>
          <Link href="/contact" passHref>
            <div onClick={handleLinkClick} className="hover:text-[#2DD4BF] cursor-pointer pb-1 relative group">
              Contact
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-0 bg-[#2DD4BF] transition-all duration-500 group-hover:w-full mt-2"></span>
            </div>
          </Link>
          <Link href="/mission" passHref>
            <div onClick={handleLinkClick} className="text-[#2DD4BF] border-2 border-[#2DD4BF] py-2 px-4 rounded hover:bg-[#2DD4BF] hover:text-gray-900 transition cursor-pointer md:hidden">
              Get Started
            </div>
          </Link>
        </div>
        <Link href="/" passHref>
          <div onClick={handleLinkClick} className="text-[#2DD4BF] border-2 border-[#2DD4BF] py-2 px-4 hover:bg-[#2DD4BF] hover:text-gray-900 transition cursor-pointer hidden md:block">
            Get Started
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
