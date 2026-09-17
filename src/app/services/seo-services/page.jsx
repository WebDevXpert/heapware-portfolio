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
      line1: "Search Engine",
      line2: "Optimization Services",
      description:
        "Improve your visibility in organic search with an SEO program built around technical health, search intent, quality content, and measurable business outcomes. We turn search data into practical actions that help the right audience discover your brand.",
      alt: "Professional SEO services",
    },
    overview: {
      title: "SEO That Connects Search Intent to Business Growth",
      description:
        "We combine technical SEO, on-page optimization, content strategy, local visibility, and performance reporting to create a search presence that is useful to people and easier for search engines to understand.",
      cards: [
        {
          title: "Technical SEO",
          description:
            "Resolve crawlability, indexing, site structure, metadata, performance, schema, and other technical barriers that can limit organic visibility.",
        },
        {
          title: "On-Page SEO",
          description:
            "Optimize page structure, headings, internal links, content signals, and search intent so each important page has a clear purpose.",
        },
        {
          title: "Content Strategy",
          description:
            "Build topic clusters, content briefs, and editorial priorities around the questions and needs your target audience actually searches for.",
        },
        {
          title: "Local SEO",
          description:
            "Strengthen local discovery through location-focused optimization, business information consistency, and pages designed for high-intent local searches.",
        },
        {
          title: "SEO Audits & Reporting",
          description:
            "Turn search data into an actionable roadmap with prioritized recommendations, performance tracking, and clear reporting.",
        },
      ],
    },
    why: {
      title: "Why Choose Us for SEO?",
      description:
        "SEO works best as a disciplined, ongoing process. We focus on the technical foundation, the quality of the content, and the search journey together instead of treating rankings as an isolated metric.",
      features: [
        {
          id: "01",
          title: "Technical SEO Foundations",
          desc: "We identify crawl, indexation, architecture, metadata, performance, and structured-data issues that can hold important pages back.",
        },
        {
          id: "02",
          title: "Search Intent Mapping",
          desc: "We align target topics with the real intent behind searches so content serves users rather than chasing keywords alone.",
        },
        {
          id: "03",
          title: "Content That Earns Attention",
          desc: "We help build useful, well-structured content that answers important questions and creates stronger topical relevance.",
        },
        {
          id: "04",
          title: "Authority & Internal Linking",
          desc: "A thoughtful internal-linking and content structure makes important pages easier to discover and strengthens the overall site architecture.",
        },
        {
          id: "05",
          title: "Measurement & Reporting",
          desc: "We track meaningful indicators such as organic traffic, visibility, engagement, conversions, and opportunities—not just one ranking number.",
        },
        {
          id: "06",
          title: "Continuous Optimization",
          desc: "Search changes over time. We use performance data and new opportunities to refine pages, content priorities, and technical improvements.",
        },
      ],
    },
    cta: "Want your website to be discovered by the right audience? Let’s build an SEO strategy that improves visibility, strengthens content, and supports real business goals.",
    processTitle: "Our SEO Delivery Process",
    processDescription:
      "We move from diagnosis to execution with a prioritized roadmap, measurable checkpoints, and continuous refinement as your search data develops.",
    team: {
      title: "Bring SEO Specialists Together",
      description:
        "SEO is multidisciplinary. Our workflow brings technical, content, analytics, and product thinking together so recommendations are practical to implement and tied to business outcomes.",
    },
    toolsTitle: "SEO Platforms & Analytics",
    tools: [
      {
        name: "Google Analytics",
        short: "GA",
      },
      {
        name: "Search Console",
        short: "SC",
      },
      {
        name: "GA4",
        short: "G4",
      },
      {
        name: "Ahrefs",
        short: "A",
      },
      {
        name: "Semrush",
        short: "S",
      },
      {
        name: "Screaming Frog",
        short: "SF",
      },
      {
        name: "Looker Studio",
        short: "LS",
      },
      {
        name: "Schema",
        short: "SD",
      },
    ],
  };

  const processSteps = [
    {
      title: "SEO Discovery & Audit",
      icon: "/icon/str.svg",
      content:
        "We review your website, competitors, search landscape, analytics, indexation, and existing content to establish a baseline.",
    },
    {
      title: "Keyword & Intent Research",
      icon: "/icon/req.svg",
      content:
        "We identify high-value topics and group them by intent, audience needs, business value, and stage of the customer journey.",
    },
    {
      title: "Technical Optimization",
      icon: "/icon/user.svg",
      content:
        "We address crawlability, architecture, metadata, performance, structured data, redirects, and other technical opportunities.",
    },
    {
      title: "On-Page & Content Optimization",
      icon: "/icon/front.svg",
      content:
        "We improve important pages and build content recommendations around clear search intent and useful information.",
    },
    {
      title: "Authority & Internal Linking",
      icon: "/icon/testing.svg",
      content:
        "We strengthen the internal content structure and identify credible opportunities to build relevance and authority.",
    },
    {
      title: "Measurement & Reporting",
      icon: "/icon/web.svg",
      content:
        "We establish reporting around organic visibility, traffic, engagement, leads, and other agreed business indicators.",
    },
    {
      title: "Ongoing Growth Iterations",
      icon: "/icon/support.svg",
      content:
        "We review results, identify new opportunities, refresh content, and prioritize the next highest-impact improvements.",
    },
  ];
  const teamItems = [
    {
      title: "Designer",
      description:
        "SEO strategists translate business objectives and search data into a prioritized roadmap of opportunities.",
      icon: "/icons/designer.png",
    },
    {
      title: "Engineering",
      description:
        "Content specialists shape topics, briefs, page structures, and messaging around real search intent.",
      icon: "/icons/ios.png",
    },
    {
      title: "Mobile Specialist",
      description:
        "Technical specialists investigate crawlability, performance, indexing, structured data, and site architecture.",
      icon: "/icons/android.png",
    },
    {
      title: "Product Manager",
      description:
        "Analysts monitor organic performance and turn search data into decisions about what to improve next.",
      icon: "/icon/front.svg",
    },
    {
      title: "QA & Testing",
      description:
        "Project and QA support helps ensure recommendations are implemented correctly and checked after release.",
      icon: "/icons/qa.png",
    },
  ];
  const serviceFaqs = [
    {
      question: "How long does SEO take to show results?",
      answer:
        "SEO is cumulative. The timeline depends on your starting point, competition, site quality, content depth, and implementation speed. We focus on measurable improvements and a clear sequence of priorities rather than promising a fixed ranking date.",
    },
    {
      question: "Do you only focus on keywords and rankings?",
      answer:
        "No. We consider technical health, search intent, content quality, internal linking, user behavior, conversions, and overall organic visibility together.",
    },
    {
      question: "Can you audit an existing SEO setup?",
      answer:
        "Yes. A technical and content audit can identify issues, missed opportunities, competing pages, weak information architecture, and areas where existing work can be improved.",
    },
    {
      question: "Do you provide content recommendations as part of SEO?",
      answer:
        "Yes. We can provide topic opportunities, content briefs, page optimization guidance, internal-linking recommendations, and content refresh priorities.",
    },
    {
      question: "How do you report SEO performance?",
      answer:
        "Reporting can include organic traffic, visibility, indexed pages, high-value landing pages, conversions, technical improvements, and progress against the agreed goals.",
    },
  ];
  const services = [
    "SEO Audit",
    "Technical SEO",
    "On-Page SEO",
    "Content SEO",
    "Local SEO",
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
              src="https://images.unsplash.com/photo-1709281847780-2b34c28853c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
