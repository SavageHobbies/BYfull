import HeroSection from '@/components/home/hero-section';
import ServicesSection from '@/components/home/services/services-section';
import WhyChooseSection from '@/components/home/why-choose/why-choose-section';
import CaseStudiesSection from '@/components/home/case-studies/case-studies-section';
import ProcessSection from '@/components/home/process/process-section';
import TechnologiesSection from '@/components/home/technologies/technologies-section';
import ContactSection from '@/components/home/contact/contact-section';
import StatsSection from '@/components/home/stats/stats-section';
import LeadMagnet from '@/components/home/lead-magnet';
import StickyCTA from '@/components/ui/sticky-cta';

export const metadata = {
  alternates: {
    canonical: 'https://by1.net',
  },
  openGraph: {
    type: 'website',
    url: 'https://by1.net',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <LeadMagnet />
      <WhyChooseSection />
      <CaseStudiesSection />
      <ProcessSection />
      <TechnologiesSection />
      <ContactSection />
      <StickyCTA />
    </>
  );
}