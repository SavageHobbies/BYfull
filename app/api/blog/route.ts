import { NextResponse } from 'next/server';
import path from 'path';
import posts from './posts.json';

export async function GET() {
  try {
    return NextResponse.json(posts);
  } catch (error) {
    console.error('Server error in blog API:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts', details: error.message },
      { status: 500 }
    );
  }
}
