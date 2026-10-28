import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ServicePage from "@/components/ServicePage";
import { services, serviceSlugs } from "@/data/services";
import {
  breadcrumbSchema,
  faqSchema,
  pageMetadata,
  serviceSchema,
} from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const content = services[params.slug];
  if (!content) return {};

  return pageMetadata({
    title: content.seo.title,
    description: content.seo.description,
    path: `/services/${params.slug}`,
    image: content.heroImage,
  });
}

export default function ServiceDetailPage({ params }) {
  const content = services[params.slug];
  if (!content) notFound();

  const path = `/services/${params.slug}`;
  const name = `${content.hero.line1} ${content.hero.line2}`;

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name,
          description: content.seo.description,
          path,
          image: content.heroImage,
        })}
      />
      <JsonLd data={faqSchema(content.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Services", path: "/services" },
          { name, path },
        ])}
      />
      <ServicePage content={content} />
    </>
  );
}
