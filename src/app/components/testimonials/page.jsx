"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const testimonials = [
  {
    name: "Arham Shehzad",
    role: "Mobile App Development Client",
    content: "Heapware Technologies transformed our vision into an amazing mobile app. Their team was responsive, knowledgeable, and genuinely cared about our success!",
    image: "/bg-1.jpg",
  },
  {
    name: "Falak Shabbir",
    role: "Digital Marketing Client",
    content: "The digital marketing strategies devised by Heapware have significantly boosted our online reach and helped us connect with our audience more effectively!",
    image: "/bg-3.jpeg",
  },
  {
    name: "Waleed Awan",
    role: "Web Development Client",
    content: "With Heapware's expertise in web development, we were able to revamp our existing website and improve user engagement dramatically. We couldn’t be happier with the result!",
    image: "/bg-2.jpg",
  },
  {
    name: "Daniyal Khan",
    role: "E-commerce Client",
    content: "Their team made our e-commerce launch a breeze! The support we received was unmatched, and the sales have exceeded our expectations.",
    image: "/bg-2.jpg",
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const prevTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 300);
  };

  const nextTestimonial = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true);
    }, 300);
  };

  return (
    <div className="bg-[url('/teal-bg.jpeg')] bg-cover bg-center bg-fixed pb-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black"></div>
      <div className="max-w-6xl mx-auto mt-10 relative z-10 px-4 sm:px-6 lg:px-8">
        <h2 className="flex justify-center text-teal-500 md:text-5xl text-4xl font-bold mb-8">Testimonials</h2> 
        <div className="bg-transparent border border-teal-500 p-6 sm:p-8 md:p-10 shadow-lg text-center relative h-full">
          <div
            className={`transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex justify-start mb-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className="text-teal-400 mr-1"
                />
              ))}
            </div>
            <p className="text-white text-base sm:text-lg md:text-base mb-4 text-left">
              &quot;{testimonials[currentIndex].content}&quot;
            </p>
            <div className="flex justify-start items-center mt-4">
              <Image
                src={testimonials[currentIndex].image}
                width={50}
                height={50}
                alt={testimonials[currentIndex].name}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-cover rounded-full"
                loading="lazy"
              />
              <div className="text-left ml-4">
                <p className="text-teal-400 text-sm sm:text-base md:text-lg mb-1">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6 gap-2">
            <button
              className="text-white hover:text-teal-600 transition duration-300 ease-in-out"
              onClick={prevTestimonial}
              aria-label="Previous Testimonial"
            >
              <FontAwesomeIcon icon={faArrowLeft} size="1x" />
            </button>
            <button
              className="text-white hover:text-teal-600 transition duration-300 ease-in-out"
              onClick={nextTestimonial}
              aria-label="Next Testimonial"
            >
              <FontAwesomeIcon icon={faArrowRight} size="1x" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
