import type { PersonalData, WorkExperience, Project, SEOData } from "../types";

export const personalData: PersonalData = {
  name: "Alexander Valencia",
  role: "Backend Developer",
  bio: "Passionate backend developer with frontend experience, specializing in scalable systems, clean code practices, and modern web technologies. I build robust applications that solve real-world problems.",
  contact: {
    email: "contactportfolio@alexpiral.com",
    github: "https://github.com/alex16jpv",
    linkedin: "https://www.linkedin.com/in/alex16jpv/",
    website: "https://www.alexpiral.com",
  },
};

export const workExperiences: WorkExperience[] = [
  {
    id: "blossom",
    company: "Blossom",
    role: "Backend Developer",
    logo: "/images/blossom-logo.svg",
    startDate: "2023-02-01 00:00:00",
    description:
      "Developed online banking software using cutting-edge technologies, including Node.js, GraphQL, and PostgreSQL. Proficient in crafting complex database queries and optimizing them to enhance performance. Expertise in utilizing the Sequelize ORM for efficient data management.",
    technologies: ["Node.js", "GraphQL", "MongoDB", "PostgreSQL", "Sequelize"],
    achievements: [
      "Developed secure online banking software with advanced security protocols",
      "Optimized complex database queries improving performance by 35%",
      "Implemented GraphQL APIs for efficient data retrieval and management",
    ],
  },
  {
    id: "hellobuild",
    company: "HelloBuild",
    role: "Full Stack Developer",
    logo: "/images/hellobuild-logo.svg",
    startDate: "2021-07-01 00:00:00",
    endDate: "2023-02-28 23:59:59",
    description:
      "Collaborated on projects for clients such as Identifee and Homecu, facilitating the development of scalable platforms. Utilized technologies including Node.js, React.js, CSS, and SQL databases (specifically PostgreSQL). Proficient in handling queries and ORM tools like Sequelize. Proficient in API development and experienced in utilizing GraphQL for efficient data retrieval.",
    technologies: [
      "Node.js",
      "React",
      "CSS",
      "GraphQL",
      "SQL",
      "PostgreSQL",
      "Sequelize",
    ],
    achievements: [
      "Developed scalable platforms for major clients including Identifee and Homecu",
      "Built responsive frontend interfaces with modern React.js practices",
      "Implemented efficient GraphQL APIs for optimal data retrieval",
    ],
  },
  {
    id: "fluvip",
    company: "Fluvip",
    role: "Full Stack Developer",
    logo: "/images/fluvip-logo.svg",
    startDate: "2021-01-01 00:00:00",
    endDate: "2021-07-31 23:59:59",
    description:
      "Contributed to the development of a platform connecting brands with top social media influencers across various platforms (Twitter, Facebook, Instagram, YouTube, Vine, and Snapchat). Primarily focused on React.js and Node.js development, leveraging AWS services like CodePipeline and Lambda to build a robust platform for seamless brand-influencer collaboration.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "React",
      "CSS",
      "AWS",
      "Lambda",
      "CodePipeline",
    ],
    achievements: [
      "Built influencer-brand connection platform supporting multiple social media platforms",
      "Implemented AWS serverless architecture with Lambda and CodePipeline",
      "Facilitated seamless collaboration between brands and social media influencers",
    ],
  },
  {
    id: "atlanticsoft",
    company: "Atlanticsoft",
    role: "Backend Developer",
    logo: "/images/atlanticsoft-logo.svg",
    startDate: "2018-12-01 00:00:00",
    endDate: "2021-01-31 23:59:59",
    description:
      "Developed a Google Chrome extension to automate dropshipping processes for major e-commerce platforms such as Amazon, eBay, and Best Buy. Successfully processed thousands of orders within minutes. Utilized technologies including Node.js, Python, and AWS services such as Lambda, ECS, and queues to streamline and enhance the dropshipping workflow.",
    technologies: [
      "Node.js",
      "Python",
      "AWS",
      "Lambda",
      "ECS",
      "Chrome Extension",
    ],
    achievements: [
      "Developed Chrome extension automating dropshipping for major e-commerce platforms",
      "Successfully processed thousands of orders within minutes using automated systems",
      "Implemented scalable AWS architecture with Lambda, ECS, and queue services",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "4x1000-calculator",
    title: "Calculadora del 4x1000",
    description:
      "Financial calculator for Colombia's 4x1000 tax. A web application that helps users calculate the financial transaction tax (4 per thousand) with an intuitive interface and accurate calculations.",
    liveUrl: "https://calculadora4x1000.alexpiral.com/",
    githubUrl: "https://github.com/alex16jpv/calculadora-4x1000",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    isWIP: false,
  },
  {
    id: "calculators-hub",
    title: "Hub de Calculadoras",
    description:
      "A collection of over 20 free calculation tools, organized to support everyday tasks.",
    liveUrl: "https://calculadoras.alexpiral.com/",
    githubUrl: "https://github.com/alex16jpv/calculadoras",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    isWIP: false,
  },
];

export const seoData: SEOData = {
  title: "Alexander Valencia - Backend Developer Portfolio",
  description:
    "Professional portfolio of Alexander Valencia, a skilled backend developer with frontend experience. Showcasing expertise in Node.js, TypeScript, database design, and modern web technologies.",
  keywords: [
    "Alexander Valencia",
    "Backend Developer",
    "Full Stack Developer",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "API Development",
    "Web Development",
    "Software Engineer",
    "Portfolio",
  ],
  ogImage: "/images/og-image.jpg",
};
