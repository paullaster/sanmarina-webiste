import Image from "next/image";
import {
  industries,
  industryList,
  whyChooseUs,
  siteImages,
} from "@/lib/content";
import { BrandMediaCard } from "@/components/BrandMediaCard";
import { Button } from "@/components/Button";

export function SafetySection() {
  return (
    <section
      id="safety-highlight"
      className="safe-px section-y scroll-mt-20"
      aria-labelledby="safety-highlight-heading"
    >
      <div className="border-border mx-auto grid max-w-6xl overflow-hidden rounded-2xl border lg:grid-cols-2">
        <div className="relative min-h-[24rem] sm:min-h-[32rem]">
          <Image
            src={siteImages.transformerInspection.src}
            alt={siteImages.transformerInspection.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-[center_12%]"
          />
        </div>
        <div className="bg-bg-elevated flex flex-col justify-center p-8 sm:p-10">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Safety & compliance
          </p>
          <h2
            id="safety-highlight-heading"
            className="font-display text-ink mt-3 text-[clamp(1.6rem,3.5vw,2.2rem)] font-bold tracking-tight text-balance"
          >
            Electrical safety and compliance
          </h2>
          <p className="text-muted mt-4 text-[clamp(0.98rem,2.1vw,1.1rem)] leading-relaxed text-pretty">
            Electrical testing and inspection, earthing, lightning protection,
            surge protection and compliance verification — so solar and power
            installations in Kenya are safer and easier to maintain.
          </p>
          <Button
            href="/services/electrical-safety-compliance"
            className="mt-6 w-fit"
          >
            Explore safety & compliance
          </Button>
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section
      id="why-us"
      className="safe-px section-y scroll-mt-20"
      aria-labelledby="why-us-heading"
      aria-describedby="why-us-intro"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="why-us-heading"
            className="font-display text-ink text-[clamp(1.5rem,3.2vw,2rem)] font-bold tracking-tight text-balance"
          >
            Why SM Engineering for solar and electrical work?
          </h2>
          <p id="why-us-intro" className="text-muted mt-3 text-pretty">
            An engineering company and electrical contractor that designs and
            delivers reliable power systems across Kenya — solar technology is
            one of the tools we use, not the entire identity.
          </p>
        </header>

        <ul
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Reasons to choose SM Solar & Electrical"
        >
          {whyChooseUs.map((item) => (
            <li key={item.title}>
              <article className="brand-card group h-full p-5 sm:p-6">
                <h3 className="font-display text-ink group-hover:text-accent text-base font-semibold tracking-wide uppercase transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted mt-2 text-sm leading-relaxed text-pretty">
                  {item.body}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section
      id="industries"
      className="safe-px section-y border-border scroll-mt-20 border-t"
      aria-labelledby="industries-heading"
      aria-describedby="industries-intro"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <h2
            id="industries-heading"
            className="font-display text-ink text-[clamp(1.5rem,3.2vw,2rem)] font-bold tracking-tight text-balance"
          >
            Solar and power solutions by industry
          </h2>
          <p id="industries-intro" className="text-muted mt-3 text-pretty">
            Commercial, industrial, hospitality and institutional sites have
            different energy requirements. We assess the application first, then
            engineer the solar or electrical solution.
          </p>
        </header>

        <ul
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Who we serve"
        >
          {industries.map((industry) => (
            <li key={industry.title}>
              <BrandMediaCard
                image={industry.image}
                title={industry.title}
                description={industry.summary}
                cta="Talk to an engineer"
                href="/contact"
                imageHeightClassName="h-40 sm:h-44"
              />
            </li>
          ))}
        </ul>

        <ul
          className="border-border mt-10 grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Full list of customers we serve"
        >
          {industryList.map((industry) => (
            <li
              key={industry}
              className="border-border text-ink flex min-h-12 items-center border-b px-1 py-3 text-sm sm:px-3"
            >
              {industry}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** @deprecated Prefer SafetySection for homepage */
export function Standards() {
  return <SafetySection />;
}
