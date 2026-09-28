import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { TechRadarSection } from '../components/TechRadarSection';
import { AboutSection } from '../components/AboutSection';
import { AIAssistantDrawer } from '../components/AIAssistantDrawer';
import { BlogSection } from '../components/BlogSection';
import { 
  engineerBio, 
  portfolioProjects, 
  learningRadar, 
  tilNotes 
} from '../data/portfolioData';
import { getAllBlogPosts } from '../data/blogData';

export default function HomePage() {
  const blogPosts = getAllBlogPosts();

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Hero & Quick Pitch */}
      <HeroSection bio={engineerBio} />

      {/* Production Projects & Deep Dive Architectures */}
      <ProjectsGrid initialProjects={portfolioProjects} />

      {/* Comprehensive Engineering Profile & Career Timeline */}
      <AboutSection bio={engineerBio} />

      {/* Engineering Blog & Technical Writing Dispatches */}
      <BlogSection posts={blogPosts} />

      {/* Continuous Learning Radar & Today I Learned */}
      <TechRadarSection 
        radarItems={learningRadar} 
        tilNotes={tilNotes} 
      />

      {/* Embedded AI Engineering Agent Floating Drawer */}
      <AIAssistantDrawer />
    </div>
  );
}
