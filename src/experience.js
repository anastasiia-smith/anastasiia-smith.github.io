/**
 * Work history — concise, outcome-oriented bullets (résumé / ATS–friendly phrasing).
 */
const EXPERIENCE = [
  {
    id: 'veengu',
    company: 'Veengu',
    title: 'Frontend Developer · Solution design',
    location: 'Remote',
    period: '2023 - present',
    highlights: [
      'Expanded scope from web-focused development (business portal, wallet UI, fintech dashboard in React and TypeScript) to end-to-end ownership of branded mobile applications.',
      'Accelerated development velocity by integrating AI-assisted workflows, achieving +83% year-over-year productivity growth.',
      'Transitioned from feature implementation to solution design, translating business requirements into scalable technical architectures across mobile applications and fintech platforms.',
      'Optimized development processes by shifting focus from manual coding to higher-level system design, improving delivery timelines without compromising maintainability.',
    ],
    stack:
      'Mobile: React Native, Expo. Web: React, TypeScript, TanStack Query, Axios, Ant Design, MUI, React Admin. Solution design. ',
    projects: [
      {
        name: 'White-label digital wallet and business platform',
        description:
          'Partner-branded mobile apps, a unified fintech operations dashboard, and admin — overview on the site.',
        url: 'https://veengu.com/solutions/digital-wallet-platform/',
      },
    ],
  },
  {
    id: 'biarum',
    company: 'Biarum',
    title: 'Frontend Developer',
    location: 'St. Petersburg, Russia',
    period: '2021 - 2022',
    highlights: [
      'Cut load time and technical debt by debugging, refactoring, and deleting unused code paths.',
      'Defined shared layout, typography, and UI patterns so multiple apps felt like one product.',
      'Worked with backend engineers and designers on APIs, specs, and shipped UI.',
    ],
    stack: null,
    projects: [
      {
        name: 'MIT Living Labs',
        description:
          'Mapping and lab tools — HTML, Sass, JavaScript, React, Webpack.',
        url: null,
      },
      {
        name: 'Aluna Health',
        description:
          'UI implementation — Sass, JavaScript, Webpack (screens in portfolio).',
        url: null,
      },
      {
        name: 'eCare Reporting Portal',
        description:
          'Vanilla JS catalog filtering; modernized legacy UI for clearer workflows.',
        url: null,
      },
      {
        name: 'Insidetracker',
        description: 'Pages and popover flows to unblock release milestones.',
        url: null,
      },
    ],
  },
  {
    id: 'agm',
    company: 'AGM Group',
    title: 'Frontend Developer',
    location: 'St. Petersburg, Russia',
    period: '2020 - 2021',
    highlights: [
      'Turned design deliverables into responsive, production-ready sites end to end.',
      'Participated in Agile delivery with visibility into frontend, backend, and release planning.',
      'Improved performance and maintainability through refactors, optimizations, and new modules.',
    ],
    stack: null,
    projects: [
      {
        name: 'Volna-media marketing site',
        description:
          'HTML, Bootstrap, Sass, JavaScript, Gulp, Jade (screens in portfolio).',
        url: null,
      },
      {
        name: 'LSR and KVS major real estate development and construction companies project',
        description: 'SEO improvements and new frontend modules.',
        url: null,
      },
    ],
  },
  {
    id: 'sletat',
    company: 'Sletat.ru',
    title: 'Frontend Developer',
    location: 'St. Petersburg, Russia',
    period: '2019 - 2020',
    highlights: [
      'Built and integrated custom site modules that supported franchise sales goals.',
      'Delivered configurable franchise sites to improve local market presence.',
      'Maintained an internal wiki that shortened ramp-up for new team members.',
    ],
    stack: null,
    projects: [],
  },
];

export { EXPERIENCE };
