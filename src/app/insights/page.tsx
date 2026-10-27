import type { Metadata } from "next";
import Link from "next/link";
import { insights, pageSeo } from "@/lib/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/Button";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const breadcrumbs = [{ name: "Insights", path: "/insights" }] as const;

export const metadata: Metadata = buildPageMetadata({
  title: pageSeo.insights.title,
  description: pageSeo.insights.description,
  path: "/insights",
});

const categories = [
  "Solar",
  "Battery Storage",
  "Electrical",
  "Commercial Energy",
  "Engineering",
] as const;

export default function InsightsPage() {
  return (
    <SiteShell mainLabel="Insights">
      <JsonLd
        data={buildWebPageJsonLd({
          title: pageSeo.insights.title,
          description: pageSeo.insights.description,
          path: "/insights",
          breadcrumbs,
        })}
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="safe-px section-y">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-3xl">
            <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Insights
            </p>
            <h1 className="font-display text-ink mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-bold tracking-tight text-balance">
              Practical guidance for better power decisions
            </h1>
            <p className="text-muted mt-4 text-pretty">
              Technical articles on solar systems, battery storage, electrical
              safety, commercial energy and engineering practice.
            </p>
          </header>

          {categories.map((category) => {
            const items = insights.filter((item) => item.category === category);
            if (items.length === 0) return null;
            return (
              <div key={category} className="mt-12">
                <h2 className="font-display text-ink text-xl font-bold">
                  {category}
                </h2>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2" role="list">
                  {items.map((item) => (
                    <li key={item.id}>
                      <article className="brand-card h-full p-5 sm:p-6">
                        <h3 className="font-display text-ink text-base font-semibold">
                          <Link
                            href={`/insights/${item.id}`}
                            className="hover:text-accent focus-visible:outline-accent rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                          >
                            {item.title}
                          </Link>
                        </h3>
                        <p className="text-muted mt-2 text-sm leading-relaxed text-pretty">
                          {item.summary}
                        </p>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          <div className="bg-accent mt-14 rounded-2xl px-6 py-8 text-white sm:px-10">
            <h2 className="font-display text-xl font-bold">Have a question?</h2>
            <p className="mt-3 max-w-2xl text-sm text-white/90">
              If you are planning a solar or electrical project and need
              technical advice, speak to our team.
            </p>
            <Button
              href="/contact"
              className="!text-accent mt-6 !bg-white hover:!bg-teal-50"
            >
              Ask an engineer
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
