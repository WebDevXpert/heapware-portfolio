import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdPlace, MdSchedule, MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  const copyrightText = (
    <p className="text-sm text-teal-300 text-center w-full">
      &copy; Innovative Web Solutions, Tailored for You
    </p>
  );

  return (
    <footer className="bg-black w-full text-gray-400 pt-20 pb-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="text-white mb-8 text-2xl font-bold flex items-baseline">
              <span className="text-teal-500">Heap</span>
              <span className="text-white">ware</span>
            </div>
            <p className="text-sm mt-4">
              Offering IT solutions from web development to cybersecurity, keeping your business ahead in the digital world.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h2 className="font-semibold text-teal-500 mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <div className="hover:underline cursor-pointer">About Us</div>
              </li>
              <li>
                <div className="hover:underline cursor-pointer">Our Team</div>
              </li>
              <li>
                <div className="hover:underline cursor-pointer">Services</div>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h2 className="font-semibold text-teal-500 mb-4">Solutions</h2>
            <ul className="space-y-2">
              <li>
                <div className="hover:underline cursor-pointer">IT Management</div>
              </li>
              <li>
                <div className="hover:underline cursor-pointer">Cloud Services</div>
              </li>
              <li>
                <div className="hover:underline cursor-pointer">Data Center</div>
              </li>
              <li>
                <div className="hover:underline cursor-pointer">Software Development</div>
              </li>
              <li>
                <div className="hover:underline cursor-pointer">Web Development</div>
              </li>
              <li>
                <div className="hover:underline cursor-pointer">Cybersecurity</div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-semibold text-teal-500 mb-4">Contact Info</h2>
            <ul className="space-y-2">
              <li className="flex">
                <MdPlace className="mr-2 text-2xl mt-1" />
                <span>
                  13-F1, 2nd Floor, Ghazi Rd, <br /> Block F Punjab Cooperative Housing <br /> society, Lahore, Punjab 54792
                </span>
              </li>
              <li className="flex items-center">
                <MdSchedule className="mr-2" /> 10.00 - 20.00 PM
              </li>
              <li className="flex items-center">
                <MdCall className="mr-2" /> +92 314-4594049
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-2" /> harisali@heapware.com
              </li>
            </ul>
          </div>

          {/* Subscribe Form */}
          <div>
            <h2 className="font-semibold text-teal-500 mb-4">Subscribe</h2>
            <form>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Your Email..."
              />
              <button className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links and Footer */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
          <div className="flex space-x-4">
            <div className="text-teal-400 hover:text-teal-500 cursor-pointer">
              <FaFacebookF className="w-6 h-6" />
            </div>
            <div className="text-teal-400 hover:text-teal-500 cursor-pointer">
              <FaLinkedinIn className="w-6 h-6" />
            </div>
            <div className="text-teal-400 hover:text-teal-500 cursor-pointer">
              <FaInstagram className="w-6 h-6" />
            </div>
          </div>

          <div className="flex justify-center w-full md:w-auto">
            {copyrightText}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
