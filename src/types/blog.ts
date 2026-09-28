export type BlogCategory = 
  | 'Distributed Systems'
  | 'AI & LLMs'
  | 'Cloud & DevOps'
  | 'Databases & Storage'
  | 'Linux & Systems'
  | 'Full-Stack';

export type BlogDifficulty = 
  | 'Deep Dive' 
  | 'Architecture Design' 
  | 'Practical Guide' 
  | 'Post-Mortem' 
  | 'Systems Benchmark';

export interface BlogCallout {
  type: 'info' | 'warning' | 'tip' | 'architecture' | 'insight';
  title: string;
  message: string;
}

export interface BlogCodeSnippet {
  language: string;
  filename?: string;
  code: string;
  highlightLines?: number[];
  caption?: string;
}

export interface BlogSectionBlock {
  id: string;
  heading: string;
  level?: 2 | 3;
  paragraphs: string[];
  callout?: BlogCallout;
  codeSnippet?: BlogCodeSnippet;
  diagramMermaid?: string;
  bulletPoints?: string[];
  comparisonTable?: {
    headers: string[];
    rows: string[][];
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;
  category: BlogCategory;
  difficulty: BlogDifficulty;
  tags: string[];
  featured?: boolean;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
    github?: string;
    twitter?: string;
  };
  metricsHighlight?: {
    label: string;
    value: string;
    subtext: string;
  }[];
  keyTakeaways: string[];
  sections: BlogSectionBlock[];
  relatedSlugs?: string[];
}
