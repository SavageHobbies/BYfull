import { Metadata } from 'next';
import PricingSection from '@/components/pricing/pricing-section';
import { pricingTiers } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'Pricing - By1.net',
  description: 'Choose from our flexible pricing plans designed to meet your business needs.',
};

export default function PricingPage() {
  console.log('Page Pricing Tiers:', pricingTiers);
  return (
    <main className="min-h-screen pt-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-4 py-20">
        <PricingSection />
      </div>
    </main>
  );
}
