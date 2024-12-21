"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email subscription logic
    toast({
      title: "Success!",
      description: "Your free AI Implementation Guide is on its way to your inbox!",
    });
    setEmail('');
  };

  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark dark:from-slate-900 dark:to-slate-800 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Get Your Free AI Implementation Guide
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-200 mb-4"
          >
            Learn how to successfully implement AI in your business with our comprehensive guide:
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-left max-w-md mx-auto mt-4 mb-8 space-y-2"
          >
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
              ROI calculation templates
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
              Implementation checklist
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
              Common pitfalls to avoid
            </li>
            <li className="flex items-center">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
              Case studies of successful implementations
            </li>
          </motion.ul>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your business email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white"
            >
              Get Free Guide
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
