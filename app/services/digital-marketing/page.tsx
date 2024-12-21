'use client';

import ServicePageTemplate from '@/components/services/service-page-template';

export default function DigitalMarketingPage() {
  return (
    <ServicePageTemplate
      title="Digital Marketing"
      description="Drive growth with data-driven digital marketing strategies tailored to your business goals."
      features={[
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC) Advertising",
        "Social Media Marketing",
        "Content Marketing Strategy",
        "Email Marketing Campaigns",
        "Analytics and Reporting",
        "Conversion Rate Optimization",
        "Brand Strategy Development",
        "Marketing Automation"
      ]}
      benefits={[
        "Increase brand visibility and reach",
        "Generate high-quality leads",
        "Improve ROI on marketing spend",
        "Build stronger customer relationships",
        "Make data-driven marketing decisions",
        "Stay ahead of market trends"
      ]}
      process={[
        {
          title: "Strategy Development",
          description: "We analyze your market position and develop a comprehensive marketing strategy aligned with your goals."
        },
        {
          title: "Campaign Planning",
          description: "Create detailed campaign plans with specific targets, timelines, and success metrics."
        },
        {
          title: "Implementation",
          description: "Execute campaigns across multiple channels while continuously monitoring performance."
        },
        {
          title: "Optimization",
          description: "Analyze results and optimize campaigns for better performance and ROI."
        },
        {
          title: "Reporting & Analysis",
          description: "Provide detailed reports with insights and recommendations for future improvements."
        }
      ]}
      caseStudies={[
        {
          title: "Retail Brand Growth",
          description: "Implemented comprehensive digital marketing strategy for a retail brand.",
          result: "200% increase in online revenue"
        },
        {
          title: "B2B Lead Generation",
          description: "Developed targeted campaign for B2B software company.",
          result: "150% increase in qualified leads"
        },
        {
          title: "Brand Awareness Campaign",
          description: "Created multi-channel campaign for new product launch.",
          result: "1M+ reach with 25% engagement rate"
        }
      ]}
    />
  );
}
