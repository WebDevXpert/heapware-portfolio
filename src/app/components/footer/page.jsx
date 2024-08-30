import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black w-full text-gray-400 pt-20 pb-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 w-full">
          <div className="lg:col-span-1">
            <div className="text-white mb-8 text-2xl font-bold">
              <Link href="/">
                <div className="text-2xl font-bold cursor-pointer flex items-baseline">
                  <span className="text-teal-500 text-2xl">Heap</span>
                  <span className="text-white text-2xl">ware</span>
                </div>
              </Link>
            </div>
            <p className="text-sm">
              Proin velit augue, rutrum sed fringilla ac, congue id lorem. Sed feugiat sed nisl sed ultrices.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-teal-500 mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#">
                  <div className="hover:underline">About Us</div>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div className="hover:underline">Our Team</div>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div className="hover:underline">Services</div>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div className="hover:underline">Pricing</div>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-teal-500 mb-4">Solutions</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#">
                  <div className="hover:underline">IT Management</div>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div className="hover:underline">Cloud Services</div>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div className="hover:underline">Data Center</div>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <div className="hover:underline">Software Development</div>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-teal-500 mb-4">Contact Info</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="material-icons mr-2">place</span>99, Roving St, Big City
              </li>
              <li className="flex items-center">
                <span className="material-icons mr-2">schedule</span>08.00 - 17.00 Pm
              </li>
              <li className="flex items-center">
                <span className="material-icons mr-2">call</span>+123-1234-1234
              </li>
              <li className="flex items-center">
                <span className="material-icons mr-2">email</span>hello@awesomesite.com
              </li>
            </ul>
          </div>
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
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
          <div className="flex space-x-4">
            <Link href="#">
              <div className="text-teal-400 hover:text-teal-500">
                <FaFacebookF  className="w-6 h-6"  />
              </div>
            </Link>
            <Link href="#">
              <div className="text-teal-400 hover:text-teal-500">
                <FaTwitter className="w-6 h-6" />
              </div>
            </Link>
            <Link href="#">
              <div className="text-teal-400 hover:text-teal-500">
                <FaLinkedinIn  className="w-6 h-6"  />
              </div>
            </Link>
            <Link href="#">
              <div className="text-teal-400 hover:text-teal-500">
                <FaYoutube  className="w-6 h-6"  />
              </div>
            </Link>
          </div>
          <div className="flex justify-center w-full md:w-auto">
            <p className="text-sm text-gray-600 text-center w-full">
              &copy; Copyright 2022. All Rights Reserved. Rometheme
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
