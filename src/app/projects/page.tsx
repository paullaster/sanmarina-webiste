import type { Metadata } from "next";
import { pageSeo } from "@/lib/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProjectsBrowser } from "@/components/ProjectsBrowser";
import { SiteShell } from "@/components/SiteShell";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const breadcrumbs = [{ name: "Projects", path: "/projects" }] as const;

export const metadata: Metadata = buildPageMetadata({
  title: pageSeo.projects.title,
  description: pageSeo.projects.description,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <SiteShell mainLabel="SM Solar & Electrical projects">
      <JsonLd
        data={buildWebPageJsonLd({
          title: pageSeo.projects.title,
          description: pageSeo.projects.description,
          path: "/projects",
          breadcrumbs,
        })}
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="safe-px section-y">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-2xl">
            <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Projects
            </p>
            <h1 className="font-display text-ink mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-bold tracking-tight text-balance">
              Solar and electrical engineering projects in Kenya
            </h1>
            <p className="text-muted mt-3 text-pretty">
              Our projects bring together engineering design, quality solar
              equipment, professional installation and practical field
              experience — from residential solar in Kisumu to commercial energy
              and electrical infrastructure across Kenya.
            </p>
          </header>

          <ProjectsBrowser />
        </div>
      </section>
    </SiteShell>
  );
}
