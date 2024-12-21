'use client';

import { motion } from 'framer-motion';
import { serviceCategories } from '@/data/services-new';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function ServiceGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {serviceCategories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden"
          style={{ height: '500px', display: 'flex', flexDirection: 'column' }}
        >
          {/* Content Container */}
          <div className="p-6 flex-1 overflow-y-auto">
            <div className="flex items-center mb-4">
              <category.icon className="h-8 w-8 text-secondary mr-3" />
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            <p className="text-slate-300 mb-6">{category.description}</p>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2 text-secondary">Key Services</h4>
                <ul className="space-y-2">
                  {category.services.slice(0, 3).map((service, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-400">
                      <CheckCircle2 className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Button Container - Fixed at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/90 to-transparent pt-12">
            <Link href={`/services/${category.id}`} className="block w-full">
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
  );
}
