"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  Code2,
  Layers,
  LayoutDashboard,
  MonitorSmartphone,
  Settings2,
} from "lucide-react";
import { sendForm } from "@/lib/sendForm";

const overviewIcons = [Code2, Layers, MonitorSmartphone, LayoutDashboard, Settings2];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  services: [],
  website: "",
};

const scrollToForm = () => {
  document
    .getElementById("service-contact")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function ServicePage({ content }) {
  const [activeStep, setActiveStep] = useState(0);
  const [openIndices, setOpenIndices] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const { processSteps, teamItems, faqs, formServices } = content;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    try {
      await sendForm(formData);
      setFormData(emptyForm);
      setStatus({
        state: "success",
        message: "Thanks! Your message has been sent. We'll get back to you shortly.",
      });
    } catch (err) {
      setStatus({ state: "error", message: err.message });
    }
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
      <section className="flex flex-col items-center justify-between gap-12 bg-white px-6 py-32 md:flex-row md:px-10">
        <div className="max-w-xl space-y-5 md:w-1/2">
          <h1 className="text-5xl font-bold leading-tight text-black md:text-6xl">
            {content.hero.line1} <br />
            <span className="text-blue-600">{content.hero.line2}</span>
          </h1>
          <p className="text-lg text-gray-600">{content.hero.description}</p>
          <div className="mt-6 flex w-full justify-center md:justify-start">
            <button
              type="button"
              onClick={scrollToForm}
              className="rounded-md bg-blue-600 px-8 py-3 text-white transition-all hover:bg-blue-700"
            >
              Get a Free Quote
            </button>
          </div>
        </div>

        <div className="relative flex justify-center md:w-1/2">
          <div className="relative h-[300px] w-full max-w-[400px]">
            <Image
              src={content.heroImage}
              alt={content.hero.alt}
              fill
              priority
              sizes="400px"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="font-semibold text-blue-600">What We Do</p>
          <h2 className="mx-auto mt-4 text-4xl font-bold text-gray-900 md:w-2/3">
            {content.overview.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {content.overview.description}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 px-6 md:grid-cols-3 md:px-16">
          {content.overview.cards.map((card, index) => {
            const Icon = overviewIcons[index % overviewIcons.length];
            return (
              <div
                key={card.title}
                className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-md"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon size={30} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16 text-center md:px-20">
        <p className="text-lg font-semibold text-blue-600">Why Choose Us</p>
        <h2 className="mt-2 text-4xl font-bold text-gray-900">
          {content.why.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          {content.why.description}
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 px-2 md:grid-cols-2 md:gap-6 md:px-6">
          {content.why.features.map((feature) => (
            <div
              key={feature.id}
              className="group mx-auto w-full rounded-xl bg-white p-8 text-left shadow-md transition duration-300 ease-in-out hover:bg-blue-600 md:w-[90%]"
            >
              <span className="text-6xl font-bold text-gray-200 group-hover:text-blue-400">
                {feature.id}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-gray-900 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 group-hover:text-blue-50">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative flex flex-col items-center bg-blue-600 px-8 py-16 text-white md:flex-row md:py-24">
        <div className="text-left md:w-1/2">
          <h2 className="text-4xl font-bold md:text-5xl">
            {content.hero.line2} <br />
            <span className="text-white">Built for Results</span>
            <br />
            Without Compromising Quality
          </h2>
          <p className="mt-5 max-w-xl text-lg text-white/90">{content.cta}</p>
          <button
            type="button"
            onClick={scrollToForm}
            className="mt-6 flex items-center rounded-md bg-black px-6 py-3 text-lg text-white"
          >
            Get Started →
          </button>
        </div>
        <div className="relative mb-16 mt-10 flex justify-center md:mb-0 md:mt-0 md:w-1/2">
          <Image
            src={content.ctaImage}
            alt={content.hero.alt}
            width={640}
            height={480}
            className="h-auto w-96 rounded-lg object-contain"
          />
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block h-[80px] w-full md:h-[100px]"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-16">
        <p className="text-center text-lg font-semibold text-blue-600">
          Development Process
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          {content.processTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-center text-sm text-gray-600 md:text-base">
          {content.processDescription}
        </p>

        <div className="mt-12 flex w-full max-w-6xl flex-col gap-8 md:flex-row">
          {/* Steps List */}
          <div className="w-full space-y-3 md:w-1/3">
            {processSteps.map((step, index) => (
              <button
                type="button"
                key={step.title}
                onMouseOver={() => setActiveStep(index)}
                onFocus={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
                className={`flex w-full items-center gap-3 rounded-lg border-2 p-4 text-left transition-all duration-300 ${
                  activeStep === index
                    ? "border-transparent bg-blue-800 text-white shadow-lg"
                    : "border-transparent bg-gray-100 text-gray-700 hover:bg-blue-50"
                }`}
              >
                <Image
                  src={step.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                <span>{step.title}</span>
              </button>
            ))}
          </div>

          {/* Content Box */}
          <div className="w-full rounded-lg border border-gray-200 bg-white p-8 shadow-xl md:w-2/3">
            <h3 className="flex items-center gap-3 text-2xl font-semibold text-gray-900">
              <Image
                src={processSteps[activeStep].icon}
                alt=""
                width={28}
                height={28}
                className="h-7 w-7"
              />
              {processSteps[activeStep].title}
            </h3>
            <p className="mt-3 leading-relaxed text-gray-600">
              {processSteps[activeStep].content}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl bg-gray-50 px-6 py-16">
        <div className="text-center">
          <p className="font-semibold text-blue-600">Our Specialists</p>
          <h2 className="mt-2 text-3xl font-bold">{content.team.title}</h2>
          <p className="mt-4 text-gray-600">{content.team.description}</p>
        </div>

        <div className="relative mt-10 flex w-full flex-col gap-8 md:flex-row">
          <div className="flex-1 space-y-4">
            {teamItems.map((item, index) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-lg bg-white shadow-md"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-4 text-lg font-semibold"
                  onClick={() => toggleCard(index)}
                  aria-expanded={openIndices.includes(index)}
                >
                  <div className="flex items-center gap-3">
                    <Image src={item.icon} alt="" width={25} height={25} />
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

          <div className="relative flex flex-col items-center md:w-1/3">
            <Image
              src="/image/laptop.png"
              alt=""
              width={350}
              height={350}
              className="rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-10 text-center">
        <p className="text-lg font-semibold text-blue-600">
          {content.toolsTitle}
        </p>
        <h2 className="mt-2 px-4 text-4xl font-bold text-gray-900">
          Explore the Technologies Powering Modern Digital Products
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-4 px-4 md:px-6">
          {content.tools.map((tool) => (
            <div
              key={tool.name}
              className="flex h-40 w-40 flex-col items-center justify-center rounded-xl bg-white p-6 shadow-md transition duration-300 hover:shadow-lg"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-xl font-bold text-blue-600">
                {tool.short}
              </span>
              <p className="mt-3 font-semibold text-black">{tool.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-center">
        <p className="text-base font-semibold text-blue-600">
          Frequently Asked Questions
        </p>
        <h2 className="mt-3 text-3xl font-bold leading-snug text-gray-900">
          Questions We&apos;re Often Asked
        </h2>

        <div className="mx-auto mt-6 max-w-2xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-lg border bg-white p-6 text-left"
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                className="flex w-full items-center justify-between gap-4 text-left text-base font-medium"
              >
                {faq.question}
                <span aria-hidden="true">{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section
        id="service-contact"
        className="scroll-mt-24 bg-gray-50 px-4 py-16 text-center"
      >
        <p className="text-lg font-semibold text-blue-600">
          Let Us Know What You’re Looking for, We’ll Build it for You
        </p>
        <h2 className="mt-3 text-4xl font-bold text-gray-900">
          Let’s Work Together
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 max-w-3xl space-y-6 rounded-lg p-6"
        >
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <div className="text-left">
            <p className="font-semibold">Services you are looking for</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {formServices.map((service) => (
                <button
                  type="button"
                  key={service}
                  aria-pressed={formData.services.includes(service)}
                  className={`rounded-lg border px-4 py-2 ${
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

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name*"
              aria-label="Name"
              className="w-full rounded-lg border p-3"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email*"
              aria-label="Email"
              className="w-full rounded-lg border p-3"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              placeholder="Phone"
              aria-label="Phone"
              className="w-full rounded-lg border p-3"
              onChange={handleChange}
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              placeholder="Company"
              aria-label="Company"
              className="w-full rounded-lg border p-3"
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            placeholder="Your message..."
            aria-label="Message"
            className="w-full rounded-lg border p-3"
            rows={4}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            disabled={status.state === "sending"}
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-wait disabled:opacity-60"
          >
            {status.state === "sending" ? "Sending..." : "Send Message"}
          </button>
          {status.message && (
            <p
              role="status"
              className={`text-sm ${
                status.state === "error" ? "text-red-600" : "text-green-700"
              }`}
            >
              {status.message}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
