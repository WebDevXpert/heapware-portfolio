import { site } from "@/lib/site";

const absoluteUrl = (path = "") =>
  path.startsWith("http") ? path : `${site.url}${path}`;

// Next.js replaces (not merges) openGraph/twitter objects per page, so every
// page builds its full set here to keep titles, URLs and images consistent.
export function pageMetadata({ title, description, path, image = site.ogImage }) {
  const socialTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`;

  return {
    ...(title && { title: { absolute: socialTitle } }),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.name,
      url: path,
      title: socialTitle,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}

const organizationId = `${site.url}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": organizationId,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        logo: absoluteUrl(site.logo),
        image: absoluteUrl(site.ogImage),
        description: site.description,
        email: site.email,
        telephone: site.phone.replace(/[\s-]/g, ""),
        address: { "@type": "PostalAddress", ...site.postalAddress },
        areaServed: ["Lahore", "Pakistan", "Worldwide"],
        sameAs: Object.values(site.social),
        knowsAbout: [
          "Web Development",
          "Mobile App Development",
          "SaaS Development",
          "ERP Software Development",
          "Search Engine Optimization",
          "Digital Marketing",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": organizationId },
      },
    ],
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema({ name, description, path, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    provider: { "@id": organizationId },
    areaServed: [
      { "@type": "City", name: "Lahore" },
      { "@type": "Country", name: "Pakistan" },
    ],
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
