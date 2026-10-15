// Site-wide content. Edit text here — the homepage sections read from this file.

export const site = {
  name: 'Amy Superchinski',
  fullName: 'Amanda Superchinski',
  role: 'Senior Product Designer',
  description:
    'Amanda (Amy) Superchinski is a Senior Product Designer focused on accessible, human-centered solutions for complex products.',
  url: 'https://amysuperchinski.com',
  email: 'amy@amysuperchinski.com',
  linkedin: 'https://www.linkedin.com/in/amanda-superchinski',
  cv: '/cv/Amanda_Superchinski_CV.pdf',
  location: 'Brazil',
};

export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
];

export const hero = {
  // Each item is one line of the hero heading (the break after "but" is intentional).
  titleLines: ['Hello, I’m Amanda but', 'you can call me Amy.'],
  subtitle:
    'I’m a Senior Product Designer focused on accessible, human-centered solutions for complex products.',
};

export const about = {
  intro: 'Hello! I’m Amanda, a Senior Product Designer who makes complex, data-dense products clear and usable.',
  body: [
    'I’ve been designing digital products since 2013 — the last seven years in product, across fintech, payments, online education and health. I specialize in multi-step workflows, dashboards and operational tools, where usability has to hold up against real technical and business constraints.',
    'I work across the full process, from research and information architecture to prototypes and polished UI, and partner closely with business analysts and engineers to turn ambiguous requirements into clear product logic. I treat design systems as products, and accessibility as part of the definition of done.',
  ],
  skills: ['Interface Design', 'Accessibility', 'User-Centered Design', 'Design Systems', 'UX Research', 'Strategic Design', 'User Journeys', 'Service Design'],
};

export const services = [
  {
    title: 'User Research & Insights',
    icon: 'research' as const,
    text: 'Conducting qualitative and quantitative research to uncover user needs, pain points, and motivations — turning insights into actionable design opportunities.',
  },
  {
    title: 'Experience Strategy',
    icon: 'strategy' as const,
    text: 'Defining product vision and UX strategies that align user goals with business objectives, ensuring cohesive and impactful experiences across platforms.',
  },
  {
    title: 'Interaction & Interface Design',
    icon: 'interface' as const,
    text: 'Creating seamless interactions and visually consistent interfaces that enhance usability, accessibility, and brand identity.',
  },
  {
    title: 'Design Systems & Consistency',
    icon: 'systems' as const,
    text: 'Developing scalable design systems to ensure visual coherence, improve efficiency, and support product growth across teams.',
  },
];

// Work history — content from the CV. Dates use YYYY-MM so they can be rendered in a <time> element.
// `end: null` = current role. `summary` and `highlights` show when the accordion item is opened.
export interface Job {
  role: string;
  company: string;
  start: string;
  end: string | null;
  location: string;
  summary: string;
  highlights: string[];
}

export const experience: Job[] = [
  {
    "role": "Senior User Experience Designer",
    "company": "Globant",
    "start": "2025-03",
    "end": null,
    "location": "Remote · São Paulo, Brazil",
    "summary": "Design the end-to-end experience for Vision Next, working inside the client Fiserv — a Customer Service Management platform used by support agents to handle live customer interactions — a data-dense, multi-step tool scaling from internal build to its first global clients, architected for multiple languages and countries.",
    "highlights": [
      "Facilitate design thinking sessions with business analysts and product owners to surface deeper insight into features and their user journeys.",
      "Translate operational requirements into structured, scalable UI patterns that hold up across a large, growing platform.",
      "Work directly with engineers to validate feasibility against the underlying APIs before designs are finalized.",
      "Own consistent implementation of the design system across the whole platform, and propose new components through its governance process where gaps exist.",
      "Introduced interactive coded prototypes alongside Figma to shorten alignment cycles, and support product owners outside my own pod with prototypes and journey definition."
    ]
  },
  {
    "role": "Senior Product Designer",
    "company": "IcPay",
    "start": "2022-10",
    "end": "2025-02",
    "location": "Remote · Fintech",
    "summary": "Returned to IcPay to design the product itself — taking the company from brand and website into a working financial product across desktop and mobile app, and building the design system underneath it.",
    "highlights": [
      "Led the redesign of the product's system interface for both desktop and app, covering discovery, information architecture, flows, prototypes and production-ready UI.",
      "Designed core financial flows, balancing security and compliance constraints against a first-time user who needed the product to feel simple.",
      "Built and maintained IcPay's design system as a product — components, tokens and usage guidelines — and tracked UX metrics on priority flows to sequence iterations rather than argue from opinion.",
      "Applied accessible design throughout — contrast, focus states, hierarchy and touch targets — across both desktop and app."
    ]
  },
  {
    "role": "Product Designer",
    "company": "Descomplica",
    "start": "2021-10",
    "end": "2022-09",
    "location": "Remote · Rio de Janeiro, Brazil · Online education",
    "summary": "End-to-end product design on the mobile squad of one of Brazil's largest online education platforms, from discovery through engineering handoff, for an app used by more than 30,000 students.",
    "highlights": [
      "Designed and shipped a new notifications feature that reached 80% approval in beta, contributing to a 20% lift in student activity and an increase of at least 70% in student satisfaction.",
      "Ran discovery alongside the product manager — user interviews that surfaced the problems and opportunities feeding the squad's roadmap.",
      "Partnered with the accessibility team to deliver dark mode and high-contrast mode, making the app usable in dim light and for users with reduced vision.",
      "Translated learning-journey requirements into native iOS and Android patterns, prepared specs and handoff, and reviewed the build against the design."
    ]
  },
  {
    "role": "Product Designer",
    "company": "IcPay",
    "start": "2020-02",
    "end": "2021-10",
    "location": "Remote · Fintech",
    "summary": "Led IcPay's rebrand and the end-to-end redesign of its website, repositioning a young fintech for two audiences at once: customers deciding whether to trust it with their money, and investors deciding whether to back it. Sole designer on the project.",
    "highlights": [
      "Ran the rebrand end-to-end, defining the new visual identity and the guidelines that kept it consistent across every surface.",
      "Rebuilt the website's information architecture, then took it through wireframes and prototypes to final UI, owning design direction across concurrent projects in a small, fast-moving team.",
      "Established the first shared UI foundations — type scale, color tokens and reusable components — that later became the basis of the product's design system."
    ]
  },
  {
    "role": "Product Designer",
    "company": "Futura Genetics",
    "start": "2019-01",
    "end": "2020-01",
    "location": "Remote · Genetic testing",
    "summary": "Owned the end-to-end redesign of the company's website — a genetic-testing product where trust and clarity are what turn a visitor into a customer.",
    "highlights": [
      "Redesigned the site end-to-end, rebuilding the information architecture and user flow so dense scientific content became a path a non-expert could follow.",
      "Improved how the product was communicated and increased the perceived reliability of its services by 40%, measured by testing the new design with the internal team and customers."
    ]
  }
];

export function formatMonth(value: string | null): string {
  if (!value) return 'Present';
  const [y, m] = value.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
