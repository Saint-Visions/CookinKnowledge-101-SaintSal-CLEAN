'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey! I'm your cognitive partner - think of me like we're having this exact conversation, but I'm here 24/7 to help you scale with intelligence. What's on your mind?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Azure Cognitive AI - Natural conversation patterns like real teammates
  const getContextualResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    // Context-aware responses that understand intent and personality
    if (lowerMessage.includes('help') || lowerMessage.includes('stuck') || lowerMessage.includes('lost')) {
      return "I'm right here with you! Let's break this down step by step. What specifically is giving you trouble? We'll get through this together.";
    }
    if (lowerMessage.includes('idea') || lowerMessage.includes('think') || lowerMessage.includes('concept')) {
      return "I love where your mind is going! That's the kind of thinking that creates breakthroughs. Tell me more about what you're envisioning.";
    }
    if (lowerMessage.includes('project') || lowerMessage.includes('build') || lowerMessage.includes('create')) {
      return "Now we're cooking! Building something meaningful is what separates dreamers from doers. What's your vision for this?";
    }
    if (lowerMessage.includes('problem') || lowerMessage.includes('issue') || lowerMessage.includes('challenge')) {
      return "Every challenge is just intelligence waiting to be applied. Let's tackle this together - walk me through what you're seeing.";
    }
    if (lowerMessage.includes('learn') || lowerMessage.includes('understand') || lowerMessage.includes('explain')) {
      return "That's the mindset of a winner! Understanding is the foundation of mastery. What specific area do you want to dive into?";
    }
    if (lowerMessage.includes('workflow') || lowerMessage.includes('process') || lowerMessage.includes('automate')) {
      return "Smart thinking! Optimizing workflows is where the real productivity gains happen. Let's streamline this for maximum impact.";
    }
    if (lowerMessage.includes('scale') || lowerMessage.includes('grow') || lowerMessage.includes('expand')) {
      return "That's the entrepreneurial spirit! Scaling intelligently is what separates good businesses from great ones. What's your growth strategy?";
    }
    
    // Personality-driven responses that feel like a real cognitive partner
    const responses = [
      "I'm tracking with you completely! What's your next strategic move here?",
      "Your cognitive partner is locked in and ready. How can we amplify this thinking?",
      "I see exactly where you're headed - that's intelligent positioning. Let's expand on this.",
      "We're in perfect sync here. What's the next piece of this puzzle we need to solve?",
      "Your brain is cooking up something powerful! What direction should we take this?",
      "I'm dialed in and analyzing patterns. Where do you want to focus our energy?",
      "Love the momentum you're building! Let's channel this into something game-changing.",
      "Your cognitive flow is on point. How can we turn this insight into action?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsTyping(true);

    // Azure-level cognitive response (replace with actual Azure OpenAI API call)
    setTimeout(() => {
      const aiResponse = getContextualResponse(currentInput);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-96 bg-charcoal rounded-lg border border-gold">
      {/* Chat Header */}
      <div className="flex items-center p-4 border-b border-gold/30">
        <Image src="/images/sv-logo.png" alt="AI" width={32} height={32} className="rounded-full mr-3" />
        <div>
          <h3 className="text-gold font-semibold">Your AI Companion</h3>
          <p className="text-xs text-gray-400">Always ready to help</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map(message => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
              message.sender === 'user' 
                ? 'bg-gold text-black' 
                : 'bg-gray-700 text-white'
            }`}>
              <p className="text-sm">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-700 text-white px-4 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gold rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gold/30">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Ask me anything..."
            className="flex-1 bg-black border border-gold/30 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <button
            onClick={sendMessage}
            className="bg-gold text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
