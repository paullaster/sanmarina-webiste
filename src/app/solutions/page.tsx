import type { Metadata } from "next";
import {
  pageSeo,
  solutionPages,
  solutionSlugs,
  siteImages,
} from "@/lib/content";
import { BrandMediaCard } from "@/components/BrandMediaCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/Button";
import { buildPageMetadata, buildWebPageJsonLd, siteConfig } from "@/lib/seo";

const breadcrumbs = [{ name: "Solutions", path: "/solutions" }] as const;

export const metadata: Metadata = buildPageMetadata({
  title: pageSeo.solutions.title,
  description: pageSeo.solutions.description,
  path: "/solutions",
});

const solutionImages = {
  "solar-energy": siteImages.rooftopSolarCrew,
  "battery-storage": siteImages.driveProtectionDetail,
  "critical-power": siteImages.siteDriveInstall,
  "electrical-infrastructure": siteImages.transformerInspectionDetail,
  "solar-water-pumping": siteImages.cablingThroughPit,
} as const;

export default function SolutionsHubPage() {
  return (
    <SiteShell mainLabel="Energy solutions">
      <JsonLd
        data={buildWebPageJsonLd({
          title: pageSeo.solutions.title,
          description: pageSeo.solutions.description,
          path: "/solutions",
          breadcrumbs,
        })}
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="safe-px section-y">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-3xl">
            <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Solutions
            </p>
            <h1 className="font-display text-ink mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-bold tracking-tight text-balance">
              Solar solutions and engineering solutions in Kenya
            </h1>
            <p className="text-muted mt-4 text-pretty">
              Different buildings have different energy requirements. A home,
              hotel, factory, office, apartment block and institution cannot all
              be solved with the same system. SM Solar & Electrical assesses the
              application first, then engineers solar energy solutions, battery
              storage, critical power and electrical infrastructure for sites in
              Nairobi, Kisumu and across Kenya.
            </p>
          </header>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2" role="list">
            {solutionSlugs.map((slug) => {
              const solution = solutionPages[slug];
              return (
                <li key={slug}>
                  <BrandMediaCard
                    href={`/solutions/${slug}`}
                    image={solutionImages[slug]}
                    title={solution.title}
                    description={solution.intro}
                    eyebrow={solution.headline}
                    cta="Explore solution"
                    imageHeightClassName={
                      slug === "electrical-infrastructure"
                        ? "h-64 sm:h-72"
                        : "h-48 sm:h-52"
                    }
                    imageClassName={
                      slug === "electrical-infrastructure"
                        ? "object-cover object-[center_12%]"
                        : undefined
                    }
                  />
                </li>
              );
            })}
          </ul>

          <div className="bg-accent mt-12 rounded-2xl px-6 py-8 text-white sm:px-10">
            <h2 className="font-display text-xl font-bold">
              Need help choosing?
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/90">
              You don&apos;t have to know exactly what system you need. Tell us
              what you are trying to achieve, and we will help determine the
              appropriate technical solution.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href="/contact"
                className="!text-accent !bg-white hover:!bg-teal-50"
              >
                Request a site assessment
              </Button>
              <Button
                href={`https://wa.me/${siteConfig.whatsapp}`}
                variant="secondary"
                className="!border-white/35 !bg-white/10 !text-white hover:!border-white/60 hover:!bg-white/15"
              >
                Talk to an engineer
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
