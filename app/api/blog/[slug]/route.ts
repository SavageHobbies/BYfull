import { NextResponse } from 'next/server';
import posts from '../posts.json';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const post = posts.posts.find(p => p.slug === params.slug);
    
    if (!post) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    return NextResponse.json({ post });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post', details: error.message },
      { status: 500 }
    );
  }
}
