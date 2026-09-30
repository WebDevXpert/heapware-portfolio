import { site } from "@/lib/site";
import { serviceSlugs } from "@/data/services";
import { projects } from "@/data/projects";

export default function sitemap() {
  const pages = ["", "/about", "/services", "/Projects", "/career", "/contact"];

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
      url: `${site.url}/Projects/${project.slug}`,
      changeFrequency: "yearly",
      priority: 0.6,
    })),
  ];
}
