'use client';

import ServicePageTemplate from '@/components/services/service-page-template';

export default function ProcessAutomationPage() {
  return (
    <ServicePageTemplate
      title="Process Automation"
      description="Streamline your operations with intelligent automation solutions that save time and reduce errors."
      features={[
        "Workflow Automation",
        "Business Process Automation",
        "Robotic Process Automation (RPA)",
        "Document Processing Automation",
        "API Integration & Automation",
        "Custom Automation Solutions",
        "Process Analysis & Optimization",
        "Automated Testing",
        "Monitoring & Analytics"
      ]}
      benefits={[
        "Reduce manual work and human error",
        "Increase operational efficiency",
        "Lower operational costs",
        "Improve process consistency",
        "Free up resources for strategic tasks",
        "Scale operations without adding overhead"
      ]}
      process={[
        {
          title: "Process Analysis",
          description: "Analyze current processes to identify automation opportunities and potential improvements."
        },
        {
          title: "Solution Design",
          description: "Design automated workflows and solutions tailored to your specific needs."
        },
        {
          title: "Development",
          description: "Build and configure automation solutions using appropriate technologies."
        },
        {
          title: "Testing & Validation",
          description: "Thoroughly test automated processes to ensure accuracy and reliability."
        },
        {
          title: "Implementation & Training",
          description: "Deploy automation solutions and train your team on the new processes."
        }
      ]}
      caseStudies={[
        {
          title: "HR Process Automation",
          description: "Automated employee onboarding and documentation processes.",
          result: "80% reduction in processing time"
        },
        {
          title: "Invoice Processing",
          description: "Implemented automated invoice processing and approval system.",
          result: "95% accuracy in data extraction"
        },
        {
          title: "Supply Chain Automation",
          description: "Automated inventory management and order processing.",
          result: "60% faster order fulfillment"
        }
      ]}
    />
  );
}
