'use client';
import GeminiChat from '@/components/gemini-chat/GeminiChat';
import { BookOpen, Mic, Feather, BarChart, FileHeart } from 'lucide-react';

const storyTellerActionChips = [
  { label: 'Tell me a story about...', icon: BookOpen, color: 'text-orange-500' },
  { label: 'Re-tell a pivotal moment', icon: Feather, color: 'text-yellow-500' },
  { label: 'Let me tell you my story', icon: Mic, color: 'text-blue-500' },
  { label: 'Show my health journey', icon: BarChart, color: 'text-green-500' },
  { label: 'Create a provider summary', icon: FileHeart, color: 'text-red-500' },
];

export default function StoryTellerPage() {
  return (
     <div className="flex flex-col items-center justify-center h-full">
        <GeminiChat title="Chat with Lebo (Storyteller)" actionChips={storyTellerActionChips} />
    </div>
  );
}
