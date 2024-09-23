"use client";
import Head from 'next/head';
import Link from 'next/link';
import Services from './services1/page';

const services = [
  {
    title: "Web Development",
    description: "Crafting high-impact websites tailored to your brand’s needs. Our team specializes in user-friendly interfaces and scalable solutions that drive engagement and enhance user experience.",
    icon: "&#127760;",
  },
  {
    title: "Mobile App Development",
    description: "Bringing your ideas to life with cutting-edge mobile applications. Whether you need native or cross-platform apps, our developers ensure a seamless user experience that meets your business goals.",
    icon: "&#128241;",
  },
  {
    title: "Digital Marketing",
    description: "Elevate your brand visibility with our comprehensive digital marketing strategies. From PPC to content marketing, we ensure your message reaches the right audience effectively.",
    icon: "&#128188;",
  },
  {
    title: "UI/UX Design",
    description: "Design is not just what it looks like; it’s how it works. Our UI/UX specialists create intuitive designs that keep users engaged, ensuring users have a smooth journey on your platform.",
    icon: "&#127912;",
  },
  {
    title: "SEO Services",
    description: "Enhance your online presence with our SEO expertise. We implement strategies that improve your search engine rankings and drive organic traffic to your website.",
    icon: "&#128269;",
  },
  {
    title: "Content Creation",
    description: "Engage your audience with compelling content crafted to tell your story. Our creative team produces everything from blog posts to promotional materials that resonate with your customers.",
    icon: "&#9997;&#65039;",
  },
  {
    title: "E-commerce Solutions",
    description: "Launch your online store with our tailored e-commerce solutions. We integrate advanced features to help you sell efficiently and provide unparalleled shopping experiences for your customers.",
    icon: "&#128722;",
  },
  {
    title: "Social Media Management",
    description: "Connect with your audience better. Our social media experts craft and manage your content, ensuring brand consistency and engagement across all platforms.",
    icon: "&#128227;",
  },
];

export default function ServicesUs() {
  return (
    <>
      <div>
        <Services />
      </div>
      <Head>
        <title>Our IT Services - DITECH</title>
      </Head>

      <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-teal-600 mb-8">Our IT Services</h1>
          <p className="text-lg text-gray-700">We offer a wide range of IT solutions tailored to your business needs.</p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 cursor-pointer p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <div className="text-6xl mb-4" dangerouslySetInnerHTML={{ __html: service.icon }}></div>
              <h2 className="text-2xl text-teal-600 font-bold mb-2">{service.title}</h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <main className="py-12 bg-white">
        <section className="relative bg-fixed bg-[url('/light-bg.jpeg')] bg-cover bg-center py-12">
          <div className="absolute inset-0 bg-gradient-to-t from-white opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-white opacity-70" />
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h2 className="text-4xl text-teal-600 font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-gray-700 mb-8">Contact us today to discuss your project and find out how we can help you achieve your business goals.</p>
            <Link href={"/contact"} className="bg-teal-600 text-white px-6 py-3 rounded-full font-bold hover:bg-teal-700 transition-colors">Contact Us</Link>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-4xl font-bold text-teal-600 text-center mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">&ldquo;The team at Digital Agency is phenomenal! They helped us increase our online presence and grow our business.&rdquo;</p>
              <p className="font-bold text-teal-600">&ndash; Client A</p>
            </div>
            <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">&ldquo;Their web development services are top-notch. Our new website is fast, responsive, and looks great.&rdquo;</p>
              <p className="font-bold text-teal-600">&ndash; Client B</p>
            </div>
            <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">&ldquo;Thanks to their SEO and digital marketing efforts, we’ve seen a significant increase in traffic and sales.&rdquo;</p>
              <p className="font-bold text-teal-600">&ndash; Client C</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
