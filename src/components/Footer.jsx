import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { MdPlace, MdSchedule, MdCall, MdEmail } from "react-icons/md";
import { serviceLinks, site } from "@/lib/site";
import SubscribeForm from "./SubscribeForm";

const socialLinks = [
  { href: site.social.facebook, label: "Facebook", Icon: FaFacebookF },
  { href: site.social.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: site.social.instagram, label: "Instagram", Icon: FaInstagram },
];

const Footer = () => {
  return (
    <footer className="border-t border-blue-100 bg-slate-50 pb-5 pt-20 text-gray-600">
      <div className="mx-auto w-[90%]">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Logo */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/new-heap-logo.png"
                alt="Heapware logo"
                width={400}
                height={80}
                className="h-auto w-56 object-contain"
              />
            </Link>
          </div>

          {/* Company Links */}
          <div>
            <h2 className="mb-4 font-semibold text-blue-600">Company</h2>
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
              <li>
                <Link href="/career" className="hover:underline">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h2 className="mb-4 font-semibold text-blue-600">Solutions</h2>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="hover:underline">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-4 font-semibold text-blue-600">Contact Info</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MdPlace className="mr-2 mt-1 shrink-0 text-2xl text-blue-700" />
                <address className="not-italic">
                  {site.address.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < site.address.length - 1 && <br />}
                    </span>
                  ))}
                </address>
              </li>
              <li className="flex items-center">
                <MdSchedule className="mr-2 text-blue-700" /> {site.hours}
              </li>
              <li className="flex items-center">
                <MdCall className="mr-2 text-blue-700" />
                <a href={site.phoneHref} className="hover:underline">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-2 text-blue-700" />
                <a href={`mailto:${site.email}`} className="hover:underline">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Form */}
          <div>
            <h2 className="mb-4 font-semibold text-blue-600">Subscribe</h2>
            <SubscribeForm />
          </div>
        </div>

        {/* Social Media Links and Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-blue-100 pt-8 md:flex-row">
          <div className="mb-4 flex space-x-4 md:mb-0">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-blue-600 hover:text-blue-700"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          <p className="w-full text-center text-sm text-blue-700 md:w-auto md:text-right">
            &copy; {new Date().getFullYear()} {site.name}. {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
