import React from 'react';

const Pricing = () => {
  return (
    <div id='price' className="relative bg-black bg-[url('/download.jpeg')] bg-fixed bg-cover bg-center text-white min-h-screen flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black"></div>

      <div className="max-w-6xl w-full relative z-10">
        <h2 className="text-center md:text-5xl text-4xl font-bold mb-16 text-teal-400">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#0D1B1B] p-6 text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <h3 className="text-xl font-semibold">Basic</h3>
            <p className="mt-4 text-5xl font-bold text-teal-400">$39</p>
            <p className="mt-2">Per Month</p>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li>Basic IT Consulting</li>
              <li>24/7 System Monitoring</li>
              <li>Server Security Setup</li>
              <li>Email Support</li>
            </ul>
            <button className="mt-6 px-4 py-2 bg-teal-400 text-gray-900 font-semibold transition duration-300 transform hover:scale-110 hover:bg-teal-500">Choose Plan</button>
          </div>
          <div className="bg-[#0D1B1B] p-6 text-center relative shadow-teal transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent border-2 border-teal-500 px-8 py-3 font-bold">Bestseller</div>
            <h3 className="text-xl font-semibold mt-20">Premium</h3>
            <p className="mt-4 text-5xl font-bold text-teal-400">$99</p>
            <p className="mt-2">Per Month</p>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li>Advanced IT Consulting</li>
              <li>Cloud Server Management</li>
              <li>24/7 System Monitoring and Security</li>
              <li>Priority Email and Phone Support</li>
            </ul>
            <button className="mt-6 px-4 py-2 bg-teal-400 text-gray-900 font-semibold transition duration-300 transform hover:scale-110 hover:bg-teal-500">Choose Plan</button>
          </div>
          <div className="bg-[#0D1B1B] p-6 text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="mt-4 text-5xl font-bold text-teal-400">$69</p>
            <p className="mt-2">Per Month</p>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li>Comprehensive IT Solutions</li>
              <li>Custom Software Development</li>
              <li>Cloud Infrastructure Management</li>
              <li>Dedicated 24/7 Support</li>
            </ul>
            <button className="mt-6 px-4 py-2 bg-teal-400 text-gray-900 font-semibold transition duration-300 transform hover:scale-110 hover:bg-teal-500">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
