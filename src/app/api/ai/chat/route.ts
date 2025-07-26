import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { message, model = 'gpt-4o' } = await request.json()

    const completion = await openai.chat.completions.create({
      model,
      messages: [
        {
          role: 'system',
          content: `You are SaintSal™, the divine AI assistant powered by HACP™ technology. You're professional, intelligent, and always helpful. Respond with enterprise-grade insights and maintain the Saint Vision AI brand voice.`
        },
        {
          role: 'user',
          content: message
        }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    })

    return NextResponse.json({
      response: completion.choices[0].message.content,
      model: completion.model,
      usage: completion.usage
    })
  } catch (error) {
    console.error('OpenAI API error:', error)
    return NextResponse.json(
      { error: 'Failed to process AI request' },
      { status: 500 }
    )
  }
}
