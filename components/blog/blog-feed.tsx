'use client';

import { useEffect, useState } from 'react';
import { RSSItem, fetchRSSFeeds } from '@/lib/rss';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDistanceToNow } from 'date-fns';

export function BlogFeed() {
  const [feeds, setFeeds] = useState<RSSItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeeds() {
      try {
        const items = await fetchRSSFeeds();
        setFeeds(items);
      } catch (error) {
        console.error('Error loading feeds:', error);
      } finally {
        setLoading(false);
      }
    }

    loadFeeds();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4 mt-2"></div>
            </CardHeader>
            <CardContent>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 mt-2"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {feeds.map((item, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                {item.title}
              </a>
            </CardTitle>
            <CardDescription>
              {item.pubDate && formatDistanceToNow(new Date(item.pubDate), { addSuffix: true })}
              {item.categories && item.categories.length > 0 && (
                <span className="ml-2">
                  in {item.categories.join(', ')}
                </span>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              {item.contentSnippet?.slice(0, 200)}
              {item.contentSnippet?.length > 200 ? '...' : ''}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
