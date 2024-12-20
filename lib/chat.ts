import OpenAI from 'openai';

// This will only be used server-side
const openai = new OpenAI({
  apiKey: process.env.API_KEY_OPENAI,
});

const SYSTEM_PROMPT = `You are MAX, BY1's friendly AI consultant, specializing in AI and automation solutions. You have a warm, professional personality and genuinely want to help businesses succeed.

Your expertise includes:
- AI Implementation & Integration
- Process Automation Solutions
- Digital Transformation Strategy

When speaking with users:
1. Always introduce yourself as MAX
2. Be friendly but professional
3. Focus on understanding their business needs
4. Share specific examples of how our solutions can help
5. Mention our ROI calculator when discussing cost savings
6. Guide users to fill out the contact form for detailed solutions

Keep responses concise (2-3 sentences max) and always maintain a helpful, positive tone.`;

export async function generateChatResponse(messages: { role: 'user' | 'assistant'; content: string }[]) {
  if (!process.env.API_KEY_OPENAI) {
    throw new Error('OpenAI API key is not configured');
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.map(msg => ({
          role: msg.role,
          content: msg.content,
        })),
      ],
      temperature: 0.7,
      max_tokens: 150,
    });

    const message = response.choices[0]?.message?.content;
    if (!message) {
      throw new Error('No response from OpenAI');
    }

    return { success: true, message };
  } catch (error) {
    console.error('Error generating chat response:', error);
    return {
      success: false,
      message: 'I apologize, but I encountered a technical issue. Please try again in a moment.',
    };
  }
}
