"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import GridBackground from '@/components/home/services/grid-background';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  source: string;
  sourceUrl: string;
  categories: string[];
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPost() {
      try {
        const response = await fetch(`/api/blog/${params.slug}`);
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Received data:', data);
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        setPost(data.post);
      } catch (error) {
        console.error('Error loading post:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [params.slug]);

  if (loading) {
    return (
      <section className="relative py-20 overflow-hidden bg-slate-900">
        <GridBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="animate-pulse">
            <div className="h-8 bg-white/10 rounded w-3/4 mb-4" />
            <div className="h-4 bg-white/10 rounded w-1/4 mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-white/10 rounded w-full" />
              <div className="h-4 bg-white/10 rounded w-5/6" />
              <div className="h-4 bg-white/10 rounded w-4/6" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !post) {
    return (
      <section className="relative py-20 overflow-hidden bg-slate-900">
        <GridBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Post Not Found</h1>
          <Link
            href="/blog"
            className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 overflow-hidden bg-slate-900">
      <GridBackground />
      <div className="container mx-auto px-4 relative z-10">
        <Link
          href="/blog"
          className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Tag className="h-4 w-4 text-secondary" />
              <span className="text-secondary text-sm">
                {post.categories?.[0] || 'AI & Technology'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4">
              {post.title}
            </h1>

            <div className="flex items-center justify-between text-slate-400 text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <time>
                  {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
                </time>
              </div>
              <a
                href={post.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 transition-colors"
              >
                via {post.source}
              </a>
            </div>
          </header>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-slate-300 leading-relaxed">
              {post.excerpt}
            </p>
            <p className="mt-4">
              <a
                href={post.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-secondary/80 transition-colors"
              >
                Read full article at {post.source} →
              </a>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
