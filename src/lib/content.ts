/** Site content aligned to SM_Solar_Electrical_Proposed_Website-4.md */

export const company = {
  name: "San Marina Engineering Limited",
  publicName: "SM Solar & Electrical",
  shortName: "SM Solar & Electrical",
  brandLine: "SM Solar & Electrical",
  tagline: "Engineered Power. Reliable Results.",
  supportingTagline: "Building a Sustainable Future.",
  headline: "Engineered Power. Reliable Results.",
  subheadline:
    "Solar, electrical and critical-power solutions designed around your needs.",
  positioning:
    "We design, deliver and support reliable solar, electrical and energy-storage systems for homes, businesses and institutions.",
  blurb:
    "SM Solar & Electrical is the renewable energy and electrical solutions business of San Marina Engineering Limited. We combine electrical engineering expertise, renewable-energy experience and practical project delivery to provide reliable power solutions for homes, businesses and institutions.",
  proofLine: "Solar Energy | Critical Power | Electrical Engineering",
  processLine: "Understand · Engineer · Deliver · Support",
  mission:
    "To deliver practical energy and electrical solutions through sound engineering, quality equipment, professional workmanship and dependable support.",
  vision:
    "To be a trusted engineering partner for reliable, efficient and sustainable power solutions.",
  values: [
    {
      title: "Professional Engineering",
      body: "We approach energy and electrical projects as engineering problems—not simply equipment sales.",
    },
    {
      title: "Quality",
      body: "We seek reliable equipment and sound engineering practices appropriate to each application.",
    },
    {
      title: "Safety",
      body: "We place electrical safety, protection and compliance at the centre of our work.",
    },
    {
      title: "Integrity",
      body: "We aim to recommend what the customer actually needs, rather than what is easiest to sell.",
    },
    {
      title: "Long-Term Value",
      body: "We design systems with reliability, maintainability and future expansion in mind.",
    },
  ],
  capabilitiesList: [
    "Solar PV",
    "Battery Energy Storage",
    "Solar Water Pumping",
    "Critical Power",
    "Building Electrical Systems",
    "Electrical Safety & Compliance",
    "Renewable Energy Consultancy",
    "Project Supervision",
    "Testing & Commissioning",
    "Operations & Maintenance",
  ],
} as const;

export const brandLogo = {
  src: "/brand/sm-solar-electrical.webp",
  png: "/brand/sm-solar-electrical.png",
  alt: "SM Solar & Electrical — San Marina Engineering Limited",
  width: 800,
  height: 471,
} as const;

export const siteImages = {
  rooftopSolarCrew: {
    src: "/images/edited/solar%20installation%20work.png",
    alt: "SM Solar & Electrical crew installing a commercial rooftop solar array in Kenya",
  },
  westernFresh: {
    src: "/images/edited/wefi%2011kw%20panel%20installations.png",
    alt: "Western Fresh Industries facility in Kisumu with rooftop solar array",
  },
  westernFreshPanels: {
    src: "/images/edited/wefi%2011kw%20panel%20installations%202.png",
    alt: "Second view of the Western Fresh Industries rooftop solar installation",
  },
  westernFreshOffgrid: {
    src: "/images/edited/Wefi%2011kW%20offgrid%20solar%20power.png",
    alt: "11 kW off-grid solar inverter and protection at Western Fresh Industries",
  },
  westernFreshOffgridWide: {
    src: "/images/edited/Wefi%2011kW%20offgrid%20solar%20power%202.png",
    alt: "Installed off-grid solar power equipment at Western Fresh Industries",
  },
  distributionBoardOpen: {
    src: "/images/edited/zawadi%20meter%20box%20inside.png",
    alt: "Open electrical distribution board showing busbars, meters and circuit protection",
  },
  distributionBoardWiring: {
    src: "/images/edited/zawadi%20meter%20box%20inside.png",
    alt: "Interior of a commissioned distribution board with organised power wiring",
  },
  distributionBoardDetail: {
    src: "/images/edited/zawadi%20meter%20box%20inside.png",
    alt: "Detail of an open multi-compartment distribution board",
  },
  distributionBoardClosed: {
    src: "/images/edited/Zawadi%20Meter%20Box%20Outside%20view.png",
    alt: "Closed distribution board with status indicator lights after installation",
  },
  siteDriveInstall: {
    src: "/images/edited/Wefi%2011kW%20offgrid%20solar%20power%202.png",
    alt: "Industrial drive and protection equipment installed on site",
  },
  driveProtectionDetail: {
    src: "/images/edited/Wefi%2011kW%20offgrid%20solar%20power.png",
    alt: "Close view of installed drive controller and protection enclosure",
  },
  cablingThroughPit: {
    src: "/images/edited/1mw%20solar%20cables.png",
    alt: "Solar power cabling routed through an underground pit",
  },
  zawadiApartmentBuilding: {
    src: "/images/edited/zawadi%20apartment%20building.png",
    alt: "Zawadi Apartments residential building in Kisumu",
  },
  zawadiMeterBoxOutside: {
    src: "/images/edited/Zawadi%20Meter%20Box%20Outside%20view.png",
    alt: "Closed meter distribution board at Zawadi Apartments",
  },
  zawadiMeterBoxInside: {
    src: "/images/edited/zawadi%20meter%20box%20inside.png",
    alt: "Open meter distribution board at Zawadi Apartments",
  },
  transformerInspection: {
    src: "/images/Transformer%20Inspection.png",
    alt: "Technician inspecting an outdoor power transformer and distribution enclosure",
  },
  transformerInspectionDetail: {
    src: "/images/edited/Transformer%20Insepction%202.png",
    alt: "Inspection of transformer terminals, cooling fins and nameplate",
  },
} as const;

export type NavChild = { href: string; label: string };
export type NavItem = {
  href: string;
  label: string;
  children?: readonly NavChild[];
};

export const navLinks: readonly NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "Who We Are" },
      { href: "/about#approach", label: "Our Approach" },
      { href: "/about#team", label: "Our Team" },
    ],
  },
  {
    href: "/solutions",
    label: "Solutions",
    children: [
      { href: "/solutions/solar-energy", label: "Solar Energy" },
      { href: "/solutions/battery-storage", label: "Battery Energy Storage" },
      { href: "/solutions/critical-power", label: "Critical Power" },
      {
        href: "/solutions/electrical-infrastructure",
        label: "Electrical Infrastructure",
      },
      { href: "/solutions/solar-water-pumping", label: "Solar Water Pumping" },
    ],
  },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/solar-engineering", label: "Solar Engineering" },
      {
        href: "/services/electrical-engineering",
        label: "Electrical Engineering",
      },
      {
        href: "/services/electrical-safety-compliance",
        label: "Electrical Safety & Compliance",
      },
      {
        href: "/services/maintenance",
        label: "Operations & Maintenance",
      },
      {
        href: "/services/consultancy",
        label: "Engineering & Consultancy",
      },
    ],
  },
  {
    href: "/projects",
    label: "Projects",
    children: [
      { href: "/projects?filter=residential", label: "Residential" },
      { href: "/projects?filter=commercial", label: "Commercial" },
      { href: "/projects?filter=pumping", label: "Solar Pumping" },
      { href: "/projects?filter=electrical", label: "Electrical Projects" },
    ],
  },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products#solar-panels", label: "Solar Panels" },
      { href: "/products#inverters", label: "Inverters" },
      { href: "/products#batteries", label: "Batteries" },
      { href: "/products#solar-pumps", label: "Solar Pumps" },
      { href: "/products#mounting", label: "Mounting Systems" },
      { href: "/products#protection", label: "Electrical Protection" },
    ],
  },
  {
    href: "/shop",
    label: "Our Shop",
  },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
] as const;

export const approachIntro = [
  "A good energy system is more than a collection of equipment.",
  "It needs to be properly assessed, correctly sized, safely installed and designed to perform reliably for years.",
  "That is why we take an engineering-led approach to every project.",
] as const;

export const approachSteps = [
  {
    title: "Understand",
    body: "We assess your energy consumption, electrical infrastructure, site conditions and operational requirements.",
  },
  {
    title: "Engineer",
    body: "We develop a solution that is appropriately sized, technically sound and aligned with your objectives.",
  },
  {
    title: "Deliver",
    body: "We supply, install, test and commission the system professionally.",
  },
  {
    title: "Support",
    body: "We provide maintenance, technical support and upgrade solutions throughout the life of your system.",
  },
] as const;

export const aboutApproachSteps = [
  {
    title: "Assess",
    body: "We understand your requirements, energy consumption, site conditions and existing infrastructure.",
  },
  {
    title: "Design",
    body: "We develop a solution that is properly sized and technically appropriate for the application.",
  },
  {
    title: "Deliver",
    body: "We coordinate supply, installation and integration with attention to workmanship and safety.",
  },
  {
    title: "Verify",
    body: "We test, commission and verify the completed installation before handover.",
  },
  {
    title: "Support",
    body: "We provide maintenance, troubleshooting and technical support throughout the system lifecycle.",
  },
] as const;

export const whyChooseUs = [
  {
    title: "Engineering-led",
    body: "Our solutions begin with understanding the technical requirement—not simply selecting a package.",
  },
  {
    title: "Quality-focused",
    body: "We specify equipment based on application, compatibility, performance and lifecycle value.",
  },
  {
    title: "Professional delivery",
    body: "Our work covers design, supply, installation, testing and commissioning.",
  },
  {
    title: "Safety-first",
    body: "Electrical safety, protection, earthing and compliance are integral to our work.",
  },
  {
    title: "Long-term support",
    body: "We support our clients beyond installation through maintenance, troubleshooting and upgrades.",
  },
] as const;

export const homeSolutions = [
  {
    id: "solar-energy",
    title: "Solar Energy Solutions",
    summary:
      "Reduce grid dependence and take greater control of your energy costs with professionally designed solar systems.",
    meta: "Residential · Commercial · Hybrid · Grid-Tied · Off-Grid · Pumping · Water Heating",
    href: "/solutions/solar-energy",
    cta: "Explore solar",
    image: siteImages.rooftopSolarCrew,
  },
  {
    id: "critical-power",
    title: "Critical Power Solutions",
    summary:
      "Keep essential loads operating when the grid cannot — battery storage, UPS, standby generation and voltage management.",
    meta: "BESS · UPS · Generators · Voltage Stabilisation · Power Quality",
    href: "/solutions/critical-power",
    cta: "Explore critical power",
    image: siteImages.siteDriveInstall,
  },
  {
    id: "electrical-infrastructure",
    title: "Electrical Engineering",
    summary:
      "Safe and reliable electrical infrastructure — design, installations, verification, supervision, testing and commissioning.",
    meta: "Design · Installation · Commissioning",
    href: "/solutions/electrical-infrastructure",
    cta: "Explore electrical services",
    image: siteImages.transformerInspectionDetail,
    imageClassName: "object-cover object-[center_12%]",
  },
  {
    id: "electrical-safety",
    title: "Electrical Safety & Compliance",
    summary:
      "Identify electrical risks, improve system safety and verify that installations perform as intended.",
    meta: "Testing · Earthing · Surge · Lightning · Inspection",
    href: "/services/electrical-safety-compliance",
    cta: "Explore safety & compliance",
    image: siteImages.transformerInspection,
    imageClassName: "object-cover object-[center_12%]",
  },
  {
    id: "consultancy",
    title: "Engineering & Consultancy",
    summary:
      "Make better technical decisions before you invest — feasibility, design, specifications, BOQs, supervision and commissioning support.",
    meta: "Feasibility · Design · Specifications · Supervision",
    href: "/services/consultancy",
    cta: "Talk to an engineer",
    image: siteImages.driveProtectionDetail,
  },
] as const;

/** Legacy alias used by older components during migration */
export const capabilities = homeSolutions.map((item, index) => ({
  id: item.id,
  title: item.title,
  meta: item.meta,
  summary: item.summary,
  image: item.image,
  href: item.href,
  index,
}));

export const featuredProjects = [
  {
    id: "western-fresh-industries",
    title: "Western Fresh Industries",
    location: "Kisumu, Kenya",
    category: "Commercial Solar & Electrical Works",
    sector: "Commercial",
    filter: "commercial" as const,
    capacity: "33 kWp",
    role: "Solar PV works together with associated electrical works",
    summary:
      "A professionally delivered commercial solar installation designed to support the facility's energy requirements while reducing reliance on grid electricity.",
    requirement:
      "Western Fresh Industries required a professionally engineered solar solution supporting its operational energy needs across its facilities.",
    approach:
      "Our scope included solar PV works together with associated electrical works for the facility.",
    result:
      "A professionally delivered commercial solar installation designed to support the facility's energy requirements while reducing reliance on grid electricity.",
    image: siteImages.westernFresh,
    gallery: [
      siteImages.westernFresh,
      siteImages.westernFreshPanels,
      siteImages.westernFreshOffgrid,
      siteImages.westernFreshOffgridWide,
    ],
    featured: true,
  },
  {
    id: "tatu-city",
    title: "Tatu City — Solar Project",
    location: "Kenya",
    category: "Large-scale commercial solar",
    sector: "Commercial",
    filter: "commercial" as const,
    capacity: "1.2 MW",
    role: "Solar project supervision",
    summary:
      "Large-scale commercial solar project with San Marina providing project supervision.",
    requirement:
      "A large-scale commercial solar programme requiring disciplined project supervision.",
    approach:
      "San Marina provided solar project supervision to support professional delivery of the works.",
    result:
      "Supervised delivery aligned to the project's commercial solar scope.",
    image: siteImages.rooftopSolarCrew,
    gallery: [siteImages.rooftopSolarCrew, siteImages.cablingThroughPit],
    featured: true,
  },
  {
    id: "zawadi-apartments",
    title: "Zawadi Apartments",
    location: "Kisumu, Kenya",
    category: "Residential / Apartment Solar",
    sector: "Residential",
    filter: "residential" as const,
    capacity: undefined,
    role: "Solar energy solution",
    summary:
      "Solar energy solution for a residential / apartment development in Kisumu.",
    requirement:
      "The apartments needed a practical solar energy solution suited to residential/apartment loads.",
    approach:
      "San Marina delivered a solar energy solution aligned to the apartment project's requirements.",
    result:
      "A solar energy solution supporting the residential / apartment application in Kisumu.",
    image: siteImages.zawadiApartmentBuilding,
    gallery: [
      siteImages.zawadiApartmentBuilding,
      siteImages.zawadiMeterBoxOutside,
      siteImages.zawadiMeterBoxInside,
    ],
    featured: true,
  },
  {
    id: "15kw-poultry-solar",
    title: "15 kW Poultry Hybrid Solar System",
    location: "Migori, Kenya",
    category: "Hybrid Solar",
    sector: "Agricultural",
    filter: "commercial" as const,
    capacity: "15 kW",
    role: "Hybrid solar system delivery",
    summary:
      "15 kW hybrid solar system supporting poultry operations in Migori.",
    requirement:
      "A poultry operation required hybrid solar capacity to support reliable power for production.",
    approach:
      "San Marina delivered a 15 kW hybrid solar system sized for the application's operational needs.",
    result:
      "A hybrid solar installation supporting poultry operations in Migori.",
    image: siteImages.siteDriveInstall,
    gallery: [siteImages.siteDriveInstall, siteImages.rooftopSolarCrew],
    featured: true,
  },
  {
    id: "basangas-inn",
    title: "Basangas Inn",
    location: "Kenya",
    category: "Hospitality / Building Electrical & Energy Works",
    sector: "Hospitality",
    filter: "electrical" as const,
    capacity: undefined,
    role: "Electrical and energy-related project works",
    summary:
      "Electrical and energy-related project works for a hospitality facility.",
    requirement:
      "The hospitality facility required electrical and energy-related project works.",
    approach:
      "San Marina delivered electrical and energy-related works suited to hospitality operations.",
    result:
      "Completed electrical and energy-related project works for Basangas Inn.",
    image: siteImages.distributionBoardWiring,
    gallery: [
      siteImages.distributionBoardWiring,
      siteImages.distributionBoardClosed,
    ],
    featured: true,
  },
  {
    id: "solar-water-pumping",
    title: "Solar Water Pumping Projects",
    location: "Kenya",
    category: "Solar Water Pumping",
    sector: "Infrastructure",
    filter: "pumping" as const,
    capacity: undefined,
    role: "Solar pumping system design and delivery",
    summary:
      "Solar-powered water pumping systems for domestic, agricultural, institutional and commercial applications.",
    requirement:
      "Clients needed water pumping solutions designed around borehole characteristics, demand, head and storage.",
    approach:
      "We design solar pumping systems around borehole characteristics, water demand, pumping head, storage requirements and available solar resource.",
    result:
      "Practical solar pumping solutions for domestic, agricultural, institutional and commercial water supply.",
    image: siteImages.cablingThroughPit,
    gallery: [siteImages.cablingThroughPit, siteImages.siteDriveInstall],
    featured: true,
  },
] as const;

export const solutionPages = {
  "solar-energy": {
    title: "Solar Energy",
    headline: "Generate More of Your Own Power.",
    intro:
      "Our solar solutions help customers reduce grid dependence, manage energy costs and improve power availability.",
    image: siteImages.rooftopSolarCrew,
    sections: [
      {
        title: "Residential Solar",
        body: "Solar systems for homes ranging from essential backup and energy-cost reduction to larger whole-home systems.",
      },
      {
        title: "Commercial Solar",
        body: "Rooftop and ground-mounted solar solutions for businesses seeking to reduce operating costs and improve energy resilience.",
      },
      {
        title: "Hybrid Solar",
        body: "Solar combined with battery storage and the utility grid for greater flexibility and backup capability.",
      },
      {
        title: "Grid-Tied Solar",
        body: "Solar PV systems designed primarily to offset daytime electricity consumption.",
      },
      {
        title: "Off-Grid Solar",
        body: "Integrated solar and battery solutions for locations where reliable grid power is unavailable or unsuitable.",
      },
      {
        title: "Solar Water Pumping",
        body: "Solar-powered water pumping systems for domestic, agricultural, institutional and commercial applications.",
      },
      {
        title: "Solar Water Heating",
        body: "Solar thermal solutions for hot-water requirements in homes, hotels, institutions and other facilities.",
      },
    ],
    cta: { label: "Request a solar assessment", href: "/contact" },
  },
  "battery-storage": {
    title: "Battery & Energy Storage",
    headline: "Store Energy. Improve Resilience.",
    intro:
      "Battery Energy Storage Systems can help manage energy use, provide backup power and improve the utilisation of solar generation.",
    image: siteImages.driveProtectionDetail,
    sections: [
      {
        title: "Applications",
        body: "Residential backup, solar energy storage, commercial backup, load shifting, critical loads, hybrid power systems and system expansion.",
      },
    ],
    bullets: [
      "Residential backup",
      "Solar energy storage",
      "Commercial backup",
      "Load shifting",
      "Critical loads",
      "Hybrid power systems",
      "System expansion",
    ],
    cta: { label: "Explore battery storage", href: "/contact" },
  },
  "critical-power": {
    title: "Critical Power",
    headline: "Keep Essential Operations Running.",
    intro:
      "For businesses and institutions, power interruptions can mean lost productivity, damaged equipment and operational disruption.",
    image: siteImages.siteDriveInstall,
    sections: [
      {
        title: "Integrated critical-power solutions",
        body: "We design integrated critical-power solutions using battery energy storage, UPS systems, standby generators, automatic transfer systems, voltage stabilisation, surge protection, power-quality solutions and power factor correction.",
      },
    ],
    bullets: [
      "Battery Energy Storage",
      "UPS systems",
      "Standby generators",
      "Automatic transfer systems",
      "Voltage stabilisation",
      "Surge protection",
      "Power-quality solutions",
      "Power factor correction",
    ],
    cta: { label: "Discuss your backup power needs", href: "/contact" },
  },
  "electrical-infrastructure": {
    title: "Electrical Infrastructure",
    headline: "Electrical Systems Engineered for Safety and Performance.",
    intro:
      "We provide electrical design, installation, verification and commissioning for homes, apartments, offices, retail premises, hotels, institutions, commercial buildings and industrial facilities.",
    image: siteImages.transformerInspectionDetail,
    sections: [
      {
        title: "Solar + Electrical",
        body: "Solar should not be treated as an isolated installation. The quality of the electrical distribution system, protection, earthing, cabling, metering and load management can directly affect system performance and safety. Our combined solar and electrical capability allows us to consider the complete power system.",
      },
    ],
    bullets: [
      "Homes",
      "Apartments",
      "Offices",
      "Retail premises",
      "Hotels",
      "Institutions",
      "Commercial buildings",
      "Industrial facilities",
    ],
    cta: { label: "Explore electrical services", href: "/contact" },
  },
  "solar-water-pumping": {
    title: "Solar Water Pumping",
    headline: "Solar-Powered Water Where You Need It.",
    intro:
      "We design solar pumping systems around borehole characteristics, water demand, pumping head, storage requirements and available solar resource.",
    image: siteImages.cablingThroughPit,
    sections: [
      {
        title: "Applications",
        body: "Domestic, agricultural, institutional and commercial water-supply applications.",
      },
    ],
    bullets: [
      "Domestic water supply",
      "Agricultural pumping",
      "Institutional water systems",
      "Commercial water applications",
    ],
    cta: { label: "Request a pumping assessment", href: "/contact" },
  },
} as const;

export const servicePages = {
  "solar-engineering": {
    title: "Solar Engineering",
    intro: "From assessment to commissioning and long-term solar performance.",
    items: [
      "Solar resource and site assessment",
      "Energy consumption assessment",
      "PV system sizing",
      "Battery sizing",
      "Solar system design",
      "Single-line diagrams",
      "Equipment selection",
      "PV array layout",
      "Structural/mounting considerations",
      "Protection design",
      "System installation",
      "Testing and commissioning",
      "Performance assessment",
      "System upgrades",
    ],
  },
  "electrical-engineering": {
    title: "Electrical Engineering",
    intro:
      "Electrical design, installation and commissioning for safe, reliable infrastructure.",
    image: siteImages.transformerInspectionDetail,
    items: [
      "Electrical design",
      "Electrical installation",
      "Power distribution",
      "Lighting systems",
      "Distribution boards",
      "Switchgear",
      "Cable sizing and selection",
      "Electrical load assessment",
      "Design verification",
      "Project supervision",
      "Testing and commissioning",
    ],
  },
  "electrical-safety-compliance": {
    title: "Electrical Safety & Compliance",
    intro:
      "Identify electrical risks, improve system safety and verify that installations perform as intended.",
    image: siteImages.transformerInspection,
    items: [
      "Electrical inspection",
      "Electrical testing",
      "Installation verification",
      "Earthing and grounding",
      "Lightning protection",
      "Surge protection",
      "Electrical safety assessment",
      "Fault investigation",
      "Corrective recommendations",
      "Compliance support",
    ],
  },
  maintenance: {
    title: "Operations & Maintenance",
    intro:
      "Preventive and corrective support throughout the life of your energy and electrical systems.",
    items: [
      "Preventive maintenance",
      "Corrective maintenance",
      "Solar PV maintenance",
      "Battery system inspection",
      "Inverter inspection",
      "Electrical maintenance",
      "Fault diagnosis",
      "System performance assessment",
      "Planned maintenance agreements",
      "System upgrades",
    ],
  },
  consultancy: {
    title: "Renewable Energy & Building Services Consultancy",
    intro:
      "Make better technical decisions before you invest — from feasibility to tender and supervision.",
    items: [
      "Renewable-energy feasibility studies",
      "Solar feasibility assessments",
      "Energy assessments",
      "Electrical engineering consultancy",
      "Building-services consultancy",
      "Technical specifications",
      "Bills of quantities",
      "Tender documentation",
      "Design review",
      "Project supervision",
      "Testing and commissioning support",
    ],
  },
} as const;

export const products = [
  {
    id: "solar-panels",
    title: "Solar Panels",
    body: "High-quality photovoltaic modules for residential, commercial and institutional applications.",
    cta: "Enquire about solar panels",
  },
  {
    id: "inverters",
    title: "Inverters",
    body: "Inverters for grid-tied, hybrid and off-grid applications.",
    cta: "Enquire about inverters",
  },
  {
    id: "batteries",
    title: "Battery Energy Storage",
    body: "Lithium battery solutions for solar storage, backup power and energy resilience.",
    cta: "Enquire about batteries",
  },
  {
    id: "solar-pumps",
    title: "Solar Pumps",
    body: "Solar pumping equipment and integrated pumping solutions for water supply applications.",
    cta: "Enquire about solar pumps",
  },
  {
    id: "mounting",
    title: "Solar Mounting Systems",
    body: "Professional mounting solutions for tile roofs, metal roofs, concrete roofs, ground-mounted systems and commercial rooftops.",
    cta: "Enquire about mounting",
  },
  {
    id: "protection",
    title: "Electrical Protection & Balance of System",
    body: "DC and AC protection, surge protection, isolators, distribution equipment, cables, connectors, earthing equipment and electrical accessories.",
    cta: "Enquire about protection equipment",
  },
] as const;

/** Manufacturer / technology partners shown on “Technology we trust”. */
export const technologyPartners = [
  {
    id: "jinko",
    name: "Jinko",
    fullName: "Jinko Solar",
    category: "solar panels",
    logo: "/images/partners/jinko.webp",
  },
  {
    id: "trina",
    name: "Trina",
    fullName: "Trina Solar",
    category: "solar panels",
    logo: "/images/partners/trina.webp",
  },
  {
    id: "ja",
    name: "JA",
    fullName: "JA Solar",
    category: "solar panels",
    logo: "/images/partners/ja.webp",
  },
  {
    id: "longi",
    name: "Longi",
    fullName: "LONGi Solar",
    category: "solar panels",
    logo: "/images/partners/longi.webp",
  },
  {
    id: "srne",
    name: "SRNE",
    fullName: "SRNE",
    category: "inverters",
    logo: "/images/partners/srne.webp",
  },
  {
    id: "solis",
    name: "Solis",
    fullName: "Solis",
    category: "inverters",
    logo: "/images/partners/solis.webp",
  },
  {
    id: "deye",
    name: "Deye",
    fullName: "Deye",
    category: "hybrid inverters",
    logo: "/images/partners/deye.webp",
  },
  {
    id: "growatt",
    name: "Growatt",
    fullName: "Growatt",
    category: "inverters",
    logo: "/images/partners/growatt.webp",
  },
  {
    id: "renergy",
    name: "Renergy",
    fullName: "Renergy",
    category: "inverters",
    logo: "/images/partners/renergy.webp",
  },
  {
    id: "huawei",
    name: "Huawei",
    fullName: "Huawei",
    category: "inverters",
    logo: "/images/partners/huawei.webp",
  },
  {
    id: "tbb-power",
    name: "TBB Power",
    fullName: "TBB Power",
    category: "inverters",
    logo: "/images/partners/tbb-power.webp",
  },
  {
    id: "dyness",
    name: "Dyness",
    fullName: "Dyness",
    category: "battery storage",
    logo: "/images/partners/dyness.webp",
  },
  {
    id: "davis-and-shirtliff",
    name: "Davis & Shirtliff",
    fullName: "Davis & Shirtliff",
    category: "solar pumping",
    logo: "/images/partners/davis-and-shirtliff.webp",
  },
  {
    id: "maqbul",
    name: "MAQBUL",
    fullName: "MAQBUL",
    category: "solar equipment",
    logo: "/images/partners/maqbul.webp",
  },
  {
    id: "veichi",
    name: "Veichi",
    fullName: "Veichi",
    category: "drives",
    logo: "/images/partners/veichi.webp",
  },
  {
    id: "megasun",
    name: "Megasun",
    fullName: "Megasun",
    category: "solar water heating",
    logo: "/images/partners/megasun.webp",
  },
  {
    id: "aquaheat",
    name: "AquaHeat",
    fullName: "AquaHeat",
    category: "solar water heating",
    logo: "/images/partners/aquaheat.webp",
  },
  {
    id: "suntree",
    name: "Suntree",
    fullName: "Suntree",
    category: "electrical protection",
    logo: "/images/partners/suntree.webp",
  },
  {
    id: "leader",
    name: "LEADER",
    fullName: "LEADER",
    category: "electrical protection",
    logo: "/images/partners/leader.webp",
  },
] as const;

export const partnerBrandNames = technologyPartners.map(
  (partner) => partner.fullName,
);

export const partnerBrandLine = partnerBrandNames.join(", ");

/** Distinctive phrases from every public section — used in metadata and schema. */
export const topicKeywords = [
  "power",
  "engineered power",
  "reliable power",
  "reliable results",
  "power systems",
  "power solutions",
  "energy",
  "energy solutions",
  "solar",
  "solar energy",
  "solar energy solutions",
  "solar technology",
  "solar solutions",
  "solar PV",
  "solar photovoltaic",
  "solar photovoltaic systems",
  "residential solar",
  "commercial solar",
  "hybrid solar",
  "hybrid solar systems",
  "grid-tied solar",
  "off-grid solar",
  "rooftop solar",
  "ground-mounted solar",
  "solar water pumping",
  "solar water heating",
  "solar thermal",
  "solar installation",
  "solar engineering",
  "solar company",
  "solar companies",
  "battery energy storage",
  "battery storage",
  "lithium battery",
  "backup power",
  "energy storage",
  "load shifting",
  "critical loads",
  "critical power",
  "critical power solutions",
  "UPS",
  "UPS systems",
  "standby generators",
  "automatic transfer systems",
  "voltage stabilisation",
  "voltage management",
  "power quality",
  "power factor correction",
  "surge protection",
  "electrical engineering",
  "electrical infrastructure",
  "electrical contractor",
  "electrical installation",
  "building electrical systems",
  "power distribution",
  "lighting systems",
  "distribution boards",
  "switchgear",
  "electrical safety",
  "electrical compliance",
  "electrical safety and compliance",
  "electrical inspection",
  "electrical testing",
  "installation verification",
  "earthing",
  "grounding",
  "earthing and grounding",
  "lightning protection",
  "compliance",
  "fault investigation",
  "operations and maintenance",
  "preventive maintenance",
  "corrective maintenance",
  "solar maintenance",
  "engineering consultancy",
  "renewable energy consultancy",
  "feasibility studies",
  "project supervision",
  "testing and commissioning",
  "engineering-led",
  "engineering company",
  "engineering companies",
  "engineering contractors",
  "engineering solutions",
  "contractor",
  "constructions",
  "construction company",
  "quality equipment",
  "professional delivery",
  "safety-first",
  "long-term support",
  "solar equipment",
  "solar panels",
  "inverters",
  "hybrid inverters",
  "solar pumps",
  "mounting systems",
  "electrical protection",
  "Home Plus",
  "Elite solar package",
  "5 kW hybrid solar",
  "10 kW hybrid solar",
  "Western Fresh Industries",
  "Tatu City solar",
  "Zawadi Apartments",
  "Basangas Inn",
  "commercial solar Kenya",
  "industrial solar Kenya",
  "hospitality solar Kenya",
  "institutional solar Kenya",
  "agricultural solar Kenya",
  ...partnerBrandNames,
] as const;

export const solarPackages = [
  {
    id: "home-plus",
    name: "Home Plus",
    capacity: "5 kW Hybrid Solar System",
    idealFor:
      "Homes seeking to reduce electricity costs while improving backup power and energy independence.",
    summary:
      "A practical residential hybrid starting configuration for common home applications.",
    includes: [
      "5 kW hybrid inverter",
      "5.12 kWh lithium battery storage",
      "5 × 620 W solar panels",
      "Associated cables, protection and installation components",
    ],
    suitableFor: [
      "Medium-to-large homes",
      "Homes with significant daytime consumption",
      "Homes requiring battery backup",
      "Customers seeking to reduce grid dependence",
    ],
    note: "Actual system performance depends on household consumption, appliance loads, solar resource, battery usage and installation conditions. Final system configuration should be confirmed through assessment.",
  },
  {
    id: "elite",
    name: "Elite",
    capacity: "10 kW Hybrid Solar System",
    idealFor:
      "Larger homes and high-energy users requiring greater solar generation and system capacity.",
    summary:
      "A higher-capacity residential hybrid starting point for larger energy needs.",
    includes: [
      "10 kW-class hybrid power system",
      "High-capacity lithium battery option",
      "620 W-class high-efficiency PV modules",
      "Associated protection, cabling and mounting components",
    ],
    suitableFor: [
      "Large homes",
      "High electricity consumption",
      "Home offices",
      "Properties with multiple high-demand appliances",
      "Customers planning greater energy independence",
    ],
    note: "Final equipment selection and system sizing are subject to site and load assessment.",
  },
] as const;

export const insights = [
  {
    id: "how-much-solar-home-need",
    category: "Solar",
    title: "How Much Solar Does My Home Need?",
    summary:
      "A practical guide to estimating solar capacity from electricity consumption, appliance loads and backup requirements.",
  },
  {
    id: "5-mistakes-buying-solar",
    category: "Solar",
    title: "5 Mistakes to Avoid When Buying a Home Solar System",
    summary:
      "What to consider before choosing panels, inverters, batteries and installers.",
  },
  {
    id: "5kw-vs-10kw-solar",
    category: "Solar",
    title: "5 kW vs 10 kW Solar: Which System Is Right for You?",
    summary:
      "Understanding system capacity, energy consumption and battery storage.",
  },
  {
    id: "size-battery-home",
    category: "Battery Storage",
    title: "How Do I Size a Battery for My Home?",
    summary:
      "Understanding energy consumption, backup duration, depth of discharge and usable battery capacity.",
  },
  {
    id: "battery-storage-business",
    category: "Battery Storage",
    title: "When Does Battery Storage Make Sense for a Business?",
    summary:
      "A practical look at backup power, energy resilience and operational continuity.",
  },
  {
    id: "why-electrical-testing-matters",
    category: "Electrical",
    title: "Why Electrical Testing Matters",
    summary:
      "Why testing and verification should be part of every electrical installation.",
  },
  {
    id: "earthing-surge-protection",
    category: "Electrical",
    title: "Earthing and Surge Protection: Protecting Your Electrical System",
    summary:
      "Understanding the role of earthing, surge protection and lightning protection.",
  },
  {
    id: "businesses-reduce-electricity-costs",
    category: "Commercial Energy",
    title: "How Businesses Can Reduce Electricity Costs with Solar",
    summary:
      "Understanding daytime consumption, solar sizing, energy audits and project economics.",
  },
  {
    id: "solar-hotels-apartments",
    category: "Commercial Energy",
    title: "Solar for Hotels, Apartments and Commercial Buildings",
    summary:
      "Key considerations when designing solar systems for buildings with variable loads.",
  },
  {
    id: "solar-starts-with-assessment",
    category: "Engineering",
    title: "Why Solar Should Start With an Energy Assessment",
    summary:
      "A good solar system begins with understanding the load—not counting panels.",
  },
  {
    id: "what-happens-after-installation",
    category: "Engineering",
    title: "Solar PV: What Happens After Installation?",
    summary:
      "Why monitoring, inspection and maintenance matter throughout the life of a solar system.",
  },
] as const;

export const industries = [
  {
    title: "Commercial",
    summary: "Offices, retail and mixed-use developments.",
    image: siteImages.rooftopSolarCrew,
  },
  {
    title: "Industrial",
    summary: "Manufacturing, processing and warehousing.",
    image: siteImages.westernFresh,
  },
  {
    title: "Institutional",
    summary: "Schools, universities and healthcare.",
    image: siteImages.distributionBoardClosed,
  },
  {
    title: "Hospitality",
    summary: "Hotels, apartments and hospitality facilities.",
    image: siteImages.siteDriveInstall,
  },
  {
    title: "Infrastructure",
    summary: "Telecommunications, water utilities and infrastructure.",
    image: siteImages.cablingThroughPit,
  },
  {
    title: "Public & Development",
    summary: "Government, NGOs and development organisations.",
    image: siteImages.distributionBoardOpen,
  },
] as const;

export const industryList = [
  "Residential Developments",
  "Commercial Buildings",
  "Industrial Facilities",
  "Educational Institutions",
  "Healthcare Facilities",
  "Hospitality Industry",
  "Agricultural Farms",
  "Religious Institutions",
  "Government Agencies",
  "NGOs & Development Organizations",
  "Telecommunications",
  "Water Utilities",
] as const;

export const brandAliases = [
  "San Marina",
  "San Marina Engineering",
  "San Marina Engineering Limited",
  "San Marina Engineering Ltd",
  "San Marina Solar",
  "San Marina Electrical",
  "San Marina Engineering Kenya",
  "San Marina Kisumu",
  "Sanmarina",
  "Sanmarina Engineering",
  "SM",
  "SM Engineering",
  "SM Engineering Limited",
  "SM Engineering Kenya",
  "SM Engineering Kisumu",
  "SM Solar",
  "SM Solar & Electrical",
  "SM Solar and Electrical",
  "SM Solar Electrical",
  "SM Solar Ltd",
  "SM Solar LTD",
  "SM Solar Engineering",
  "SM Solar Kenya",
  "SM Electrical",
] as const;

export const serviceRegions = [
  {
    region: "Nyanza",
    towns: [
      "Kisumu",
      "Kisii",
      "Homa Bay",
      "Siaya",
      "Migori",
      "Nyamira",
      "Bondo",
      "Oyugis",
    ],
  },
  {
    region: "Western Kenya",
    towns: ["Kakamega", "Bungoma", "Busia", "Vihiga", "Webuye", "Mumias"],
  },
  {
    region: "Rift Valley",
    towns: [
      "Nakuru",
      "Eldoret",
      "Kericho",
      "Kitale",
      "Naivasha",
      "Narok",
      "Bomet",
      "Nanyuki",
    ],
  },
  {
    region: "Nairobi & Central",
    towns: [
      "Nairobi",
      "Thika",
      "Kiambu",
      "Machakos",
      "Nyeri",
      "Embu",
      "Murang'a",
      "Kajiado",
    ],
  },
  {
    region: "Coast",
    towns: ["Mombasa", "Malindi", "Kilifi", "Mtwapa", "Diani"],
  },
  {
    region: "Eastern & North",
    towns: ["Meru", "Kitui", "Garissa", "Isiolo"],
  },
] as const;

export const kenyanServiceTowns = [
  "Kisumu",
  "Nairobi",
  "Mombasa",
  "Nakuru",
  "Eldoret",
  "Kakamega",
  "Kisii",
  "Homa Bay",
  "Siaya",
  "Migori",
  "Nyamira",
  "Bondo",
  "Oyugis",
  "Bungoma",
  "Busia",
  "Vihiga",
  "Webuye",
  "Mumias",
  "Kericho",
  "Kitale",
  "Naivasha",
  "Narok",
  "Bomet",
  "Nanyuki",
  "Thika",
  "Kiambu",
  "Machakos",
  "Nyeri",
  "Embu",
  "Murang'a",
  "Kajiado",
  "Malindi",
  "Kilifi",
  "Mtwapa",
  "Diani",
  "Meru",
  "Kitui",
  "Garissa",
  "Isiolo",
] as const;

export const contactProjectTypes = [
  "Residential Solar",
  "Commercial Solar",
  "Battery Storage",
  "Electrical Installation",
  "Critical Power",
  "Solar Water Pumping",
  "Electrical Inspection",
  "Consultancy",
  "Other",
] as const;

export const pageSeo = {
  home: {
    title: "San Marina Engineering | SM Engineering | SM Solar Kenya",
    description:
      "San Marina Engineering Limited — also SM, SM Engineering, SM Solar, SM Solar & Electrical and San Marina Solar. Solar companies in Kenya. Call +254 717 411 822. 5kW and 10kW solar packages in Kisumu and Nairobi.",
  },
  about: {
    title: "San Marina | SM Engineering | SM Solar & Electrical Kenya",
    description:
      "San Marina Engineering Limited is SM Engineering and SM Solar & Electrical. Also searched as San Marina, SM, SM Solar and San Marina Solar. Kisumu-based solar company and engineering contractor. Call +254 717 411 822.",
  },
  solutions: {
    title: "Solar Solutions & Critical Power Kenya | SM Engineering",
    description:
      "Solar solutions, battery storage, critical power, electrical infrastructure and solar water pumping from SM Engineering — solar and engineering contractors in Kenya.",
  },
  "solar-energy": {
    title: "Solar Energy Solutions Kenya | SM Solar Company",
    description:
      "Residential, commercial, hybrid, grid-tied and off-grid solar systems from SM Solar & Electrical in Kisumu, Nairobi and across Kenya.",
  },
  "battery-storage": {
    title: "Battery Energy Storage Kenya | SM Solar & Electrical",
    description:
      "Battery energy storage for solar, backup power, energy resilience and critical loads — specified and installed in Kenya by SM Solar & Electrical.",
  },
  "critical-power": {
    title: "Critical Power Solutions Kenya | UPS & Battery Backup",
    description:
      "UPS, battery storage, standby power and voltage management for businesses and institutions in Nairobi, Kisumu and Kenya.",
  },
  "electrical-infrastructure": {
    title: "Electrical Contractor Kenya | Engineering Company Nairobi & Kisumu",
    description:
      "Electrical design, installation, verification and commissioning for homes, commercial buildings and institutions — electrical contractor and engineering company in Kenya.",
  },
  "solar-water-pumping": {
    title: "Solar Water Pumping Kenya | SM Solar & Electrical",
    description:
      "Solar-powered water pumping for domestic, agricultural, institutional and commercial applications across Kenya.",
  },
  services: {
    title: "Engineering Solutions & Solar Services Kenya | SM Engineering",
    description:
      "Solar engineering, electrical installation, safety and compliance, maintenance and consultancy from SM Engineering — San Marina Engineering Limited, Kenya.",
  },
  "solar-engineering": {
    title: "Solar Engineering Kenya | SM Engineering",
    description:
      "Solar engineering in Kenya: site assessment, PV sizing, solar system design, installation, testing and commissioning from SM Engineering.",
  },
  "electrical-engineering": {
    title: "Electrical Engineering Kenya | SM Engineering",
    description:
      "Electrical engineering in Kenya: design, installation, power distribution, switchgear, testing and commissioning from SM Engineering.",
  },
  "electrical-safety-compliance": {
    title: "Electrical Safety & Compliance Kenya | SM Engineering",
    description:
      "Electrical safety and compliance in Kenya: inspection, testing, earthing, lightning protection and surge protection from SM Engineering.",
  },
  maintenance: {
    title: "Solar Operations & Maintenance Kenya | SM Engineering",
    description:
      "Operations and maintenance in Kenya for solar PV, batteries, inverters and electrical systems from SM Engineering.",
  },
  consultancy: {
    title: "Engineering Consultancy Kenya | SM Engineering",
    description:
      "Renewable-energy and electrical engineering consultancy in Kenya: feasibility, specifications, BOQs, tender documents and project supervision from SM Engineering.",
  },
  projects: {
    title: "Solar & Electrical Projects Kenya | SM Engineering",
    description:
      "Solar, electrical, battery and critical-power projects by SM Engineering in Kisumu, Nairobi, Migori, Tatu City and across Kenya.",
  },
  products: {
    title:
      "Solar Equipment Kenya | Panels, Inverters & Batteries | SM Engineering",
    description:
      "Solar equipment in Kenya from SM Engineering: Jinko, Trina, JA Solar, LONGi, Deye, Growatt, Dyness, Davis & Shirtliff and more — specified for engineered solar and power systems.",
  },
  packages: {
    title: "Our Shop | Solar Products Kenya | SM Engineering",
    description:
      "Browse solar panels, inverters, batteries and electrical products available from SM Engineering in Kenya.",
  },
  insights: {
    title: "Solar & Electrical Engineering Insights Kenya",
    description:
      "Practical guides on solar systems, battery storage, electrical safety and energy solutions from SM Solar & Electrical, Kenya.",
  },
  contact: {
    title: "Contact SM Engineering | Solar & Electrical Kenya",
    description:
      "Call, WhatsApp or email SM Engineering (SM Solar & Electrical) in Kisumu for solar, electrical engineering, critical power and energy consultancy across Nairobi and Kenya. +254 717 411 822.",
  },
  "service-areas": {
    title: "Solar & Engineering Companies in Kenya | Where We Work",
    description:
      "SM Solar & Electrical serves Kisumu, Nairobi, Mombasa, Nakuru, Eldoret and towns across Kenya with solar energy solutions, electrical contracting and engineering.",
  },
} as const;

export const contactNextSteps = [
  {
    title: "We review",
    body: "Our team reviews your request and clarifies any information required.",
  },
  {
    title: "We discuss",
    body: "We contact you to understand your requirements in more detail.",
  },
  {
    title: "We assess",
    body: "Where appropriate, we arrange a site or technical assessment.",
  },
  {
    title: "We propose",
    body: "We prepare an appropriate technical and commercial solution.",
  },
] as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/smengineeringco/",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
  },
] as const;

export const footerCapabilityLine =
  "Solar Energy | Critical Power | Electrical Engineering | Safety & Compliance | Maintenance | Consultancy";

export const trustHeadline = "Professional. Compliant. Accountable.";

export const trustNote =
  "Credentials and partnerships are shown only when current and accurately applicable. Contact us if you need documentation for a specific engagement.";

export const solutionSlugs = Object.keys(solutionPages) as Array<
  keyof typeof solutionPages
>;

export const serviceSlugs = Object.keys(servicePages) as Array<
  keyof typeof servicePages
>;

export function getSolutionBySlug(slug: string) {
  if (!(slug in solutionPages)) return undefined;
  return solutionPages[slug as keyof typeof solutionPages];
}

export function getServiceBySlug(slug: string) {
  if (!(slug in servicePages)) return undefined;
  return servicePages[slug as keyof typeof servicePages];
}

export function getProjectBySlug(slug: string) {
  return featuredProjects.find((project) => project.id === slug);
}

export function getInsightBySlug(slug: string) {
  return insights.find((item) => item.id === slug);
}

export function getPackageBySlug(slug: string) {
  return solarPackages.find((item) => item.id === slug);
}

/** Brief article body for insights — expands summary into useful guidance. */
export function getInsightBody(slug: string): string[] {
  const bodies: Record<string, string[]> = {
    "how-much-solar-home-need": [
      "Start with your electricity bill and how you use power through the day — not with a panel count.",
      "A useful estimate considers monthly kWh, daytime vs evening loads, appliances you need during outages, and roof or ground space.",
      "Hybrid systems add battery sizing: how long must essential loads run, and which circuits are essential?",
      "SM Solar & Electrical sizes systems from assessment, so the recommendation matches your home rather than a generic package.",
    ],
    "5-mistakes-buying-solar": [
      "Buying on panel count alone without understanding consumption.",
      "Ignoring electrical infrastructure quality — protection, earthing and distribution matter.",
      "Under-sizing batteries for the backup duration you actually need.",
      "Choosing equipment without checking compatibility and service support.",
      "Skipping testing, commissioning and a clear maintenance plan after installation.",
    ],
    "5kw-vs-10kw-solar": [
      "A 5 kW hybrid starting point suits many medium homes with moderate daytime use and practical backup needs.",
      "A 10 kW-class system suits larger homes, higher consumption, home offices and multiple high-demand appliances.",
      "Capacity is only meaningful alongside load profile, battery usable capacity and solar resource at your site.",
      "Final selection should follow assessment — packages are starting points, not prescriptions.",
    ],
    "size-battery-home": [
      "List essential loads and estimate how many hours they must run during an outage.",
      "Convert that into kilowatt-hours, then account for usable capacity and recommended depth of discharge.",
      "Consider solar recharge during the day if the system is hybrid.",
      "We help translate that into a practical battery and inverter configuration for your home.",
    ],
    "battery-storage-business": [
      "Battery storage can protect critical operations, reduce disruption and improve resilience when the grid is unreliable.",
      "It may also support solar self-consumption and load management depending on tariff and usage patterns.",
      "The business case depends on outage cost, critical-load definition, solar generation and system lifecycle.",
      "Speak with an engineer before assuming a residential-style package will fit a commercial site.",
    ],
    "why-electrical-testing-matters": [
      "Testing verifies that installations are safe, correctly connected and ready for operation.",
      "It helps identify faults early — before they become failures, downtime or hazards.",
      "Commissioning without verification leaves uncertainty about protection, earthing and performance.",
      "We treat testing as part of professional delivery, not an optional extra.",
    ],
    "earthing-surge-protection": [
      "Earthing provides a controlled path for fault currents and supports protective device operation.",
      "Surge protection helps limit damaging overvoltages from switching events and lightning-related surges.",
      "Lightning protection is a system-level design decision based on risk and building characteristics.",
      "Together, these measures protect people, equipment and the reliability of solar and electrical systems.",
    ],
    "businesses-reduce-electricity-costs": [
      "Commercial solar works best where daytime consumption is significant and predictable.",
      "An energy assessment clarifies which loads solar can offset and whether storage adds value.",
      "Sizing should reflect operating hours, expansion plans and electrical infrastructure constraints.",
      "Project economics improve when design, installation quality and maintenance are treated as one system.",
    ],
    "solar-hotels-apartments": [
      "Hotels and apartments often have variable loads across the day and night.",
      "Design must consider common-area loads, tenant patterns, roof constraints and electrical distribution.",
      "Critical circuits such as lighting, pumps, lifts or security may need dedicated backup strategy.",
      "We engineer solutions around how the building actually uses power.",
    ],
    "solar-starts-with-assessment": [
      "Counting panels before understanding the load leads to poor performance and disappointed expectations.",
      "Assessment covers consumption, site conditions, electrical infrastructure and your objectives.",
      "Only then can sizing, topology and equipment selection be engineering-led.",
      "That is why our primary CTA is a site assessment — not a rush to sell a package.",
    ],
    "what-happens-after-installation": [
      "After commissioning, monitoring and inspection help keep performance on track.",
      "Preventive maintenance catches issues with modules, inverters, batteries and protection early.",
      "Upgrades may be needed as loads grow or technology options improve.",
      "We support clients beyond handover so the system remains reliable over its life.",
    ],
  };
  return (
    bodies[slug] ?? [
      "This insight summarises a practical engineering topic for homeowners and businesses planning power projects in Kenya.",
      "For advice specific to your site, request a conversation with our team.",
    ]
  );
}
