import type { Metadata } from "next";
import { pageSeo, servicePages, serviceSlugs } from "@/lib/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/Button";
import { buildPageMetadata, buildWebPageJsonLd, siteConfig } from "@/lib/seo";
import Link from "next/link";

const breadcrumbs = [{ name: "Services", path: "/services" }] as const;

export const metadata: Metadata = buildPageMetadata({
  title: pageSeo.services.title,
  description: pageSeo.services.description,
  path: "/services",
});

export default function ServicesHubPage() {
  return (
    <SiteShell mainLabel="Engineering services">
      <JsonLd
        data={buildWebPageJsonLd({
          title: pageSeo.services.title,
          description: pageSeo.services.description,
          path: "/services",
          breadcrumbs,
        })}
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="safe-px section-y">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-3xl">
            <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Services
            </p>
            <h1 className="font-display text-ink mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-bold tracking-tight text-balance">
              Our services
            </h1>
            <p className="text-muted mt-4 text-pretty">
              From assessment to commissioning and long-term support. We provide
              engineering services across the energy and electrical lifecycle.
            </p>
          </header>

          <ul className="mt-10 grid gap-5 lg:grid-cols-2" role="list">
            {serviceSlugs.map((slug) => {
              const service = servicePages[slug];
              return (
                <li key={slug}>
                  <article className="brand-card flex h-full flex-col p-6 sm:p-8">
                    <h2 className="font-display text-ink text-xl font-bold">
                      {service.title}
                    </h2>
                    <p className="text-muted mt-2 text-sm leading-relaxed">
                      {service.intro}
                    </p>
                    <ul className="mt-5 flex-1 space-y-2" role="list">
                      {service.items.slice(0, 6).map((item) => (
                        <li
                          key={item}
                          className="text-ink flex gap-2 text-sm leading-snug"
                        >
                          <span aria-hidden="true" className="text-accent">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${slug}`}
                      className="text-accent mt-5 inline-flex text-sm font-semibold underline-offset-4 hover:underline"
                    >
                      View full service scope
                    </Link>
                  </article>
                </li>
              );
            })}
            <li>
              <article className="brand-card flex h-full flex-col p-6 sm:p-8">
                <h2 className="font-display text-ink text-xl font-bold">
                  Critical Power
                </h2>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  Battery Energy Storage Systems, UPS, standby generators,
                  transfer systems, voltage stabilisation and power-quality
                  solutions for operational continuity.
                </p>
                <ul className="mt-5 flex-1 space-y-2" role="list">
                  {[
                    "Battery Energy Storage Systems",
                    "UPS systems",
                    "Standby generators",
                    "Automatic transfer systems",
                    "Voltage stabilisation",
                    "Power factor correction",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-ink flex gap-2 text-sm leading-snug"
                    >
                      <span aria-hidden="true" className="text-accent">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/solutions/critical-power"
                  className="text-accent mt-5 inline-flex text-sm font-semibold underline-offset-4 hover:underline"
                >
                  Explore critical power solutions
                </Link>
              </article>
            </li>
          </ul>

          <div className="bg-accent mt-12 rounded-2xl px-6 py-8 text-white sm:px-10">
            <h2 className="font-display text-xl font-bold">
              Have a technical challenge?
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/90">
              If you are not sure which service you need, tell us about the
              project. Our engineers can help define the requirement and
              recommend the appropriate next step.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                href="/contact"
                className="!text-accent !bg-white hover:!bg-teal-50"
              >
                Talk to an engineer
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
