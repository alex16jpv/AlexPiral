export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  logo?: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  isWIP: boolean;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin?: string;
  website?: string;
}

export interface PersonalData {
  name: string;
  role: string;
  bio: string;
  contact: ContactInfo;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
}