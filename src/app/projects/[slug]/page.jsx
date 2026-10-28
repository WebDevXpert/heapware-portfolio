import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import ProjectDetails from "@/components/ProjectDetails";
import { getProjectBySlug, projects } from "@/data/projects";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return pageMetadata({
    title: `${project.title} Case Study – ${project.industry}`,
    description: project.metaDescription,
    path: `/projects/${project.slug}`,
    image: project.image,
  });
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Projects", path: "/projects" },
          { name: project.title, path: `/projects/${project.slug}` },
        ])}
      />
      <ProjectDetails project={project} />
    </>
  );
}
