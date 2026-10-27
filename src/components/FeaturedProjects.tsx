import Link from "next/link";
import { featuredProjects } from "@/lib/content";
import { BrandMediaCard } from "@/components/BrandMediaCard";
import { Button } from "@/components/Button";

export function FeaturedProjects() {
  const projects = featuredProjects
    .filter((project) => project.featured)
    .slice(0, 4);

  return (
    <section
      id="projects"
      className="safe-px section-y border-border scroll-mt-20 border-t bg-white"
      aria-labelledby="projects-heading"
      aria-describedby="projects-intro"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Featured projects
          </p>
          <h2
            id="projects-heading"
            className="font-display text-ink mt-3 text-[clamp(1.55rem,3.5vw,2.15rem)] font-bold tracking-tight text-balance"
          >
            Engineering you can see.
          </h2>
          <p
            id="projects-intro"
            className="text-muted mt-3 text-[clamp(0.95rem,2.2vw,1.05rem)] text-pretty"
          >
            Our projects demonstrate our approach to practical, reliable and
            professionally delivered energy systems.
          </p>
        </header>

        <ul
          className="mt-10 grid gap-5 sm:grid-cols-2"
          role="list"
          aria-label="Featured projects"
        >
          {projects.map((project) => (
            <li key={project.id}>
              <BrandMediaCard
                href={`/projects/${project.id}`}
                image={project.image}
                title={project.title}
                description={project.summary}
                eyebrow={project.capacity ?? project.category}
                meta={`${project.location} · ${project.role}`}
                cta="View project"
                imageHeightClassName="h-52 sm:h-56"
              />
            </li>
          ))}
        </ul>

        <div className="mt-8 flex justify-center">
          <Button href="/projects" variant="secondary">
            View our projects
          </Button>
        </div>
        <p className="sr-only">
          <Link href="/projects">Browse the full projects portfolio</Link>
        </p>
      </div>
    </section>
  );
}
