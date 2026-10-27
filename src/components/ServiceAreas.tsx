import Link from "next/link";
import { serviceRegions } from "@/lib/content";

export function ServiceAreasPreview() {
  const featured = [
    "Kisumu",
    "Nairobi",
    "Mombasa",
    "Nakuru",
    "Eldoret",
    "Kakamega",
    "Kisii",
    "Thika",
  ];

  return (
    <section
      id="service-areas"
      className="safe-px section-y border-border scroll-mt-20 border-t"
      aria-labelledby="service-areas-heading"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Where we work
          </p>
          <h2
            id="service-areas-heading"
            className="font-display text-ink mt-3 text-[clamp(1.5rem,3.2vw,2rem)] font-bold tracking-tight text-balance"
          >
            Based in Kisumu, working across Kenya
          </h2>
          <p className="text-muted mt-3 text-pretty">
            We deliver solar, electrical and energy projects from Kisumu to
            sites nationwide. Contact us with your location and we will advise
            on the practical next step.
          </p>
        </header>

        <ul
          className="mt-8 flex flex-wrap justify-center gap-2"
          role="list"
          aria-label="Featured towns we serve in Kenya"
        >
          {featured.map((town) => (
            <li
              key={town}
              className="border-border text-ink rounded-full border bg-white px-3 py-1.5 text-sm"
            >
              {town}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center">
          <Link
            href="/service-areas"
            className="text-accent text-sm font-semibold underline-offset-4 hover:underline"
          >
            See all towns we serve
          </Link>
        </p>
      </div>
    </section>
  );
}

export function ServiceAreasDirectory() {
  return (
    <div className="mt-10 space-y-10">
      {serviceRegions.map((group) => (
        <section key={group.region} aria-labelledby={`region-${group.region}`}>
          <h2
            id={`region-${group.region}`}
            className="font-display text-ink text-xl font-bold"
          >
            {group.region}
          </h2>
          <ul
            className="border-border mt-4 grid grid-cols-2 border-t sm:grid-cols-3 lg:grid-cols-4"
            role="list"
          >
            {group.towns.map((town) => (
              <li
                key={town}
                className="border-border text-ink flex min-h-12 items-center border-b px-1 py-3 text-sm sm:px-3"
              >
                {town}
              </li>
            ))}
          </ul>
        </section>
      ))}
      <p className="text-muted text-sm leading-relaxed text-pretty">
        If your town is not listed, contact us and we will advise on the
        practical next step.
      </p>
    </div>
  );
}
