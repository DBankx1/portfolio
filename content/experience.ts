export type Role = {
  id: string;
  company: string;
  title: string;
  location: string;
  period: string;
  planet: {
    /** Tailwind gradient classes for the planet sphere */
    gradient: string;
    /** Accent used for the orbit ring + glow */
    ring: "cyan" | "violet" | "amber" | "rose" | "emerald";
  };
  /** Industry identity shown on the mission-briefing panel */
  domain: {
    label: string;
    icon: string;
  };
  summary: string;
  highlights: string[];
  stack: string[];
};

export const professionalRoles: Role[] = [
  {
    id: "flynn",
    company: "Flynn",
    title: "Senior Software Engineer (Distributed Systems)",
    location: "Toronto, Ontario",
    period: "Oct 2023 to Present",
    planet: { gradient: "from-cyan-300 via-sky-500 to-blue-800", ring: "cyan" },
    domain: { label: "Construction Tech", icon: "🏗️" },
    summary:
      "North America’s leading building envelope trade contractor. Led distributed systems work on a multi-tenant platform serving thousands of field technicians across North America, improving scalability and operational reliability.",
    highlights: [
      "Led the migration from single-tenant to multi-tenant architecture with database-level tenant isolation, achieving zero cross-tenant data leakage and 100% data integrity. Delivered in 3 months to unblock onboarding of acquired companies.",
      "Delivered a real-time technician scheduling module with event-driven architecture (.NET, Kafka, Angular, WebSockets) supporting ~3K users across 20 time zones, cutting logistics overhead by 30%.",
      "Optimized high-traffic APIs (12K+ req/s) and standardized monitoring and alerting, cutting p95 latency by 54%, on-call incidents by 21%, and response times by 15%.",
      "Restored and containerized 6 legacy .NET CI/CD pipelines with Azure DevOps and Pulumi, achieving near-zero downtime and 75% faster recovery.",
    ],
    stack: [
      ".NET",
      "Kafka",
      "Angular",
      "TypeScript",
      "Azure DevOps",
      "Pulumi",
      "New Relic",
      "Sumo Logic",
      "Pager Duty",
      "Power Automate",
      "AWS",
      "MSSQL",
      "Dynamics 365",
      "Python",
      "Firebase",
    ],
  },
  {
    id: "procom",
    company: "Procom",
    title: "Backend Application Developer II",
    location: "Toronto, Ontario",
    period: "Feb 2022 to Oct 2023",
    planet: {
      gradient: "from-violet-300 via-purple-500 to-indigo-900",
      ring: "violet",
    },
    domain: { label: "Talent & Staffing", icon: "🤝" },
    summary:
      "Leading IT staffing and consulting firm. Built event-driven ingestion pipelines and production AI tooling for one of Canada’s largest staffing platforms, improving data flow and enabling scalable talent matching systems.",
    highlights: [
      "Designed a high-availability, event-driven .NET microservice ingesting 400K+ job postings from Bullhorn ATS, eliminating 90% of manual data entry through retry and batching strategies for fault tolerance.",
      "Built a production-grade AI Resume Copilot with LangChain and OpenAI LLMs (RAG pipeline with embeddings), driving an 8% increase in successful applications at scale.",
      "Re-architected 4 microservices with a collection-level in-memory caching layer (configurable TTL and eviction), improving overall performance by 14% under high traffic.",
      "Mentored and led code reviews for five engineers across the U.S. and Canada, increasing feature delivery velocity by 30%.",
    ],
    stack: [
      ".NET",
      "Azure",
      "Cosmos DB",
      "Azure Devops",
      "LangChain",
      "OpenAI",
      "Redis",
      "Python",
      "Bullhorn ATS",
      "Syncfusion",
    ],
  },
  {
    id: "pronti",
    company: "Pronti AI",
    title: "ML / Backend Software Engineer II",
    location: "Kitchener, Ontario",
    period: "Jan 2021 to Feb 2022",
    planet: {
      gradient: "from-emerald-300 via-teal-500 to-cyan-900",
      ring: "emerald",
    },
    domain: { label: "Fashion AI", icon: "👗" },
    summary:
      "AI-powered personal styling and digital wardrobe mobile app. Scaled ML infrastructure and computer vision pipelines enabling outfit generation from user wardrobes, supporting rapid growth during a viral user acquisition spike.",
    highlights: [
      "Maintained 99.5%+ uptime during viral growth from 352K to 868K+ users by scaling EKS clusters, auto-scaling container workloads, and hardening monitoring and alerting.",
      "Developed 8 production computer-vision pipelines (YOLO, ResNet), improving clothing detection and classification accuracy by 75%.",
      "Built an OCR-powered Chrome extension (GCP Vision API + Flask) extracting structured clothing data from email receipts, reaching 9K+ downloads.",
      "Orchestrated a zero-downtime AWS → GCP migration (12TB via RClone, GCP Database Migration Service, Cloud DNS), cutting infrastructure costs by ~$6,540/month.",
    ],
    stack: [
      "Python",
      "Flask",
      "PyTorch",
      "MixPanel",
      "IBM Cloud",
      "GCP",
      "AWS",
      "Docker",
      "Kubernetes",
      "MySQL",
      "Vespa",
      "Rclone",
      "ResNet",
      "OpenCV",
      "Jenkins",
      "MLFlow",
      "Selenium",
      "RabbitMQ",
      "Firebase",
      "Shopify",
      "Rakuten",
    ],
  },
  {
    id: "talk360",
    company: "Talk360",
    title: "Back-end Engineer (Payment Services)",
    location: "Remote",
    period: "Feb 2020 to Jan 2021",
    planet: {
      gradient: "from-amber-200 via-orange-400 to-rose-800",
      ring: "amber",
    },
    domain: { label: "VoIP & Payments", icon: "📞" },
    summary:
      "International VoIP calling platform enabling affordable global voice communication. Engineered fault-tolerant payment infrastructure to support high-volume international transactions with improved reliability and scalability.",
    highlights: [
      "Implemented a fault-tolerant PostgreSQL state machine with transactional consistency and idempotent workflows for payment ledgers, cutting mismatch errors by 99%.",
      "Integrated Onfido KYC and HMAC-based URL signing with expiry and replay protection, reducing fraud and tampering risk across high-volume transactions.",
      "Integrated PayPal, Adyen, Stripe, and Paytm behind a real-time weighted ranking engine (location, prior usage, currency), lifting payment completion rates by 17%.",
    ],
    stack: [
      "Nest.js",
      "PostgreSQL",
      "Marble.Js",
      "Stripe",
      "Adyen",
      "AWS",
      "Onfido",
      "PayPal",
      "Paytm",
      "HMAC",
      "KYC",
      "Docker",
      "Redis",
      "CircleCI",
      "Sentry",
    ],
  },
  {
    id: "talenture",
    company: "Talenture Group",
    title: "Frontend Engineer (Intern → Junior)",
    location: "Remote",
    period: "Feb 2018 to Jan 2020",
    planet: {
      gradient: "from-rose-300 via-pink-500 to-purple-900",
      ring: "rose",
    },
    domain: { label: "Recruitment Tech", icon: "🛫" },
    summary:
      "Where the journey lifted off, building the frontend for a recruitment platform.",
    highlights: [
      "Developed a React.js frontend for a recruitment platform, improving SEO and performance, building reusable component libraries, and delivering CMS-driven landing pages that supported scalable content and user growth.",
    ],
    stack: [
      "React",
      "JavaScript",
      "Contentful",
      "TailwindCSS",
      "Zoom API",
      "Mux",
      "Heroku",
    ],
  },
];

export const contractRoles: Role[] = [
  {
    id: "koraplay",
    company: "Koraplay",
    title: "Front-end Software Engineer",
    location: "Remote",
    period: "Jul 2021 to Dec 2021",
    planet: {
      gradient: "from-fuchsia-300 via-purple-500 to-violet-900",
      ring: "violet",
    },
    domain: { label: "Web3 Social Video", icon: "🎬" },
    summary:
      "A Web3-powered short-form video social network that enables creators and users to monetize their content and cash out their earnings instantly",
    highlights: [
      "Led efforts with the frontend team to implement mobile responsiveness across the application, driving a 25% increase in mobile user engagement.",
      "Engineered seamless dark-mode and light-mode theming across the UI, lifting user satisfaction by 30% and drawing consistently positive feedback.",
      "Led technical SEO enhancements by implementing Open Graph and structured metadata, increasing search visibility, enriching social media link previews, and contributing to a 55% improvement in search rankings and organic traffic growth.",
      "Designed and built a high-performance, cross-media viewer supporting images, videos, and documents with seamless playback resumption, reducing user friction and improving content engagement.",
    ],
    stack: [
      "React",
      "Next.js",
      "MetaMask",
      "TypeScript",
      "Chakra UI",
      "Puppeteer",
      "Auth0",
      "Web3.js",
      "WebSockets",
      "Server-Sent Events",
      "AWS",
      "SEO",
      "Google Tag Manager",
      "Google Analytics",
      "Figma",
      "CloudFront",
    ],
  },
  {
    id: "socketworks",
    company: "Socket Works",
    title: "Front-end Software Engineer",
    location: "Remote",
    period: "Feb 2021 to May 2021",
    planet: {
      gradient: "from-sky-300 via-cyan-500 to-blue-900",
      ring: "cyan",
    },
    domain: { label: "EdTech", icon: "🎓" },
    summary:
      "An education world, making a university learning portal fast and welcoming for every student.",
    highlights: [
      "Implemented frontend performance optimizations across the portal, including image optimization, lazy loading, and bundle-size reduction, improving load times by 34%.",
      "Architected and delivered accessibility, configuration, and UX improvements across the learning portal, enhancing usability, inclusivity, and overall student experience while aligning with modern frontend best practices.",
      "Collaborated with backend and platform engineers to deliver a multi-tenant architecture capable of supporting multiple university deployments at scale.",
    ],
    stack: [
      "Vue.js",
      "Okta",
      "GraphQL",
      "PrimeVue",
      "Pinia",
      "Vite",
      "AWS",
      "Docker",
      "Jest",
      "Cypress",
      "Sentry",
      "Tanstack",
    ],
  },
  {
    id: "capitack",
    company: "Capitack",
    title: "Full-Stack Software Engineer",
    location: "Remote",
    period: "Mar 2019 to Dec 2019",
    planet: {
      gradient: "from-amber-200 via-yellow-400 to-orange-800",
      ring: "amber",
    },
    domain: { label: "Crypto Exchange", icon: "🪙" },
    summary:
      "A non-custodial cryptocurrency exchange platform that allows users to buy, sell, and swap digital assets without the platform holding custody of their funds.",
    highlights: [
      "Partnered with product and business stakeholders to design and implement algorithmic trading strategies, increasing trading efficiency by 25% and contributing to measurable revenue growth.",
      "Pioneered the transition from a monolithic architecture to a microservices-based serverless solution on AWS, cutting costs by 30% and improving application flexibility.",
      "Partnered with designers to create engaging UI elements with seamless graphics and navigation, improving user experience across web applications.",
      "Worked cross-functionally with mobile developers to build mobile-responsive websites, increasing mobile engagement and keeping the brand experience consistent across platforms.",
    ],
    stack: [
      "AWS",
      "Serverless",
      "Microservices",
      "TypeScript",
      "Redis",
      "Trello",
      "Figma",
      "Python",
      "Kafka",
      "PostgreSQL",
      "MongoDB",
      "xe API",
      "HashiCorp Vault",
      "Stripe",
      "Auth0",
    ],
  },
];

export const education = [
  {
    school: "Conestoga College",
    credential: "Post-Graduate Diploma, Web Design & Development",
    location: "Waterloo, ON, Canada",
    period: "2017 to 2018",
  },
  {
    school: "De Montfort University",
    credential: "B.Sc. Computer Science",
    location: "Leicester, UK",
    period: "2014 to 2016",
  },
];
