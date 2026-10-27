import Image from "next/image";
import { company, siteImages } from "@/lib/content";
import { siteConfig } from "@/lib/seo";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 lg:hidden">
        <Image
          src={siteImages.rooftopSolarCrew.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
          aria-hidden="true"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(115deg,rgba(0,65,38,0.94)_0%,rgba(0,46,27,0.84)_55%,rgba(0,65,38,0.72)_100%)]"
        />
      </div>

      <div className="safe-px relative mx-auto grid max-w-6xl items-stretch lg:min-h-[min(88vh,900px)] lg:grid-cols-2">
        <div className="animate-fade flex flex-col justify-center py-16 sm:py-24 lg:py-28 lg:pr-10">
          <p className="font-display lg:text-accent text-[0.7rem] font-semibold tracking-[0.2em] text-teal-100/90 uppercase sm:text-xs">
            San Marina · SM Engineering · SM Solar
          </p>
          <h1
            id="hero-heading"
            className="font-display lg:text-ink mt-4 text-[clamp(2.1rem,5.8vw,3.6rem)] leading-[1.05] font-bold tracking-tight text-balance text-white"
          >
            {company.headline}
          </h1>
          <p className="font-display lg:text-ink lg:text-accent mt-3 text-lg font-semibold text-white/95">
            {company.tagline}
          </p>
          <p className="lg:text-muted mt-5 max-w-xl text-[clamp(1rem,2.2vw,1.125rem)] leading-relaxed text-pretty text-white/85">
            {company.subheadline}
          </p>
          <p className="lg:text-muted mt-4 max-w-xl text-sm leading-relaxed text-pretty text-white/75">
            San Marina Engineering Limited is SM Engineering and SM Solar &amp;
            Electrical — also searched as San Marina, SM, SM Solar and San
            Marina Solar. From Kisumu we design and install solar technology,
            solar solutions and electrical works for homes, businesses and
            institutions in Nairobi, Kisumu and towns across Kenya.
          </p>
          <div
            className="xs:flex-row xs:flex-wrap mt-8 flex flex-col gap-3"
            role="group"
            aria-label="Primary calls to action"
          >
            <Button href="/contact" className="xs:w-auto w-full">
              Request a site assessment
            </Button>
            <Button
              href={`https://wa.me/${siteConfig.whatsapp}`}
              variant="secondary"
              className="xs:w-auto lg:!border-border-strong lg:!bg-bg-elevated lg:!text-ink lg:hover:!border-accent lg:hover:!text-accent w-full !border-white/30 !bg-white/10 !text-white hover:!border-white/55 hover:!bg-white/15"
            >
              WhatsApp an engineer
            </Button>
          </div>
          <p className="lg:text-muted mt-6 text-sm text-white/70">
            Solar PV | Battery Storage | Electrical Engineering | Critical Power
          </p>
          <p className="lg:text-muted mt-3 text-sm text-white/80">
            <a
              href={`tel:${siteConfig.phone}`}
              className="underline-offset-4 hover:underline"
            >
              {siteConfig.phoneDisplay}
            </a>
            {" · "}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              className="underline-offset-4 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              WhatsApp
            </a>
            {" · "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>

        <aside className="animate-fade-delay relative hidden min-h-[28rem] overflow-hidden lg:block">
          <Image
            src={siteImages.rooftopSolarCrew.src}
            alt={siteImages.rooftopSolarCrew.alt}
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,65,38,0.55)_0%,transparent_45%)]"
          />
        </aside>
      </div>
    </section>
  );
}
