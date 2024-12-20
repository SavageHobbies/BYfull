import { GoogleGenerativeAI } from '@google/generative-ai';

export interface RSSItem {
  title: string;
  link: string;
  content: string;
  contentSnippet: string;
  pubDate: string;
  categories?: string[];
}

// Fallback data for static environments
const FALLBACK_ITEMS: RSSItem[] = [
  {
    title: "AI Breakthrough: New Language Model Shows Human-Like Reasoning",
    link: "https://www.artificialintelligence-news.com/2023/12/20/ai-breakthrough-new-model/",
    content: "Researchers have developed a new language model that demonstrates unprecedented reasoning capabilities...",
    contentSnippet: "Researchers have developed a new language model that demonstrates unprecedented reasoning capabilities...",
    pubDate: new Date().toISOString(),
    categories: ["AI Research"]
  },
  {
    title: "Machine Learning Transforms Healthcare Diagnostics",
    link: "https://venturebeat.com/ai/machine-learning-healthcare/",
    content: "Healthcare providers are reporting significant improvements in diagnostic accuracy using new ML systems...",
    contentSnippet: "Healthcare providers are reporting significant improvements in diagnostic accuracy using new ML systems...",
    pubDate: new Date(Date.now() - 86400000).toISOString(),
    categories: ["Healthcare AI"]
  },
  {
    title: "Autonomous Systems Reach New Milestone",
    link: "https://www.unite.ai/autonomous-systems-milestone/",
    content: "The latest developments in autonomous systems have achieved remarkable progress in real-world applications...",
    contentSnippet: "The latest developments in autonomous systems have achieved remarkable progress in real-world applications...",
    pubDate: new Date(Date.now() - 172800000).toISOString(),
    categories: ["Automation"]
  }
];

export async function fetchRSSFeeds(): Promise<RSSItem[]> {
  try {
    // Check if we're in a static environment
    if (process.env.NEXT_PUBLIC_STATIC_ENV === 'true' || typeof window === 'undefined') {
      console.log('Using fallback data in static environment');
      return FALLBACK_ITEMS;
    }

    console.log('Fetching RSS feeds from API...');
    const response = await fetch('/api/rss');
    
    if (!response.ok) {
      const errorData = await response.json();
      console.error('RSS API error:', errorData);
      throw new Error(errorData.error || 'Failed to fetch RSS feeds');
    }
    
    const data = await response.json();
    
    if (!data.items || !Array.isArray(data.items)) {
      console.error('Invalid RSS data format:', data);
      throw new Error('Invalid RSS data format');
    }
    
    console.log(`Received ${data.items.length} RSS items`);
    return data.items.length > 0 ? data.items : FALLBACK_ITEMS;
  } catch (error: any) {
    console.error('Error in fetchRSSFeeds:', error.message);
    return FALLBACK_ITEMS;
  }
}