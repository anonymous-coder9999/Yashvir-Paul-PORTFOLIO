export type RoleCategory =
  | 'Web Developer'
  | 'UI/UX Designer'
  | 'AI Automations Maker'
  | 'Data Analyst'
  | 'Growth & SEO'
  | 'Global Scaling';

export interface StartupItem {
  id: string;
  name: string;
  tagline: string;
  role: string;
  period: string;
  status: 'Active & Scaling' | 'Venture Live' | 'Active Production';
  description: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  techStack: string[];
  link?: string;
  category: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: RoleCategory | string;
  description: string;
  impact: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics?: { label: string; value: string };
  imagePlaceholder?: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: RoleCategory | string;
  proficiency: number;
  experience: string;
  tools: string[];
  description: string;
}

export interface TimelineItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'startup' | 'experience' | 'education';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface GitHubStats {
  totalCommits: number;
  currentStreakDays: number;
  starsEarned: number;
  pullRequests: number;
  topLanguages: { name: string; percentage: number; color: string }[];
  featuredRepos: {
    name: string;
    description: string;
    stars: number;
    forks: number;
    language: string;
    url: string;
  }[];
  contributions: { date: string; count: number }[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  views: number;
  likes: number;
  author: string;
}
