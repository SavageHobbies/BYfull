'use client';

import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function ServicePage() {
  const params = useParams();
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    return (
      <div className="min-h-screen pt-20 bg-slate-900">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold">Service not found</h1>
          <Link href="/services">
            <Button className="mt-4">Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center mb-8">
            <service.icon className="h-12 w-12 text-secondary mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              {service.title}
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-300 mb-12"
          >
            {service.description}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center mr-3 mt-1">
                      <span className="w-2 h-2 rounded-full bg-secondary" />
                    </span>
                    <span className="text-slate-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Benefits</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mr-3 mt-1">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                    </span>
                    <span className="text-slate-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 bg-white/5 backdrop-blur-sm rounded-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-4">Success Story</h2>
            <h3 className="text-xl font-medium text-secondary mb-2">
              {service.caseStudy.title}
            </h3>
            <p className="text-slate-300 mb-6">{service.caseStudy.description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-semibold mb-6">Ready to Get Started?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90">
                  Schedule Consultation
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="group"
                onClick={() => window.location.href = 'tel:+1234567890'}
              >
                <Phone className="mr-2 h-5 w-5 group-hover:text-secondary transition-colors" />
                Call Us Now
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
