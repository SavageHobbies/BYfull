'use client';

import { motion } from 'framer-motion';
import { PricingSection } from '@/components/pricing/pricing-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Flexible Solutions for Your Business
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Choose from our carefully crafted packages or get a custom solution tailored to your needs
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Schedule Consultation
                <Calendar className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Pricing Section */}
        <PricingSection />

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              {
                q: 'How do you determine pricing for custom solutions?',
                a: 'Our custom solution pricing is based on project scope, complexity, and your specific business needs. We provide detailed quotes after understanding your requirements during a consultation.'
              },
              {
                q: 'Can I upgrade my package later?',
                a: 'Yes! Our packages are designed to be flexible. You can upgrade at any time as your business grows and needs change.'
              },
              {
                q: 'Do you offer month-to-month contracts?',
                a: 'Yes, we offer flexible contract terms. While we recommend longer commitments for optimal results, we understand the need for flexibility.'
              },
              {
                q: 'What's included in the initial setup?',
                a: 'Initial setup typically includes platform configuration, basic training, and implementation of core features. Specific details vary by package and will be outlined in your proposal.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-slate-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center max-w-2xl mx-auto mt-20"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 mb-8">
            Book a consultation to discuss your needs and find the perfect solution for your business.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90"
            >
              Schedule Consultation
              <Calendar className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
