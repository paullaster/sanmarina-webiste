import type { Metadata } from "next";
import Image from "next/image";
import {
  aboutApproachSteps,
  brandAliases,
  company,
  pageSeo,
  siteImages,
} from "@/lib/content";
import { buildPageMetadata, buildWebPageJsonLd, siteConfig } from "@/lib/seo";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/Button";

const breadcrumbs = [{ name: "About", path: "/about" }] as const;

export const metadata: Metadata = buildPageMetadata({
  title: pageSeo.about.title,
  description: pageSeo.about.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <SiteShell mainLabel="About SM Solar & Electrical">
      <JsonLd
        data={buildWebPageJsonLd({
          title: pageSeo.about.title,
          description: pageSeo.about.description,
          path: "/about",
          breadcrumbs,
        })}
      />
      <Breadcrumbs items={breadcrumbs} />
      <section className="safe-px section-y">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              San Marina · SM Engineering · SM Solar
            </p>
            <h1 className="font-display text-ink mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-bold tracking-tight text-balance">
              San Marina Engineering — SM Engineering and SM Solar in Kenya
            </h1>
            <p className="text-muted mt-4 text-[clamp(1rem,2.2vw,1.125rem)] leading-relaxed text-pretty">
              {company.blurb}
            </p>
            <p className="text-muted mt-4 text-sm leading-relaxed text-pretty">
              Our work spans solar PV, battery energy storage, critical power,
              building electrical systems, electrical safety and compliance,
              renewable-energy consultancy and operations and maintenance —
              delivered as an engineering contractor, not a box-moving solar
              shop.
            </p>
            <p className="text-muted mt-4 text-sm leading-relaxed text-pretty">
              If you searched San Marina, SM, SM Engineering, SM Solar or San
              Marina Solar, you have the right company. Also known as{" "}
              {brandAliases.join(", ")}. One legal entity: {company.name}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Work with us</Button>
              <Button href="/service-areas" variant="secondary">
                Where we work in Kenya
              </Button>
            </div>
          </div>
          <div className="border-border relative aspect-[4/3] overflow-hidden rounded-2xl border">
            <Image
              src={siteImages.rooftopSolarCrew.src}
              alt={siteImages.rooftopSolarCrew.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="safe-px section-y border-border border-y bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-ink text-[clamp(1.5rem,3.2vw,2rem)] font-bold tracking-tight text-balance">
            Solar and electrical engineering in Kenya
          </h2>
          <p className="text-muted mt-4 max-w-3xl text-sm leading-relaxed text-pretty">
            We believe that a successful energy project starts long before
            equipment reaches the site. It starts with understanding — how much
            energy you use, when you use it, your electrical infrastructure,
            your site and your future requirements. We then translate that
            understanding into a practical engineering solution.
          </p>
        </div>
      </section>

      <section
        id="approach"
        className="safe-px section-y scroll-mt-24"
        aria-labelledby="about-approach-heading"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="about-approach-heading"
            className="font-display text-ink text-[clamp(1.5rem,3.2vw,2rem)] font-bold"
          >
            Engineering-led solar and power approach
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {aboutApproachSteps.map((step, index) => (
              <li key={step.title} className="brand-card p-5">
                <span className="font-display text-sun text-xs font-semibold tracking-wider">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-ink mt-2 text-base font-semibold">
                  {step.title}
                </h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="safe-px section-y border-border border-y bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-ink text-2xl font-bold">
            Why SM Engineering: quality, safety and integrity
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {company.values.map((value) => (
              <li key={value.title} className="brand-card p-5">
                <h3 className="font-display text-ink text-base font-semibold">
                  {value.title}
                </h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  {value.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="safe-px section-y">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-ink text-2xl font-bold">
            Solar, critical power and electrical engineering experience
          </h2>
          <p className="text-muted mt-3 max-w-2xl text-sm leading-relaxed">
            SM Solar & Electrical benefits from the wider engineering experience
            of San Marina Engineering Limited. Our capabilities cover:
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {company.capabilitiesList.map((item) => (
              <li
                key={item}
                className="border-border text-ink rounded-lg border bg-white px-4 py-3 text-sm font-medium"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="team"
        className="safe-px section-y border-border scroll-mt-24 border-t bg-white"
        aria-labelledby="team-heading"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="team-heading"
            className="font-display text-ink text-2xl font-bold"
          >
            SM Engineering team behind your power systems
          </h2>
          <p className="text-muted mt-3 max-w-2xl text-sm leading-relaxed text-pretty">
            Our team brings together expertise in electrical engineering,
            renewable energy, project management and technical field operations.
            We believe clients should know who is responsible for the
            engineering behind their investment.
          </p>
          <Button href="/contact" className="mt-6" variant="secondary">
            Talk to an engineer
          </Button>
        </div>
      </section>

      <section className="safe-px section-y border-border border-t">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <article className="brand-card p-6 sm:p-8">
            <h2 className="font-display text-ink text-xl font-bold">
              Our vision
            </h2>
            <p className="text-muted mt-3 text-sm leading-relaxed text-pretty">
              {company.vision}
            </p>
          </article>
          <article className="brand-card p-6 sm:p-8">
            <h2 className="font-display text-ink text-xl font-bold">
              Our mission
            </h2>
            <p className="text-muted mt-3 text-sm leading-relaxed text-pretty">
              {company.mission}
            </p>
          </article>
        </div>
        <div className="mx-auto mt-10 max-w-6xl">
          <p className="text-muted text-sm">
            Visit us: {siteConfig.address.lines.join(", ")} ·{" "}
            <a
              className="text-accent underline-offset-2 hover:underline"
              href={`tel:${siteConfig.phone}`}
            >
              {siteConfig.phoneDisplay}
            </a>
          </p>
          <Button href="/contact" className="mt-6">
            Work with us
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
