import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ShopProductDetails } from "@/components/ShopProductDetails";
import { SiteShell } from "@/components/SiteShell";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Product details | Our Shop | SM Engineering",
  description:
    "View product information, specifications, availability and pricing from SM Engineering's shop in Kenya.",
  path: "/shop/product",
});

export default function ShopProductPage() {
  return (
    <SiteShell mainLabel="Product details">
      <Breadcrumbs
        items={[
          { name: "Our Shop", path: "/shop" },
          { name: "Product details", path: "/shop/product" },
        ]}
      />
      <section
        aria-labelledby="product-details-title"
        className="safe-px section-y"
      >
        <div className="mx-auto max-w-6xl">
          <ShopProductDetails />
        </div>
      </section>
    </SiteShell>
  );
}
