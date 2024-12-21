"use client";

import { motion } from 'framer-motion';
import { ServiceGrid } from '@/components/services/service-grid';

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Our Services
            </h1>
            <p className="text-xl text-slate-300">
              Comprehensive business solutions to help you grow and succeed in the digital age
            </p>
          </div>

          <ServiceGrid />
        </div>
      </motion.div>
    </div>
  );
}