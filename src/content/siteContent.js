export const brand = {
  name: 'ADVIONYX',
  email: 'advionyx@gmail.com',
}

export const hero = {
  eyebrow: 'ADVIONYX',
  // PDF hero copy
  headline: 'From concept to market, built with clarity and confidence',
  subtext:
    'We support product-driven teams across strategy, design, engineering, data, and compliance helping complex ideas become real-world solutions.',
  cta: { label: 'Talk to us', href: `mailto:${brand.email}` },

  // Right-side card content (inspired by Influence/RapidAff aesthetic)
  card: {
    badge: 'On-demand execution',
    title: 'Clarity → Delivery',
    bullets: [
      'Strategy + product direction',
      'Design + engineering delivery',
      'Data + compliance readiness',
    ],
    chips: ['Go-to-market', 'Regulatory', 'Scalable build'],
  },
}

export const advisor = {
  eyebrow: 'ADVISOR CAPABILITIES',
  title: 'On-demand expertise that extends your core team.',
  // PDF advisor paragraph
  body:
    'Our advisors form an on-demand layer of expertise that extends your core team. They bring hands-on experience across business strategy, technology, design, and compliance, supporting projects at critical decision points. From shaping go-to-market strategies and validating product concepts to guiding regulatory pathways, building scalable software, extracting insights from data, and refining user experiences, our advisors step in with targeted input—helping teams move faster, reduce risk, and deliver with confidence.',
  // extracted as “capability tags” to look clean
  capabilities: [
    'Go-to-market strategy',
    'Product concept validation',
    'Regulatory pathway guidance',
    'Scalable software delivery',
    'Data insight & analytics',
    'UX refinement',
  ],
}

export const whatYouGet = [
  { label: 'Speed', value: 'Ship in weeks, not months' },
  { label: 'Clarity', value: 'Simple flows, clean UI, measurable results' },
  { label: 'Ownership', value: 'We take responsibility for delivery' },
]

export const services = [
  {
    id: 'concept-to-compliance',
    number: '01',
    title: 'Concept-to-Compliance Medical Device Consulting',
    subtitle: 'Regulatory-ready execution across devices, software, and IVD.',
    areas: [
      {
        title: 'Medical Device Development (Non-IVD, IVD & Software)',
        desc:
          'End-to-end guidance for the development of non-IVD medical devices, in-vitro diagnostics (IVD), and software-based medical technologies. Support includes device classification, design control planning, verification and validation strategy, and preparation of technically robust, regulation-aligned documentation.',
      },
      {
        title: 'Risk Management & Usability Evaluation',
        desc:
          'Comprehensive risk management and human factors engineering support to ensure patient safety and regulatory compliance. Includes hazard identification, risk analysis and control, use-error evaluation, usability engineering documentation, and validation in line with international standards.',
      },
      {
        title: 'Regulatory Pathway Consulting & Device Registration',
        desc:
          'Design and execution of optimized regulatory strategies tailored to product type and target markets. Services include regulatory classification, submission planning, dossier development, authority interaction support, and end-to-end assistance with approvals, registrations, and lifecycle maintenance.',
      },
      {
        title: 'ISO Compliance',
        desc:
          'Establishment and maintenance of ISO-compliant Quality Management Systems. Includes SOP development, internal auditsupport, CAPA implementation, supplier quality controls, and certification and surveillance audit readiness.',
      },
    ],
  },
  {
    id: 'market-dynamics',
    number: '02',
    title: 'Market Dynamics & Performance Advisory',
    subtitle: 'Competitive clarity, trend foresight, and post-market rigor.',
    areas: [
      {
        title: 'Competitive Landscape & Analysis',
        desc:
          'Structured competitive intelligence and benchmarking covering market players, product differentiation, regulatory positioning, pricing dynamics, and technology maturity to identify risks, gaps, and growth opportunities.',
      },
      {
        title: 'Trend Reports',
        desc:
          'Custom trend and foresight reports analyzing regulatory changes, emerging technologies, clinical adoption patterns, and industry shifts to support long-term strategy and innovation planning.',
      },
      {
        title: 'Post-Market Surveillance',
        desc:
          'Support for post-market compliance and performance monitoring, including complaint analysis, adverse event trend evaluation, vigilance reporting, and periodic safety updates to ensure regulatory compliance and continuous product improvement.',
      },
    ],
  },
  {
    id: 'data-to-experiments',
    number: '03',
    title: 'From Data to Better Experiments',
    subtitle: 'Omics interpretation + ML pipelines that lead to decisions.',
    areas: [
      {
        title: 'NGS- Driven Omics Interpretation & Biological Insights',
        desc:
          'Interpretation of high-throughput omics data generated using next-generation sequencing (NGS), translating raw or processed sequencing outputs into biologically meaningful conclusions.',
      },
      {
        title: 'Machine-Learning-Powered Omics Analytics Pipelines',
        desc:
          'Advanced analysis of omics datasets using machine learning pipelines to extract insights using descriptive statistics.',
      },
    ],
  },
]

export const about = {
  eyebrow: 'ABOUT US',
  title: 'We Execute. We Don’t Just Advise.',
  body: [
    'We’re a consulting studio partnering with early-stage startups and innovation teams at critical build and scale moments.',
    'We bring cross-functional expertise on demand—without the cost or rigidity of permanent teams.',
    'No bloated headcount. No slide-only consulting. Just real delivery.',
    'From product and engineering to data, design, and regulatory, we lead real business and product execution end-to-end.',
    'Alongside industry work, we run a venture & innovation pipeline turning high-potential ideas—and standout student projects—into venture-ready products.',
    'Have a problem worth building? Let’s execute.',
  ],
}
