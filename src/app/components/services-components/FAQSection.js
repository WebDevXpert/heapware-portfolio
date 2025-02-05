"use client";
import { useState } from "react";

const faqs = [
  {
    question:
      "Could you clarify the concept of web development and its significance for my business?",
    answer:
      "Web development entails the creation and maintenance of websites, playing a pivotal role in establishing your online presence, engaging customers, and supporting digital initiatives.",
  },
  {
    question:
      "Which technologies and frameworks are employed in your web development process?",
    answer:
      "We harness a diverse array of technologies and frameworks, including HTML5, CSS3, JavaScript, React, Angular, and more, to craft contemporary and responsive websites tailored to your requirements.",
  },
  {
    question:
      "Do you specialize in e-commerce website development and the integration of payment solutions?",
    answer:
      "Certainly, we excel in e-commerce web development and can seamlessly integrate secure payment gateways to facilitate online transactions and amplify your digital sales.",
  },
  {
    question:
      "Are you equipped to handle website maintenance and updates post-launch?",
    answer:
      "Absolutely, we offer continuous website maintenance and support services to ensure the ongoing security, currency, and optimal performance of your site.",
  },
  {
    question:
      "What is the estimated project duration and budget for a web development project?",
    answer:
      "Project timelines and costs are variable based on complexity and needs. We provide personalized cost estimates and project schedules following comprehensive discussions regarding your project's unique details and goals.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
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
  );
}
