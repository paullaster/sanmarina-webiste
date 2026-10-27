import {
  company,
  navLinks,
  footerCapabilityLine,
  socialLinks,
} from "@/lib/content";
import { siteConfig } from "@/lib/seo";
import { BrandLogo } from "@/components/BrandLogo";
import { ContactForm } from "@/components/ContactForm";
import { Panel } from "@/components/Panel";
import { contactNextSteps } from "@/lib/content";
import Link from "next/link";

export function ContactSection() {
  const mapsQuery = encodeURIComponent(
    `${siteConfig.address.streetAddress}, ${siteConfig.address.addressLocality}, Kenya`,
  );

  return (
    <section
      id="contact"
      className="safe-px section-y border-border scroll-mt-20 border-t"
      aria-labelledby="contact-heading"
      aria-describedby="contact-intro"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 max-w-2xl">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="font-display text-ink mt-3 text-[clamp(1.5rem,3.2vw,2rem)] font-bold tracking-tight text-balance"
          >
            Talk to an engineer.
          </h2>
          <p
            id="contact-intro"
            className="text-muted mt-3 text-[clamp(0.95rem,2.1vw,1.05rem)] leading-relaxed text-pretty"
          >
            Planning a solar installation, upgrading an electrical system or
            looking for reliable backup power? Tell us about your project and
            we&apos;ll help you determine the right next step.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.75fr)] lg:gap-8">
          <Panel className="p-5 sm:p-8">
            <h3 className="font-display text-ink mb-4 text-lg font-semibold">
              Request a site assessment
            </h3>
            <ContactForm />
          </Panel>

          <aside
            className="brand-card flex flex-col gap-5 p-6 sm:p-7"
            aria-label="SM Solar & Electrical contact details"
            itemScope
            itemType="https://schema.org/LocalBusiness"
          >
            <meta itemProp="name" content={siteConfig.brandLine} />
            <BrandLogo size="footer" />
            <div>
              <h3 className="font-display text-ink text-base font-semibold">
                Visit us
              </h3>
              <address
                className="text-muted mt-3 text-sm leading-relaxed text-pretty not-italic"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                {siteConfig.address.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="mt-4 space-y-1 text-sm">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-accent focus-visible:outline-accent block font-semibold underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  itemProp="telephone"
                >
                  {siteConfig.phoneDisplay}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-accent focus-visible:outline-accent block font-semibold underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  itemProp="email"
                >
                  {siteConfig.email}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  className="text-accent focus-visible:outline-accent mt-2 inline-flex font-semibold underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  WhatsApp an engineer
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                  className="text-muted focus-visible:outline-accent mt-2 inline-flex text-xs underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Open in Google Maps
                </a>
              </p>
            </div>
            <div className="border-border border-t pt-4">
              <h3 className="font-display text-ink text-sm font-semibold">
                What happens next?
              </h3>
              <ol className="mt-3 space-y-3" aria-label="Next steps">
                {contactNextSteps.map((step, index) => (
                  <li key={step.title} className="text-sm">
                    <p className="font-display text-sun text-xs font-semibold tracking-wider uppercase">
                      {String(index + 1).padStart(2, "0")} — {step.title}
                    </p>
                    <p className="text-muted mt-1 leading-relaxed">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="safe-px border-border bg-bg-elevated border-t pt-10 pb-[max(2.5rem,env(safe-area-inset-bottom))]"
      aria-labelledby="footer-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)_minmax(0,0.8fr)]">
          <div className="max-w-md">
            <Link
              href="/"
              className="focus-visible:outline-accent inline-flex rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              aria-label={`${company.publicName} — home`}
            >
              <BrandLogo size="footer" />
            </Link>
            <h2
              id="footer-heading"
              className="font-display text-ink mt-4 text-base font-semibold"
              itemProp="name"
            >
              {company.publicName}
            </h2>
            <p className="font-display text-accent mt-1 text-sm font-semibold">
              {company.tagline}
            </p>
            <p
              className="text-muted mt-2 text-sm leading-relaxed text-pretty"
              itemProp="description"
            >
              {footerCapabilityLine}
            </p>
          </div>

          <div>
            <h3 className="font-display text-ink text-sm font-semibold">
              Quick links
            </h3>
            <nav aria-label="Footer" className="mt-3">
              <ul className="flex flex-col gap-2" role="list">
                {navLinks.map((link) => (
                  <li key={link.href + link.label}>
                    <a
                      href={link.href}
                      className="text-muted hover:text-accent focus-visible:outline-accent inline-flex min-h-9 items-center text-sm underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-display text-ink text-sm font-semibold">
              Visit us
            </h3>
            <address className="text-muted mt-3 space-y-2 text-sm leading-relaxed not-italic">
              <p>
                Mega City Mall, Ground Floor
                <br />
                Shop FGB-034, Kisumu, Kenya
              </p>
              <p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-accent underline-offset-2 hover:underline"
                  itemProp="telephone"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-accent underline-offset-2 hover:underline"
                  itemProp="email"
                >
                  {siteConfig.email}
                </a>
              </p>
            </address>
            <div className="mt-4">
              <h3 className="font-display text-ink text-sm font-semibold">
                Social
              </h3>
              <ul className="mt-2 flex flex-wrap gap-3" role="list">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-muted hover:text-accent text-sm underline-offset-2 hover:underline"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    className="text-muted hover:text-accent text-sm underline-offset-2 hover:underline"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-muted border-border border-t pt-4 text-xs">
          <span aria-hidden="true">© {year} </span>
          <span className="sr-only">Copyright {year} </span>
          {company.name}. {company.publicName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
