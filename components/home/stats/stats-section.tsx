"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    value: '60%',
    label: 'Cost Reduction',
    subtext: 'Get a 24/7 Customer Service team'
  },
  {
    value: '24/7',
    label: 'Availability',
    subtext: 'Provide instant support anytime'
  },
  {
    value: '3s',
    label: 'Response Time',
    subtext: 'Instantly serving customers'
  },
  {
    value: '95%',
    label: 'Satisfaction Rate',
    subtext: 'Keeping clients happy'
  }
];

const testimonials = [
  {
    quote: "With AI automation, we've seen a 60% reduction in our support operations. We've seen a 20% reduction in response time and significant cost savings.",
    author: "CTO, TechCorp"
  },
  {
    quote: "Not only did it save us money, it gave us more time to focus on complex, high-value interactions.",
    author: "Sarah Park"
  }
];

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-primary-dark text-white">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-2">
                <span className="text-4xl md:text-5xl font-bold text-accent">{stat.value}</span>
              </div>
              <div className="text-lg md:text-xl font-semibold mb-2">{stat.label}</div>
              <div className="text-sm text-slate-300">{stat.subtext}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-primary/30 p-6 rounded-lg"
            >
              <p className="text-slate-200 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="text-accent font-medium">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
