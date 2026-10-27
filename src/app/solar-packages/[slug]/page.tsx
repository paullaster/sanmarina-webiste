import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPackageBySlug, solarPackages } from "@/lib/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/Button";
import {
  buildPackageOfferJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solarPackages.map((pkg) => ({ slug: pkg.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};
  return buildPageMetadata({
    title: `${pkg.name} ${pkg.capacity} Kenya | SM Engineering`,
    description: pkg.summary,
    path: `/solar-packages/${pkg.id}`,
  });
}

export default async function SolarPackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();
  const breadcrumbs = [
    { name: "Solar packages", path: "/solar-packages" },
    { name: pkg.name, path: `/solar-packages/${pkg.id}` },
  ];

  return (
    <SiteShell mainLabel={`${pkg.name} solar package`}>
      <JsonLd
        data={buildWebPageJsonLd({
          title: `${pkg.name} ${pkg.capacity} Kenya | SM Engineering`,
          description: pkg.summary,
          path: `/solar-packages/${pkg.id}`,
          breadcrumbs,
          extra: [buildPackageOfferJsonLd(pkg)],
        })}
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="safe-px section-y">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Solar packages
          </p>
          <h1 className="font-display text-ink mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-bold tracking-tight text-balance">
            {pkg.name}
          </h1>
          <p className="font-display text-sun mt-2 text-lg font-semibold">
            {pkg.capacity}
          </p>
          <p className="text-muted mt-4 text-sm leading-relaxed text-pretty">
            {pkg.idealFor}
          </p>
          <p className="text-muted mt-3 text-base leading-relaxed text-pretty">
            {pkg.summary}
          </p>

          <div className="brand-card mt-8 p-6 sm:p-8">
            <h2 className="font-display text-ink text-lg font-bold">
              Typical inclusions
            </h2>
            <ul className="mt-4 space-y-2" role="list">
              {pkg.includes.map((item) => (
                <li key={item} className="text-ink flex gap-2 text-sm">
                  <span aria-hidden="true" className="text-accent">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="brand-card mt-6 p-6 sm:p-8">
            <h2 className="font-display text-ink text-lg font-bold">
              Suitable for
            </h2>
            <ul className="mt-4 space-y-2" role="list">
              {pkg.suitableFor.map((item) => (
                <li key={item} className="text-muted text-sm">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-muted mt-6 text-xs leading-relaxed text-pretty">
            {pkg.note}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Request a quotation</Button>
            <Button href="/solar-packages" variant="secondary">
              All packages
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
