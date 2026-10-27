import type { Metadata } from "next";
import { pageSeo, solarPackages } from "@/lib/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/Button";
import {
  buildPackageOfferJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
  siteConfig,
} from "@/lib/seo";
import Link from "next/link";

const breadcrumbs = [
  { name: "Solar packages", path: "/solar-packages" },
] as const;

export const metadata: Metadata = buildPageMetadata({
  title: pageSeo.packages.title,
  description: pageSeo.packages.description,
  path: "/solar-packages",
});

export default function SolarPackagesPage() {
  return (
    <SiteShell mainLabel="Solar packages">
      <JsonLd
        data={buildWebPageJsonLd({
          title: pageSeo.packages.title,
          description: pageSeo.packages.description,
          path: "/solar-packages",
          breadcrumbs,
          extra: solarPackages.map((pkg) => buildPackageOfferJsonLd(pkg)),
        })}
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="safe-px section-y">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-2xl">
            <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Solar packages
            </p>
            <h1 className="font-display text-ink mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-bold tracking-tight text-balance">
              Solar packages in Kenya — 5 kW and 10 kW hybrid systems
            </h1>
            <p className="text-muted mt-3 text-pretty">
              Practical hybrid solar configurations for homes in Kenya — still
              engineering-led. Final system selection always follows a site and
              load assessment in Kisumu, Nairobi or your town.
            </p>
          </header>

          <ul className="mt-10 grid gap-6 lg:grid-cols-2" role="list">
            {solarPackages.map((pkg) => (
              <li key={pkg.id} id={pkg.id}>
                <article className="brand-card flex h-full scroll-mt-28 flex-col p-6 sm:p-8">
                  <p className="font-display text-sun text-xs font-semibold tracking-[0.16em] uppercase">
                    {pkg.name}
                  </p>
                  <h2 className="font-display text-ink mt-2 text-2xl font-bold">
                    {pkg.capacity}
                  </h2>
                  <p className="text-muted mt-2 text-sm font-medium">
                    Ideal for: {pkg.idealFor}
                  </p>
                  <p className="text-muted mt-3 text-sm leading-relaxed text-pretty">
                    {pkg.summary}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2" role="list">
                    {pkg.includes.map((item) => (
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
                  <div className="mt-5">
                    <p className="font-display text-ink text-xs font-semibold tracking-wider uppercase">
                      Suitable for
                    </p>
                    <ul className="text-muted mt-2 space-y-1 text-sm">
                      {pkg.suitableFor.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-muted border-border mt-5 border-t pt-4 text-xs leading-relaxed text-pretty">
                    {pkg.note}
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Button href="/contact">Request a quotation</Button>
                    <Link
                      href={`/solar-packages/${pkg.id}`}
                      className="text-accent inline-flex min-h-11 items-center text-sm font-semibold underline-offset-4 hover:underline"
                    >
                      View package details
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <p className="text-muted mt-10 text-sm">
            Questions about a package? Call{" "}
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-accent font-semibold underline-offset-4 hover:underline"
            >
              {siteConfig.phoneDisplay}
            </a>{" "}
            or WhatsApp SM Engineering.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
