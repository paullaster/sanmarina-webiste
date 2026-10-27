import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getInsightBody, getInsightBySlug, insights } from "@/lib/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/Button";
import {
  buildArticleJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
} from "@/lib/seo";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};
  return buildPageMetadata({
    title: `${insight.title} | SM Solar & Electrical`,
    description: insight.summary,
    path: `/insights/${insight.id}`,
    type: "article",
  });
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) notFound();
  const body = getInsightBody(slug);
  const breadcrumbs = [
    { name: "Insights", path: "/insights" },
    { name: insight.title, path: `/insights/${insight.id}` },
  ];

  return (
    <SiteShell mainLabel={insight.title}>
      <JsonLd
        data={buildWebPageJsonLd({
          title: `${insight.title} | SM Solar & Electrical`,
          description: insight.summary,
          path: `/insights/${insight.id}`,
          breadcrumbs,
          extra: [
            buildArticleJsonLd({
              title: insight.title,
              description: insight.summary,
              path: `/insights/${insight.id}`,
            }),
          ],
        })}
      />
      <Breadcrumbs items={breadcrumbs} />
      <article className="safe-px section-y">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            {insight.category}
          </p>
          <h1 className="font-display text-ink mt-3 text-[clamp(1.8rem,4.5vw,2.6rem)] font-bold tracking-tight text-balance">
            {insight.title}
          </h1>
          <p className="text-muted mt-4 text-lg leading-relaxed text-pretty">
            {insight.summary}
          </p>
          <div className="mt-8 space-y-4">
            {body.map((paragraph) => (
              <p
                key={paragraph}
                className="text-muted text-sm leading-relaxed text-pretty sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Request a site assessment</Button>
            <Button href="/insights" variant="secondary">
              More insights
            </Button>
          </div>
          <p className="text-muted mt-8 text-xs">
            <Link
              href="/insights"
              className="underline-offset-2 hover:underline"
            >
              ← Back to insights
            </Link>
          </p>
        </div>
      </article>
    </SiteShell>
  );
}
