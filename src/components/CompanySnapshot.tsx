import Link from "next/link";
import { solarPackages } from "@/lib/content";
import { siteConfig } from "@/lib/seo";
import { Button } from "@/components/Button";

const channels = [
  {
    label: "Call",
    value: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
  },
  {
    label: "Call alt",
    value: siteConfig.phoneAltDisplay,
    href: `tel:${siteConfig.phoneAlt}`,
  },
  {
    label: "WhatsApp",
    value: siteConfig.phoneDisplay,
    href: `https://wa.me/${siteConfig.whatsapp}`,
    external: true,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
] as const;

export function CompanySnapshot() {
  return (
    <section
      id="san-marina"
      className="safe-px section-y border-border bg-bg-muted/70 border-y"
      aria-labelledby="snapshot-heading"
    >
      <span id="sm-engineering" className="sr-only">
        SM Engineering
      </span>
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            San Marina · SM Engineering · SM Solar
          </p>
          <h2
            id="snapshot-heading"
            className="font-display text-ink mt-3 text-[clamp(1.5rem,3.2vw,2rem)] font-bold tracking-tight text-balance"
          >
            San Marina, SM Engineering and SM Solar — contacts and packages
          </h2>
          <p className="text-muted mt-3 text-pretty">
            San Marina Engineering Limited is SM Engineering and SM Solar &amp;
            Electrical. If you searched San Marina, SM, SM Engineering, SM Solar
            or San Marina Solar, this is the company. We are a Kisumu-based
            solar company, engineering contractor and solar-solutions practice
            working across Kenya.
          </p>
        </header>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <article className="brand-card p-6 sm:p-8">
            <h3 className="font-display text-ink text-lg font-semibold">
              Contact SM Engineering
            </h3>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              Call, WhatsApp or email an engineer. Visit us at Mega City Mall,
              Shop FGB-034, Kisumu–Nairobi Highway, Kisumu.
            </p>
            <ul className="mt-5 space-y-3" role="list">
              {channels.map((channel) => (
                <li key={channel.label} className="text-sm">
                  <span className="font-display text-ink text-xs tracking-wider uppercase">
                    {channel.label}
                  </span>
                  <a
                    href={channel.href}
                    className="text-accent mt-0.5 block font-semibold underline-offset-4 hover:underline"
                    {...("external" in channel
                      ? { rel: "noopener noreferrer", target: "_blank" }
                      : {})}
                  >
                    {channel.value}
                  </a>
                </li>
              ))}
            </ul>
            <Button href="/contact" className="mt-6">
              Request a site assessment
            </Button>
          </article>

          <article className="brand-card p-6 sm:p-8">
            <h3 className="font-display text-ink text-lg font-semibold">
              Solar packages in Kenya
            </h3>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              Starting configurations for homes — still engineering-led. Final
              sizing follows a site assessment.
            </p>
            <ul className="mt-5 space-y-4" role="list">
              {solarPackages.map((pkg) => (
                <li
                  key={pkg.id}
                  className="border-border border-t pt-4 first:border-t-0 first:pt-0"
                >
                  <p className="font-display text-sun text-xs font-semibold tracking-wider uppercase">
                    {pkg.name}
                  </p>
                  <p className="font-display text-ink mt-1 text-base font-semibold">
                    {pkg.capacity}
                  </p>
                  <p className="text-muted mt-1 text-sm leading-relaxed">
                    {pkg.summary}
                  </p>
                  <Link
                    href={`/solar-packages/${pkg.id}`}
                    className="text-accent mt-2 inline-flex text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    View {pkg.name} package
                  </Link>
                </li>
              ))}
            </ul>
            <Button href="/solar-packages" variant="secondary" className="mt-6">
              All solar packages
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
