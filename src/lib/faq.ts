export type FaqItem = {
  question: string;
  intro: string;
  bullets?: readonly string[];
  outro?: string;
};

export type FaqGroup = {
  id: string;
  title: string;
  items: readonly FaqItem[];
};

export const faqEyebrow = "Frequently Asked Questions";

export const faqKicker =
  "SM Engineering Limited | Solar, Heat Pumps & Electrical Engineering";

export const faqHeadline = "Engineering Better Solutions";

export const faqIntro =
  "At SM Engineering Limited, we help homes, businesses and institutions make informed decisions about solar energy, hot-water systems, heat pumps and electrical installations. Explore our frequently asked questions or contact our team for advice tailored to your project.";

export const faqGroups = [
  {
    id: "about-sm-engineering",
    title: "About SM Engineering Limited",
    items: [
      {
        question: "What services does SM Engineering Limited offer?",
        intro:
          "SM Engineering Limited provides engineering-led energy and electrical solutions, including:",
        bullets: [
          "Solar PV systems for homes, businesses and institutions.",
          "Solar water heating systems.",
          "Air-source and other suitable heat pump solutions.",
          "Solar water pumping systems.",
          "Battery energy storage and power backup solutions.",
          "Electrical installations, testing, inspection and maintenance.",
          "Earthing, lightning protection and electrical safety systems.",
          "Engineering consultancy, system design and technical support.",
        ],
        outro:
          "Our recommendations are based on your energy requirements, site conditions, budget and intended use.",
      },
      {
        question: "Why should I choose SM Engineering Limited?",
        intro:
          "We approach projects as engineering solutions rather than simply selling equipment. We aim to understand your requirements, assess the site, recommend suitable equipment, carry out professional installation and provide guidance on operating and maintaining the system.",
        outro:
          "Our goal is to deliver safe, practical and dependable solutions that provide long-term value.",
      },
      {
        question:
          "Do you serve residential, commercial and institutional customers?",
        intro:
          "Yes. Our services are suitable for homeowners, apartment developments, offices, retail premises, hotels, schools, healthcare facilities, farms and industrial facilities. The system configuration and project scope depend on the specific requirements of each customer.",
      },
      {
        question: "Which areas in Kenya do you serve?",
        intro:
          "Please contact us with your project location. We can assess the feasibility of undertaking the project at your site and advise on the applicable survey, transport, installation and support arrangements.",
      },
      {
        question: "How do I get a quotation?",
        intro:
          "Contact us by phone, WhatsApp or through the website enquiry form. Tell us what you want to power or heat, your location and any available information about your electricity consumption, water usage or existing installation.",
        outro:
          "Where necessary, we will recommend a site assessment before preparing a detailed proposal.",
      },
    ],
  },
  {
    id: "about-solar-power",
    title: "About Solar Power Systems",
    items: [
      {
        question: "What is a solar PV system, and how does it work?",
        intro:
          "A solar photovoltaic (PV) system converts sunlight into electricity using solar panels. An inverter converts the panels' direct-current electricity into alternating current suitable for compatible electrical appliances.",
        outro:
          "Depending on the design, the system can supply electricity directly to your property, charge batteries, work alongside the utility grid or operate independently of the grid.",
      },
      {
        question: "What types of solar power systems are available?",
        intro: "The main options are:",
        bullets: [
          "Grid-tied systems: Operate alongside the electricity grid and are generally designed to reduce the amount of electricity purchased from the utility.",
          "Hybrid systems: Combine solar panels, an inverter, battery storage and, where appropriate, grid or generator support.",
          "Off-grid systems: Operate independently of the utility grid and require suitable energy storage or another source of power when solar generation is insufficient.",
        ],
        outro:
          "We recommend the configuration that best matches your energy needs, reliability requirements and budget.",
      },
      {
        question: "How much does a solar power system cost in Kenya?",
        intro:
          "The cost depends on the system capacity, inverter type, battery storage, solar panel quantity, mounting arrangement, cable lengths, protection equipment and installation complexity.",
        outro:
          "A small backup system will cost less than a whole-house or commercial system with substantial battery storage. We prepare quotations based on the actual load requirements and site conditions rather than recommending a system based on price alone. Request a quotation for a solution designed around your needs.",
      },
      {
        question: "How do I know what size solar system I need?",
        intro:
          "System size is determined by your electricity consumption, the loads you want to keep running during an outage, available roof or ground space, solar resource at the site and whether battery storage is required.",
        outro:
          "We assess these factors before recommending a capacity. A site and load assessment is the reliable way to size the system, rather than selecting a package by price or panel count alone.",
      },
      {
        question: "How long does a solar power system last?",
        intro:
          "Solar panels are typically designed for decades of generation. Inverters, batteries and protection equipment have shorter service lives and may need inspection, servicing or replacement during the life of the installation.",
        outro:
          "Actual performance depends on equipment quality, installation workmanship, operating conditions and maintenance. We advise on expected service life and support arrangements for the equipment specified on your project.",
      },
      {
        question:
          "Do I still need the electricity grid after installing solar?",
        intro:
          "That depends on the system type. Grid-tied and hybrid systems are designed to work with the utility supply. Off-grid systems are intended to operate independently, provided generation, storage and backup arrangements are correctly sized.",
        outro:
          "We recommend the arrangement that matches your reliability requirements and budget, rather than assuming every site should disconnect from the grid.",
      },
    ],
  },
  {
    id: "about-solar-water-heaters",
    title: "About Solar Water Heaters",
    items: [
      {
        question: "What is a solar water heating system?",
        intro:
          "A solar water heating system uses the sun to heat water for domestic, hospitality or institutional use. Collectors absorb solar energy and transfer heat to a storage tank so hot water is available when needed.",
        outro:
          "The system is sized around hot-water demand, available roof space, climate and whether an electric or other backup heater is required.",
      },
      {
        question: "What types of solar water heaters are available?",
        intro:
          "Common options include compact systems and split systems, using evacuated-tube or flat-plate collectors, with a storage tank matched to daily hot-water use.",
        outro:
          "We specify the arrangement according to the building, water quality, roof structure and intended use, rather than a single standard product for every site.",
      },
      {
        question:
          "Is a solar water heater suitable for my home, hotel or institution?",
        intro:
          "Solar water heating is often suitable where there is a steady hot-water demand and adequate, unshaded roof area. Hotels, homes, schools and similar facilities can reduce the electricity or fuel used to heat water.",
        outro:
          "Suitability still depends on demand pattern, backup requirements and the condition of the existing plumbing. We confirm this during assessment.",
      },
      {
        question: "How much does a solar water heater cost in Kenya?",
        intro:
          "Cost depends on collector type and area, tank capacity, mounting, pipework, backup heating and installation access.",
        outro:
          "We quote from the actual hot-water requirement and site conditions. Contact us with your location and typical hot-water use for a proposal.",
      },
      {
        question: "How do I maintain a solar water heater?",
        intro:
          "Periodic inspection of collectors, tank fittings, sacrificial anodes where fitted, pipe insulation and backup heaters helps the system remain safe and effective.",
        outro:
          "Water quality and usage affect servicing intervals. We can advise on inspection and maintenance for the installation we supply.",
      },
    ],
  },
  {
    id: "about-heat-pumps",
    title: "About Heat Pumps",
    items: [
      {
        question: "What is a heat pump, and how does it work?",
        intro:
          "A heat pump moves heat from one place to another using a refrigeration cycle. An air-source heat pump, for example, extracts heat from outdoor air and uses it to heat water or a space.",
        outro:
          "Because it moves heat rather than generating it only from electrical resistance, a correctly specified heat pump can heat water efficiently where the application and climate are suitable.",
      },
      {
        question: "What types of heat pump solutions do you offer?",
        intro:
          "We assess air-source and other suitable heat pump solutions for hot-water and related applications, specified around the building load, climate, electrical supply and how the system will be used.",
        outro:
          "The recommended type and capacity follow the site assessment rather than a one-size catalogue selection.",
      },
      {
        question:
          "When is a heat pump a better option than a solar water heater?",
        intro:
          "A heat pump may be appropriate where roof space for collectors is limited, hot-water demand is high or more constant, or a solar-only heater cannot meet the required volume and temperature reliably.",
        outro:
          "In other cases a solar water heater, or a combined arrangement, may be the more practical solution. We compare options against your demand, site and budget.",
      },
      {
        question: "Can a heat pump work with solar power?",
        intro:
          "Yes, where the electrical design allows it. A heat pump can be supplied from the grid, from a solar PV system, or from a hybrid arrangement, provided the inverter, protection and load profile are correctly specified.",
        outro:
          "We treat the heat pump as part of the wider electrical and energy system, not as an isolated appliance.",
      },
      {
        question: "How do I get a heat pump quotation?",
        intro:
          "Contact us with the application (home, hotel, institution or other), typical hot-water or heating demand, location and details of any existing solar or electrical installation.",
        outro:
          "Where necessary we will recommend a site assessment before preparing a detailed proposal.",
      },
    ],
  },
  {
    id: "about-electrical-engineering",
    title: "About Electrical Engineering Services",
    items: [
      {
        question: "What electrical engineering services do you provide?",
        intro:
          "We provide electrical design, installation, verification and commissioning for homes, apartments, offices, retail premises, hotels, institutions, commercial buildings and industrial facilities.",
        outro:
          "This includes power distribution, distribution boards, protection, lighting and the electrical infrastructure that solar, battery and heat-pump systems depend on.",
      },
      {
        question: "Do you carry out electrical testing and inspection?",
        intro:
          "Yes. Electrical testing, inspection and installation verification help confirm that an installation is safe, correctly protected and performing as intended.",
        outro:
          "We can inspect new works and existing installations, then recommend corrective measures where faults or non-compliances are found.",
      },
      {
        question:
          "What is earthing and lightning protection, and why does it matter?",
        intro:
          "Earthing provides a designed path for fault current. Lightning and surge protection reduce the risk of damage to equipment and installations from lightning and switching surges.",
        outro:
          "These measures are integral to electrical safety, particularly where solar, batteries or sensitive equipment are installed. We specify them as part of the electrical design, not as optional extras after a failure.",
      },
      {
        question: "Can you work on existing electrical installations?",
        intro:
          "Yes. Many solar, battery, heat-pump and backup-power projects connect to an existing electrical system. We assess the current arrangement, identify limitations and design the interface so the new equipment can be installed safely.",
        outro:
          "Where the existing installation requires upgrading, we include that in the recommendation before work proceeds.",
      },
      {
        question: "Do you provide maintenance after installation?",
        intro:
          "Yes. We can provide inspection, preventive maintenance, fault diagnosis and corrective work for solar, electrical, battery and related systems.",
        outro:
          "Planned maintenance helps the installation remain safer, easier to manage and aligned with how it was designed to operate.",
      },
    ],
  },
] satisfies readonly FaqGroup[];

export function faqAnswerText(item: FaqItem): string {
  return [item.intro, ...(item.bullets ?? []), item.outro]
    .filter(Boolean)
    .join(" ");
}

export const faqItems = faqGroups.flatMap((group) =>
  group.items.map((item) => ({
    question: item.question,
    answer: faqAnswerText(item),
  })),
);
