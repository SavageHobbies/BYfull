"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import NeuralNetwork from '@/components/home/neural-network';
import { useChat } from '@/hooks/use-chat';

export default function HeroSection() {
  const { openChat } = useChat();

  return (
    <section className="h-[600px] sm:h-[700px] relative overflow-hidden bg-gradient-to-b from-primary to-primary-dark dark:from-slate-900 dark:to-slate-800">
      <div className="absolute inset-0 h-full">
        <NeuralNetwork />
      </div>
      <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-4 md:mb-6"
          >
            Transforming Business Through{' '}
            <span className="text-accent">AI & Automation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-200 mb-6 md:mb-8"
          >
            BY1 Network: Your Partner in Digital Evolution
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary-dark text-white text-base md:text-lg px-6 md:px-8 py-4 md:py-6"
              onClick={openChat}
            >
              Start Your AI Journey
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}