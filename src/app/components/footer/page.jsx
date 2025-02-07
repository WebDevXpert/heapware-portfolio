import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdPlace, MdSchedule, MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  const copyrightText = (
    <p className="text-sm text-teal-600 text-center w-full">
      &copy; Innovative Web Solutions, Tailored for You
    </p>
  );

  return (
    <footer className="bg-white text-gray-600 pt-20 pb-5">
      <div className=" w-[90%] mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link href="/" passHref>
              <div className="text-2xl font-bold cursor-pointer flex items-baseline">
                <Image
                  src="/heapware-logo.png"
                  alt="logo"
                  width={400}
                  height={50}
                  className="w-60 h-20 sm:w-56 sm:h-12 md:w-40 md:h-40 lg:h-16 object-contain"
                />
              </div>
            </Link>
            {/* <p className="text-sm mt-4">
              Offering IT solutions from web development to cybersecurity, keeping your business ahead in the digital world.
            </p> */}
          </div>

          {/* Company Links */}
          <div>
            <h2 className="font-semibold text-teal-500 mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/Projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h2 className="font-semibold text-teal-500 mb-4">Solutions</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/web-development"
                  className="hover:underline"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/app-development"
                  className="hover:underline"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/saas-development"
                  className="hover:underline"
                >
                  SAAS Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/erp-development"
                  className="hover:underline"
                >
                  ERP System Development
                </Link>
              </li>
              <li>
                <Link href="/services/seo-services" className="hover:underline">
                  SEO Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="hover:underline"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-semibold text-teal-500 mb-4">Contact Info</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MdPlace className="mr-2 text-2xl mt-1 text-teal-600" />
                <span>
                  13-F1, 2nd Floor, Ghazi Rd, <br />
                  Block F Punjab Cooperative Housing <br />
                  society, Lahore, Punjab 54792
                </span>
              </li>
              <li className="flex items-center">
                <MdSchedule className="mr-2 text-teal-600" /> 10:00 AM - 8:00 PM
              </li>
              <li className="flex items-center">
                <MdCall className="mr-2 text-teal-600" /> +92 314-4594049
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-2 text-teal-600" /> harisali@heapware.com
              </li>
            </ul>
          </div>

          {/* Subscribe Form */}
          <div>
            <h2 className="font-semibold text-teal-500 mb-4">Subscribe</h2>
            <form>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Email..."
              />
              <button className="mt-4 w-full bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links and Footer */}
        <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/heapware"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-600"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/company/heapware-technologies"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-600"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/heapware"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-500 hover:text-teal-600"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>

          <div className="w-full md:w-auto text-center md:text-right">
            {copyrightText}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
