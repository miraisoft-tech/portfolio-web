export type ProjectCategory = 
  | 'Distributed Systems'
  | 'Full-Stack'
  | 'Cloud & DevOps'
  | 'AI & Machine Learning';

export type VisibilityType = 'public' | 'private';

export interface ProjectMetric {
  label: string;
  value: string;
  trend?: string;
}

export interface TechStackItem {
  name: string;
  category: 'language' | 'framework' | 'database' | 'infra' | 'tool';
  highlight?: boolean;
}

export interface ArchitectureDecisionRecord {
  title: string;
  context: string;
  decision: string;
  tradeOffs: string;
}

export interface EngineeringChallenge {
  problem: string;
  solution: string;
  outcome: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  featured: boolean;
  category: ProjectCategory;
  visibility: VisibilityType;
  date: string;
  version: string;
  
  // Fast Recruiter Scan
  metrics: ProjectMetric[];
  techStack: TechStackItem[];
  
  // Links
  productionUrl?: string;
  githubUrl?: string;
  ndaNotice?: string; // Clear disclaimer if private repository
  
  // Deep-Dive Technical Case Study
  architecture: {
    summary: string;
    diagramMermaid?: string;
    adrs: ArchitectureDecisionRecord[];
    challenges: EngineeringChallenge[];
  };
  
  // Embedded Documentation
  readmeContent: string;
  
  // Continuous Learning & Evolution
  learnedSkills: string[];
}

export type RadarStatus = 'mastered' | 'experimenting' | 'researching';

export interface LearningRadarItem {
  id: string;
  name: string;
  category: 'Languages & Runtimes' | 'Databases & Storage' | 'Distributed Systems' | 'AI & Agents' | 'Cloud & Infra';
  status: RadarStatus;
  description: string;
  level: number; // 1 to 100
  recentMilestone: string;
}

export interface TILNote {
  id: string;
  date: string;
  title: string;
  tags: string[];
  summary: string;
  codeSnippet?: string;
  impact: string;
}

export interface CareerHighlight {
  label: string;
  value: string;
  detail: string;
}

export interface PhilosophyCard {
  title: string;
  description: string;
  iconName: string;
}

export interface TechMatrixGroup {
  category: string;
  skills: {
    name: string;
    level: 'Expert' | 'Proficient' | 'Exploring';
    context: string;
  }[];
}

export interface EngineerBio {
  name: string;
  role: string;
  tagline: string;
  summary: string;
  location: string;
  availabilityStatus: string;
  highlights: CareerHighlight[];
  philosophy: PhilosophyCard[];
  techMatrix: TechMatrixGroup[];
  targetRoles: string[];
  socials: {
    github: string;
    linkedin: string;
    email: string;
    calendarUrl?: string;
  };
}
