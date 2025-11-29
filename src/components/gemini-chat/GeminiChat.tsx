'use client';
import { useState } from 'react';
import ChatInput from '@/components/gemini-chat/ChatInput';
import ActionChips from '@/components/gemini-chat/ActionChips';
import { Search } from 'lucide-react';

export default function GeminiChat() {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto px-4">
      <div className="flex-1 flex flex-col justify-center items-center pb-16">
        <div className="w-full">
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold animate-gradient-text mb-8">
              Hello, Tholumuzi
            </h1>
          </div>
          <ChatInput prompt={prompt} setPrompt={setPrompt} />
          <ActionChips />
        </div>
      </div>
    </div>
  );
}
