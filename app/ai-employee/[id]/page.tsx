'use client';

import { motion } from 'framer-motion';
import { aiEmployeeFeatures } from '@/data/ai-employee';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function AIEmployeeFeaturePage() {
  const params = useParams();
  const feature = aiEmployeeFeatures.find((f) => f.id === params.id);

  if (!feature) {
    return (
      <div className="min-h-screen pt-20 bg-slate-900">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold">Feature not found</h1>
          <Link href="/ai-employee">
            <Button className="mt-4">Back to AI Employee</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-20">
        <Link href="/ai-employee">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to AI Employee
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-8">
              <feature.icon className="h-12 w-12 text-secondary mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                {feature.title}
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-300 mb-12"
            >
              {feature.description}
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-6">Features</h2>
                <ul className="space-y-4">
                  {feature.features.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle2 className="h-5 w-5 text-secondary mr-3 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-6">Benefits</h2>
                <ul className="space-y-4">
                  {feature.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle2 className="h-5 w-5 text-accent mr-3 mt-0.5" />
                      <span className="text-slate-300">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-semibold mb-6">Use Cases</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {feature.useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4"
                  >
                    <span className="text-slate-300">{useCase}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 text-center"
            >
              <h2 className="text-2xl font-semibold mb-6">Ready to Get Started?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90"
                  >
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
