import type { Metadata } from "next";
import {
  brandAliases,
  featuredProjects,
  kenyanServiceTowns,
  partnerBrandNames,
  siteImages,
  socialLinks,
  technologyPartners,
} from "@/lib/content";

export const siteConfig = {
  name: "San Marina Engineering Limited",
  shortName: "SM Solar & Electrical",
  brandLine: "SM Solar & Electrical",
  legalName: "San Marina Engineering Limited",
  url: "https://www.sanmarina.engineering",
  locale: "en_KE",
  language: "en",
  email: "sanmarinaengineering@gmail.com",
  phone: "+254717411822",
  phoneDisplay: "+254 717 411 822",
  phoneAlt: "+254750411822",
  phoneAltDisplay: "+254 750 411 822",
  whatsapp: "254717411822",
  tagline: "Engineered Power. Reliable Results.",
  description:
    "Solar company and engineering contractor in Kenya: solar energy solutions, electrical engineering, critical power and solar equipment for homes, businesses and institutions.",
  longDescription:
    "SM Solar & Electrical is the renewable energy and electrical solutions business of San Marina Engineering Limited. Based in Kisumu, we design, deliver and support solar PV, battery energy storage, critical power, building electrical systems, electrical safety and compliance, solar water pumping, consultancy and maintenance for homes, businesses and institutions in Nairobi, Kisumu and towns across Kenya.",
  foundingLocation: "Kisumu, Kenya",
  address: {
    streetAddress:
      "Ground Floor, Mega City Mall, Shop FGB-034, Kisumu–Nairobi Highway",
    addressLocality: "Kisumu",
    addressRegion: "Kisumu County",
    addressCountry: "KE",
    postalCode: "",
    lines: [
      "Ground Floor, Mega City Mall",
      "Shop FGB-034",
      "Kisumu–Nairobi Highway",
      "Kisumu, Kenya",
    ] as const,
  },
  geo: {
    latitude: -0.0917,
    longitude: 34.768,
  },
  areaServed: [
    "Kenya",
    "Nairobi",
    "Kisumu",
    "Mombasa",
    "Nakuru",
    "Eldoret",
    "Western Kenya",
    "Nyanza",
    "Rift Valley",
    "Coast",
    "East Africa",
    ...kenyanServiceTowns,
  ],
  keywords: [
    "SM Solar & Electrical",
    "SM Solar",
    "SM Solar Ltd",
    "SM Solar LTD",
    "SM Solar Engineering",
    "SM Engineering",
    "San Marina Engineering",
    "San Marina Engineering Limited",
    "San Marina Solar",
    "San Marina Engineering Kenya",
    "solar",
    "energy",
    "energy solutions",
    "solar company",
    "solar company Kenya",
    "solar companies Kenya",
    "solar companies in Kenya",
    "solar companies Nairobi",
    "solar companies in Nairobi",
    "solar companies Kisumu",
    "solar companies in Kisumu",
    "solar company Nairobi",
    "solar company Kisumu",
    "engineering company",
    "engineering companies Kenya",
    "engineering companies in Kenya",
    "engineering companies Nairobi",
    "engineering companies in Nairobi",
    "engineering companies Kisumu",
    "engineering companies in Kisumu",
    "contractor",
    "electrical contractor Kenya",
    "electrical contractor Kisumu",
    "electrical contractor Nairobi",
    "constructions",
    "construction company Kenya",
    "solar equipment",
    "solar equipment Kenya",
    "solar installation Kenya",
    "solar installation Kisumu",
    "solar installation Nairobi",
    "solar panels Kenya",
    "hybrid solar system Kenya",
    "5kW solar system Kenya",
    "10kW solar system Kenya",
    "battery storage Kenya",
    "commercial solar Kenya",
    "solar water pumping Kenya",
    "electrical engineering Kenya",
    "electrical inspection Kenya",
    "critical power Kenya",
    "UPS installation Kenya",
    "rooftop solar Kenya",
    "off-grid solar Kenya",
    "grid-tied solar Kenya",
    "solar PV installation",
    "building electrical Kisumu",
    "earthing and surge protection",
    "lightning protection Kenya",
    "solar maintenance Kenya",
    "Jinko solar Kenya",
    "Trina Solar Kenya",
    "JA Solar Kenya",
    "LONGi solar Kenya",
    "Deye inverter Kenya",
    "Growatt Kenya",
    "Dyness battery Kenya",
    "Davis and Shirtliff solar",
    ...kenyanServiceTowns.map((town) => `solar companies in ${town}`),
    ...kenyanServiceTowns.map((town) => `engineering companies in ${town}`),
  ],
  services: [
    {
      id: "solar-energy",
      name: "Solar Energy Solutions",
      description:
        "Residential, commercial and institutional solar PV and hybrid systems — including grid-tied, off-grid and solar water pumping.",
      url: "/solutions/solar-energy",
    },
    {
      id: "battery-storage",
      name: "Battery Energy Storage",
      description:
        "Battery solutions for solar storage, backup power, load shifting and critical loads.",
      url: "/solutions/battery-storage",
    },
    {
      id: "critical-power",
      name: "Critical Power",
      description:
        "UPS, battery energy storage, standby generators and voltage-management solutions for operational continuity.",
      url: "/solutions/critical-power",
    },
    {
      id: "electrical-infrastructure",
      name: "Electrical Infrastructure",
      description:
        "Electrical design, installation, distribution, verification and commissioning for buildings and facilities.",
      url: "/solutions/electrical-infrastructure",
    },
    {
      id: "electrical-safety",
      name: "Electrical Safety & Compliance",
      description:
        "Testing, inspection, earthing, surge and lightning protection, and compliance support.",
      url: "/services/electrical-safety-compliance",
    },
    {
      id: "maintenance",
      name: "Operations & Maintenance",
      description:
        "Preventive and corrective maintenance for solar, batteries and electrical systems.",
      url: "/services/maintenance",
    },
  ],
} as const;

export const faqItems = [
  {
    question:
      "Does SM Solar & Electrical install solar in Kisumu, Nairobi and across Kenya?",
    answer:
      "Yes. SM Solar & Electrical is based in Kisumu and delivers solar PV, hybrid systems, electrical works and maintenance for homes, businesses and institutions in Nairobi, Kisumu, Mombasa, Nakuru, Eldoret and towns across Kenya.",
  },
  {
    question: "Is SM Solar the same company as San Marina Engineering?",
    answer:
      "Yes. SM Solar & Electrical is the renewable energy and electrical solutions business of San Marina Engineering Limited. People also search for us as SM Solar, SM Solar Ltd, SM Solar Engineering, SM Engineering and San Marina Solar.",
  },
  {
    question:
      "Are you a solar company, an engineering company or a contractor?",
    answer:
      "All three, by design. San Marina Engineering Limited is an engineering company and electrical contractor. SM Solar & Electrical is our solar and energy-solutions practice — solar equipment, installation, electrical infrastructure and construction-related power works.",
  },
  {
    question: "What is included in a site assessment?",
    answer:
      "A site assessment reviews your electricity use, roof or ground space, existing electrical setup and goals. We then recommend a practical system size and next steps — with no obligation to buy immediately.",
  },
  {
    question: "Do you offer hybrid solar systems with batteries?",
    answer:
      "Yes. We design and install hybrid solar systems with lithium battery storage so you can use solar by day and keep essential loads running during outages.",
  },
  {
    question: "Can you handle commercial and industrial solar projects?",
    answer:
      "Yes. We deliver commercial rooftop solar and electrical works for businesses and industrial sites, including projects such as Western Fresh Industries in Kisumu and supervised works at Tatu City.",
  },
  {
    question:
      "Do you supply Jinko, Trina, JA Solar, LONGi, Deye, Growatt and other solar brands?",
    answer: `Yes. We specify solar equipment according to the project. Brands we work with include ${partnerBrandNames.join(", ")}. SM Solar & Electrical selects equipment for the application — not as a one-brand catalogue.`,
  },
  {
    question: "Do you provide electrical inspection and safety services?",
    answer:
      "Yes. Our electrical safety services include testing, inspection, earthing, surge protection and corrective recommendations so installations remain safer and easier to maintain.",
  },
  {
    question: "What happens after solar installation?",
    answer:
      "After commissioning we can provide maintenance, troubleshooting and upgrades. You keep a technical partner who already knows your system.",
  },
] as const;

export type BreadcrumbItem = {
  name: string;
  path: string;
};

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  image?: { url: string; alt: string };
  type?: "website" | "article";
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
  type = "website",
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image?.url ?? "/og.png";
  const ogAlt =
    image?.alt ??
    `${siteConfig.shortName} — solar company and engineering contractor in Kenya`;
  const mergedKeywords = [...new Set([...siteConfig.keywords, ...keywords])];

  return {
    title: {
      absolute: title,
    },
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: path,
      languages: {
        "en-KE": path,
        en: path,
        "x-default": path,
      },
    },
    openGraph: {
      type,
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title,
      description,
      countryName: "Kenya",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogAlt,
        },
      ],
    },
  };
}

function uniquePlaces(places: readonly string[]) {
  return [...new Set(places)];
}

function organizationNode() {
  const {
    name,
    url,
    email,
    phone,
    phoneAlt,
    longDescription,
    tagline,
    shortName,
    brandLine,
    address,
    geo,
    areaServed,
  } = siteConfig;

  const logoUrl = absoluteUrl("/brand/sm-solar-electrical.webp");
  const ogImage = absoluteUrl("/og.png");
  const linkedIn = socialLinks.find((item) => item.label === "LinkedIn")?.href;
  const places = uniquePlaces(areaServed);

  return {
    "@type": ["Organization", "LocalBusiness", "Electrician"],
    "@id": `${url}/#organization`,
    name,
    legalName: siteConfig.legalName,
    alternateName: [...brandAliases, "San Marina Egnineering"],
    brand: {
      "@type": "Brand",
      name: brandLine,
      alternateName: [...brandAliases],
    },
    url,
    email,
    telephone: [phone, phoneAlt],
    description: longDescription,
    slogan: tagline,
    image: [ogImage, absoluteUrl(siteImages.rooftopSolarCrew.src), logoUrl],
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      width: 250,
      height: 120,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      addressCountry: address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address.streetAddress}, ${address.addressLocality}, Kenya`)}`,
    areaServed: places.map((place) => ({
      "@type": "Place",
      name: place,
    })),
    knowsAbout: [
      "Solar photovoltaic systems",
      "Hybrid solar systems",
      "Battery energy storage",
      "Critical power and UPS",
      "Building electrical installation",
      "Electrical safety and compliance",
      "Solar water pumping",
      "Operations and maintenance",
      "Solar equipment supply",
      "Electrical contracting",
      ...partnerBrandNames,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: phone,
        email,
        areaServed: "KE",
        availableLanguage: ["English", "Swahili"],
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: phone,
        email,
        areaServed: "KE",
        availableLanguage: ["English", "Swahili"],
      },
    ],
    sameAs: linkedIn ? [linkedIn] : [],
    priceRange: "$$",
    currenciesAccepted: "KES",
    foundingLocation: {
      "@type": "Place",
      name: "Kisumu, Kenya",
    },
    department: {
      "@type": "Organization",
      name: shortName,
      url,
    },
  };
}

function websiteNode() {
  const { url, description, name, brandLine } = siteConfig;
  return {
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name: brandLine,
    alternateName: [...brandAliases, name],
    description,
    publisher: { "@id": `${url}/#organization` },
    inLanguage: "en-KE",
    potentialAction: {
      "@type": "CommunicateAction",
      name: "Request a site assessment",
      target: `${url}/contact`,
    },
  };
}

export function buildBreadcrumbJsonLd(items: readonly BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    ],
  };
}

export function buildWebPageJsonLd({
  title,
  description,
  path,
  breadcrumbs = [],
  extra = [],
}: {
  title: string;
  description: string;
  path: string;
  breadcrumbs?: readonly BreadcrumbItem[];
  extra?: unknown[];
}) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en-KE",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/og.png"),
          width: 1200,
          height: 630,
        },
      },
      ...(breadcrumbs.length > 0 ? [buildBreadcrumbJsonLd(breadcrumbs)] : []),
      ...extra,
    ],
  };
}

export function buildServiceJsonLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) {
  return {
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType: serviceType ?? name,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: uniquePlaces(siteConfig.areaServed).map((place) => ({
      "@type": "Place",
      name: place,
    })),
  };
}

export function buildArticleJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    inLanguage: "en-KE",
    author: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: absoluteUrl(path),
  };
}

export function buildSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationNode(), websiteNode()],
  };
}

export function buildHomeJsonLd() {
  const { url, longDescription, brandLine, services, areaServed } = siteConfig;
  const ogImage = absoluteUrl("/og.png");
  const places = uniquePlaces(areaServed);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: "SM Solar & Electrical | Solar & Engineering Company Kenya",
        isPartOf: { "@id": `${url}/#website` },
        about: { "@id": `${url}/#organization` },
        description: longDescription,
        inLanguage: "en-KE",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: ogImage,
          width: 1200,
          height: 630,
        },
        significantLink: [
          `${url}/solutions`,
          `${url}/services`,
          `${url}/projects`,
          `${url}/products`,
          `${url}/service-areas`,
          `${url}/contact`,
        ],
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero-heading", "#contact-heading"],
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}/#professional-service`,
        name: brandLine,
        url,
        image: ogImage,
        description: longDescription,
        provider: { "@id": `${url}/#organization` },
        areaServed: places.map((place) => ({
          "@type": "AdministrativeArea",
          name: place,
        })),
        serviceType: services.map((service) => service.name),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "SM Solar & Electrical solutions",
          itemListElement: services.map((service, index) => ({
            "@type": "OfferCatalog",
            name: service.name,
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  "@id": `${url}/#${service.id}`,
                  name: service.name,
                  description: service.description,
                  url: absoluteUrl(service.url),
                  provider: { "@id": `${url}/#organization` },
                  areaServed: "Kenya",
                },
                position: index + 1,
              },
            ],
          })),
        },
      },
      {
        "@type": "ItemList",
        "@id": `${url}/#services-list`,
        name: "Solar and electrical services in Kenya",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: services.length,
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.name,
          url: absoluteUrl(service.url),
          description: service.description,
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${url}/#projects-list`,
        name: "Featured SM Solar & Electrical projects",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: featuredProjects.length,
        itemListElement: featuredProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          url: absoluteUrl(`/projects/${project.id}`),
          description: `${project.summary} (${project.location})`,
          image: absoluteUrl(project.image.src),
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${url}/#brands-list`,
        name: "Solar equipment brands specified by SM Solar & Electrical",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: technologyPartners.length,
        itemListElement: technologyPartners.map((partner, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: partner.fullName,
          description: `${partner.fullName} ${partner.category} specified and installed by SM Solar & Electrical in Kenya`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "ImageGallery",
        "@id": `${url}/#gallery`,
        name: "SM Solar & Electrical project photography",
        about: { "@id": `${url}/#organization` },
        image: Object.values(siteImages).map((image) => ({
          "@type": "ImageObject",
          contentUrl: absoluteUrl(image.src),
          description: image.alt,
          creditText: brandLine,
        })),
      },
    ],
  };
}

/** @deprecated Prefer buildSiteJsonLd + page graphs. Kept for compatibility. */
export function buildJsonLd() {
  const site = buildSiteJsonLd();
  const home = buildHomeJsonLd();
  return {
    "@context": "https://schema.org",
    "@graph": [...site["@graph"], ...home["@graph"]],
  };
}
