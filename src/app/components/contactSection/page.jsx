"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// DraggableSliderTabs Component
const DraggableSliderTabs = ({ onTabClick }) => {
  const tabsBox = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showLeftIcon, setShowLeftIcon] = useState(false);
  const [showRightIcon, setShowRightIcon] = useState(true);
  const [activeTab, setActiveTab] = useState(0); // Default to first tab

  const tabs = [
    "Coding", "JavaScript", "Podcasts", "Databases", "Web Development",
    "Unboxing", "History", "Programming", "Gadgets", "Algorithms",
    "Comedy", "Gaming", "Share Market", "Smartphones", "Data Structure",
  ];

  const handleIcons = () => {
    const maxScrollableWidth = tabsBox.current.scrollWidth - tabsBox.current.clientWidth;
    setShowLeftIcon(tabsBox.current.scrollLeft > 0);
    setShowRightIcon(tabsBox.current.scrollLeft < maxScrollableWidth);
  };

  const handleScroll = (direction) => {
    const scrollAmount = direction === "left" ? -340 : 340;
    tabsBox.current.scrollLeft += scrollAmount;
    handleIcons();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    tabsBox.current.scrollLeft -= e.movementX;
    handleIcons();
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const tabsElement = tabsBox.current;
    tabsElement.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", stopDragging);

    return () => {
      tabsElement.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", stopDragging);
    };
  }, [isDragging]);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabClick(tabs[index]); // Pass the selected tab to parent
  };

  return (
    <div className="flex justify-end pr-16 bg-white"> {/* Adjusted for light mode */}
      <div className="relative px-10 py-8 overflow-hidden w-full lg:w-1/2 flex items-center">
        {showLeftIcon && (
          <div className="absolute inset-y-0 left-0 flex items-center justify-center w-20 ">
            <FaArrowLeft
              onClick={() => handleScroll("left")}
              className="cursor-pointer text-2xl text-teal-500"
            />
          </div>
        )}
        <ul
          ref={tabsBox}
          className="flex gap-3 overflow-x-auto scroll-smooth w-full"
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)} // Added for touch devices
        >
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`cursor-pointer whitespace-nowrap py-3 px-5 rounded-full border ${
                activeTab === index
                  ? "bg-teal-500 text-white border-transparent"
                  : "border-gray-300 text-gray-700"
              }`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </li>
          ))}
        </ul>
        {showRightIcon && (
          <div className="absolute inset-y-0 right-0 flex items-center justify-center w-20 ">
            <FaArrowRight
              onClick={() => handleScroll("right")}
              className="cursor-pointer text-2xl text-teal-500"
            />
          </div>
        )}
      </div>
    </div>
  );
};

// ContactSection Component
const ContactSection = ({ selectedTab }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
    phone: "",
    details: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to be logged to the console
    const submissionData = {
      ...formData,
      selectedTab, // Include the selected tab in the data
    };

    // Log the data to console for testing
    console.log("Submitted Data:", submissionData);

    // Reset the form fields
    setFormData({
      name: "",
      email: "",
      inquiry: "",
      phone: "",
      details: "",
    });
  };

  return (
    <section
      id="contact"
      className="bg-white text-gray-900 py-12 px-6 lg:px-24 flex flex-col lg:flex-row justify-between items-center"
    >
      <div className="lg:w-1/2 mb-6 lg:mb-0 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          We Are <span className="text-teal-500">Perfect IT Solutions</span>{" "}
          <br />
          For <span className="text-teal-500">Your Business</span>
        </h1>
        <p className="mb-6">
          Empower your business with advanced IT solutions tailored to meet the
          specific needs of your enterprise. We provide cutting-edge technology services that
          drive efficiency and innovation.
        </p>
        <ul className="mb-6 space-y-2">
          <li className="flex items-center justify-center lg:justify-start">
            <span className="text-teal-500 mr-2">✔</span> Comprehensive IT Infrastructure Management
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <span className="text-teal-500 mr-2">✔</span> Tailored Cybersecurity Solutions
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <span className="text-teal-500 mr-2">✔</span> Cloud Computing &amp; Data Migration Services
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <span className="text-teal-500 mr-2">✔</span> 24/7 IT Support &amp; Consulting Services
          </li>
        </ul>
      </div>
      <div className="lg:w-1/2">
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name..."
              className="w-full md:w-1/2 p-2 bg-gray-100 border border-gray-300 text-gray-900"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email..."
              className="w-full md:w-1/2 p-2 bg-gray-100 border border-gray-300 text-gray-900 mt-4 md:mt-0"
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <select
              name="inquiry"
              value={formData.inquiry}
              onChange={handleInputChange}
              className="w-full md:w-1/2 p-2 bg-gray-100 border border-gray-300 text-gray-900"
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
              className="w-full md:w-1/2 p-2 bg-gray-100 border border-gray-300 text-gray-900 mt-4 md:mt-0"
            />
          </div>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            placeholder="Additional Details..."
            className="w-full p-2 bg-gray-100 border border-gray-300 text-gray-900"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-transparent text-lg text-teal-500 border-2 border-teal-500 py-2 px-7 rounded mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

// Main Component
const MainComponent = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <DraggableSliderTabs onTabClick={handleTabClick} />
      <ContactSection selectedTab={selectedTab} />
    </>
  );
};

export default MainComponent;
