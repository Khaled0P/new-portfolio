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
  },
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
    name: 'React / Next Developer',
    imgPath: '/images/logos/react.webp',
  },
  {
    name: 'Shopify Developer',
    imgPath: '/images/logos/shopify.webp',
  },
  {
    name: 'JavaScript Developer',
    imgPath: '/images/logos/node.webp',
  },
  {
    name: 'Workflow Management',
    imgPath: '/images/logos/git.webp',
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

const fullProjects = [
  {
    name: 'Hola Mexico E-commerce',
    preview: '/Projects-screenshots/hola-mexico.png',
    description: `Solely responsible for building the entire store. Developed a fully custom Shopify theme based on Dawn, focusing on performance and modular design. Handled front-end and Liquid development, custom sections, and integrated third-party apps and libraries.`,
    tech: 'Shopify Liquid, JavaScript (ES6), TailwindCSS, Swiper.js',
    github: 'private',
    live: 'https://holamexico.de/',
  },
  {
    name: 'Vitori Sales-stream',
    preview: '/Projects-screenshots/vitori.png',
    description: `Built full-stack features from API development to front-end implementation using Next.js and React. Integrated AWS services like S3 for efficient media handling and improved performance.`,
    tech: 'Next.js, React, ReactQuery, Node.js, MaterialUI, AWS S3, REST APIs',
    github: 'private',
    live: 'https://vitori.de/',
  },
  {
    name: 'Bettina (Cosmetics & Body Care)',
    preview: '/Projects-screenshots/bettina-barty.png',
    description: `Built and customized Shopify sections to showcase premium cosmetic products with a consistent brand identity. Focused on responsive layouts, smooth transitions, and fast-loading product pages to deliver a polished shopping experience.`,
    tech: 'Shopify Liquid, JavaScript (ES6), TailwindCSS',
    github: 'private',
    live: 'https://bettina-barty.de/',
  },
  {
    name: 'ASMC (Army Shop)',
    preview: '/Projects-screenshots/asmc.png',
    description: `Contributed to the development of one of Europe’s largest military and outdoor gear stores on Shopify. Implemented scalable product filtering and navigation features to handle thousands of SKUs, improving customer search efficiency and overall site performance.`,
    tech: 'Shopify Liquid, JavaScript (ES6), TailwindCSS',
    github: 'private',
    live: 'https://www.asmc.de/',
  },
  {
    name: 'Marbert (Heritage Skincare Brand)',
    preview: '/Projects-screenshots/marbert.png',
    description: `Modernized Shopify theme components for Marbert’s heritage skincare brand. Delivered reusable promotional sections and campaign layouts that allowed the marketing team to launch seasonal campaigns faster without developer bottlenecks.`,
    tech: 'Shopify Liquid, JavaScript (ES6), SCSS',
    github: 'private',
    live: 'https://www.marbert.de/',
  },
  {
    name: 'Histaminikus (Health & Nutrition Products)',
    preview: '/Projects-screenshots/histaminikus.png',
    description: `Optimized Shopify store performance and SEO for a health-focused retailer. Developed user-friendly product pages and accessible components that improved site speed, discoverability, and trustworthiness for a health-conscious audience.`,
    tech: 'Shopify Liquid, JavaScript (ES6), TailwindCSS',
    github: 'private',
    live: 'https://www.histaminikus.de/',
  },
  {
    name: 'Peak Performance E-commerce',
    preview: '/Projects-screenshots/peak.png',
    description:
      'Fully refactored an existing Shopify store to significantly improve scalability, code readability, and performance. Restructured the theme architecture, modularized components, and optimized Liquid templates and JavaScript logic.',
    tech: 'Shopify Liquid, JavaScript (ES6), SCSS, Swiper.js',
    github: 'private',
    live: 'https://www.peak.ag/en/',
  },
  {
    name: 'Atera E-commerce',
    preview: '/Projects-screenshots/Atera.png',
    description: `Contributed to various improvements across the store including leading the development of a custom multi-tab search feature for car parts, allowing users to filter by manufacturer, model, and make. Also improved overall site performance and SEO through front-end optimizations and best practices.`,
    tech: 'Shopify Liquid, JavaScript (ES6), TailwindCSS',
    github: 'private',
    live: 'https://www.atera.de/',
  },
  {
    name: 'BMWelektronika',
    preview: '/Projects-screenshots/BMW.png',
    description: `Spearheaded the development of the official website for BMWelektronika private business. Collaborated closely with a designer to translate creative concepts into pixel-perfect, high-performance 
    code. Designed and implemented a loading screen, seamlessly integrating fully animated elements into the website`,
    tech: 'ReactJS, BootStrap, Framer motion, CSS Modules, React scroll',
    github: 'https://github.com/adoringdo/BMWelektronika.git',
    live: 'https://bmwelektronika.tech',
  },
  {
    name: 'E-Commerce Website',
    preview: '/Projects-screenshots/game-station.png',
    description:
      'A front-end implementation of an E-commerce website leveraging the up-to-date database of RAWG API.',
    tech: 'ReactJS, Bootstrap, CSS Modules, npm, React Router, RAWG API, Framer Motion, Date-fns',
    github: 'https://github.com/Khaled0P/Game-Station',
    live: 'https://khaled-game-station.netlify.app/',
  },
  {
    name: 'Cars Showcase',
    preview: '/Projects-screenshots/cars-showcase.png',
    description:
      'A website to explore cars built with advanced filtering, pagination and NextJS routing',
    github: 'https://github.com/Khaled0P/Cars-Ecommerce.git',
    live: 'https://cars-ecommerce.vercel.app/',
  },
  {
    name: 'Chat App',
    preview: '/Projects-screenshots/chat-app.png',
    description:
      'Built a chat application which allows users to signup, chat with friends, create group chats and supports media attachments.',
    github: 'https://github.com/Khaled0P/chat-app.git',
    live: 'https://chat-app-khaled0p.vercel.app/chats',
  },
  {
    name: 'Resume Builder',
    preview: '/Projects-screenshots/resume-builder.png',
    description:
      'This web application empowers users to effortlessly create professional and polished resumes tailored to you career aspirations..',
    github: 'https://github.com/Khaled0P/Resume-Builder.git',
    live: 'https://khaled-cv-application.netlify.app/',
  },
  {
    name: 'To-Do List',
    preview: '/Projects-screenshots/todo-list.jpg',
    description:
      'This web application is designed to streamline your task management and boost your productivity. With the ability to add, delete, and organize tasks, create custom projects, and prioritize your to-dos.',
    github: 'https://github.com/Khaled0P/To-Do-List.git',
    live: 'https://khaled0p.github.io/To-Do-List/',
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
  fullProjects,
};
