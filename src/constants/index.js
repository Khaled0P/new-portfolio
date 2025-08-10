const navLinks = [
  {
    name: 'Work',
    link: '#work',
  },
  {
    name: 'Experience',
    link: '#experience',
  },
  {
    name: 'Skills',
    link: '#skills',
  }
];

const words = [
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
  { text: 'Ideas', imgPath: '/images/ideas.svg' },
  { text: 'Concepts', imgPath: '/images/concepts.svg' },
  { text: 'Designs', imgPath: '/images/designs.svg' },
  { text: 'Code', imgPath: '/images/code.svg' },
];

const counterItems = [
  { value: 2, suffix: '+', label: 'Years of Experience' },
  { value: 30, suffix: '+', label: 'Projects Delivered' },
  { value: 650, suffix: '+', label: 'Code Commits' },
  { value: 200, suffix: '+', label: 'Code Reviews Performed' },
];

const logoIconsList = [
  {
    imgPath: '/images/logos/company-logo-1.png',
  },
  {
    imgPath: '/images/logos/company-logo-2.png',
  },
  {
    imgPath: '/images/logos/company-logo-3.png',
  },
  {
    imgPath: '/images/logos/company-logo-4.png',
  },
  {
    imgPath: '/images/logos/company-logo-5.png',
  },
  {
    imgPath: '/images/logos/company-logo-6.png',
  },
  {
    imgPath: '/images/logos/company-logo-7.png',
  },
];

const abilities = [
  {
    imgPath: '/images/seo.png',
    title: 'Quality Focus',
    desc: 'Delivering high-quality results while maintaining attention to every detail.',
  },
  {
    imgPath: '/images/chat.png',
    title: 'Reliable Communication',
    desc: 'Keeping you updated at every step to ensure transparency and clarity.',
  },
  {
    imgPath: '/images/time.png',
    title: 'On-Time Delivery',
    desc: 'Making sure projects are completed on schedule, with quality & attention to detail.',
  },
];

const techStackIcons = [
  {
    name: 'React / Next Developer',
    modelPath: '/models/react_logo-transformed.glb',
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: 'Shopify Developer',
    modelPath: '/models/shopify-optimized.glb',
    scale: 1.4,
    rotation: [0, -Math.PI / 3.3, 0],
  },
  {
    name: 'JavaScript Developer',
    modelPath: '/models/node-transformed.glb',
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: 'Workflow Management',
    modelPath: '/models/git-svg-transformed.glb',
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const techStackImgs = [
  {
    name: "React / Next Developer",
    imgPath: "/images/logos/react.webp",
  },
  {
    name: "Shopify Developer",
    imgPath: "/images/logos/shopify.webp",
  },
  {
    name: "JavaScript Developer",
    imgPath: "/images/logos/node.webp",
  },
  {
    name: "Workflow Management",
    imgPath: "/images/logos/git.webp",
  },
];

const expCards = [
  {
    review:
      'Khaled has a real talent for simplifying complex problems. He completely reworked our frontend, which gave us a solid foundation to build on. His new workflow and smart reusable components made our jobs easier and helped us all work together much more smoothly.',
    imgPath: '/images/logos/company-logo-1.png',
    logoPath: '/images/logo1.png',
    title: 'Frontend Developer',
    date: 'May 2025 - Present',
    responsibilities: [
      'Led frontend development of Task Flow, a large-scale SaaS platform for managing academic operations in schools and universities.',
      'Architectied a scalable, SSR-optimized frontend with reusable components, dynamic dashboards, and role-based access (admin, teacher, student, super admin).',
      'Built reusable table systems, modals, and assignment flows for efficient student, course, and teacher management',
      'Drove frontend architecture decisions, performance optimization, and collaboration with backend/API teams and other frontend devs.',
    ],
  },
  {
    review:
      "Khaled's implementation of my designs is one of the best I have seen.",
    imgPath: '/images/exp2.webp',
    logoPath: '/images/logo2.webp',
    title: 'Frontend / Shopify Developer',
    date: 'February 2024 – December 2024',
    responsibilities: [
      'Developed and integrated advanced features into React, Next.JS websites, creating seamless user experiences.',
      'Built APIs and handled full-stack development for feature implementations, and provided cloud based solutions for ideal performance',
      'Built and customized Shopify stores end-to-end, delivering scalable, optimized, and user-friendly e-commerce solutions.',
    ],
  },
  {
    review:
      'It was a pleasure working with Khaled on this project. He built the website with incredible attention to detail. He followed my ideas perfectly, but also elevated them by suggesting smarter solutions throughout the process. Even when we had to make changes, he was always flexible and quick to adapt. I especially appreciated how clearly he explained his code and shared his workflow live.',
    imgPath: '/images/exp3.png',
    logoPath: '/images/logo3.png',
    title: 'Software Developer',
    date: 'January 2023 – February 2024',
    responsibilities: [
      ' Spearheaded the development of a high-performance website, significantly increasing sales and brand visibility.',
      'Delivered pixel-perfect implementation of creative designs.',
      'Contributed to The Odin Project open-source website by aligning website styles with the style guide.',
    ],
  },
];

const expLogos = [
  {
    name: 'logo1',
    imgPath: '/images/logo1.png',
  },
  {
    name: 'logo2',
    imgPath: '/images/logo2.webp',
  },
  {
    name: 'logo3',
    imgPath: '/images/logo3.png',
  },
];

const socialImgs = [
  {
    name: 'Github',
    url: 'https://github.com/Khaled0P',
    imgPath: '/images/github.png',
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/khaled-abdelrhem/',
    imgPath: '/images/linkedin.png',
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
