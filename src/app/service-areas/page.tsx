import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { ServiceAreasDirectory } from "@/components/ServiceAreas";
import { SiteShell } from "@/components/SiteShell";
import { pageSeo } from "@/lib/content";
import { buildPageMetadata, buildWebPageJsonLd, siteConfig } from "@/lib/seo";

const breadcrumbs = [
  { name: "About", path: "/about" },
  { name: "Where we work", path: "/service-areas" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: pageSeo["service-areas"].title,
  description: pageSeo["service-areas"].description,
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <SiteShell mainLabel="Where SM Solar & Electrical works in Kenya">
      <JsonLd
        data={buildWebPageJsonLd({
          title: pageSeo["service-areas"].title,
          description: pageSeo["service-areas"].description,
          path: "/service-areas",
          breadcrumbs,
        })}
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="safe-px section-y">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-3xl">
            <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Service areas
            </p>
            <h1 className="font-display text-ink mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-bold tracking-tight text-balance">
              Solar companies and engineering companies in Kenya
            </h1>
            <p className="text-muted mt-4 text-pretty">
              San Marina Engineering Limited — trading as SM Solar &amp;
              Electrical — is a Kisumu-based solar company, engineering company
              and electrical contractor. We design and install solar energy
              solutions, electrical works and critical power for clients in
              Nairobi, Kisumu, Mombasa and towns across Kenya.
            </p>
            <p className="text-muted mt-3 text-pretty">
              If you searched for solar companies in Nairobi, engineering
              companies in Kisumu, solar companies in Kenya or an engineering
              contractor near you, this is the coverage we actually deliver:
              national project work from a Kisumu office, not a catalogue of
              empty location pages.
            </p>
          </header>

          <ServiceAreasDirectory />

          <div className="bg-accent mt-12 rounded-2xl px-6 py-8 text-white sm:px-10">
            <h2 className="font-display text-xl font-bold">
              Planning a project in your town?
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/90">
              Tell us the site. SM Solar & Electrical will advise whether a
              visit, remote assessment or local delivery plan is the right next
              step.
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
                WhatsApp an engineer
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
