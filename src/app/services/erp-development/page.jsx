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
      line1: "ERP System",
      line2: "Development Services",
      description:
        "Centralize operations with a custom ERP solution that connects departments, standardizes workflows, and gives decision-makers a clearer view of the business. We build systems around your actual processes rather than forcing teams into generic software.",
      alt: "Professional ERP software development services",
    },
    overview: {
      title: "ERP Systems Built Around Your Operations",
      description:
        "Connect finance, inventory, purchasing, sales, HR, projects, and reporting through a secure platform designed around how your organization actually works.",
      cards: [
        {
          title: "Custom ERP Development",
          description:
            "Design a business system around your workflows, roles, approvals, records, and operational priorities.",
        },
        {
          title: "Workflow Automation",
          description:
            "Reduce repetitive work with rules, approvals, notifications, status changes, and automated handoffs between teams.",
        },
        {
          title: "Finance & Operations",
          description:
            "Bring invoices, expenses, purchasing, inventory, and operational records into one consistent process.",
        },
        {
          title: "Dashboards & Reporting",
          description:
            "Give managers real-time visibility through role-based dashboards, reports, filters, and decision-ready operational data.",
        },
        {
          title: "ERP Integrations",
          description:
            "Connect the ERP with ecommerce, payment systems, CRM, HR, accounting, communication, and other business tools.",
        },
      ],
    },
    why: {
      title: "Why Choose Us for ERP Development?",
      description:
        "ERP development is about process clarity as much as technology. We focus on the workflows, data relationships, permissions, and reporting needs that make the system useful day after day.",
      features: [
        {
          id: "01",
          title: "Process-Driven Design",
          desc: "We map real workflows first so the software reflects how teams operate, approve work, and share information.",
        },
        {
          id: "02",
          title: "Role-Based Access",
          desc: "Permissions are structured around responsibilities so users see the data and actions appropriate to their role.",
        },
        {
          id: "03",
          title: "Connected Business Data",
          desc: "A consistent data model reduces duplicate entry and helps teams work from a shared operational picture.",
        },
        {
          id: "04",
          title: "Automation Where It Matters",
          desc: "Automate repetitive approvals, notifications, calculations, assignments, and status changes without making the system harder to manage.",
        },
        {
          id: "05",
          title: "Actionable Reporting",
          desc: "Dashboards and reports are designed to help teams monitor activity, exceptions, costs, performance, and operational trends.",
        },
        {
          id: "06",
          title: "Scalable Modules",
          desc: "Start with the highest-value workflows and expand into additional departments and integrations as the organization grows.",
        },
      ],
    },
    cta: "Need to bring disconnected business processes into one system? Let’s design an ERP platform that gives your teams a clearer workflow and your leaders better visibility.",
    processTitle: "Our ERP Development Process",
    processDescription:
      "We move carefully from process discovery to deployment because ERP systems affect multiple departments and become part of the organization’s daily operations.",
    team: {
      title: "ERP Delivery With Business and Technical Expertise",
      description:
        "ERP projects require more than developers. We combine product thinking, interface design, engineering, and QA around the operational requirements of the business.",
    },
    toolsTitle: "ERP Technologies & Integrations",
    tools: [
      {
        name: "Node.js",
        short: "N",
      },
      {
        name: "Next.js",
        short: "NX",
      },
      {
        name: "PostgreSQL",
        short: "PG",
      },
      {
        name: "REST APIs",
        short: "API",
      },
      {
        name: "RBAC",
        short: "RA",
      },
      {
        name: "Accounting",
        short: "AC",
      },
      {
        name: "Inventory",
        short: "IN",
      },
      {
        name: "Reporting",
        short: "RP",
      },
    ],
  };

  const processSteps = [
    {
      title: "Business Process Discovery",
      icon: "/icon/str.svg",
      content:
        "Map departments, users, approvals, records, exceptions, dependencies, and the processes that need improvement.",
    },
    {
      title: "Requirements & Module Planning",
      icon: "/icon/req.svg",
      content:
        "Prioritize modules, define roles and permissions, identify integrations, and establish the delivery roadmap.",
    },
    {
      title: "UX & Workflow Design",
      icon: "/icon/user.svg",
      content:
        "Design dashboards, forms, approval flows, navigation, and information architecture for the people who will use the system every day.",
    },
    {
      title: "Core ERP Development",
      icon: "/icon/front.svg",
      content:
        "Build modules, business rules, data models, APIs, permissions, and automation around the approved workflows.",
    },
    {
      title: "Integration & Data Validation",
      icon: "/icon/testing.svg",
      content:
        "Connect required services and validate imports, records, calculations, permissions, and end-to-end workflows.",
    },
    {
      title: "User Acceptance & Deployment",
      icon: "/icon/web.svg",
      content:
        "Support UAT, resolve findings, prepare production configuration, and release the system in a controlled manner.",
    },
    {
      title: "Training & Continuous Improvement",
      icon: "/icon/support.svg",
      content:
        "Support users after launch and improve the system as new workflows, departments, and reporting requirements emerge.",
    },
  ];
  const teamItems = [
    {
      title: "Designer",
      description:
        "Process-focused designers turn complex workflows into interfaces that make everyday tasks easier to understand and complete.",
      icon: "/icons/designer.png",
    },
    {
      title: "Engineering",
      description:
        "Backend engineers design the data model, APIs, permissions, business rules, and integrations behind the ERP.",
      icon: "/icons/ios.png",
    },
    {
      title: "Mobile Specialist",
      description:
        "Frontend engineers build responsive dashboards, forms, tables, reports, and workflow interfaces for different roles.",
      icon: "/icons/android.png",
    },
    {
      title: "Product Manager",
      description:
        "Product managers coordinate departments, priorities, approvals, milestones, and stakeholder feedback throughout delivery.",
      icon: "/icon/front.svg",
    },
    {
      title: "QA & Testing",
      description:
        "QA specialists validate data integrity, permissions, calculations, workflows, and edge cases before each major release.",
      icon: "/icons/qa.png",
    },
  ];
  const serviceFaqs = [
    {
      question: "Can you build an ERP around our existing workflow?",
      answer:
        "Yes. We start by understanding your current processes, roles, records, approvals, and pain points, then design the system around the highest-value improvements.",
    },
    {
      question: "Can different departments use the same ERP?",
      answer:
        "Yes. ERP platforms can connect multiple departments through shared data while keeping role-based access, workflows, and dashboards appropriate to each team.",
    },
    {
      question: "Can the ERP integrate with our existing software?",
      answer:
        "Yes. We can plan integrations with accounting tools, ecommerce platforms, CRM systems, payment services, communication tools, and other APIs where required.",
    },
    {
      question: "Can we launch the ERP in phases?",
      answer:
        "Yes. A modular rollout is often practical when several departments are involved. We can prioritize the workflows that deliver the most immediate value and expand from there.",
    },
    {
      question: "Do you provide maintenance after deployment?",
      answer:
        "Yes. We can support production issues, security updates, monitoring, reporting changes, integrations, and additional modules after launch.",
    },
  ];
  const services = [
    "Custom ERP",
    "Workflow Automation",
    "Finance & Operations",
    "Reporting",
    "ERP Integrations",
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
              src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
