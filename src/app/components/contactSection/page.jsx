"use client"
import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Importing React Icons
import { useEffect, useState, useRef } from 'react';

// DraggableSliderTabs Component
const DraggableSliderTabs = () => {
  const tabsBox = useRef(null); // Reference for the tabs container
  const [isDragging, setIsDragging] = useState(false);
  const [showLeftIcon, setShowLeftIcon] = useState(false); // Show/hide left arrow
  const [showRightIcon, setShowRightIcon] = useState(true); // Show/hide right arrow
  const [activeTab, setActiveTab] = useState(1); // Track the active tab index

  const tabs = [
    'Coding',
    'JavaScript',
    'Podcasts',
    'Databases',
    'Web Development',
    'Unboxing',
    'History',
    'Programming',
    'Gadgets',
    'Algorithms',
    'Comedy',
    'Gaming',
    'Share Market',
    'Smartphones',
    'Data Structure',
  ];

  // Function to handle visibility of arrows based on scroll position
  const handleIcons = () => {
    const maxScrollableWidth = tabsBox.current.scrollWidth - tabsBox.current.clientWidth;
    setShowLeftIcon(tabsBox.current.scrollLeft > 0); // Show left arrow if scrolled right
    setShowRightIcon(tabsBox.current.scrollLeft < maxScrollableWidth); // Show right arrow if more content exists to scroll
  };

  // Function to scroll tabs left or right when arrow is clicked
  const handleScroll = (direction) => {
    const scrollAmount = direction === 'left' ? -340 : 340;
    tabsBox.current.scrollLeft += scrollAmount; // Update scrollLeft value
    handleIcons(); // Update visibility of arrows after scrolling
  };

  // Function to handle dragging the tabs
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    tabsBox.current.classList.add('dragging');
    tabsBox.current.scrollLeft -= e.movementX; // Dragging scrolls tabs
    handleIcons(); // Update visibility of arrows while dragging
  };

  // Stop dragging
  const stopDragging = () => {
    setIsDragging(false);
    tabsBox.current.classList.remove('dragging');
  };

  // Add mouse event listeners
  useEffect(() => {
    const tabsElement = tabsBox.current;
    tabsElement.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', stopDragging);

    return () => {
      tabsElement.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopDragging);
    };
  }, [isDragging]);

  // Handle tab click to set active tab
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className='slide'>
      <div className="wrapper">
        {showLeftIcon && (
          <div className="icon">
            <FaArrowLeft
              onClick={() => handleScroll('left')} // Handle left arrow click
              style={{ cursor: 'pointer', fontSize: '1.2rem', color: '#00bfa5' }} // Inline styles
            />
          </div>
        )}
        <ul className="tabs-box" ref={tabsBox} onMouseDown={() => setIsDragging(true)}>
          {/* Tab items */}
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab}
            </li>
          ))}
        </ul>
        {showRightIcon && (
          <div className="icon">
            <FaArrowRight
              onClick={() => handleScroll('right')} // Handle right arrow click
              style={{ cursor: 'pointer', fontSize: '1.2rem', color: '#00bfa5' }} // Inline styles
            />
          </div>
        )}
      </div>
    </div>
  );
};


// ContactSection Component
const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white py-12 px-6 lg:px-24 flex flex-col lg:flex-row justify-between items-center"
    >
      <div className="lg:w-1/2 mb-6 lg:mb-0 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          We Are <span className="text-teal-400">Perfect IT Solutions</span> <br />
          For <span className="text-teal-400">Your Business</span>
        </h1>
        <p className="mb-6">
          Empower your business with advanced IT solutions tailored to meet the
          specific needs of your enterprise. We provide cutting-edge technology services that
          drive efficiency and innovation.
        </p>
        <ul className="mb-6 space-y-2">
          <li className="flex items-center justify-center lg:justify-start">
            <span className="text-teal-400 mr-2">✔</span> Comprehensive IT Infrastructure Management
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <span className="text-teal-400 mr-2">✔</span> Tailored Cybersecurity Solutions
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <span className="text-teal-400 mr-2">✔</span> Cloud Computing &amp; Data Migration Services
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <span className="text-teal-400 mr-2">✔</span> 24/7 IT Support &amp; Consulting Services
          </li>
        </ul>
      </div>
      <div className="lg:w-1/2">
        <form className="space-y-12">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="Your Name..."
              className="w-full md:w-1/2 p-2 bg-black border border-white text-white"
            />
            <input
              type="email"
              placeholder="Your Email..."
              className="w-full md:w-1/2 p-2 bg-black border border-white text-white mt-4 md:mt-0"
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <select className="w-full md:w-1/2 p-2 bg-black border border-white text-white">
              <option>Inquiry...</option>
              <option>IT Consulting</option>
              <option>Cloud Solutions</option>
              <option>Cybersecurity</option>
              <option>General Inquiry</option>
            </select>
            <input
              type="tel"
              placeholder="Your Phone..."
              className="w-full md:w-1/2 p-2 bg-black border border-white text-white mt-4 md:mt-0"
            />
          </div>
          <textarea
            placeholder="Additional Details..."
            className="w-full p-2 bg-black border border-white text-white"
            rows="4"
          ></textarea>
          <button className="bg-transparent text-lg text-[#2DD4BF] border-2 border-[#2DD4BF] py-2 px-7 rounded mt-4">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

// Main Component
const MainComponent = () => {
  return (
    <>
      <DraggableSliderTabs />
      <ContactSection />
    </>
  );
};

export default MainComponent;
