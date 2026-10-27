import type { Metadata } from "next";
import {
  Approach,
  CapabilitiesOverview,
  TechnologyTrust,
  TrustCredentials,
} from "@/components/Capabilities";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { FaqSection } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ServiceAreasPreview } from "@/components/ServiceAreas";
import { SiteShell } from "@/components/SiteShell";
import { Industries, SafetySection, WhyChoose } from "@/components/WhyChoose";
import { Button } from "@/components/Button";
import { pageSeo } from "@/lib/content";
import { buildHomeJsonLd, buildPageMetadata, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: pageSeo.home.title,
    description: pageSeo.home.description,
    path: "/",
  }),
  title: {
    absolute: pageSeo.home.title,
  },
};

export default function Home() {
  return (
    <SiteShell>
      <JsonLd data={buildHomeJsonLd()} />
      <Hero />
      <Approach />
      <CapabilitiesOverview />
      <FeaturedProjects />
      <WhyChoose />
      <TechnologyTrust />
      <SafetySection />
      <TrustCredentials />
      <Industries />
      <ServiceAreasPreview />
      <FaqSection />

      <section
        className="safe-px section-y border-border border-t"
        aria-labelledby="home-cta-heading"
      >
        <div className="bg-accent mx-auto max-w-6xl rounded-2xl px-6 py-10 text-white sm:px-10 sm:py-12">
          <h2
            id="home-cta-heading"
            className="font-display text-[clamp(1.45rem,3.2vw,1.95rem)] font-bold tracking-tight text-balance"
          >
            Ready to build a better power system?
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-white/90">
            Whether you need solar for your home, backup power for your business
            or professional electrical engineering support, we can help you
            determine the right solution.
          </p>
          <p className="font-display mt-4 text-base font-semibold text-white">
            Let&apos;s design the right power solution for you.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              href="/contact"
              className="!text-accent !bg-white hover:!bg-teal-50"
            >
              Request a site assessment
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.whatsapp}`}
              variant="secondary"
              className="!border-white/35 !bg-white/10 !text-white hover:!border-white/60 hover:!bg-white/15"
            >
              WhatsApp an engineer
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
