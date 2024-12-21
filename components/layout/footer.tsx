'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Twitter, ExternalLink, BookOpen, Newspaper, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const businessNetwork = [
  {
    category: "AI & Technology",
    sites: [
      {
        name: "AI Tool Lab",
        url: "https://aitoollab.ai",
        description: "AI Tools Directory"
      },
      {
        name: "AI Review App",
        url: "https://aireviewapp.com",
        description: "AI Product Reviews"
      },
      {
        name: "AI-I.net",
        url: "https://ai-i.net",
        description: "AI Innovation Hub"
      }
    ]
  },
  {
    category: "Books & Education",
    sites: [
      {
        name: "P2E Bible",
        url: "https://p2ebible.com",
        description: "The Ultimate Play-to-Earn Guide Book",
        icon: BookOpen
      },
      {
        name: "eBook Mastermind",
        url: "https://ebookmastermind.com",
        description: "Digital Publishing Platform"
      }
    ]
  },
  {
    category: "Media & Entertainment",
    sites: [
      {
        name: "Game Track",
        url: "https://gametrack.org",
        description: "Gaming Analytics Platform"
      },
      {
        name: "Live Recordings",
        url: "https://live-recordings.com",
        description: "Music Platform"
      },
      {
        name: "The Black Files",
        url: "https://theblackfiles.com",
        description: "Satirical Conspiracy News",
        icon: Newspaper
      },
      {
        name: "Trendsetterz",
        url: "https://trendsetterz.buzz",
        description: "Trend Analysis"
      }
    ]
  },
  {
    category: "Business & Personal",
    sites: [
      {
        name: "Deals BY1",
        url: "https://dealsby1.net",
        description: "Tech Deals Platform"
      },
      {
        name: "Bryce Falcon",
        url: "https://brycefalcon.com",
        description: "Personal Portfolio"
      }
    ]
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="mb-16 p-8 bg-slate-800/50 rounded-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-slate-400 mb-6">
              Subscribe to our newsletter for the latest updates on AI, automation, and digital transformation.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:border-secondary"
              />
              <Button className="bg-secondary hover:bg-secondary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white">BY1<span className="text-secondary">.net</span></h3>
              <p className="text-slate-400 mt-2">
                Transforming businesses through AI and automation solutions.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:contact@by1.net" className="flex items-center text-slate-400 hover:text-secondary">
                <Mail className="h-5 w-5 mr-2" />
                contact@by1.net
              </a>
              <a href="tel:+19373141144" className="flex items-center text-slate-400 hover:text-secondary">
                <Phone className="h-5 w-5 mr-2" />
                (937) 314-1144
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://twitter.com/by1net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-secondary"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com/company/by1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-secondary"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/by1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-secondary"
              >
                <Github className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3">
              <li>
                <Link href="/services/web-development" className="hover:text-secondary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-secondary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/ai-implementation" className="hover:text-secondary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  AI Implementation
                </Link>
              </li>
              <li>
                <Link href="/services/process-automation" className="hover:text-secondary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  Process Automation
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="hover:text-secondary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  Business Consulting
                </Link>
              </li>
              <li>
                <Link href="/services/custom-development" className="hover:text-secondary transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  Custom Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Network */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-white">Our Network</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {businessNetwork.map((category) => (
                <div key={category.category}>
                  <h5 className="text-sm font-semibold text-secondary mb-3">{category.category}</h5>
                  <ul className="space-y-3">
                    {category.sites.map((site) => (
                      <li key={site.name} className="group">
                        <a
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center hover:text-secondary transition-colors"
                        >
                          {site.name}
                          {site.icon ? (
                            <site.icon className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          ) : (
                            <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </a>
                        <p className="text-xs text-slate-500 mt-0.5">{site.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              &copy; {currentYear} BY1.net. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <Link href="/privacy" className="hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-secondary transition-colors">
                Terms of Service
              </Link>
              <Link href="/partners" className="hover:text-secondary transition-colors">
                Partner Program
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}