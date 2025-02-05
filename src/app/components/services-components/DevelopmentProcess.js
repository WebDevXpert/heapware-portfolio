"use client";
import { useState } from "react";
import Image from "next/image"; // ✅ Import Next.js Image

const steps = [
  {
    title: "Strategic Planning",
    icon: "/icon/str.svg",
    content:
      "Our web development journey begins with a thorough understanding of your business objectives, target audience, and market landscape. We conduct detailed research and competitor analysis to define the website’s goals, features, and functionalities. This strategic planning ensures that the website aligns with your business goals and provides a clear roadmap for the project.",
  },

  {
    title: "Requirements Gathering and Project Planning",
    icon: "/icon/req.svg",
    content:
      "In this phase, we gather and document all requirements and create a detailed project plan. We define the site structure, technology stack, and establish timelines and milestones. This thorough planning phase helps in setting clear expectations and minimizing risks, ensuring that the project stays on track.",
  },

  {
    title: "User Interface and Experience Design",
    icon: "/icon/user.svg",
    content:
      "Our design team focuses on creating a visually appealing and user-friendly interface. We develop wireframes and prototypes, ensuring the design is intuitive and enhances user engagement. Through iterative feedback and refinement, we create a design that is both aesthetically pleasing and functional, providing an excellent user experience.",
  },

  {
    title: "Frontend and Backend Development",
    icon: "/icon/front.svg",
    content:
      "Using agile methodologies, our development team brings the design to life. We develop both the frontend and backend of the website, ensuring the code is clean, efficient, and scalable. Regular code reviews and continuous integration practices help maintain high code quality and early detection of any issues.",
  },

  {
    title: "Quality Assurance and Testing",
    icon: "/icon/testing.svg",
    content:
      "Rigorous testing is conducted to ensure the website is bug-free and performs optimally. Our QA team performs various tests, including functional, usability, performance, and security testing. This comprehensive testing phase ensures the website works seamlessly across different browsers and devices, providing a consistent user experience.",
  },

  {
    title: "Website Launch and Deployment",
    icon: "/icon/web.svg",
    content:
      "Once the website passes all testing phases, we prepare for deployment. We set up the hosting environment, configure necessary settings, and deploy the website. Our team ensures that the launch process is smooth, handling any potential issues quickly and efficiently. We also perform final checks to ensure everything is functioning as expected.",
  },

  {
    title: "Ongoing Maintenance and Monitoring",
    icon: "/icon/support.svg",
    content:
      "After launch, we provide ongoing support and maintenance to keep the website updated and secure. We monitor site performance, track user behavior, and gather feedback to identify areas for improvement. Regular updates and enhancements ensure the website remains relevant, functional, and continues to meet user needs effectively.",
  },
];

export default function DevelopmentProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-6 py-16">
      {/* Title Section */}
      <h2 className="text-lg font-semibold text-center text-indigo-600">
        Development Process
      </h2>
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mt-2">
        Discover Our Fine-Tuned Web Development Process
      </h1>
      <p className="text-center text-gray-600 mt-4 text-sm md:text-base max-w-2xl">
        Journey with us into the universal Web Application development process
        to paint the canvas of your next big project.
      </p>

      {/* Steps Section */}
      <div className="flex flex-col md:flex-row w-full max-w-6xl mt-12 gap-8">
        {/* Steps List (Left Side) */}
        <div className="w-full md:w-1/3 space-y-3">
          {steps.map((step, index) => (
            <div
              key={index}
              onMouseOver={() => setActiveStep(index)}
              className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all duration-300 border-2 
                                ${
                                  activeStep === index
                                    ? "bg-teal-700 text-white shadow-lg"
                                    : "bg-gray-100 text-gray-700 border-transparent hover:bg-indigo-50"
                                }`}
            >
              <Image
                src={step.icon}
                alt={step.title}
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span>{step.title}</span>
            </div>
          ))}
        </div>

        {/* Content Box (Right Side) */}
        <div className="w-full md:w-2/3 p-8 bg-white shadow-xl rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
            {/* ✅ Corrected Image Loading */}
            <Image
              src={steps[activeStep].icon}
              alt={steps[activeStep].title}
              width={28}
              height={28}
              className="w-7 h-7"
            />
            {steps[activeStep].title}
          </h2>
          <p className="text-gray-600 mt-3 align-center leading-relaxed">
            {steps[activeStep].content}
          </p>
        </div>
      </div>
    </div>
  );
}
