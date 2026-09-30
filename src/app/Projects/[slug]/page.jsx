import { notFound } from "next/navigation";
import ProjectDetails from "@/components/ProjectDetails";
import { getProjectBySlug, projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return {
    title: `${project.title} Case Study`,
    description: project.benefits.join(". "),
    alternates: { canonical: `/Projects/${project.slug}` },
    openGraph: {
      title: `${project.title} Case Study`,
      images: [project.image],
    },
  };
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return <ProjectDetails project={project} />;
}
