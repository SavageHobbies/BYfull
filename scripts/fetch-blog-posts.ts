const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');
const sanitizeFilename = require('sanitize-filename');

const parser = new Parser({
  timeout: 10000,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  },
});

const RSS_FEEDS = [
  'https://feeds.feedburner.com/venturebeat/SZYF',
  'https://www.artificialintelligence-news.com/feed/',
  'https://www.unite.ai/feed/',
];

interface BlogPost {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  pubDate: string;
  source: string;
  sourceUrl: string;
  categories: string[];
}

async function fetchAndSavePosts() {
  try {
    // Create posts directory if it doesn't exist
    const postsDir = path.join(process.cwd(), 'app', 'blog', 'posts');
    if (!fs.existsSync(postsDir)) {
      fs.mkdirSync(postsDir, { recursive: true });
    }

    // Fetch all feeds
    for (const feedUrl of RSS_FEEDS) {
      console.log(`Fetching from ${feedUrl}...`);
      const feed = await parser.parseURL(feedUrl);
      const sourceName = new URL(feedUrl).hostname.replace('www.', '').split('.')[0];

      // Process each item in the feed
      for (const item of feed.items.slice(0, 5)) { // Get latest 5 posts from each feed
        const slug = sanitizeFilename(item.title || '').toLowerCase().replace(/\s+/g, '-');
        const postPath = path.join(postsDir, `${slug}.mdx`);

        // Skip if post already exists
        if (fs.existsSync(postPath)) {
          console.log(`Post already exists: ${slug}`);
          continue;
        }

        const post: BlogPost = {
          title: item.title || '',
          slug,
          content: item.content || item.description || '',
          excerpt: (item.contentSnippet || '').slice(0, 160) + '...',
          pubDate: item.pubDate || new Date().toISOString(),
          source: sourceName,
          sourceUrl: item.link || '',
          categories: item.categories || ['AI & Technology'],
        };

        // Create MDX content
        const mdxContent = `---
title: ${post.title}
date: ${post.pubDate}
excerpt: ${post.excerpt}
source: ${post.source}
sourceUrl: ${post.sourceUrl}
categories: ${JSON.stringify(post.categories)}
---

${post.content}

---
*This article was originally published on [${post.source}](${post.sourceUrl})*
`;

        // Save the post
        fs.writeFileSync(postPath, mdxContent);
        console.log(`Saved post: ${slug}`);
      }
    }

    console.log('Finished fetching and saving posts');
  } catch (error) {
    console.error('Error fetching and saving posts:', error);
  }
}

// Run the script
fetchAndSavePosts();
