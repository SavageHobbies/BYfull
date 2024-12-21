"use client";

import { motion } from 'framer-motion';
import GridBackground from './grid-background';
import { services } from '@/data/services';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ServicesSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-slate-900">
      <GridBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Comprehensive business solutions powered by cutting-edge technology
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <service.icon className="h-8 w-8 text-secondary mr-3" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-slate-300 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={`/services/${service.id}`}>
                <Button
                  className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90"
            >
              Schedule a Free Consultation
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}