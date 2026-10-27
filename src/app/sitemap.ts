import type { MetadataRoute } from "next";
import {
  featuredProjects,
  insights,
  serviceSlugs,
  siteImages,
  solarPackages,
  solutionSlugs,
} from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const imageUrls = [
    absoluteUrl("/og.png"),
    absoluteUrl("/brand/sm-solar-electrical.webp"),
    ...Object.values(siteImages).map((image) => absoluteUrl(image.src)),
  ];

  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.85 },
    { path: "/service-areas", priority: 0.9 },
    { path: "/solutions", priority: 0.9 },
    { path: "/services", priority: 0.9 },
    { path: "/projects", priority: 0.9 },
    { path: "/products", priority: 0.85 },
    { path: "/solar-packages", priority: 0.85 },
    { path: "/insights", priority: 0.8 },
    { path: "/contact", priority: 0.95 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route.priority,
      images: route.path === "/" ? imageUrls : undefined,
    })),
    ...solutionSlugs.map((slug) => ({
      url: absoluteUrl(`/solutions/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...serviceSlugs.map((slug) => ({
      url: absoluteUrl(`/services/${slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...featuredProjects.map((project) => ({
      url: absoluteUrl(`/projects/${project.id}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
      images: [absoluteUrl(project.image.src)],
    })),
    ...solarPackages.map((pkg) => ({
      url: absoluteUrl(`/solar-packages/${pkg.id}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...insights.map((insight) => ({
      url: absoluteUrl(`/insights/${insight.id}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
