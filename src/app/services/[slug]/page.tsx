import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getServiceBySlug, serviceSlugs } from "@/lib/content";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/Button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} | SM Solar & Electrical`,
    description: service.intro,
    alternates: { canonical: `/services/${slug}` },
    ...("image" in service
      ? {
          openGraph: {
            images: [{ url: service.image.src, alt: service.image.alt }],
          },
        }
      : {}),
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  const image = "image" in service ? service.image : undefined;

  return (
    <SiteShell mainLabel={service.title}>
      <section className="safe-px section-y">
        <div className="mx-auto max-w-6xl">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Services
          </p>
          <h1 className="font-display text-ink mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-bold tracking-tight text-balance">
            {service.title}
          </h1>
          <p className="text-muted mt-4 max-w-3xl text-[clamp(1rem,2.2vw,1.125rem)] leading-relaxed text-pretty">
            {service.intro}
          </p>

          <div
            className={
              image
                ? "mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
                : "mt-10"
            }
          >
            {image ? (
              <figure className="border-border relative aspect-[3/4] overflow-hidden rounded-2xl border">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  className="object-cover object-[center_12%]"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </figure>
            ) : null}

            <div>
              <div className="brand-card p-6 sm:p-8">
                <h2 className="font-display text-ink text-lg font-bold">
                  Scope of work
                </h2>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2" role="list">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-ink flex gap-2 rounded-lg bg-white/80 px-3 py-2.5 text-sm leading-snug"
                    >
                      <span aria-hidden="true" className="text-accent">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact">Talk to an engineer</Button>
                <Button href="/services" variant="secondary">
                  All services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
