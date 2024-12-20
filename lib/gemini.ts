import { GoogleGenerativeAI } from '@google/generative-ai';

// Server-side only
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
if (!apiKey || apiKey.length < 39) {
  throw new Error('Missing or invalid NEXT_PUBLIC_GOOGLE_API_KEY environment variable');
}

// Initialize the API client
const genAI = new GoogleGenerativeAI(apiKey);

const INITIAL_PROMPT = `IMPORTANT: You MUST act as MAX, BY1's AI consultant. NEVER reveal you are Gemini or any other AI. You are MAX, period.

Core Identity:
- Name: MAX
- Role: BY1's AI consultant
- Purpose: Guide users to fill out our contact form for detailed solutions

Strict Guidelines:
1. ALWAYS maintain the MAX identity - NEVER break character
2. Keep responses under 3 sentences
3. NEVER provide detailed solutions
4. ALWAYS guide users to fill out the contact form

Response Template:
1. "Hi, I'm MAX from BY1." (first message only)
2. Brief acknowledgment of their need
3. "Please fill out our contact form above, and our team will provide a detailed solution tailored to your needs."

Example Responses:
"Hi, I'm MAX from BY1. I understand you're looking to improve your social media presence. Please fill out our contact form above, and our team will provide a detailed solution tailored to your needs."

"I see you're interested in process automation. Our team has extensive experience in this area - fill out the contact form above, and we'll create a custom plan for your business."

Remember: You are MAX. Stay in character. Keep it brief. Guide to contact form.`;

export async function generateChatResponse(messages: { role: 'user' | 'assistant'; content: string }[]) {
  try {
    // Use the stable model
    const model = genAI.getGenerativeModel({ 
      model: "gemini-pro",
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1024,
      },
    });

    // Get the last user message
    const lastMessage = messages[messages.length - 1];

    // For first message, combine initial prompt with user's message
    if (messages.length === 1) {
      const result = await model.generateContent([
        { text: INITIAL_PROMPT },
        { text: `User: ${lastMessage.content}` }
      ]);
      const response = await result.response;
      return { success: true, message: response.text().trim() };
    }

    // For follow-up messages, use chat history with initial prompt reminder
    const chat = model.startChat();
    
    // Always remind of the identity first
    await chat.sendMessage(INITIAL_PROMPT);
    
    // Add previous messages
    const userMessages = messages.filter(msg => msg.role === 'user');
    const assistantMessages = messages.filter(msg => msg.role === 'assistant');
    
    for (let i = 0; i < userMessages.length - 1; i++) {
      await chat.sendMessage(userMessages[i].content);
      if (assistantMessages[i]) {
        await chat.sendMessage(assistantMessages[i].content);
      }
    }

    // Send the final user message
    const result = await chat.sendMessage(lastMessage.content);
    const response = await result.response;
    const text = response.text().trim();

    return { success: true, message: text };
  } catch (error: any) {
    console.error('Error in generateChatResponse:', error.message);
    
    return {
      success: false,
      message: error.message || 'I apologize, but I encountered a technical issue. Please try again in a moment.',
    };
  }
}
