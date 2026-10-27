import { faqItems } from "@/lib/seo";

export function FaqSection() {
  return (
    <section
      id="faq"
      className="safe-px section-y border-border scroll-mt-20 border-t"
      aria-labelledby="faq-heading"
      aria-describedby="faq-intro"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            FAQ
          </p>
          <h2
            id="faq-heading"
            className="font-display text-ink mt-3 text-[clamp(1.5rem,3.2vw,2rem)] font-bold tracking-tight text-balance"
          >
            Questions customers ask before they call
          </h2>
          <p id="faq-intro" className="text-muted mt-3 text-pretty">
            Clear answers about SM Solar and San Marina Engineering, solar
            installation in Kisumu, Nairobi and Kenya, equipment brands, and
            what happens after handover.
          </p>
        </header>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqItems.map((item) => (
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
              <p className="text-muted border-border border-t px-5 pt-3 pb-5 text-sm leading-relaxed text-pretty sm:px-6">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
