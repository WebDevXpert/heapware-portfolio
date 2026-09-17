"use client";
import { platforms } from "../../data";
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

  const pageContent = {
    hero: {
      line1: "Mobile App",
      line2: "Development Services",
      description:
        "Design and build reliable mobile applications that give customers a smooth experience and give your business a product it can evolve. We cover product discovery, interface design, development, integrations, testing, launch, and post-release improvement.",
      alt: "Professional mobile application development services",
    },
    overview: {
      title: "Mobile Apps Designed for Real-World Use",
      description:
        "From customer apps to internal mobile tools, we combine thoughtful UX with robust engineering to create products that feel simple to use and dependable in production.",
      cards: [
        {
          title: "iOS App Development",
          description:
            "Build polished iPhone and iPad experiences with platform-aware navigation, responsive interfaces, and reliable backend connectivity.",
        },
        {
          title: "Android App Development",
          description:
            "Create flexible Android applications designed for different screen sizes, device conditions, and evolving product requirements.",
        },
        {
          title: "Cross-Platform Apps",
          description:
            "Use modern cross-platform approaches when they provide the right balance of development speed, consistency, and native capability.",
        },
        {
          title: "Mobile UI/UX",
          description:
            "Design onboarding, navigation, forms, dashboards, and interaction patterns around the way users naturally operate on mobile devices.",
        },
        {
          title: "App Backend & APIs",
          description:
            "Connect mobile experiences to secure APIs, authentication, payments, notifications, analytics, and business systems.",
        },
      ],
    },
    why: {
      title: "Why Choose Us for App Development?",
      description:
        "A successful app needs more than a functional interface. We think through the product experience, device realities, backend reliability, release process, and future feature roadmap together.",
      features: [
        {
          id: "01",
          title: "Product-Focused Planning",
          desc: "We clarify the target users, core journeys, feature priorities, and technical constraints before turning the idea into screens and code.",
        },
        {
          id: "02",
          title: "Mobile-First UX",
          desc: "We design around touch interactions, readable layouts, efficient flows, and the limited attention users give to mobile experiences.",
        },
        {
          id: "03",
          title: "Stable App Architecture",
          desc: "The application structure is planned for predictable behavior, maintainability, and smoother addition of future features.",
        },
        {
          id: "04",
          title: "Secure Integrations",
          desc: "Authentication, APIs, payments, notifications, and external services are connected with appropriate validation and access controls.",
        },
        {
          id: "05",
          title: "Release Readiness",
          desc: "We test critical flows across relevant devices and operating conditions and prepare the product for a controlled store release.",
        },
        {
          id: "06",
          title: "Post-Launch Improvement",
          desc: "User feedback and real-world analytics help guide the next iteration instead of relying only on assumptions made before launch.",
        },
      ],
    },
    cta: "Have a mobile product idea? Let’s shape the user journey, build the right technology, and launch an app your customers can trust every day.",
    processTitle: "Our Mobile App Development Process",
    processDescription:
      "We combine product discovery, UX, development, testing, and release management so every stage supports the next one.",
    team: {
      title: "A Cross-Functional Team for Your App",
      description:
        "Mobile products benefit from close collaboration between product, design, engineering, and QA. We keep those roles connected throughout discovery, delivery, launch, and iteration.",
    },
    toolsTitle: "Mobile Technologies & Platforms",
    tools: [
      {
        name: "React Native",
        short: "RN",
      },
      {
        name: "Flutter",
        short: "F",
      },
      {
        name: "Swift",
        short: "SW",
      },
      {
        name: "Kotlin",
        short: "K",
      },
      {
        name: "Node.js",
        short: "N",
      },
      {
        name: "Firebase",
        short: "FB",
      },
      {
        name: "REST APIs",
        short: "API",
      },
      {
        name: "Push Messaging",
        short: "PM",
      },
    ],
  };

  const processSteps = [
    {
      title: "Product Discovery",
      icon: "/icon/str.svg",
      content:
        "Define users, goals, core problems, MVP scope, and the product journeys that matter most.",
    },
    {
      title: "Functional Planning",
      icon: "/icon/req.svg",
      content:
        "Turn the product idea into prioritized features, technical requirements, integrations, and milestones.",
    },
    {
      title: "Mobile UX & UI Design",
      icon: "/icon/user.svg",
      content:
        "Design clear mobile flows, reusable components, states, and responsive layouts before development.",
    },
    {
      title: "App & Backend Development",
      icon: "/icon/front.svg",
      content:
        "Build the application, APIs, data layer, authentication, notifications, and required integrations.",
    },
    {
      title: "Device & Quality Testing",
      icon: "/icon/testing.svg",
      content:
        "Test critical flows across supported devices, screen sizes, network conditions, and edge cases.",
    },
    {
      title: "Store Launch & Release",
      icon: "/icon/web.svg",
      content:
        "Prepare app configuration, release builds, production services, monitoring, and launch checks.",
    },
    {
      title: "Analytics & Iteration",
      icon: "/icon/support.svg",
      content:
        "Review real usage, feedback, crashes, and product metrics to prioritize the next improvements.",
    },
  ];
  const teamItems = [
    {
      title: "Designer",
      description:
        "Mobile designers create touch-friendly interfaces, clear navigation, and reusable visual patterns for the product.",
      icon: "/icons/designer.png",
    },
    {
      title: "Engineering",
      description:
        "iOS and Android specialists handle platform-specific behavior, performance, device compatibility, and release requirements.",
      icon: "/icons/ios.png",
    },
    {
      title: "Mobile Specialist",
      description:
        "Backend engineers build secure APIs, data services, integrations, and infrastructure that support the mobile product.",
      icon: "/icons/android.png",
    },
    {
      title: "Product Manager",
      description:
        "Product managers maintain priorities, scope, feedback loops, and release milestones so the roadmap stays focused.",
      icon: "/icon/front.svg",
    },
    {
      title: "QA & Testing",
      description:
        "QA specialists test devices, states, network conditions, and critical workflows to reduce production issues.",
      icon: "/icons/qa.png",
    },
  ];
  const serviceFaqs = [
    {
      question: "Do you build both iOS and Android apps?",
      answer:
        "Yes. We can deliver platform-specific apps or use a cross-platform approach when that provides the right balance of user experience, performance, and development efficiency.",
    },
    {
      question: "Can the app connect to an existing backend?",
      answer:
        "Yes. We can integrate with an existing API or help extend the backend with authentication, data services, payments, notifications, and other required capabilities.",
    },
    {
      question: "Can you help define an MVP?",
      answer:
        "Yes. We can help reduce an early product idea into a focused first release with the essential user journeys and a practical roadmap for future versions.",
    },
    {
      question: "How do you handle app quality and device compatibility?",
      answer:
        "We test important journeys on supported devices and consider different screen sizes, permissions, network conditions, and application states before release.",
    },
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes. Support can include crash monitoring, bug fixes, store release assistance, performance improvements, analytics review, and new feature development.",
    },
  ];
  const services = [
    "iOS App",
    "Android App",
    "Cross-Platform App",
    "Mobile UI/UX",
    "App Backend",
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
        : [...prevIndices, index],
    );
  };
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-32 bg-white">
        <div className="md:w-1/2 space-y-5 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
            {pageContent.hero.line1} <br />
            <span className="text-teal-500">{pageContent.hero.line2}</span>
          </h1>
          <p className="text-gray-600 text-lg">
            {pageContent.hero.description}
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
            <Image
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={pageContent.hero.alt}
              fill
              sizes="400px"
              className="w-full h-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto text-center px-6">
          <h5 className="text-teal-500 font-semibold">What We Do</h5>
          <h1 className="md:w-2/3 mx-auto text-4xl font-bold text-gray-900 mt-4">
            {pageContent.overview.title}
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            {pageContent.overview.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 px-6 md:px-16">
          {pageContent.overview.cards.map((card, index) => (
            <ServiceCard
              key={index}
              imgSrc={
                [
                  "https://codeupscale.com/services_images/services/Group.svg",
                  "https://codeupscale.com/services_images/services/Rectangle.svg",
                  "https://codeupscale.com/services_images/services/UXicon.svg",
                  "https://codeupscale.com/services_images/services/CMSicon.svg",
                  "https://codeupscale.com/services_images/services/Vicon.svg",
                ][index]
              }
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>
      <section className="bg-gray-50 py-16 px-6 md:px-20 text-center">
        <h3 className="text-lg text-blue-600 font-semibold">Why Choose Us</h3>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          {pageContent.why.title}
        </h2>
        <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
          {pageContent.why.description}
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 px-2 md:px-6">
          {pageContent.why.features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-xl shadow-md text-left w-full md:w-[90%] mx-auto transition duration-300 ease-in-out hover:bg-teal-500 hover:text-white"
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
            {pageContent.hero.line2} <br />
            <span className="text-white">BUILT FOR RESULTS</span>
            <br />
            Without Compromising Quality
          </h1>
          <p className="mt-5 text-white/90 text-lg max-w-xl">
            {pageContent.cta}
          </p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-md text-lg flex items-center">
            Get Started →
          </button>
        </div>
        <div className="md:w-1/2 relative flex justify-center mt-10 md:mt-0">
          <Image
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={pageContent.hero.alt}
            width={640}
            height={480}
            className="w-96 h-auto rounded-lg object-contain"
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
        <h2 className="text-lg font-semibold text-center text-blue-600">
          Development Process
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mt-2">
          {pageContent.processTitle}
        </h1>
        <p className="text-center text-gray-600 mt-4 text-sm md:text-base max-w-2xl">
          {pageContent.processDescription}
        </p>

        {/* Steps Section */}
        <div className="flex flex-col md:flex-row w-full max-w-6xl mt-12 gap-8">
          {/* Steps List (Left Side) */}
          <div className="w-full md:w-1/3 space-y-3">
            {processSteps.map((step, index) => (
              <div
                key={index}
                onMouseOver={() => setActiveStep(index)}
                className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer transition-all duration-300 border-2 
                                      ${
                                        activeStep === index
                                          ? "bg-teal-700 text-white shadow-lg"
                                          : "bg-gray-100 text-gray-700 border-transparent hover:bg-blue-50"
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
                src={processSteps[activeStep].icon}
                alt={processSteps[activeStep].title}
                width={28}
                height={28}
                className="w-7 h-7"
              />
              {processSteps[activeStep].title}
            </h2>
            <p className="text-gray-600 mt-3 align-center leading-relaxed">
              {processSteps[activeStep].content}
            </p>
          </div>
        </div>
      </div>
      <section className="w-full max-w-7xl mx-auto bg-gray-50 py-16 px-6">
        <div className="text-center">
          <h4 className="text-teal-500 font-semibold">Our Specialists</h4>
          <h2 className="text-3xl font-bold mt-2">{pageContent.team.title}</h2>
          <p className="text-gray-600 mt-4">{pageContent.team.description}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full mt-10 relative">
          {/* Left Accordion */}
          <div className="flex-1 space-y-4">
            {teamItems.map((item, index) => (
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
        <h5 className="text-blue-600 font-semibold text-lg">
          {pageContent.toolsTitle}
        </h5>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Explore the Technologies Powering Modern Digital Products
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mt-10 px-4 md:px-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center justify-center w-40 h-40 hover:shadow-lg transition duration-300"
            >
              <Image
                src={platform.img.trim()}
                alt={platform.name}
                width={64}
                height={64}
                className="w-16 h-16 object-contain"
                unoptimized
              />
              <p className="mt-3 font-semibold text-black">{platform.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-white text-center">
        <h5 className="text-blue-600 font-semibold text-base">
          Frequently Ask Questions
        </h5>
        <h1 className="text-3xl font-bold text-gray-900 mt-3 leading-snug">
          Questions We&apos;re Often Asked
        </h1>

        <div className="max-w-2xl mx-auto mt-6 space-y-4">
          {serviceFaqs.map((faq, index) => (
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
        <h5 className="text-blue-600 font-semibold text-lg">
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
                      ? "bg-blue-600 text-white"
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
