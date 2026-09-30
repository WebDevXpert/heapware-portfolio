import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "Services",
  description:
    "Web development, mobile apps, SaaS, ERP systems, SEO and digital marketing services from Heapware.",
  alternates: { canonical: "/services" },
};

const services = [
  {
    title: "Web Development",
    description:
      "Crafting high-impact websites tailored to your brand’s needs. Our team specializes in user-friendly interfaces and scalable solutions that drive engagement and enhance user experience.",
    icon: "🌐",
    href: "web-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Bringing your ideas to life with cutting-edge mobile applications. Whether you need native or cross-platform apps, our developers ensure a seamless user experience that meets your business goals.",
    icon: "📱",
    href: "app-development",
  },
  {
    title: "SaaS Development",
    description:
      "Launch and grow subscription software with secure multi-tenant architecture, billing, user management and a product built to scale with your customers.",
    icon: "💼",
    href: "saas-development",
  },
  {
    title: "ERP Development",
    description:
      "Connect finance, inventory, sales, HR and reporting in one system designed around how your organization actually works, instead of forcing teams into generic software.",
    icon: "🏢",
    href: "erp-development",
  },
  {
    title: "SEO Services",
    description:
      "Enhance your online presence with our SEO expertise. We implement strategies that improve your search engine rankings and drive organic traffic to your website.",
    icon: "🔍",
    href: "seo-services",
  },
  {
    title: "Digital Marketing",
    description:
      "Elevate your brand visibility with data-driven campaigns across search, social and content that reach the right audience and turn attention into leads.",
    icon: "📣",
    href: "digital-marketing",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Our Services"
        description="We offer a wide range of IT solutions tailored to your business needs."
      />

      <div className="bg-white px-8 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              href={`/services/${service.href}`}
              key={service.href}
              className="transform cursor-pointer rounded-lg border border-gray-200 bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:border-blue-200"
            >
              <div className="mb-4 text-6xl" aria-hidden="true">
                {service.icon}
              </div>
              <h2 className="mb-2 text-2xl font-bold text-blue-700">
                {service.title}
              </h2>
              <p className="text-gray-700">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-20">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold text-blue-700">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-lg text-gray-700">
            Contact us today to discuss your project and find out how we can
            help you achieve your business goals.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-blue-700 px-6 py-3 font-bold text-white transition-colors hover:bg-blue-800"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
