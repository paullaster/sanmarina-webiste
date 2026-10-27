import type { Metadata } from "next";
import { pageSeo, partnerBrandLine, products } from "@/lib/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/Button";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

const breadcrumbs = [{ name: "Products", path: "/products" }] as const;

export const metadata: Metadata = buildPageMetadata({
  title: pageSeo.products.title,
  description: pageSeo.products.description,
  path: "/products",
});

export default function ProductsPage() {
  return (
    <SiteShell mainLabel="Products">
      <JsonLd
        data={buildWebPageJsonLd({
          title: pageSeo.products.title,
          description: pageSeo.products.description,
          path: "/products",
          breadcrumbs,
        })}
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="safe-px section-y">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-3xl">
            <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Products
            </p>
            <h1 className="font-display text-ink mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-bold tracking-tight text-balance">
              Solar equipment in Kenya
            </h1>
            <p className="text-muted mt-4 text-pretty">
              SM Solar & Electrical supplies and specifies solar panels,
              inverters, batteries, pumps, mounting systems and electrical
              protection according to project requirements. Brands we work with
              include {partnerBrandLine}. This is an enquiry-led catalogue — not
              an online shop.
            </p>
          </header>

          <ul
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            role="list"
          >
            {products.map((product) => (
              <li key={product.id} id={product.id}>
                <article className="brand-card flex h-full scroll-mt-28 flex-col p-6">
                  <h2 className="font-display text-ink text-lg font-bold">
                    {product.title}
                  </h2>
                  <p className="text-muted mt-3 flex-1 text-sm leading-relaxed text-pretty">
                    {product.body}
                  </p>
                  <Button
                    href={`/contact?interest=${encodeURIComponent(product.title)}`}
                    className="mt-5 w-full sm:w-auto"
                    variant="secondary"
                  >
                    {product.cta}
                  </Button>
                </article>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <Button href="/contact">Request a quotation</Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
