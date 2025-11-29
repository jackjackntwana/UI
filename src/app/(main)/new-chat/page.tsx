'use client';
import GeminiChat from '@/components/gemini-chat/GeminiChat';
import { Heart, Droplet, Brain, Apple, Footprints, Activity } from 'lucide-react';

const homeActionChips = [
  { label: 'Explain blood sugar levels', icon: Droplet, color: 'text-blue-500' },
  { label: 'What are the symptoms of a heart attack?', icon: Heart, color: 'text-red-500' },
  { label: 'Suggest a heart-healthy meal', icon: Apple, color: 'text-green-500' },
  { label: 'How does diabetes affect the brain?', icon: Brain, color: 'text-purple-500' },
  { label: 'Show me exercises for cardiovascular health', icon: Activity, color: 'text-orange-500' },
  { label: 'Tips for diabetic foot care', icon: Footprints, color: 'text-yellow-500' },
];

export default function NewChatPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
        <GeminiChat title="New Chat" actionChips={homeActionChips} />
    </div>
  );
}
