import type { MetadataRoute } from "next";
import {
  brandLogo,
  featuredProjects,
  insights,
  serviceSlugs,
  siteImages,
  solutionSlugs,
} from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const imageUrls = [
    absoluteUrl("/og.png"),
    absoluteUrl("/og-square.png"),
    absoluteUrl("/twitter-image.png"),
    absoluteUrl(brandLogo.src),
    absoluteUrl(brandLogo.png),
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
    { path: "/shop", priority: 0.85 },
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
    ...insights.map((insight) => ({
      url: absoluteUrl(`/insights/${insight.id}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
