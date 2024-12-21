"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-4 right-4 z-50 bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 max-w-sm border border-slate-200 dark:border-slate-700"
        >
          <button
            onClick={handleDismiss}
            className="absolute top-2 right-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
          >
            <X className="h-4 w-4" />
          </button>
          <h3 className="text-lg font-semibold mb-2">Ready to Transform Your Business?</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
            Get a free consultation and learn how AI can reduce your operational costs by 60%.
          </p>
          <div className="flex gap-2">
            <Button
              className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90 text-white"
              onClick={() => window.location.href = '/contact'}
            >
              Book Free Consultation
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
