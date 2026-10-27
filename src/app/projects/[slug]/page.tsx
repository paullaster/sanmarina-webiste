import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { featuredProjects, getProjectBySlug } from "@/lib/content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/Button";
import { buildPageMetadata, buildWebPageJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return buildPageMetadata({
    title: `${project.title} | San Marina Projects`,
    description: project.summary,
    path: `/projects/${project.id}`,
    image: { url: project.image.src, alt: project.image.alt },
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const breadcrumbs = [
    { name: "Projects", path: "/projects" },
    { name: project.title, path: `/projects/${project.id}` },
  ];

  return (
    <SiteShell mainLabel={`${project.title} project case study`}>
      <JsonLd
        data={buildWebPageJsonLd({
          title: `${project.title} | San Marina Projects`,
          description: project.summary,
          path: `/projects/${project.id}`,
          breadcrumbs,
        })}
      />
      <Breadcrumbs items={breadcrumbs} />
      <article>
        <header className="relative min-h-[min(52vh,520px)] overflow-hidden">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,28,20,0.88)_0%,rgba(8,28,20,0.35)_55%,transparent_100%)]"
          />
          <div className="safe-px relative mx-auto flex min-h-[min(52vh,520px)] max-w-6xl items-end pb-10">
            <div className="max-w-3xl text-white">
              <p className="font-display text-xs font-semibold tracking-[0.16em] text-teal-100 uppercase">
                {project.category} · {project.sector}
              </p>
              <h1 className="font-display mt-3 text-[clamp(1.8rem,4.5vw,2.8rem)] font-bold tracking-tight text-balance">
                {project.title}
              </h1>
              <p className="mt-2 text-sm text-white/80">{project.location}</p>
              <p className="mt-2 text-sm font-medium text-teal-100">
                {project.role}
              </p>
            </div>
          </div>
        </header>

        <div className="safe-px section-y">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <div className="space-y-8">
              <section>
                <h2 className="font-display text-ink text-xl font-bold">
                  The requirement
                </h2>
                <p className="text-muted mt-3 text-sm leading-relaxed text-pretty">
                  {project.requirement}
                </p>
              </section>
              <section>
                <h2 className="font-display text-ink text-xl font-bold">
                  Our approach
                </h2>
                <p className="text-muted mt-3 text-sm leading-relaxed text-pretty">
                  {project.approach}
                </p>
              </section>
              <section>
                <h2 className="font-display text-ink text-xl font-bold">
                  Result
                </h2>
                <p className="text-muted mt-3 text-sm leading-relaxed text-pretty">
                  {project.result}
                </p>
              </section>
            </div>

            <aside className="brand-card h-fit p-6">
              <h2 className="font-display text-ink text-sm font-semibold tracking-wide uppercase">
                Technical summary
              </h2>
              <dl className="text-muted mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-display text-ink text-xs tracking-wider uppercase">
                    Capacity
                  </dt>
                  <dd className="mt-1">
                    {project.capacity ?? "See project notes"}
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-ink text-xs tracking-wider uppercase">
                    Location
                  </dt>
                  <dd className="mt-1">{project.location}</dd>
                </div>
                <div>
                  <dt className="font-display text-ink text-xs tracking-wider uppercase">
                    Sector
                  </dt>
                  <dd className="mt-1">{project.sector}</dd>
                </div>
                <div>
                  <dt className="font-display text-ink text-xs tracking-wider uppercase">
                    San Marina role
                  </dt>
                  <dd className="mt-1">{project.role}</dd>
                </div>
              </dl>
              <Button href="/contact" className="mt-6 w-full">
                Start a project
              </Button>
            </aside>
          </div>

          <div className="mx-auto mt-12 max-w-6xl">
            <h2 className="font-display text-ink text-xl font-bold">Gallery</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((image) => (
                <li
                  key={image.src}
                  className="border-border relative aspect-[4/3] overflow-hidden rounded-xl border"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </SiteShell>
  );
}
