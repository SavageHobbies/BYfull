'use client';

import ServicePageTemplate from '@/components/services/service-page-template';

export default function ConsultingPage() {
  return (
    <ServicePageTemplate
      title="Business Consulting"
      description="Expert guidance to transform your business with technology and innovation strategies."
      features={[
        "Digital Transformation Strategy",
        "Technology Assessment",
        "Innovation Roadmap Development",
        "Process Optimization",
        "IT Strategy Consulting",
        "Change Management",
        "Risk Assessment",
        "Technology Stack Selection",
        "Project Management"
      ]}
      benefits={[
        "Make informed technology decisions",
        "Accelerate digital transformation",
        "Optimize business processes",
        "Reduce technology risks",
        "Improve competitive advantage",
        "Enable sustainable growth"
      ]}
      process={[
        {
          title: "Discovery",
          description: "Understand your business goals, challenges, and current technology landscape."
        },
        {
          title: "Analysis",
          description: "Analyze opportunities, risks, and potential solutions aligned with your objectives."
        },
        {
          title: "Strategy Development",
          description: "Create comprehensive strategies and roadmaps for implementation."
        },
        {
          title: "Recommendations",
          description: "Provide detailed recommendations with actionable implementation plans."
        },
        {
          title: "Implementation Support",
          description: "Guide and support your team through the implementation process."
        }
      ]}
      caseStudies={[
        {
          title: "Digital Transformation",
          description: "Guided a traditional business through complete digital transformation.",
          result: "40% improvement in operational efficiency"
        },
        {
          title: "Technology Strategy",
          description: "Developed comprehensive IT strategy for growing startup.",
          result: "Successful scale-up with zero downtime"
        },
        {
          title: "Process Optimization",
          description: "Optimized core business processes through technology.",
          result: "30% cost reduction in operations"
        }
      ]}
    />
  );
}
