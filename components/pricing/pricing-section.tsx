'use client';

import { motion } from 'framer-motion';
import { pricingTiers, servicePackages, customServices } from '@/data/pricing';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Check, Package, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function PricingSection() {
  const [selectedTab, setSelectedTab] = useState<'packages' | 'custom'>('packages');

  return (
    <div className="space-y-20">
      {/* Pricing Tiers */}
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Growth Plan</h2>
          <p className="text-slate-400">Flexible solutions for businesses of all sizes</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white/5 backdrop-blur-sm rounded-lg p-8 ${
                tier.highlighted ? 'border-2 border-secondary' : ''
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-slate-400 mb-4">{tier.description}</p>
              <div className="text-2xl font-bold mb-6 text-secondary">{tier.priceRange}</div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="w-full bg-gradient-to-r from-secondary/20 to-accent/20 hover:from-secondary/30 hover:to-accent/30">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Packages */}
      <div>
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-slate-700 p-1">
            <button
              onClick={() => setSelectedTab('packages')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedTab === 'packages'
                  ? 'bg-secondary text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Package className="h-4 w-4 inline-block mr-2" />
              Service Packages
            </button>
            <button
              onClick={() => setSelectedTab('custom')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedTab === 'custom'
                  ? 'bg-secondary text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="h-4 w-4 inline-block mr-2" />
              Custom Solutions
            </button>
          </div>
        </div>

        {selectedTab === 'packages' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4">{pkg.name}</h3>
                <p className="text-slate-400 mb-6">{pkg.description}</p>
                {pkg.services.map((service, i) => (
                  <div key={i} className="mb-6 last:mb-0">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{service.name}</h4>
                      <span className="text-secondary">{service.priceRange}</span>
                    </div>
                    <ul className="space-y-2">
                      {service.includes.map((item, j) => (
                        <li key={j} className="flex items-start text-sm text-slate-400">
                          <Check className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link href="/contact">
                  <Button className="w-full mt-4 bg-gradient-to-r from-secondary/20 to-accent/20 hover:from-secondary/30 hover:to-accent/30">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {Object.values(customServices).map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-slate-400 mb-6">{service.description}</p>
                <div className="space-y-4">
                  {service.rateRanges.map((rate, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-slate-300">{rate.type}</span>
                      <span className="text-secondary font-medium">{rate.range}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <Button className="w-full mt-6 bg-gradient-to-r from-secondary/20 to-accent/20 hover:from-secondary/30 hover:to-accent/30">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
