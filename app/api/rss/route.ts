import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser({
  timeout: 10000, // 10 seconds timeout
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  },
});

const RSS_FEEDS = [
  'https://feeds.feedburner.com/venturebeat/SZYF',
  'https://www.artificialintelligence-news.com/feed/',
  'https://www.unite.ai/feed/',
];

export async function GET() {
  try {
    console.log('Starting RSS feed fetch...');
    
    const feedPromises = RSS_FEEDS.map(async (feedUrl) => {
      try {
        console.log(`Fetching feed: ${feedUrl}`);
        const feed = await parser.parseURL(feedUrl);
        console.log(`Successfully fetched: ${feedUrl}`);
        return feed;
      } catch (error) {
        console.error(`Error fetching feed ${feedUrl}:`, error);
        return null;
      }
    });

    const feeds = await Promise.all(feedPromises);
    const validFeeds = feeds.filter(feed => feed !== null);
    
    if (validFeeds.length === 0) {
      console.error('No valid feeds were fetched');
      throw new Error('No valid feeds available');
    }
    
    const allItems = validFeeds.flatMap(feed => feed.items || []);
    
    // Sort by date, most recent first
    const sortedItems = allItems.sort((a, b) => {
      return new Date(b.pubDate || '').getTime() - new Date(a.pubDate || '').getTime();
    });
    
    // Take the 10 most recent items
    const items = sortedItems.slice(0, 10).map(item => ({
      title: item.title || '',
      link: item.link || '',
      content: item.content || '',
      contentSnippet: item.contentSnippet || item.description || '',
      pubDate: item.pubDate || new Date().toISOString(),
      categories: item.categories || [],
    }));

    console.log(`Successfully processed ${items.length} items`);
    return NextResponse.json({ items });
  } catch (error) {
    console.error('Error in RSS route:', error);
    return NextResponse.json(
      { error: 'Failed to fetch RSS feeds', details: error.message },
      { status: 500 }
    );
  }
}