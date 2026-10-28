export const site = {
  name: "Heapware",
  legalName: "Heapware Technologies",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://heapware.com",
  tagline: "Software House in Lahore for Web, App & ERP Development",
  description:
    "Heapware is a software house in Lahore, Pakistan building custom websites, mobile apps, SaaS products and ERP systems, plus SEO and digital marketing that grow your business.",
  logo: "/new-heap-logo.png",
  ogImage: "/hero-slider-1.jpg",
  email: "harisali@heapware.com",
  phone: "+92 314-4594049",
  phoneHref: "tel:+923144594049",
  hours: "10:00 AM - 8:00 PM",
  address: [
    "13-F1, 2nd Floor, Ghazi Rd,",
    "Block F Punjab Cooperative Housing",
    "society, Lahore, Punjab 54792",
  ],
  // Same address split into the fields structured data expects.
  postalAddress: {
    streetAddress:
      "13-F1, 2nd Floor, Ghazi Rd, Block F Punjab Cooperative Housing Society",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    postalCode: "54792",
    addressCountry: "PK",
  },
  social: {
    facebook: "https://www.facebook.com/heapware",
    linkedin: "https://www.linkedin.com/company/heapware-technologies",
    instagram: "https://www.instagram.com/heapware",
  },
};

// Service names used by navigation, cards and contact forms.
export const serviceLinks = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Mobile App Development", href: "/services/app-development" },
  { name: "SaaS Development", href: "/services/saas-development" },
  { name: "ERP System Development", href: "/services/erp-development" },
  { name: "SEO Services", href: "/services/seo-services" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
];
