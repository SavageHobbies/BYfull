export const pricingTiers = [
  {
    id: 'starter',
    name: 'Starter Package',
    description: 'Perfect for small businesses getting started with digital transformation',
    priceRange: 'Starting at $997/month',
    features: [
      'Professional Website (5 pages)',
      'Basic Email Marketing Setup',
      'Social Media Management (2 platforms)',
      'CRM Setup & Basic Training',
      'Monthly Performance Report',
      'Basic Technical Support'
    ],
    highlighted: false
  },
  {
    id: 'growth',
    name: 'Growth Package',
    description: 'Ideal for businesses ready to accelerate their digital presence',
    priceRange: 'Starting at $1,997/month',
    features: [
      'Custom Website (up to 10 pages)',
      'Advanced Email Marketing',
      'Social Media Management (4 platforms)',
      'Lead Generation Campaign',
      'Automated Workflows',
      'SEO Optimization',
      'Priority Support',
      'Bi-weekly Strategy Calls'
    ],
    highlighted: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise Solutions',
    description: 'Comprehensive digital solutions for established businesses',
    priceRange: 'Custom Pricing',
    features: [
      'Enterprise Website Development',
      'Full Marketing Automation',
      'Complete Social Media Management',
      'Custom Integration Development',
      'Dedicated Account Manager',
      'Advanced Analytics & Reporting',
      '24/7 Priority Support',
      'Monthly Strategy Sessions'
    ],
    highlighted: false
  }
];

export const servicePackages = [
  {
    id: 'web-presence',
    name: 'Digital Presence Package',
    description: 'Establish your professional online presence',
    services: [
      {
        name: 'Basic Website Package',
        priceRange: '$1,997 - $4,997',
        includes: [
          '5-10 Page Professional Website',
          'Mobile Responsive Design',
          'Basic SEO Setup',
          'Contact Forms',
          'Google Analytics Integration'
        ]
      },
      {
        name: 'Advanced Website Package',
        priceRange: '$4,997 - $9,997',
        includes: [
          '10-20 Page Custom Website',
          'Advanced SEO Implementation',
          'E-commerce Integration',
          'Custom Animations',
          'Advanced Analytics Dashboard'
        ]
      }
    ]
  },
  {
    id: 'marketing',
    name: 'Digital Marketing Package',
    description: 'Comprehensive marketing solutions',
    services: [
      {
        name: 'Essential Marketing',
        priceRange: '$997/month',
        includes: [
          'Social Media Management (2 platforms)',
          'Basic Email Marketing',
          'Monthly Content Calendar',
          'Basic Analytics Reporting',
          'Weekly Posts'
        ]
      },
      {
        name: 'Premium Marketing',
        priceRange: '$1,997/month',
        includes: [
          'Social Media Management (4 platforms)',
          'Advanced Email Marketing',
          'Content Creation',
          'PPC Campaign Management',
          'Monthly Strategy Session'
        ]
      }
    ]
  },
  {
    id: 'automation',
    name: 'Business Automation Package',
    description: 'Streamline your business operations',
    services: [
      {
        name: 'Basic Automation',
        priceRange: '$797/month',
        includes: [
          'CRM Setup & Integration',
          'Basic Workflow Automation',
          'Email Response Automation',
          'Basic Lead Tracking',
          'Monthly Maintenance'
        ]
      },
      {
        name: 'Advanced Automation',
        priceRange: '$1,497/month',
        includes: [
          'Advanced CRM Implementation',
          'Custom Workflow Development',
          'Multi-channel Automation',
          'Advanced Lead Scoring',
          'API Integrations'
        ]
      }
    ]
  }
];

export const customServices = {
  consulting: {
    name: 'Business Consulting',
    description: 'Expert guidance for your business growth',
    rateRanges: [
      {
        type: 'Strategy Session',
        range: '$497 - $1,997'
      },
      {
        type: 'Monthly Retainer',
        range: '$997 - $4,997/month'
      },
      {
        type: 'Project-Based',
        range: 'Custom Quote'
      }
    ]
  },
  development: {
    name: 'Custom Development',
    description: 'Tailored solutions for your specific needs',
    rateRanges: [
      {
        type: 'Hourly Rate',
        range: '$150 - $250/hour'
      },
      {
        type: 'Project-Based',
        range: 'Custom Quote'
      }
    ]
  }
};
