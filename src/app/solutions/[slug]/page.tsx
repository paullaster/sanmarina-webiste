import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getSolutionBySlug, pageSeo, solutionSlugs } from "@/lib/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/Button";
import {
  buildPageMetadata,
  buildServiceJsonLd,
  buildWebPageJsonLd,
} from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

const seoBySlug: Record<string, { title: string; description: string }> = {
  "solar-energy": pageSeo["solar-energy"],
  "battery-storage": pageSeo["battery-storage"],
  "critical-power": pageSeo["critical-power"],
  "electrical-infrastructure": pageSeo["electrical-infrastructure"],
  "solar-water-pumping": pageSeo["solar-water-pumping"],
};

export function generateStaticParams() {
  return solutionSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  const seo = seoBySlug[slug];
  if (!solution) return {};
  return buildPageMetadata({
    title: seo?.title ?? `${solution.title} | SM Solar & Electrical`,
    description: seo?.description ?? solution.intro,
    path: `/solutions/${slug}`,
    image: { url: solution.image.src, alt: solution.image.alt },
  });
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();
  const seo = seoBySlug[slug];
  const title = seo?.title ?? `${solution.title} | SM Solar & Electrical`;
  const description = seo?.description ?? solution.intro;
  const breadcrumbs = [
    { name: "Solutions", path: "/solutions" },
    { name: solution.title, path: `/solutions/${slug}` },
  ];

  return (
    <SiteShell mainLabel={`${solution.title} solutions`}>
      <JsonLd
        data={buildWebPageJsonLd({
          title,
          description,
          path: `/solutions/${slug}`,
          breadcrumbs,
          extra: [
            buildServiceJsonLd({
              name: solution.title,
              description,
              path: `/solutions/${slug}`,
            }),
          ],
        })}
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="safe-px section-y">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <div>
            <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Solutions
            </p>
            <h1 className="font-display text-ink mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-bold tracking-tight text-balance">
              {solution.title} in Kenya
            </h1>
            <p className="font-display text-accent mt-3 text-sm font-semibold tracking-wide">
              {solution.headline}
            </p>
            <p className="text-muted mt-4 text-[clamp(1rem,2.2vw,1.125rem)] leading-relaxed text-pretty">
              {solution.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={solution.cta.href}>{solution.cta.label}</Button>
              <Button href="/projects" variant="secondary">
                View our projects
              </Button>
            </div>
          </div>

          <div
            className={`border-border relative overflow-hidden rounded-2xl border ${
              slug === "electrical-infrastructure"
                ? "aspect-[3/4]"
                : "aspect-[4/3]"
            }`}
          >
            <Image
              src={solution.image.src}
              alt={solution.image.alt}
              fill
              className={
                slug === "electrical-infrastructure"
                  ? "object-cover object-[center_12%]"
                  : "object-cover"
              }
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            {solution.sections.map((section) => (
              <article key={section.title} className="brand-card p-6 sm:p-8">
                <h2 className="font-display text-ink text-lg font-bold">
                  {section.title}
                </h2>
                <p className="text-muted mt-3 text-sm leading-relaxed text-pretty">
                  {section.body}
                </p>
              </article>
            ))}
          </div>

          <aside className="brand-card h-fit p-6 sm:p-8">
            {"bullets" in solution && solution.bullets ? (
              <>
                <h2 className="font-display text-ink text-lg font-bold">
                  Applications & scope
                </h2>
                <ul className="mt-4 space-y-2" role="list">
                  {solution.bullets.map((item) => (
                    <li
                      key={item}
                      className="text-muted flex gap-2 text-sm leading-snug"
                    >
                      <span aria-hidden="true" className="text-accent">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h2 className="font-display text-ink text-lg font-bold">
                  Next step
                </h2>
                <p className="text-muted mt-3 text-sm leading-relaxed text-pretty">
                  Tell us about your site and we&apos;ll recommend a practical
                  engineering path — not a generic package push.
                </p>
              </>
            )}
            <Button href={solution.cta.href} className="mt-5">
              {solution.cta.label}
            </Button>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
