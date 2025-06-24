import type { PersonalData, WorkExperience, Project, SEOData } from "../types";

export const personalData: PersonalData = {
  name: "Alexander Valencia",
  role: "Backend Developer",
  bio: "Passionate backend developer with frontend experience, specializing in scalable systems, clean code practices, and modern web technologies. I build robust applications that solve real-world problems.",
  contact: {
    email: "alexander@alexpiral.com",
    github: "https://github.com/alexpiral",
    linkedin: "https://linkedin.com/in/alexander-valencia",
    website: "https://www.alexpiral.com",
  },
};

export const workExperiences: WorkExperience[] = [
  {
    id: "company-1",
    company: "Tech Company",
    role: "Senior Backend Developer",
    logo: "/images/company-logo-placeholder.svg",
    startDate: "2022-01-01",
    description:
      "Led backend development for high-traffic web applications, focusing on API design, database optimization, and system architecture.",
    technologies: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
    achievements: [
      "Improved API response times by 40% through database optimization and caching strategies",
      "Designed and implemented microservices architecture serving 100k+ daily active users",
      "Mentored junior developers and established code review processes",
    ],
  },
  {
    id: "company-2",
    company: "Startup Inc",
    role: "Full Stack Developer",
    logo: "/images/company-logo-placeholder.svg",
    startDate: "2020-06-01",
    endDate: "2021-12-31",
    description:
      "Developed full-stack web applications from conception to deployment, working closely with product and design teams.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "GraphQL", "Jest"],
    achievements: [
      "Built MVP that secured $2M in Series A funding",
      "Implemented automated testing pipeline reducing bugs by 60%",
      "Created responsive frontend interfaces with 98% cross-browser compatibility",
    ],
  },
  {
    id: "company-3",
    company: "Digital Agency",
    role: "Backend Developer",
    logo: "/images/company-logo-placeholder.svg",
    startDate: "2019-01-01",
    endDate: "2020-05-31",
    description:
      "Developed scalable backend solutions for client projects, focusing on API development and database design.",
    technologies: ["Python", "Django", "PostgreSQL", "Redis", "Celery", "AWS"],
    achievements: [
      "Built REST APIs serving 50+ client applications",
      "Optimized database queries reducing load times by 35%",
      "Implemented caching strategies improving system performance",
    ],
  },
  {
    id: "company-4",
    company: "Freelance Developer",
    role: "Full Stack Developer",
    logo: "/images/company-logo-placeholder.svg",
    startDate: "2018-06-01",
    endDate: "2018-12-31",
    description:
      "Provided full-stack development services for small businesses and startups, delivering custom web solutions.",
    technologies: ["JavaScript", "React", "Node.js", "MySQL", "HTML", "CSS"],
    achievements: [
      "Delivered 8+ custom web applications for diverse clients",
      "Maintained 100% client satisfaction rating",
      "Established efficient project delivery workflows",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-commerce API",
    description:
      "RESTful API for e-commerce platform with user authentication, product management, and payment processing. Built with Node.js and PostgreSQL.",
    image: "/images/project-placeholder.svg",
    githubUrl: "https://github.com/alexpiral/ecommerce-api",
    liveUrl: "https://api.example.com",
    technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Stripe API"],
    isWIP: false,
  },
  {
    id: "project-2",
    title: "Task Management System",
    description:
      "Full-stack task management application with real-time updates, team collaboration features, and advanced filtering capabilities.",
    githubUrl: "https://github.com/alexpiral/task-manager",
    liveUrl: "https://tasks.example.com",
    technologies: ["React", "TypeScript", "Node.js", "Socket.io", "MongoDB"],
    isWIP: false,
  },
  {
    id: "project-3",
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard for monitoring application metrics and user behavior. Features custom charts and automated reporting.",
    githubUrl: "https://github.com/alexpiral/analytics-dashboard",
    technologies: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "Chart.js"],
    isWIP: true,
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
