import { site } from "@/lib/site";
import { serviceSlugs } from "@/data/services";
import { projects } from "@/data/projects";

export default function sitemap() {
  const pages = ["", "/about", "/services", "/projects", "/career", "/contact"];

  return [
    ...pages.map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.8,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${site.url}/services/${slug}`,
      changeFrequency: "monthly",
      priority: 0.9,
    })),
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
