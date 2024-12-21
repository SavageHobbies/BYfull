'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';

export const metadata = {
  title: 'Free AI Implementation Guide | BY1.net',
  description: 'Get your comprehensive guide to successfully implementing AI in your business. Learn ROI calculation, implementation steps, and avoid common pitfalls.',
  openGraph: {
    title: 'Free AI Implementation Guide | BY1.net',
    description: 'Get your comprehensive guide to successfully implementing AI in your business. Learn ROI calculation, implementation steps, and avoid common pitfalls.',
    type: 'website',
    url: 'https://by1.net/ai-guide',
  },
};

export default function AIGuidePage() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Add your email subscription logic here
      toast({
        title: "Success!",
        description: "Your AI Implementation Guide is on its way to your inbox!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-slate-900">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              AI Implementation Guide
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Transform Your Business with Our Comprehensive AI Guide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">What You'll Learn:</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">ROI Calculation</h3>
                    <p className="text-slate-400">Learn how to calculate and project ROI for AI implementations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">Implementation Roadmap</h3>
                    <p className="text-slate-400">Step-by-step guide to implementing AI in your business</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-1">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                  </span>
                  <div>
                    <h3 className="font-semibold mb-1">Common Pitfalls</h3>
                    <p className="text-slate-400">Avoid costly mistakes and optimize your AI strategy</p>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">Get Your Free Guide</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90"
                >
                  Download Guide
                </Button>
              </form>
              <p className="text-xs text-slate-400 mt-4">
                By downloading this guide, you agree to receive occasional updates and marketing emails. You can unsubscribe at any time.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-semibold mb-8 text-center">What Others Are Saying</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CTO, TechCorp",
                  quote: "This guide helped us avoid costly mistakes in our AI implementation journey.",
                },
                {
                  name: "Michael Chen",
                  role: "Operations Director, InnovateCo",
                  quote: "The ROI calculator alone saved us months of research and planning.",
                },
                {
                  name: "Emily Rodriguez",
                  role: "Digital Transformation Lead, FutureNow",
                  quote: "A must-read for any business looking to implement AI solutions.",
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6"
                >
                  <p className="text-slate-300 mb-4">&quot;{testimonial.quote}&quot;</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
