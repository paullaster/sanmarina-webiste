import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ProductCatalog } from "@/components/ProductCatalog";
import { SiteShell } from "@/components/SiteShell";
import { buildPageMetadata } from "@/lib/seo";

const breadcrumbs = [{ name: "Our Shop", path: "/shop" }] as const;

export const metadata: Metadata = buildPageMetadata({
  title: "Our Shop | Solar Products Kenya | SM Engineering",
  description:
    "Browse solar panels, inverters, batteries and electrical products available from SM Engineering in Kenya.",
  path: "/shop",
});

export default function ShopPage() {
  return (
    <SiteShell mainLabel="Our Shop">
      <Breadcrumbs items={breadcrumbs} />
      <section aria-labelledby="shop-title" className="safe-px section-y">
        <div className="mx-auto max-w-7xl">
          <h1
            className="font-display text-ink text-[clamp(1.8rem,4.5vw,2.75rem)] font-bold tracking-tight text-balance"
            id="shop-title"
          >
            Our Shop
          </h1>
          <ProductCatalog />
        </div>
      </section>
      <a
        className="bg-accent hover:bg-accent-deep focus-visible:outline-accent fixed right-6 bottom-6 z-40 hidden min-h-12 items-center justify-center rounded-lg px-5 text-sm font-semibold text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:inline-flex"
        href="/contact?inquiry=product"
      >
        Create an inquiry
      </a>
    </SiteShell>
  );
}
