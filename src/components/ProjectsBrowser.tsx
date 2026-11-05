"use client";

import { useMemo, useSyncExternalStore } from "react";
import { featuredProjects } from "@/lib/content";
import { BrandMediaCard } from "@/components/BrandMediaCard";
import { Button } from "@/components/Button";

const filters = [
  { id: "all", label: "All projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "electrical", label: "Electrical projects" },
] as const;

type FilterId = (typeof filters)[number]["id"];

function getFilterFromLocation(): FilterId {
  if (typeof window === "undefined") return "all";
  const value = new URLSearchParams(window.location.search).get("filter");
  return filters.some((filter) => filter.id === value)
    ? (value as FilterId)
    : "all";
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("popstate", onStoreChange);
  return () => window.removeEventListener("popstate", onStoreChange);
}

export function ProjectsBrowser() {
  const active = useSyncExternalStore(
    subscribe,
    getFilterFromLocation,
    () => "all" as FilterId,
  );

  const projects = useMemo(
    () =>
      active === "all"
        ? featuredProjects
        : featuredProjects.filter((project) => project.filter === active),
    [active],
  );

  function setFilter(filterId: FilterId) {
    const url = new URL(window.location.href);
    if (filterId === "all") {
      url.searchParams.delete("filter");
    } else {
      url.searchParams.set("filter", filterId);
    }
    window.history.pushState({}, "", url.toString());
    window.dispatchEvent(new Event("popstate"));
  }

  return (
    <>
      <nav aria-label="Project filters" className="mt-8 flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = active === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setFilter(filter.id)}
              className={`font-display inline-flex min-h-10 items-center rounded-lg border px-3 text-sm transition-colors ${
                isActive
                  ? "border-accent bg-accent text-white"
                  : "border-border text-muted hover:border-accent hover:text-accent"
              }`}
              aria-pressed={isActive}
            >
              {filter.label}
            </button>
          );
        })}
      </nav>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2" role="list">
        {projects.map((project) => (
          <li key={project.id}>
            <BrandMediaCard
              href={`/projects/${project.id}`}
              image={project.image}
              title={project.title}
              description={project.summary}
              eyebrow={project.capacity ?? project.category}
              meta={`${project.location} · ${project.sector}`}
              cta="View project"
              imageHeightClassName="h-52 sm:h-56"
            />
          </li>
        ))}
      </ul>

      {projects.length === 0 ? (
        <p className="text-muted mt-8 text-sm">
          No projects in this category yet.{" "}
          <button
            type="button"
            className="text-accent underline-offset-2 hover:underline"
            onClick={() => setFilter("all")}
          >
            View all projects
          </button>
          .
        </p>
      ) : null}

      <div className="mt-10">
        <Button href="/contact">Start a project</Button>
      </div>
    </>
  );
}
