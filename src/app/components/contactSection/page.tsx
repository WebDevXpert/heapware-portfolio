"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// DraggableSliderTabs Component
const DraggableSliderTabs = ({ onTabClick }: { onTabClick: (tab: string) => void }) => {
  const tabsBox = useRef<HTMLUListElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showLeftIcon, setShowLeftIcon] = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Coding", "JavaScript", "Podcasts", "Databases", "Web Development",
    "Unboxing", "History", "Programming", "Gadgets", "Algorithms",
    "Comedy", "Gaming", "Share Market", "Smartphones", "Data Structure",
  ];

  const handleIcons = () => {
    if (!tabsBox.current) return;
    const maxScrollableWidth = tabsBox.current.scrollWidth - tabsBox.current.clientWidth;
    setShowLeftIcon(tabsBox.current.scrollLeft > 0);
    setShowRightIcon(tabsBox.current.scrollLeft < maxScrollableWidth - 5);
  };

  const handleScroll = (direction: "left" | "right") => {
    if (!tabsBox.current) return;
    const scrollAmount = direction === "left" ? -280 : 280;
    tabsBox.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(handleIcons, 300);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !tabsBox.current) return;
    tabsBox.current.scrollLeft -= e.movementX;
    handleIcons();
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const tabsElement = tabsBox.current;
    if (!tabsElement) return;

    tabsElement.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopDragging);

    return () => {
      tabsElement.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopDragging);
    };
  }, [isDragging]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    onTabClick(tabs[index]);
  };

  return (
    <div className="relative w-full overflow-hidden py-2">
      {/* Left Arrow with Fade Gradient */}
      {showLeftIcon && (
        <div className="absolute inset-y-0 left-0 z-10 flex items-center justify-start bg-gradient-to-r from-white via-white/90 to-transparent pr-4 w-12">
          <FaArrowLeft
            onClick={() => handleScroll("left")}
            className="cursor-pointer text-xl text-blue-600 transition-transform hover:scale-110"
          />
        </div>
      )}

      {/* Tabs List */}
      <ul
        ref={tabsBox}
        onScroll={handleIcons}
        className="flex gap-3 overflow-x-auto scroll-smooth px-10 py-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`cursor-pointer whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 select-none ${
              activeTab === index
                ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                : "border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </li>
        ))}
      </ul>

      {/* Right Arrow with Fade Gradient */}
      {showRightIcon && (
        <div className="absolute inset-y-0 right-0 z-10 flex items-center justify-end bg-gradient-to-l from-white via-white/90 to-transparent pl-4 w-12">
          <FaArrowRight
            onClick={() => handleScroll("right")}
            className="cursor-pointer text-xl text-blue-600 transition-transform hover:scale-110"
          />
        </div>
      )}
    </div>
  );
};

// ContactSection Component
const ContactSection = () => {
  const [selectedTab, setSelectedTab] = useState("Coding");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
    phone: "",
    details: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      selectedTab,
    };

    console.log("Submitted Data:", submissionData);

    setFormData({
      name: "",
      email: "",
      inquiry: "",
      phone: "",
      details: "",
    });
  };

  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div
        id="contact"
        className="mx-auto flex w-[90%] flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16"
      >
        {/* Left Column Content */}
        <div className="text-center lg:w-1/2 lg:text-left">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-950 sm:text-5xl lg:text-6xl">
            We Are <span className="text-blue-600">Perfect IT Solutions</span>{" "}
            <br />
            For <span className="text-blue-600">Your Business</span>
          </h1>
          <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg">
            Empower your business with advanced IT solutions tailored to meet the
            specific needs of your enterprise. We provide cutting-edge technology services that
            drive efficiency and innovation.
          </p>
          <ul className="space-y-3.5 text-base font-medium text-gray-700">
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-sm text-blue-600">
                ✓
              </span>
              Comprehensive IT Infrastructure Management
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-sm text-blue-600">
                ✓
              </span>
              Tailored Cybersecurity Solutions
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-sm text-blue-600">
                ✓
              </span>
              Cloud Computing &amp; Data Migration Services
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-sm text-blue-600">
                ✓
              </span>
              24/7 IT Support &amp; Consulting Services
            </li>
          </ul>
        </div>

        {/* Right Column Form & Draggable Tabs */}
        <div className="w-full lg:w-1/2">
          {/* Draggable Slider Tabs with Bottom Spacing */}
          <div className="mb-8">
            <DraggableSliderTabs onTabClick={(tab) => setSelectedTab(tab)} />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name..."
                className="w-full rounded-lg border border-gray-200 bg-gray-50/80 p-3.5 text-sm text-gray-900 outline-none transition focus:border-blue-600 focus:bg-white md:w-1/2"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email..."
                className="w-full rounded-lg border border-gray-200 bg-gray-50/80 p-3.5 text-sm text-gray-900 outline-none transition focus:border-blue-600 focus:bg-white md:w-1/2"
              />
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
              <select
                name="inquiry"
                value={formData.inquiry}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-gray-200 bg-gray-50/80 p-3.5 text-sm text-gray-900 outline-none transition focus:border-blue-600 focus:bg-white md:w-1/2"
              >
                <option value="">Inquiry...</option>
                <option value="IT Consulting">IT Consulting</option>
                <option value="Cloud Solutions">Cloud Solutions</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your Phone..."
                className="w-full rounded-lg border border-gray-200 bg-gray-50/80 p-3.5 text-sm text-gray-900 outline-none transition focus:border-blue-600 focus:bg-white md:w-1/2"
              />
            </div>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleInputChange}
              placeholder="Additional Details..."
              rows={4}
              className="w-full rounded-lg border border-gray-200 bg-gray-50/80 p-3.5 text-sm text-gray-900 outline-none transition focus:border-blue-600 focus:bg-white"
            ></textarea>
            <button
              type="submit"
              className="rounded-lg border-2 border-blue-600 bg-white px-8 py-3 text-base font-semibold text-blue-600 transition-all duration-200 hover:bg-blue-600 hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;