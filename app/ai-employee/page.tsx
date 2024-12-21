'use client';

import { motion } from 'framer-motion';
import { aiEmployeeFeatures } from '@/data/ai-employee';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AIEmployeePage() {
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
            Meet Your AI Employee
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            A complete AI workforce solution that handles everything from customer service to content creation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button size="lg" variant="outline">
                Request Demo
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {aiEmployeeFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300 flex flex-col min-h-[400px]"
            >
              <div className="flex-1">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-secondary mr-3" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-slate-300 mb-6">{feature.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2 text-secondary">Key Features</h4>
                    <ul className="space-y-2">
                      {feature.features.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start text-sm text-slate-400">
                          <CheckCircle2 className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-6">
                <Link href={`/ai-employee/${feature.id}`} className="block w-full">
                  <Button
                    className="w-full bg-gradient-to-r from-secondary/20 to-accent/20 hover:from-secondary/30 hover:to-accent/30"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-8">Why Choose AI Employee?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '24/7 Availability',
                description: 'Your AI workforce never sleeps, ensuring round-the-clock service.',
              },
              {
                title: 'Scalable Solution',
                description: 'Easily scale up or down based on your business needs.',
              },
              {
                title: 'Cost-Effective',
                description: 'Reduce operational costs while maintaining high-quality service.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-slate-300 mb-8">
            Get started with AI Employee today and experience the future of work.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90"
            >
              Schedule a Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
