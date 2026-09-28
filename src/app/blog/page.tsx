import React from 'react';
import type { Metadata } from 'next';
import { getAllBlogPosts } from '@/data/blogData';
import { BlogIndexClient } from '@/components/BlogIndexClient';

export const metadata: Metadata = {
  title: 'Engineering Blog & Architecture Notes | Adeseluka Toba Samuel',
  description: 'In-depth engineering deep dives on distributed systems, real-time video streaming, PgVector RAG architectures, and Linux kernel optimization by Adeseluka Toba Samuel.',
  keywords: [
    'Engineering Blog',
    'Distributed Systems',
    'AWS IVS',
    'PgVector',
    'PostgreSQL RAG',
    'Go Golang',
    'Microservices',
    'Software Architecture',
    'Fintech Idempotency',
    'Linux GNOME Shell'
  ],
  authors: [{ name: 'Adeseluka Toba Samuel' }],
  openGraph: {
    title: 'Engineering Blog & Architecture Notes | Adeseluka Toba Samuel',
    description: 'In-depth engineering deep dives on distributed systems, real-time video streaming, PgVector RAG architectures, and Linux kernel optimization.',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="flex flex-col min-h-screen">
      <BlogIndexClient initialPosts={posts} />
    </div>
  );
}
