'use client';

import ServicePageTemplate from '@/components/services/service-page-template';

export default function AIImplementationPage() {
  return (
    <ServicePageTemplate
      title="AI Implementation"
      description="Transform your business with cutting-edge AI solutions that drive efficiency and innovation."
      features={[
        "Custom AI Model Development",
        "Machine Learning Integration",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI-Powered Automation",
        "Deep Learning Implementation",
        "AI Strategy Consulting",
        "Model Training & Optimization"
      ]}
      benefits={[
        "Automate repetitive tasks and processes",
        "Make data-driven decisions with predictive insights",
        "Improve customer experience with AI-powered solutions",
        "Reduce operational costs through automation",
        "Stay competitive with cutting-edge technology",
        "Scale operations efficiently with AI assistance"
      ]}
      process={[
        {
          title: "Assessment & Strategy",
          description: "Evaluate your business needs and develop an AI implementation strategy aligned with your goals."
        },
        {
          title: "Data Preparation",
          description: "Collect, clean, and prepare data for AI model training and implementation."
        },
        {
          title: "Model Development",
          description: "Design and develop custom AI models tailored to your specific use cases."
        },
        {
          title: "Integration & Testing",
          description: "Seamlessly integrate AI solutions into your existing systems and thoroughly test performance."
        },
        {
          title: "Deployment & Monitoring",
          description: "Deploy AI solutions with continuous monitoring and optimization for optimal results."
        }
      ]}
      caseStudies={[
        {
          title: "Customer Service AI",
          description: "Implemented AI-powered chatbot for 24/7 customer support.",
          result: "70% reduction in support tickets"
        },
        {
          title: "Predictive Maintenance",
          description: "Developed AI system for equipment maintenance prediction.",
          result: "45% reduction in downtime"
        },
        {
          title: "Sales Forecasting",
          description: "Created AI model for accurate sales predictions.",
          result: "90% forecast accuracy"
        }
      ]}
    />
  );
}
