import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

// Initialize OpenAI with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Azure OpenAI configuration
const azureOpenAI = new OpenAI({
  apiKey: process.env.AZURE_OPENAI_API_KEY,
  baseURL: process.env.AZURE_OPENAI_ENDPOINT,
  defaultQuery: { 'api-version': '2024-02-01' },
});

export async function POST(request: NextRequest) {
  try {
    const { message, model = 'gpt-4o', useAzure = false } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Choose between OpenAI and Azure OpenAI
    const client = useAzure ? azureOpenAI : openai;
    const modelName = useAzure ? process.env.AZURE_OPENAI_DEPLOYMENT_NAME || 'gpt-4o' : model;

    console.log(`🤖 SaintSal AI processing: ${message.substring(0, 50)}...`);

    const completion = await client.chat.completions.create({
      model: modelName,
      messages: [
        {
          role: 'system',
          content: `You are SaintSal™, the divine AI assistant from COOKIN' KNOWLEDGE enterprise platform. You're sophisticated, helpful, and embody the cutting-edge technology that powers SaintVision AI. Always maintain the premium, professional tone while being incredibly helpful and insightful.`
        },
        {
          role: 'user',
          content: message
        }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content || 'I apologize, but I could not process your request at this time.';

    return NextResponse.json({
      success: true,
      response,
      model: modelName,
      provider: useAzure ? 'Azure OpenAI' : 'OpenAI',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('🚨 AI API Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process AI request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'SaintSal AI is online',
    provider: 'OpenAI + Azure OpenAI',
    capabilities: [
      'Natural language processing',
      'Code generation',
      'Business strategy',
      'Creative writing',
      'Technical documentation'
    ],
    version: '2.0',
    timestamp: new Date().toISOString()
  });
}
