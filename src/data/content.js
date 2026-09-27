export const profile = {
  name: 'Sourabh Patil',
  role: 'Frontend Engineer',
  tagline: 'I craft robust, delightful web experiences.',
  years: '4+',
  location: 'Bangalore, India',
  email: 'patilss1610@gmail.com',
  phone: '+91 7219348002',
  linkedin: 'https://www.linkedin.com/in/sourabh-patil-4413aa183',
  summary:
    'Frontend Engineer with 4+ years of experience specializing in crafting robust web applications. Proficient in JavaScript, ES6+, and modern front-end technologies. Experienced in building responsive UI components with React and state management with Redux, collaborating with cross-functional teams to deliver solutions that meet business objectives.',
}

export const stats = [
  { value: '4+', label: 'Years building for the web' },
  { value: '10+', label: 'Storefront widgets shipped' },
  { value: '70%', label: 'Peak performance gains delivered' },
  { value: '2', label: 'ServiceNow certifications' },
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript', 'TypeScript', 'C++'],
  },
  {
    title: 'Front-End',
    items: ['React', 'Redux', 'Angular', 'HTML', 'CSS', 'SASS/SCSS', 'Styled-Components'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Webpack', 'Babel', 'ESLint', 'Jest', 'Jasmine', 'AgGridReact', 'D3.js', 'ReactStrap', 'Figma', 'Postman', 'NPM'],
  },
  {
    title: 'Version Control',
    items: ['Git', 'GitHub', 'GitLab', 'Azure DevOps'],
  },
  {
    title: 'Back-End',
    items: ['Node.js', 'Express.js', 'Python Flask'],
  },
  {
    title: 'Cloud',
    items: ['AWS EC2', 'Azure Containers'],
  },
]

export const experience = [
  {
    company: 'Amazon Ads',
    role: 'Frontend Engineer 1',
    location: 'Bangalore, India',
    period: 'May 2025 — Present',
    current: true,
    summary:
      'Improving the end-to-end experience for advertisers building Amazon Stores — reusable widgets, deployment workflows, performance dashboards, and ad slot reservation at scale.',
    highlights: [
      'Designed and developed reusable, configurable UI widgets adopted by multiple brands based on their business requirements.',
      'Built a Product Comparison widget for side-by-side comparison, improving product discoverability and informed purchase decisions.',
      'Developed a Left/Right Swipe widget — swipe left to discard, swipe right to add to cart — for a better customer experience.',
      'Contributed to storefront widgets: Product Comparison, Video Reels, Product Finder, Category Carousel, Product Grid, and more.',
      'Participated in store deployments for multiple brands, ensuring smooth rollout, configuration, and validation of widgets.',
      'Built performance dashboards tracking store-level metrics, widget usage/effectiveness, and overall store performance.',
      'Worked on ad slot reservation management — efficient allocation, tracking, and management of advertising inventory.',
    ],
  },
  {
    company: 'Xoriant Solutions Pvt Ltd',
    role: 'Software Engineer',
    location: 'Pune, India',
    period: 'Aug 2021 — Apr 2025',
    current: false,
    summary:
      'Entity Extraction (Generative AI). Overhauled a labor-intensive manual extraction process that consumed ~60% more time and led to ~70% longer turnaround.',
    highlights: [
      'Built responsive web apps with React.js and Redux, achieving a 70% performance improvement and 40% accessibility boost.',
      'Integrated RESTful APIs and state management, enhancing scalability by 50% and optimizing performance by 45%.',
      'Redesigned a complex UI into a clear table format, improving layout clarity ~60% and data visibility ~50%.',
      'Streamlined entity verification so users could check and update thousands of extracted entities efficiently.',
      'Conducted code reviews, gave constructive feedback, and participated actively in Agile ceremonies.',
    ],
  },
  {
    company: 'Cognizant',
    role: 'ServiceNow Intern',
    location: 'Remote',
    period: 'Mar 2021 — Jun 2021',
    current: false,
    summary:
      'Designed, implemented, and managed ServiceNow solutions to streamline business processes.',
    highlights: [
      'Certified ServiceNow System Administrator (CSA) and Certified ServiceNow Application Developer (CAD).',
      'Skilled in process automation, workflows, business rules, and system administration.',
      'Handled user management, access control, and system maintenance.',
    ],
  },
]

export const projects = [
  {
    name: 'Product Comparison Widget',
    tag: 'Amazon Stores',
    description:
      'A configurable widget letting customers compare multiple products side-by-side, improving discoverability and informed purchase decisions.',
    tech: ['React', 'TypeScript', 'Redux'],
  },
  {
    name: 'Left / Right Swipe Widget',
    tag: 'Amazon Stores',
    description:
      'Tinder-style product discovery — swipe left to discard, right to add to cart — bringing a playful, mobile-first shopping experience to storefronts.',
    tech: ['React', 'Gestures', 'Framer Motion'],
  },
  {
    name: 'Store Performance Dashboards',
    tag: 'Amazon Ads',
    description:
      'Dashboards surfacing store-level metrics, widget usage and effectiveness, and overall store performance for advertisers.',
    tech: ['React', 'D3.js', 'AgGridReact'],
  },
  {
    name: 'Ad Slot Reservation Management',
    tag: 'Amazon Ads',
    description:
      'Tooling for efficient allocation, tracking, and management of advertising inventory across storefronts at scale.',
    tech: ['React', 'TypeScript', 'REST'],
  },
  {
    name: 'Entity Extraction (GenAI)',
    tag: 'Xoriant',
    description:
      'Revamped a complex extraction UI into a clear table layout, boosting performance 70% and letting users verify thousands of entities efficiently.',
    tech: ['React', 'Redux', 'Flask'],
  },
  {
    name: 'Storefront Widget Suite',
    tag: 'Amazon Stores',
    description:
      'Video Reels, Product Finder, Category Carousel, Product Grid and more — reusable, brand-adoptable components shipped across stores.',
    tech: ['React', 'SCSS', 'Styled-Components'],
  },
]

export const education = {
  school: 'Punyashlok Ahilyadevi Holkar Solapur University',
  degree: 'Bachelor of Engineering (Computer Science)',
  year: 'July 2021',
}
