import Image from "next/image";
import {
  approachIntro,
  approachSteps,
  homeSolutions,
  technologyPartners,
  trustHeadline,
  trustNote,
} from "@/lib/content";
import { BrandMediaCard } from "@/components/BrandMediaCard";

export function CapabilitiesOverview() {
  return (
    <section
      id="solutions"
      className="safe-px section-y scroll-mt-20"
      aria-labelledby="solutions-heading"
      aria-describedby="solutions-intro"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Energy solutions
          </p>
          <h2
            id="solutions-heading"
            className="font-display text-ink mt-3 text-[clamp(1.55rem,3.5vw,2.15rem)] font-bold tracking-tight text-balance"
          >
            Energy solutions designed around your needs
          </h2>
          <p
            id="solutions-intro"
            className="text-muted mt-3 text-[clamp(0.95rem,2.2vw,1.05rem)] text-pretty"
          >
            Solar, critical power, electrical engineering, safety and
            consultancy — presented as clear paths for homes, businesses and
            institutions.
          </p>
        </header>

        <ul
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Energy solutions"
        >
          {homeSolutions.map((item, index) => (
            <li
              key={item.id}
              className={index === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <BrandMediaCard
                href={item.href}
                image={item.image}
                title={item.title}
                description={item.summary}
                meta={item.meta}
                eyebrow={String(index + 1).padStart(2, "0")}
                cta={item.cta}
                imageHeightClassName="h-56 sm:h-64"
                imageClassName={
                  "imageClassName" in item ? item.imageClassName : undefined
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Approach() {
  return (
    <section
      id="approach"
      className="safe-px section-y border-border bg-bg-muted/70 scroll-mt-20 border-y"
      aria-labelledby="approach-heading"
      aria-describedby="approach-intro"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            How we work
          </p>
          <h2
            id="approach-heading"
            className="font-display text-ink mt-3 text-[clamp(1.55rem,3.5vw,2.15rem)] font-bold tracking-tight text-balance"
          >
            Power that is engineered for you
          </h2>
          <div
            id="approach-intro"
            className="text-muted mt-3 space-y-3 text-[clamp(0.95rem,2.2vw,1.05rem)] text-pretty"
          >
            {approachIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </header>

        <ol
          className="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="How we work"
        >
          <div
            aria-hidden="true"
            className="bg-accent/25 absolute top-8 right-[12%] left-[12%] hidden h-px lg:block"
          />
          {approachSteps.map((step, index) => (
            <li key={step.title} className="relative">
              <article className="brand-card group h-full p-5 sm:p-6">
                <span className="font-display text-sun text-xs font-semibold tracking-wider">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-ink group-hover:text-accent mt-2 text-lg font-semibold transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted mt-2 text-sm leading-relaxed text-pretty">
                  {step.body}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function PartnerLogo({
  partner,
  decorative = false,
}: {
  partner: (typeof technologyPartners)[number];
  decorative?: boolean;
}) {
  return (
    <div className="border-border bg-bg-elevated flex h-full min-h-[5.25rem] items-center justify-center border px-4 py-3">
      <Image
        src={partner.logo}
        alt={
          decorative
            ? ""
            : `${partner.fullName} ${partner.category} specified and installed by SM Solar & Electrical in Kenya`
        }
        width={140}
        height={48}
        className="h-9 w-auto object-contain"
      />
    </div>
  );
}

export function TechnologyTrust() {
  const partnerNames = technologyPartners.map((partner) => partner.fullName);

  return (
    <section
      id="technology"
      className="section-y border-border scroll-mt-20 border-t"
      aria-labelledby="technology-heading"
    >
      <div className="safe-px mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Brands we trust
          </p>
          <h2
            id="technology-heading"
            className="font-display text-ink mt-3 text-[clamp(1.45rem,3.2vw,1.95rem)] font-bold tracking-tight text-balance"
          >
            Established solar equipment, selected for the application
          </h2>
          <p className="text-muted mt-3 text-pretty">
            SM Solar & Electrical specifies and installs solar equipment from
            established manufacturers according to project requirements — not a
            one-brand push. Brands we work with include{" "}
            {partnerNames.join(", ")}.
          </p>
        </header>
      </div>

      <div className="mt-8">
        <div className="partner-marquee" aria-hidden="true">
          <div className="partner-marquee-track">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className="partner-marquee-group"
                role="presentation"
              >
                {technologyPartners.map((partner) => (
                  <li
                    key={`${copy}-${partner.id}`}
                    className="partner-marquee-logo"
                  >
                    <PartnerLogo partner={partner} decorative />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <ul
          className="partner-logo-grid safe-px mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          role="list"
          aria-label="Solar equipment brands specified by SM Solar & Electrical"
        >
          {technologyPartners.map((partner) => (
            <li key={partner.id}>
              <PartnerLogo partner={partner} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TrustCredentials() {
  return (
    <section
      id="trust"
      className="safe-px section-y bg-accent scroll-mt-20 text-white"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-6xl text-center">
        <h2
          id="trust-heading"
          className="font-display text-[clamp(1.45rem,3.2vw,1.95rem)] font-bold tracking-tight text-balance uppercase"
        >
          {trustHeadline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-pretty text-white/85">
          {trustNote}
        </p>
      </div>
    </section>
  );
}
