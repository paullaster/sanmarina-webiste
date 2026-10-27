import { buildSiteJsonLd } from "@/lib/seo";

export function JsonLd({ data }: { data?: unknown }) {
  const payload = data ?? buildSiteJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload).replace(/</g, "\\u003c"),
      }}
    />
  );
}
