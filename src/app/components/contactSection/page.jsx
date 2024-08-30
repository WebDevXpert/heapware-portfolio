import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white py-12 px-6 lg:px-24 flex flex-col lg:flex-row justify-between items-center"
    >
      <div className="lg:w-1/2 mb-6 lg:mb-0 text-center lg:text-left">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          We Are <span className="text-teal-400">Perfect Solutions</span> <br />
          For <span className="text-teal-400">Your Business</span>
        </h1>
        <p className="mb-6">
          Donec vitae lacus vel ligula hendrerit viverra non non orci. Quisque
          sed tincidunt sapien. Maecenas gravida at velit feugiat vulputate.
        </p>
        <ul className="mb-6 space-y-2">
          <li className="flex items-center justify-center lg:justify-start">
            <span className="text-teal-400 mr-2">✔</span> We are committed to
            providing quality IT Services
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <span className="text-teal-400 mr-2">✔</span> Really know the true
            needs and expectations of customers
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <span className="text-teal-400 mr-2">✔</span> Provided by experts to
            help challenge critical activities
          </li>
          <li className="flex items-center justify-center lg:justify-start">
            <span className="text-teal-400 mr-2">✔</span> Processes of achieving
            the excellence improvements
          </li>
        </ul>
      </div>
      <div className="lg:w-1/2">
        <form className="space-y-12">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <input
              type="text"
              placeholder="Your Name..."
              className="w-full md:w-1/2 p-2 bg-black border border-white text-white"
            />
            <input
              type="email"
              placeholder="Your Email..."
              className="w-full md:w-1/2 p-2 bg-black border border-white text-white mt-4 md:mt-0"
            />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <select className="w-full md:w-1/2 p-2 bg-black border border-white text-white">
              <option>Inquiry...</option>
              <option>Service Request</option>
              <option>Support</option>
              <option>General Inquiry</option>
            </select>
            <input
              type="tel"
              placeholder="Your Phone..."
              className="w-full md:w-1/2 p-2 bg-black border border-white text-white mt-4 md:mt-0"
            />
          </div>
          <textarea
            placeholder="Additional Details..."
            className="w-full p-2 bg-black border border-white text-white"
            rows="4"
          ></textarea>
          <button className="bg-transparent text-lg text-[#2DD4BF] border-2 border-[#2DD4BF] py-2 px-7 rounded mt-4">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
