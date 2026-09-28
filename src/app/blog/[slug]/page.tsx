import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostBySlug } from '@/data/blogData';
import { BlogArticleView } from '@/components/BlogArticleView';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Engineering Blog',
      description: 'The requested technical engineering article could not be found.',
    };
  }

  return {
    title: `${post.title} | Adeseluka Toba Samuel`,
    description: post.subtitle || post.excerpt,
    keywords: [...post.tags, post.category, 'Distributed Systems', 'Software Engineering'],
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.subtitle || post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      tags: post.tags,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.subtitle || post.excerpt,
      creator: '@smartraysam',
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Find related posts (other posts in same category, or fallback to other recent posts)
  const allPosts = getAllBlogPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 1))
    .slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <BlogArticleView post={post} relatedPosts={relatedPosts} />
    </div>
  );
}
