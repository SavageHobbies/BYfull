'use client';

import ServicePageTemplate from '@/components/services/service-page-template';

export default function WebDevelopmentPage() {
  return (
    <ServicePageTemplate
      title="Web Development"
      description="Create powerful, scalable, and beautiful web applications that drive your business forward."
      features={[
        "Custom web application development",
        "Responsive design for all devices",
        "Progressive Web Apps (PWA)",
        "Modern frontend frameworks (React, Next.js)",
        "Scalable backend architecture",
        "Database design and optimization",
        "API development and integration",
        "Performance optimization",
        "SEO-friendly development"
      ]}
      benefits={[
        "Increase your online presence and reach more customers",
        "Improve user experience and engagement",
        "Boost conversion rates with optimized performance",
        "Scale your business with robust architecture",
        "Reduce maintenance costs with modern technologies",
        "Stay ahead of competitors with innovative solutions"
      ]}
      process={[
        {
          title: "Discovery & Planning",
          description: "We analyze your requirements, target audience, and business goals to create a comprehensive development plan."
        },
        {
          title: "Design & Prototyping",
          description: "Our team creates wireframes and interactive prototypes to visualize the final product before development."
        },
        {
          title: "Development",
          description: "We build your application using modern technologies and best practices, ensuring scalability and maintainability."
        },
        {
          title: "Testing & QA",
          description: "Rigorous testing across devices and browsers to ensure a bug-free and smooth user experience."
        },
        {
          title: "Deployment",
          description: "Secure deployment with continuous integration and monitoring to ensure optimal performance."
        }
      ]}
      caseStudies={[
        {
          title: "E-commerce Platform",
          description: "Built a scalable e-commerce platform handling thousands of daily transactions.",
          result: "300% increase in online sales"
        },
        {
          title: "SaaS Dashboard",
          description: "Developed a complex dashboard for data visualization and analytics.",
          result: "Reduced data processing time by 60%"
        },
        {
          title: "Healthcare Portal",
          description: "Created a secure patient management system with HIPAA compliance.",
          result: "Improved patient satisfaction by 85%"
        }
      ]}
    />
  );
}
