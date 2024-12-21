'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

interface ServicePageProps {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
  caseStudies?: {
    title: string;
    description: string;
    result: string;
  }[];
}

export default function ServicePageTemplate({
  title,
  description,
  features,
  benefits,
  process,
  caseStudies,
}: ServicePageProps) {
  return (
    <div className="container mx-auto px-4 py-16 space-y-20">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
          {title}
        </h1>
        <p className="text-xl text-slate-300 mb-8">{description}</p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button className="bg-secondary hover:bg-secondary/90">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline">View Pricing</Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <Check className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <p className="text-slate-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-secondary font-bold">{index + 1}</span>
                </div>
                <p className="text-lg font-semibold">{benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        <div className="space-y-8">
          {process.map((step, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <div className="flex items-start space-x-6">
                <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-secondary font-bold text-lg">0{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-slate-300">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies Section */}
      {caseStudies && caseStudies.length > 0 && (
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                <p className="text-slate-300 mb-4">{study.description}</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-secondary font-medium">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="text-center bg-white/5 backdrop-blur-sm rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
          Transform your business with our {title.toLowerCase()} solutions. Contact us today for a free consultation.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <Button className="bg-secondary hover:bg-secondary/90">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/pricing">
            <Button variant="outline">View Pricing</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
