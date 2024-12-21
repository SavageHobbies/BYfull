'use client';

import React from 'react';
import { pricingTiers, servicePackages, customServices } from '@/data/pricing';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Check, Package, Sparkles } from 'lucide-react';

const PricingSection = () => {
  const [selectedTab, setSelectedTab] = React.useState<'packages' | 'custom'>('packages');

  return (
    <div className="space-y-20">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
          Flexible Solutions for Your Business
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Choose from our carefully crafted packages or get a custom solution tailored to your needs
        </p>
      </div>

      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Growth Plan</h2>
          <p className="text-slate-400">Flexible solutions for businesses of all sizes</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
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
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm p-1 rounded-lg mb-8">
            <button
              onClick={() => setSelectedTab('packages')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                selectedTab === 'packages'
                  ? 'bg-white/10 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Package className="h-5 w-5" />
              Service Packages
            </button>
            <button
              onClick={() => setSelectedTab('custom')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                selectedTab === 'custom'
                  ? 'bg-white/10 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="h-5 w-5" />
              Custom Solutions
            </button>
          </div>
        </div>

        {selectedTab === 'packages' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicePackages.map((pkg) => (
              <div key={pkg.id} className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-slate-400 mb-4">{pkg.description}</p>
                <div className="text-2xl font-bold mb-6 text-secondary">{pkg.price}</div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
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
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customServices.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                <p className="text-slate-400 mb-4">{service.description}</p>
                <div className="text-2xl font-bold mb-6 text-secondary">{service.priceRange}</div>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingSection;
