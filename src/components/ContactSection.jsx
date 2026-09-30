"use client";

import { useState } from "react";
import { serviceLinks } from "@/lib/site";
import { sendForm } from "@/lib/sendForm";

const emptyForm = {
  name: "",
  email: "",
  service: "",
  phone: "",
  message: "",
  website: "",
};

const highlights = [
  "Custom websites and web applications",
  "Mobile apps for iOS and Android",
  "SaaS products and ERP systems built around your workflows",
  "SEO and digital marketing that bring in qualified leads",
];

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-gray-50/80 p-3.5 text-sm text-gray-900 outline-none transition focus:border-blue-600 focus:bg-white";

const ContactSection = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    try {
      await sendForm({
        ...formData,
        services: formData.service ? [formData.service] : [],
      });
      setFormData(emptyForm);
      setStatus({
        state: "success",
        message: "Thanks! Your message has been sent. We'll get back to you shortly.",
      });
    } catch (err) {
      setStatus({ state: "error", message: err.message });
    }
  };

  return (
    <section className="overflow-hidden bg-white py-12 md:py-20 lg:py-28">
      <div
        id="contact"
        className="mx-auto flex w-[90%] max-w-7xl scroll-mt-28 flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16"
      >
        {/* Left Column Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-950 sm:text-4xl lg:text-6xl">
            Let&apos;s Build the Right{" "}
            <span className="text-blue-600">Solution</span>{" "}
            <br className="hidden sm:inline" />
            For <span className="text-blue-600">Your Business</span>
          </h2>
          <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg">
            Tell us what you&apos;re working on and we&apos;ll get back to you
            with next steps, a rough timeline and an estimate.
          </p>
          <ul className="space-y-3.5 text-left text-base font-medium text-gray-700">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm text-blue-600">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column Form */}
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            {/* Honeypot for spam bots */}
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name..."
                aria-label="Your name"
                required
                className={`${inputClass} sm:w-1/2`}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email..."
                aria-label="Your email"
                required
                className={`${inputClass} sm:w-1/2`}
              />
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                aria-label="Service you're interested in"
                className={`${inputClass} sm:w-1/2`}
              >
                <option value="">Service you need...</option>
                {serviceLinks.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name}
                  </option>
                ))}
                <option value="Something else">Something else</option>
              </select>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your Phone..."
                aria-label="Your phone"
                className={`${inputClass} sm:w-1/2`}
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your project..."
              aria-label="Project details"
              rows={4}
              className={inputClass}
            ></textarea>
            <button
              type="submit"
              disabled={status.state === "sending"}
              className="w-full rounded-lg border-2 border-blue-600 bg-white px-8 py-3 text-base font-semibold text-blue-600 transition-all duration-200 hover:bg-blue-600 hover:text-white disabled:cursor-wait disabled:opacity-60 sm:w-auto"
            >
              {status.state === "sending" ? "Sending..." : "Submit"}
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
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
