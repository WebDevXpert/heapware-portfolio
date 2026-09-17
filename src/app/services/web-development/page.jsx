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
    "hero": {
      "line1": "Website",
      "line2": "Development Services",
      "description": "We design and engineer fast, responsive websites and web applications that turn business goals into clear digital experiences. From marketing sites and CMS platforms to complex web applications, every build is structured for performance, usability, and long-term growth.",
      "alt": "Professional web development services"
    },
    "overview": {
      "title": "Custom Web Development Built Around Your Business",
      "description": "From customer-facing websites to powerful web applications, we combine thoughtful UX, modern engineering, and reliable architecture to create digital products that are easy to use and ready to scale.",
      "cards": [
        {
          "title": "Frontend Development",
          "description": "Create responsive, accessible interfaces with clean component architecture, polished interactions, and consistent performance across devices."
        },
        {
          "title": "Backend & API Development",
          "description": "Build secure server-side systems, APIs, databases, and integrations that keep your website or application reliable under real-world workloads."
        },
        {
          "title": "UI/UX Implementation",
          "description": "Turn wireframes and product ideas into intuitive experiences with clear navigation, strong hierarchy, and conversion-focused interfaces."
        },
        {
          "title": "CMS & Ecommerce",
          "description": "Launch manageable content platforms and online stores with structured content, secure checkout flows, and tools your team can operate confidently."
        },
        {
          "title": "Custom Web Applications",
          "description": "Develop purpose-built portals, dashboards, and business applications around your workflows instead of forcing your process into a template."
        }
      ]
    },
    "why": {
      "title": "Why Choose Us for Web Development?",
      "description": "Our approach connects product thinking, design, and engineering so the final website is not only visually polished, but also fast, maintainable, secure, and aligned with measurable business objectives.",
      "features": [
        {
          "id": "01",
          "title": "Business-First Architecture",
          "desc": "We translate business requirements into a practical technical foundation that supports current needs without creating unnecessary complexity."
        },
        {
          "id": "02",
          "title": "Responsive User Experience",
          "desc": "Every interface is designed to work naturally across desktop, tablet, and mobile with clear interactions and accessible layouts."
        },
        {
          "id": "03",
          "title": "Performance by Design",
          "desc": "We focus on efficient assets, sensible rendering, optimized data flows, and clean code so pages remain fast as content and traffic grow."
        },
        {
          "id": "04",
          "title": "Secure Engineering",
          "desc": "Authentication, authorization, validation, and data handling are considered from the start rather than added after the product is built."
        },
        {
          "id": "05",
          "title": "Maintainable Codebase",
          "desc": "Component-driven development, clear conventions, and reusable patterns make future updates easier for your team."
        },
        {
          "id": "06",
          "title": "Built to Scale",
          "desc": "Whether you are validating an idea or expanding an established platform, we structure the solution so new features can be introduced without rebuilding everything."
        }
      ]
    },
    "cta": "Have a website or web product in mind? Let’s turn the idea into a fast, polished experience that is built to support your next stage of growth.",
    "processTitle": "A Structured Web Development Process",
    "processDescription": "A clear delivery process keeps strategy, design, engineering, and testing aligned from the first conversation through launch and ongoing improvement.",
    "team": {
      "title": "Build With the Right Specialists",
      "description": "Strong web products come from coordinated specialists. We combine design, engineering, product, and QA expertise around a shared delivery plan so decisions stay aligned and progress stays visible."
    },
    "toolsTitle": "Web Technologies & Platforms",
    "tools": [
      {
        "name": "React",
        "short": "R"
      },
      {
        "name": "Next.js",
        "short": "N"
      },
      {
        "name": "Node.js",
        "short": "N"
      },
      {
        "name": "TypeScript",
        "short": "TS"
      },
      {
        "name": "Laravel",
        "short": "L"
      },
      {
        "name": "Python",
        "short": "Py"
      },
      {
        "name": "Django",
        "short": "D"
      },
      {
        "name": "PostgreSQL",
        "short": "Pg"
      }
    ]
  };

  const processSteps = [
    {
      "title": "Discovery & Goals",
      "icon": "/icon/str.svg",
      "content": "We define the audience, business objectives, key journeys, scope, and success criteria before development begins."
    },
    {
      "title": "Requirements & Architecture",
      "icon": "/icon/req.svg",
      "content": "We translate requirements into a practical sitemap, feature list, data model, integrations, and technical architecture."
    },
    {
      "title": "UX & Interface Design",
      "icon": "/icon/user.svg",
      "content": "We shape wireframes and polished interface directions that prioritize clarity, accessibility, and conversion."
    },
    {
      "title": "Frontend & Backend Development",
      "icon": "/icon/front.svg",
      "content": "Our team builds the user interface, APIs, database logic, integrations, and business rules using a maintainable structure."
    },
    {
      "title": "Quality Assurance",
      "icon": "/icon/testing.svg",
      "content": "We test functionality, responsiveness, accessibility, compatibility, performance, and critical user flows before release."
    },
    {
      "title": "Launch & Deployment",
      "icon": "/icon/web.svg",
      "content": "We prepare the production environment, configure deployment, complete final checks, and release the product safely."
    },
    {
      "title": "Support & Optimization",
      "icon": "/icon/support.svg",
      "content": "After launch, we monitor performance, resolve issues, and help evolve the website as business needs change."
    }
  ];
  const teamItems = [
    {
      "title": "Designer",
      "description": "Designers shape the visual system, information hierarchy, and interaction patterns so the website feels clear and intentional.",
      "icon": "/icons/designer.png"
    },
    {
      "title": "Engineering",
      "description": "Frontend and backend engineers turn the approved experience into a reliable product with clean interfaces, APIs, and business logic.",
      "icon": "/icons/ios.png"
    },
    {
      "title": "Mobile Specialist",
      "description": "Mobile-focused engineers help extend the same product experience into responsive and device-specific journeys when required.",
      "icon": "/icons/android.png"
    },
    {
      "title": "Product Manager",
      "description": "Product managers keep requirements, priorities, milestones, and stakeholder feedback aligned throughout delivery.",
      "icon": "/icon/front.svg"
    },
    {
      "title": "QA & Testing",
      "description": "QA specialists test critical flows and edge cases to protect quality before launch and during future releases.",
      "icon": "/icons/qa.png"
    }
  ];
  const serviceFaqs = [
    {
      "question": "What types of websites and web applications do you build?",
      "answer": "We build company websites, marketing sites, portals, dashboards, ecommerce platforms, CMS solutions, and custom web applications tailored to the workflow and goals of each business."
    },
    {
      "question": "Can you work with an existing website or application?",
      "answer": "Yes. We can improve an existing codebase, redesign selected areas, add integrations, improve performance, or rebuild specific parts when the current architecture is limiting growth."
    },
    {
      "question": "How do you approach responsive design and performance?",
      "answer": "We design for multiple screen sizes from the beginning and pay close attention to asset size, rendering strategy, API performance, accessibility, and the behavior of critical user journeys."
    },
    {
      "question": "Can you integrate third-party systems and APIs?",
      "answer": "Yes. We regularly plan integrations around payments, CRM systems, analytics, authentication providers, communication tools, and other business services."
    },
    {
      "question": "Do you provide support after launch?",
      "answer": "Yes. Post-launch support can include maintenance, monitoring, security updates, bug fixes, performance improvements, and planned feature enhancements."
    }
  ];
  const services = [
    "Website",
    "Web Application",
    "Ecommerce",
    "CMS",
    "Website Support"
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
              src="https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <div key={feature.id} className="bg-white p-8 rounded-xl shadow-md text-left w-full md:w-[90%] mx-auto transition duration-300 ease-in-out hover:bg-teal-500 hover:text-white">
              <span className="text-6xl font-bold text-gray-200">{feature.id}</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-2">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="relative bg-teal-500 text-white flex flex-col md:flex-row items-center px-8 py-16 md:py-24">
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl md:text-5xl font-bold">
            {pageContent.hero.line2} <br />
            <span className="text-white">BUILT FOR RESULTS</span><br />
            Without Compromising Quality
          </h1>
          <p className="mt-5 text-white/90 text-lg max-w-xl">{pageContent.cta}</p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-md text-lg flex items-center">
            Get Started →
          </button>
        </div>
        <div className="md:w-1/2 relative flex justify-center mt-10 md:mt-0">
          <Image
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        <h1 className="text-3xl font-bold text-gray-900 mt-3 leading-snug">Questions We&apos;re Often Asked</h1>

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
