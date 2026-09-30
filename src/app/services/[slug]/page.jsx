import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { services, serviceSlugs } from "@/data/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const content = services[params.slug];
  if (!content) return {};

  const title = `${content.hero.line1} ${content.hero.line2}`;
  return {
    title,
    description: content.hero.description,
    alternates: { canonical: `/services/${params.slug}` },
    openGraph: { title, description: content.hero.description },
  };
}

export default function ServiceDetailPage({ params }) {
  const content = services[params.slug];
  if (!content) notFound();

  return <ServicePage content={content} />;
}
