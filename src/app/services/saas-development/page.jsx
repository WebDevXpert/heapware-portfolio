"use client";
import { steps, teamData, platforms, faqs } from "../../data";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ServiceCard from "../../components/service-card";
import Image from "next/image";

export default function WebDevelopment() {
  const [activeStep, setActiveStep] = useState(0);
  const [openIndices, setOpenIndices] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    services: [],
  });

  const services = [
    "Website",
    "Mobile App",
    "Digital Product",
    "Software Development",
    "Ecommerce",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceClick = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleCard = (index) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-32 bg-white">
        <div className="md:w-1/2 space-y-5 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
            SAAS <br />
            <span className="text-teal-500">Development Services</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Enhance your digital presence with our advanced web development
            solutions. We offer a comprehensive suite of services, spanning from
            captivating website design to the creation of sophisticated web
            applications.
          </p>
          {/* Add a wrapper div to center the button with padding */}
          <div className="w-full flex justify-center md:justify-start mt-6">
            <button className="px-8 py-3 bg-teal-500 text-white rounded-md hover:bg-blue-700 transition-all">
              Learn More
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative w-[400px] h-[300px]">
            <img
              src="https://codeupscale.com/_next/static/media/webimg1.aeaea2dd.png"
              alt="Web Development"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center px-6">
          <h5 className="text-teal-500 font-semibold">We Serve</h5>
          <h1 className="md:w-2/3 mx-auto text-4xl font-bold text-gray-900 mt-4">
            A Sneak Peek of Our Custom Web Development Services
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Delivering convenience-focused web application development services
            in any form is what we’re inclined towards.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-6 md:px-16">
          <ServiceCard
            imgSrc="https://codeupscale.com/services_images/services/Group.svg"
            title="Frontend/Backend Development"
            description="Collaborate with us to transform your exceptional, high-impact web solutions that drive success and innovation in the digital realm with our expert Frontend and Backend Development services."
          />

          <ServiceCard
            imgSrc="https://codeupscale.com/services_images/services/Rectangle.svg"
            title="Full-stack Development"
            description="Maximize your digital potential with us for an all-inclusive approach that propels your digital vision to new heights, ensuring a competitive edge in the dynamic online landscape."
          />

          <ServiceCard
            imgSrc="https://codeupscale.com/services_images/services/UXicon.svg"
            title="UI/UX Web Design"
            description="Amplify your digital footprint with our premium UI/UX web design services. Our skilled designers craft mesmerizing, user-focused interfaces that guarantee a remarkable online journey."
          />

          <ServiceCard
            imgSrc="https://codeupscale.com/services_images/services/CMSicon.svg"
            title="Content Management Systems (CMS)"
            description="Boost your online presence with our advanced CMS solutions, ensuring your digital platform remains competitive and consistently updated."
          />

          <ServiceCard
            imgSrc="https://codeupscale.com/services_images/services/Vicon.svg"
            title="Custom Web Solutions"
            description="Partner with us to take your digital presence to its full potential. We create custom websites and applications tailored to your unique needs."
          />
        </div>
      </section>
      <section className="bg-gray-50 py-16 px-6 md:px-20 text-center">
        {/* Section Title */}
        <h3 className="text-lg text-indigo-600 font-semibold">
          Why You Choose Us
        </h3>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Why Should You Choose Code Upscale <br /> For Web Development
          Services?
        </h2>
        <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
          We capitalized on 6 key value services and successfully built a
          reputation as the leading and trusted Web app development services
          provider in the U.S.A., U.K., and U.A.E.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-2 md:px-6">
          {[
            {
              id: "01",
              title: "Unparalleled Expertise",
              desc: "Our team comprises industry experts, steeped in the art of software development, guaranteeing high-quality solutions for your business.",
            },
            {
              id: "02",
              title: "Tailored Excellence",
              desc: "We specialize in creating customized software solutions meticulously crafted to suit your unique business needs.",
            },
            {
              id: "03",
              title: "Cutting-edge Technology",
              desc: "We leverage the latest frameworks and technologies to build fast, secure, and scalable web applications.",
            },
            {
              id: "04",
              title: "Client-Centric Approach",
              desc: "Our solutions are tailored to fit your business goals, ensuring long-term success and satisfaction.",
            },
            {
              id: "05",
              title: "Reliable Support",
              desc: "We provide 24/7 support to ensure your applications run smoothly with minimal downtime.",
            },
            {
              id: "06",
              title: "Scalable Solutions",
              desc: "Whether you’re a startup or an enterprise, our solutions grow with your business, ensuring future success.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md text-left w-full md:w-[90%] mx-auto 
                         transition duration-300 ease-in-out hover:bg-teal-500 hover:text-white"
            >
              <span className="text-6xl font-bold text-gray-200">
                {feature.id}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="relative bg-teal-500 text-white flex flex-col md:flex-row items-center px-8 py-16 md:py-24">
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            Share Your Idea <br />
            With Us Today And <br />
            <span className="text-yellow-400">GO PREMIUM</span> with A <br />
            Featured-packed Web Development Services
          </h1>

          <button className="mt-6 bg-black text-white px-6 py-3 rounded-md text-lg flex items-center">
            Get Started →
          </button>
        </div>
        <div className="md:w-1/2 relative flex justify-center mt-10 md:mt-0">
          <img
            src="https://codeupscale.com/_next/static/media/ideaUser.bbfcece6.png"
            alt="Person"
            className="w-96 h-auto rounded-lg"
          />
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-[80px] md:h-[100px]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>
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
      <section className="w-full max-w-7xl mx-auto bg-gray-50 py-16 px-6">
        <div className="text-center">
          <h4 className="text-teal-500 font-semibold">Team Work</h4>
          <h2 className="text-3xl font-bold mt-2">Team Work On Your Project</h2>
          <p className="text-gray-600 mt-4">
            We deliver profitable and gratifying offshore BlockChain development
            services. You may connect with a large talent pool in 60 seconds at
            a cost roughly 50% lower than Western marketplaces. We can
            demonstrate it to you through a trial.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full mt-10 relative">
          {/* Left Accordion */}
          <div className="flex-1 space-y-4">
            {teamData.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold"
                  onClick={() => toggleCard(index)}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={25}
                      height={25}
                    />
                    <span>{item.title}</span>
                  </div>
                  {openIndices.includes(index) ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndices.includes(index) ? "max-h-[200px]" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-4 text-gray-600">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:w-1/3 relative flex flex-col items-center space-y-4">
            <div className="relative">
              <Image
                src="/image/laptop.png"
                alt="Laptop"
                width={350}
                height={350}
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white text-center">
        <h5 className="text-purple-600 font-semibold text-lg">
          Web Development Platforms
        </h5>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Revolutionize Your Brand With <br /> Advanced Web Development
          Platforms
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center w-40 h-40 hover:shadow-lg transition duration-300"
            >
              <img
                src={platform.img}
                alt={platform.name}
                className="w-16 h-16"
              />
              <p className="mt-2 font-semibold text-black">{platform.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-white text-center">
        <h5 className="text-purple-600 font-semibold text-base">
          Frequently Ask Questions
        </h5>
        <h1 className="text-3xl font-bold text-gray-900 mt-3 leading-snug">
          Some of Our Frequently <br /> Asked Questions
        </h1>

        <div className="max-w-2xl mx-auto mt-6 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border text-left rounded-lg p-6 bg-white min-h-[100px]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex justify-between items-center text-base font-medium"
              >
                {faq.question}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-700 text-sm">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-gray-50 text-center px-4">
        <h5 className="text-purple-600 font-semibold text-lg">
          Let Us Know What You’re Looking for, We’ll Build it for You
        </h5>
        <h1 className="text-4xl font-bold text-gray-900 mt-3">
          Let’s Work Together
        </h1>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto mt-6 space-y-6  p-6 rounded-lg"
        >
          <div className="text-left">
            <label className="font-semibold">
              Services you are looking for
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {services.map((service) => (
                <button
                  type="button"
                  key={service}
                  className={`px-4 py-2 border rounded-lg ${
                    formData.services.includes(service)
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => handleServiceClick(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              className="p-3 border rounded-lg w-full"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="p-3 border rounded-lg w-full"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone*"
              className="p-3 border rounded-lg w-full"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company*"
              className="p-3 border rounded-lg w-full"
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your message..."
            className="p-3 border rounded-lg w-full"
            rows="4"
            onChange={handleChange}
          ></textarea>

          <button className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
