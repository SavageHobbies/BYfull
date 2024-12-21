'use client';

import ServicePageTemplate from '@/components/services/service-page-template';

export default function CustomDevelopmentPage() {
  return (
    <ServicePageTemplate
      title="Custom Development"
      description="Tailored software solutions designed and built specifically for your unique business needs."
      features={[
        "Custom Software Development",
        "Enterprise Applications",
        "Mobile App Development",
        "Cloud Solutions",
        "Integration Services",
        "Legacy System Modernization",
        "DevOps Implementation",
        "Quality Assurance",
        "Ongoing Support & Maintenance"
      ]}
      benefits={[
        "Solutions tailored to your exact needs",
        "Competitive advantage through unique software",
        "Improved operational efficiency",
        "Better integration with existing systems",
        "Scalable and future-proof solutions",
        "Full ownership of custom software"
      ]}
      process={[
        {
          title: "Requirements Analysis",
          description: "Detailed analysis of your needs and requirements to ensure perfect alignment."
        },
        {
          title: "Architecture Design",
          description: "Design scalable and maintainable architecture for your custom solution."
        },
        {
          title: "Development",
          description: "Agile development process with regular updates and feedback integration."
        },
        {
          title: "Testing",
          description: "Comprehensive testing to ensure reliability and performance."
        },
        {
          title: "Deployment & Support",
          description: "Smooth deployment and ongoing support for your custom solution."
        }
      ]}
      caseStudies={[
        {
          title: "Enterprise Resource Planning",
          description: "Built custom ERP system for manufacturing company.",
          result: "50% improvement in resource utilization"
        },
        {
          title: "Healthcare Platform",
          description: "Developed custom patient management system.",
          result: "90% reduction in administrative work"
        },
        {
          title: "Logistics Solution",
          description: "Created custom fleet management system.",
          result: "35% reduction in operational costs"
        }
      ]}
    />
  );
}
