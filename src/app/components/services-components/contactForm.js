"use client";
import { useState } from "react";

export default function ContactForm() {
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

  return (
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
          <label className="font-semibold">Services you are looking for</label>
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
  );
}
