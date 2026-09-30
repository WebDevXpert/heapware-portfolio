import PageHeader from "@/components/PageHeader";
import ProjectList from "@/components/ProjectList";

export const metadata = {
  title: "Projects",
  description:
    "Selected websites and digital products delivered by Heapware, with the goals, challenges and results behind each one.",
  alternates: { canonical: "/Projects" },
};

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
