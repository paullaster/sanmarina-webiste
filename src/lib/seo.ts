import type { Metadata } from "next";
import {
  brandAliases,
  brandLogo,
  featuredProjects,
  kenyanServiceTowns,
  partnerBrandNames,
  siteImages,
  socialLinks,
  technologyPartners,
  topicKeywords,
} from "@/lib/content";
import { faqItems } from "@/lib/faq";

export { faqItems };

export const ogImageAlt =
  "San Marina Engineering — SM Engineering, SM Solar & Electrical, solar company in Kenya";

export function brandedSocialImages(alt = ogImageAlt) {
  return [
    {
      url: "/og.png",
      secureUrl: absoluteUrl("/og.png"),
      width: 1200,
      height: 630,
      alt,
      type: "image/png",
    },
    {
      url: "/og-square.png",
      secureUrl: absoluteUrl("/og-square.png"),
      width: 1200,
      height: 1200,
      alt,
      type: "image/png",
    },
  ];
}

export const siteConfig = {
  name: "San Marina Engineering Limited",
  shortName: "SM Solar & Electrical",
  brandLine: "SM Solar & Electrical",
  legalName: "San Marina Engineering Limited",
  url: "https://www.sanmarina.engineering",
  locale: "en_KE",
  language: "en",
  email: "sales@smsolar.co.ke",
  phone: "+254717411822",
  phoneDisplay: "+254 717 411 822",
  phoneAlt: "+254750411822",
  phoneAltDisplay: "+254 750 411 822",
  whatsapp: "254717411822",
  tagline: "Engineered Power. Reliable Results.",
  description:
    "San Marina Engineering Limited — SM, SM Engineering, SM Solar and San Marina Solar. Solar company and engineering contractor in Kenya: solar energy solutions, electrical engineering, critical power and power systems.",
  longDescription:
    "San Marina Engineering Limited (San Marina, SM, SM Engineering, SM Solar, SM Solar & Electrical, San Marina Solar) is a Kisumu-based solar company and engineering contractor. We design, deliver and support solar PV, solar technology, solar solutions, battery energy storage, critical power, UPS, building electrical systems, electrical safety and compliance, solar water pumping, engineering consultancy and operations and maintenance for homes, businesses and institutions in Nairobi, Kisumu and towns across Kenya.",
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
    "San Marina",
    "San Marina Engineering",
    "San Marina Engineering Limited",
    "San Marina Solar",
    "San Marina Electrical",
    "San Marina Kenya",
    "San Marina Kisumu",
    "Sanmarina",
    "SM",
    "SM Kenya",
    "SM Kisumu",
    "SM Engineering",
    "SM Engineering Kenya",
    "SM Solar",
    "SM Solar Kenya",
    "SM Solar Electrical",
    "SM Electrical",
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
    "solar technology",
    "solar technology Kenya",
    "solar solutions",
    "solar solutions Kenya",
    "engineering",
    "engineering solutions",
    "engineering solutions Kenya",
    "engineering contractors",
    "engineering contractors Kenya",
    "SM Engineering Kenya",
    "SM Engineering Kisumu",
    "SM Engineering Nairobi",
    "Jinko solar Kenya",
    "Trina Solar Kenya",
    "JA Solar Kenya",
    "LONGi solar Kenya",
    "Deye inverter Kenya",
    "Growatt Kenya",
    "Dyness battery Kenya",
    "Davis and Shirtliff solar",
    "power Kenya",
    "power systems Kenya",
    "engineered power Kenya",
    ...topicKeywords,
    ...kenyanServiceTowns.map((town) => `solar companies in ${town}`),
    ...kenyanServiceTowns.map((town) => `engineering companies in ${town}`),
    ...kenyanServiceTowns.map((town) => `solar solutions in ${town}`),
    ...kenyanServiceTowns.map((town) => `electrical contractor in ${town}`),
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
    {
      id: "consultancy",
      name: "Engineering & Consultancy",
      description:
        "Renewable-energy feasibility, electrical engineering consultancy, specifications, BOQs and project supervision.",
      url: "/services/consultancy",
    },
  ],
} as const;

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
  const ogAlt = image?.alt ?? ogImageAlt;
  const mergedKeywords = [...new Set([...siteConfig.keywords, ...keywords])];
  const images = [
    ...(image
      ? [
          {
            url: image.url,
            alt: image.alt,
          },
        ]
      : []),
    ...brandedSocialImages(),
  ];

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
      alternateLocale: ["en_US", "en_GB"],
      url,
      siteName: siteConfig.name,
      title,
      description,
      countryName: "Kenya",
      emails: [siteConfig.email],
      phoneNumbers: [siteConfig.phoneDisplay, siteConfig.phoneAltDisplay],
      ttl: 604800,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: image?.url ?? "/twitter-image.png",
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

  const logoUrl = absoluteUrl(brandLogo.src);
  const ogImage = absoluteUrl("/og.png");
  const linkedIn = socialLinks.find((item) => item.label === "LinkedIn")?.href;
  const places = uniquePlaces(areaServed);

  return {
    "@type": [
      "Organization",
      "LocalBusiness",
      "Electrician",
      "HomeAndConstructionBusiness",
    ],
    "@id": `${url}/#organization`,
    name: "San Marina Engineering Limited",
    legalName: siteConfig.legalName,
    alternateName: [
      ...new Set(["SM", "San Marina", ...brandAliases, name, shortName]),
    ],
    brand: {
      "@type": "Brand",
      name: "SM Engineering",
      alternateName: [
        ...new Set(["SM", "SM Solar", "San Marina", ...brandAliases]),
      ],
    },
    url,
    email,
    telephone: [phone, phoneAlt],
    description: longDescription,
    slogan: tagline,
    image: [
      ogImage,
      absoluteUrl("/og-square.png"),
      absoluteUrl(siteImages.rooftopSolarCrew.src),
      logoUrl,
      absoluteUrl(brandLogo.png),
    ],
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
      contentUrl: absoluteUrl(brandLogo.png),
      width: brandLogo.width,
      height: brandLogo.height,
      caption: brandLine,
      representativeOfPage: true,
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
    knowsAbout: [...new Set([...topicKeywords, ...partnerBrandNames])],
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
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: phone,
        url: `https://wa.me/${siteConfig.whatsapp}`,
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
    department: [
      {
        "@type": "Organization",
        name: "SM Engineering",
        alternateName: ["SM", "SM Engineering Limited"],
        url,
      },
      {
        "@type": "Organization",
        name: "SM Solar & Electrical",
        alternateName: ["SM Solar", "SM Solar Ltd", "San Marina Solar"],
        url,
      },
    ],
  };
}

function websiteNode() {
  const { url, description, name } = siteConfig;
  return {
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name: "San Marina Engineering",
    alternateName: [
      ...new Set([
        "SM",
        "SM Engineering",
        "SM Solar",
        "San Marina",
        ...brandAliases,
        name,
      ]),
    ],
    description,
    publisher: { "@id": `${url}/#organization` },
    inLanguage: "en-KE",
    potentialAction: [
      {
        "@type": "CommunicateAction",
        name: "Request a site assessment",
        target: `${url}/contact`,
      },
      {
        "@type": "CommunicateAction",
        name: "Call SM Engineering",
        target: `tel:${siteConfig.phone}`,
      },
    ],
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
          caption: ogImageAlt,
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
        name: "San Marina Engineering | SM Engineering | SM Solar Kenya",
        isPartOf: { "@id": `${url}/#website` },
        about: { "@id": `${url}/#organization` },
        description: longDescription,
        inLanguage: "en-KE",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: ogImage,
          width: 1200,
          height: 630,
          caption: ogImageAlt,
        },
        significantLink: [
          `${url}/solutions`,
          `${url}/services`,
          `${url}/projects`,
          `${url}/products`,
          `${url}/service-areas`,
          `${url}/shop`,
          `${url}/contact`,
        ],
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [
            "#hero-heading",
            "#solutions-heading",
            "#approach-heading",
            "#technology-heading",
            "#projects-heading",
            "#why-us-heading",
            "#safety-highlight-heading",
            "#contact-heading",
          ],
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
        "@type": "ItemList",
        "@id": `${url}/#sitelinks`,
        name: "SM Engineering site navigation",
        itemListElement: [
          { name: "Solar solutions", url: `${url}/solutions` },
          { name: "Engineering services", url: `${url}/services` },
          { name: "Our Shop", url: `${url}/shop` },
          { name: "Projects", url: `${url}/projects` },
          { name: "Contact SM Engineering", url: `${url}/contact` },
        ].map((item, index) => ({
          "@type": "SiteNavigationElement",
          position: index + 1,
          name: item.name,
          url: item.url,
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
