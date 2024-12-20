"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';
import GridBackground from '@/components/home/services/grid-background';
import { formatDistanceToNow } from 'date-fns';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  source: string;
  sourceUrl: string;
  categories: string[];
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPosts() {
      try {
        console.log('Fetching posts...');
        const response = await fetch('/api/blog');
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Received data:', data);
        
        if (data.error) {
          throw new Error(data.error);
        }
        
        setPosts(data.posts || []);
      } catch (error) {
        console.error('Error loading posts:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden bg-slate-900">
      <GridBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-4"
          >
            Latest AI & Technology News
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Stay updated with the latest developments in AI, automation, and digital transformation
          </motion.p>
        </div>

        {error && (
          <div className="text-red-500 text-center mb-8">
            Error loading posts: {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            // Loading skeletons
            Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl h-[300px] animate-pulse">
                  <div className="h-4 bg-white/20 rounded w-3/4 mb-4" />
                  <div className="h-4 bg-white/20 rounded w-1/4 mb-6" />
                  <div className="space-y-2">
                    <div className="h-4 bg-white/20 rounded w-full" />
                    <div className="h-4 bg-white/20 rounded w-5/6" />
                    <div className="h-4 bg-white/20 rounded w-4/6" />
                  </div>
                </div>
              </motion.div>
            ))
          ) : posts.length === 0 ? (
            <div className="col-span-3 text-center text-slate-400">
              No blog posts found.
            </div>
          ) : (
            posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  <a href={`/blog/${post.slug}`} className="block h-full">
                    <div className="flex items-center space-x-2 mb-2">
                      <Tag className="h-4 w-4 text-secondary" />
                      <span className="text-secondary text-sm">
                        {post.categories?.[0] || 'AI & Technology'}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-semibold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent mb-3 line-clamp-2 hover:text-secondary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-slate-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-slate-500 text-sm mt-auto">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <time>
                          {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
                        </time>
                      </div>
                      <span className="text-secondary">
                        via {post.source}
                      </span>
                    </div>
                  </a>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}