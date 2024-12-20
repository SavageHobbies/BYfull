import { NextRequest } from 'next/server';
import { generateChatResponse } from '@/lib/gemini';

export async function POST(req: NextRequest) {
  try {
    if (!process.env.NEXT_PUBLIC_GOOGLE_API_KEY) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'API key not configured' 
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Invalid request format' 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Validate message format
    const validMessages = messages.every(msg => 
      msg && typeof msg === 'object' &&
      (msg.role === 'user' || msg.role === 'assistant') &&
      typeof msg.content === 'string'
    );

    if (!validMessages) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: 'Invalid message format' 
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const response = await generateChatResponse(messages);

    return new Response(
      JSON.stringify(response),
      { 
        status: response.success ? 200 : 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error: any) {
    console.error('Chat API error:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: error.message || 'Internal server error'
      }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
