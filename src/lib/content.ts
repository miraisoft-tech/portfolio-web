import { portfolioProjects, learningRadar, tilNotes, engineerBio } from '../data/portfolioData';
import { Project, ProjectCategory, VisibilityType } from '../types/portfolio';

export function getAllProjects(options?: {
  category?: ProjectCategory | 'All';
  visibility?: VisibilityType | 'all';
  searchQuery?: string;
}): Project[] {
  let list = [...portfolioProjects];

  if (options?.category && options.category !== 'All') {
    list = list.filter(p => p.category === options.category);
  }

  if (options?.visibility && options.visibility !== 'all') {
    list = list.filter(p => p.visibility === options.visibility);
  }

  if (options?.searchQuery) {
    const q = options.searchQuery.toLowerCase();
    list = list.filter(p => 
      p.title.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.overview.toLowerCase().includes(q) ||
      p.techStack.some(t => t.name.toLowerCase().includes(q))
    );
  }

  return list;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return portfolioProjects.find(p => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return portfolioProjects.filter(p => p.featured);
}

export function getLearningRadar() {
  return learningRadar;
}

export function getTILNotes() {
  return tilNotes;
}

export function getEngineerBio() {
  return engineerBio;
}
