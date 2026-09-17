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
      line1: "Digital",
      line2: "Marketing Services",
      description:
        "Build a measurable digital marketing engine that attracts the right audience, strengthens your brand, and turns attention into qualified opportunities. We connect strategy, content, paid campaigns, social channels, and conversion improvements around clear goals.",
      alt: "Professional digital marketing services",
    },
    overview: {
      title: "Digital Marketing Focused on Measurable Growth",
      description:
        "We build campaigns around the full customer journey—from discovery and engagement to conversion and retention—so each channel supports a clear business objective.",
      cards: [
        {
          title: "Growth Strategy",
          description:
            "Define audiences, positioning, channels, campaigns, and measurable priorities before spending budget or producing content.",
        },
        {
          title: "Performance Marketing",
          description:
            "Plan and optimize paid campaigns with clear audiences, landing experiences, conversion signals, and ongoing performance analysis.",
        },
        {
          title: "Content Marketing",
          description:
            "Create useful content themes and campaigns that educate prospects, support search visibility, and build brand credibility over time.",
        },
        {
          title: "Social Media Marketing",
          description:
            "Build platform-appropriate content and campaign systems that encourage engagement while keeping the brand consistent.",
        },
        {
          title: "Conversion Optimization",
          description:
            "Improve landing pages, calls to action, forms, and user journeys so more of the existing traffic can become meaningful leads or sales.",
        },
      ],
    },
    why: {
      title: "Why Choose Us for Digital Marketing?",
      description:
        "Effective digital marketing is not a collection of disconnected posts and campaigns. We connect audience research, channel strategy, creative, conversion paths, and reporting so the work compounds over time.",
      features: [
        {
          id: "01",
          title: "Audience-Led Strategy",
          desc: "We define the audience, offer, message, and customer journey so campaigns are built around people and business goals.",
        },
        {
          id: "02",
          title: "Channel Selection",
          desc: "We focus effort on the channels that fit the audience and objective rather than trying to maintain every platform at once.",
        },
        {
          id: "03",
          title: "Performance Creative",
          desc: "Ads, landing pages, and content are developed with a clear hypothesis about what will earn attention and drive action.",
        },
        {
          id: "04",
          title: "Conversion-Focused Journeys",
          desc: "Traffic is only useful when the next step is clear. We improve landing experiences, calls to action, forms, and key conversion points.",
        },
        {
          id: "05",
          title: "Transparent Measurement",
          desc: "We track agreed business signals and campaign performance so decisions can be based on evidence instead of vanity metrics.",
        },
        {
          id: "06",
          title: "Continuous Optimization",
          desc: "Campaigns improve through testing, audience feedback, creative iteration, budget adjustments, and regular performance reviews.",
        },
      ],
    },
    cta: "Ready to make your digital marketing more focused and measurable? Let’s build a growth plan that connects the right audience to the right message and the right next step.",
    processTitle: "Our Digital Marketing Process",
    processDescription:
      "We move from audience and business goals to campaign execution and measurement, then use performance data to continuously improve the system.",
    team: {
      title: "A Connected Team for Digital Growth",
      description:
        "Marketing improves when strategy, creative, analytics, and delivery work together. Our team keeps those disciplines connected so campaigns remain coherent from planning through reporting.",
    },
    toolsTitle: "Marketing Platforms & Analytics",
    tools: [
      {
        name: "Google Ads",
        short: "GA",
      },
      {
        name: "Meta Ads",
        short: "MA",
      },
      {
        name: "GA4",
        short: "G4",
      },
      {
        name: "Search Console",
        short: "SC",
      },
      {
        name: "Looker Studio",
        short: "LS",
      },
      {
        name: "Email",
        short: "EM",
      },
      {
        name: "CRM",
        short: "CR",
      },
      {
        name: "A/B Testing",
        short: "AB",
      },
    ],
  };

  const processSteps = [
    {
      title: "Goals & Audience Discovery",
      icon: "/icon/str.svg",
      content:
        "Define business objectives, ideal customers, offers, existing assets, competitors, and the metrics that matter.",
    },
    {
      title: "Channel & Campaign Planning",
      icon: "/icon/req.svg",
      content:
        "Choose the right mix of search, paid social, organic social, content, email, landing pages, and supporting channels.",
    },
    {
      title: "Messaging & Creative",
      icon: "/icon/user.svg",
      content:
        "Develop campaign themes, offers, copy directions, content formats, and creative requirements for each audience and channel.",
    },
    {
      title: "Launch & Tracking Setup",
      icon: "/icon/front.svg",
      content:
        "Prepare campaigns, landing pages, conversion tracking, analytics, and the operational checklist required for launch.",
    },
    {
      title: "Performance Monitoring",
      icon: "/icon/testing.svg",
      content:
        "Review reach, engagement, traffic quality, leads, conversions, costs, and other agreed campaign signals.",
    },
    {
      title: "Testing & Optimization",
      icon: "/icon/web.svg",
      content:
        "Run practical experiments across creative, audiences, offers, landing pages, and campaign settings to improve performance.",
    },
    {
      title: "Scale What Works",
      icon: "/icon/support.svg",
      content:
        "Document results, reallocate effort toward stronger opportunities, and build the next cycle around what the data has shown.",
    },
  ];
  const teamItems = [
    {
      title: "Designer",
      description:
        "Strategists connect business objectives to audience segments, offers, campaigns, and channel priorities.",
      icon: "/icons/designer.png",
    },
    {
      title: "Engineering",
      description:
        "Content and creative specialists develop messaging, campaign concepts, content structures, and channel-specific creative directions.",
      icon: "/icons/ios.png",
    },
    {
      title: "Mobile Specialist",
      description:
        "Performance specialists manage campaign structure, targeting, budgets, testing, and day-to-day optimization.",
      icon: "/icons/android.png",
    },
    {
      title: "Product Manager",
      description:
        "Analytics support turns campaign and website data into practical decisions about what to keep, change, or scale.",
      icon: "/icon/front.svg",
    },
    {
      title: "QA & Testing",
      description:
        "Project coordination keeps assets, approvals, timelines, and reporting organized so campaigns move without unnecessary delays.",
      icon: "/icons/qa.png",
    },
  ];
  const serviceFaqs = [
    {
      question: "Which digital marketing channels do you work with?",
      answer:
        "We can support strategy and execution across search, paid advertising, social media, content marketing, landing pages, email, analytics, and conversion optimization depending on the audience and goal.",
    },
    {
      question: "How do you decide which channels are right for a business?",
      answer:
        "We consider the target audience, buying journey, offer, market, existing assets, budget, and measurable business goals before recommending a channel mix.",
    },
    {
      question: "Do you manage paid advertising campaigns?",
      answer:
        "Yes. Campaign support can include planning, account structure, creative direction, targeting, tracking, optimization, and performance reporting.",
    },
    {
      question: "Can you improve an existing marketing campaign?",
      answer:
        "Yes. We can audit current campaigns and landing experiences, identify bottlenecks, and prioritize improvements based on the available data.",
    },
    {
      question: "How do you measure marketing performance?",
      answer:
        "We define useful metrics around the agreed objective, which may include qualified leads, conversions, acquisition cost, revenue, engagement, traffic quality, and channel efficiency.",
    },
  ];
  const services = [
    "Growth Strategy",
    "Paid Advertising",
    "Content Marketing",
    "Social Media",
    "Conversion Optimization",
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
              src="https://images.unsplash.com/photo-1537731121640-bc1c4aba9b80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            src="https://images.unsplash.com/photo-1644317167865-ee0f3ff917a1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
