import PageHeader from "@/components/PageHeader";
import ProjectList from "@/components/ProjectList";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Work – Web & App Development Case Studies",
  description:
    "Case studies of websites, ecommerce stores, healthcare and travel platforms built by Heapware, with the goals, challenges and results behind each project.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Our Work"
        title="Projects"
        description="Explore selected projects delivered by Heapware and discover the outcomes, approach, and solutions behind each one."
      />
      <ProjectList />
    </div>
  );
}
