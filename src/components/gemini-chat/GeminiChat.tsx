'use client';
import { useState } from 'react';
import ChatInput from '@/components/gemini-chat/ChatInput';
import ActionChips, { type ActionChipItem } from '@/components/gemini-chat/ActionChips';
import { Search } from 'lucide-react';

export type GeminiChatPageProps = {
  title: string;
  actionChips: ActionChipItem[];
};

export default function GeminiChat({ title, actionChips }: GeminiChatPageProps) {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="flex flex-col h-full w-full max-w-4xl mx-auto px-4 justify-center">
        <div className="w-full">
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold animate-gradient-text mb-8 py-2">
              {title}
            </h1>
          </div>
          <ChatInput prompt={prompt} setPrompt={setPrompt} />
          <ActionChips actions={actionChips} />
          <p className="text-xs text-muted-foreground text-center mt-4">
            Your chats aren’t used to improve our models. Ubuntu can make mistakes, so double-check it. Your privacy on Ubuntu
          </p>
        </div>
    </div>
  );
}
