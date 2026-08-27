"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Arham Shehzad",
    role: "Mobile App Development Client",
    content:
      "Heapware Technologies transformed our vision into an amazing mobile app. Their team was responsive, knowledgeable, and genuinely cared about our success!",
    image: "/bg-1.jpg",
  },
  {
    name: "Falak Sher",
    role: "Digital Marketing Client",
    content:
      "The digital marketing strategies devised by Heapware have significantly boosted our online reach and helped us connect with our audience more effectively!",
    image: "/bg-3.jpeg",
  },
  {
    name: "Waleed Awan",
    role: "Web Development Client",
    content:
      "With Heapware's expertise in web development, we were able to revamp our existing website and improve user engagement dramatically. We couldn’t be happier with the result!",
    image: "/bg-2.jpg",
  },
  {
    name: "Danyal Khan",
    role: "E-commerce Client",
    content:
      "Their team made our e-commerce launch a breeze! The support we received was unmatched, and the sales have exceeded our expectations.",
    image: "/bg-2.jpg",
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  // Automatic rotation
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="pointer-events-none absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative z-10 mx-auto w-[90%] max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
            Client Feedback
          </p>

          <h2 className="text-4xl font-bold text-gray-950 md:text-5xl">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonial */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-slate-50 p-7 shadow-xl shadow-gray-100 sm:p-10 md:p-14">
          <Quote size={70} className="absolute right-8 top-8 text-blue-100" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -40,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              {/* Stars */}
              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-blue-500 text-blue-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="max-w-4xl text-xl leading-9 text-gray-800 md:text-2xl md:leading-10">
                “{testimonial.content}”
              </p>

              {/* User */}
              <div className="mt-10 flex items-center">
                <Image
                  src={testimonial.image}
                  width={70}
                  height={70}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover ring-4 ring-blue-100"
                />

                <div className="ml-4">
                  <h3 className="font-semibold text-gray-950">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-between border-t border-gray-200 pt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-blue-600"
                      : "w-2.5 bg-gray-300 hover:bg-blue-300"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                <ArrowLeft size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-600 bg-blue-600 text-white transition-colors hover:bg-blue-700"
              >
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
