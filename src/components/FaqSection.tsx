import {
  faqEyebrow,
  faqGroups,
  faqHeadline,
  faqIntro,
  faqKicker,
} from "@/lib/faq";

function FaqAnswer({
  intro,
  bullets,
  outro,
}: {
  intro: string;
  bullets?: readonly string[];
  outro?: string;
}) {
  return (
    <div className="text-muted border-border space-y-3 border-t px-5 pt-3 pb-5 text-sm leading-relaxed text-pretty sm:px-6">
      <p>{intro}</p>
      {bullets && bullets.length > 0 ? (
        <ul className="list-disc space-y-1.5 pl-5">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
      {outro ? <p>{outro}</p> : null}
    </div>
  );
}

export function FaqSection() {
  return (
    <section
      id="faq"
      className="safe-px section-y border-border scroll-mt-20 border-t"
      aria-labelledby="faq-heading"
      aria-describedby="faq-intro"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            {faqEyebrow}
          </p>
          <p className="font-display text-ink mt-3 text-sm font-semibold tracking-wide">
            {faqKicker}
          </p>
          <h2
            id="faq-heading"
            className="font-display text-ink mt-3 text-[clamp(1.5rem,3.2vw,2rem)] font-bold tracking-tight text-balance"
          >
            {faqHeadline}
          </h2>
          <p id="faq-intro" className="text-muted mt-3 text-pretty">
            {faqIntro}
          </p>
        </header>

        <div className="mx-auto mt-12 max-w-3xl space-y-10">
          {faqGroups.map((group, index) => (
            <section key={group.id} aria-labelledby={`${group.id}-heading`}>
              <h3
                id={`${group.id}-heading`}
                className="font-display text-ink text-[clamp(1.15rem,2.4vw,1.35rem)] font-bold tracking-tight text-balance"
              >
                <span className="text-sun mr-2 text-xs font-semibold tracking-[0.16em] uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {group.title}
              </h3>
              <div className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <details
                    key={item.question}
                    className="brand-card group open:border-accent/40 p-0"
                  >
                    <summary className="font-display text-ink cursor-pointer list-none px-5 py-4 text-base font-semibold marker:content-none sm:px-6 [&::-webkit-details-marker]:hidden">
                      <span className="flex items-start justify-between gap-4">
                        <span>{item.question}</span>
                        <span
                          aria-hidden="true"
                          className="text-accent mt-0.5 shrink-0 transition group-open:rotate-45"
                        >
                          +
                        </span>
                      </span>
                    </summary>
                    <FaqAnswer
                      intro={item.intro}
                      bullets={item.bullets}
                      outro={item.outro}
                    />
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
