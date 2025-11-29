'use client';
import GeminiChat from '@/components/gemini-chat/GeminiChat';
import { Carrot, Dumbbell, TrendingUp, FileText, ChefHat, BrainCircuit } from 'lucide-react';

const homeActionChips = [
  { label: 'Suggest a diet', icon: Carrot, color: 'text-orange-500' },
  { label: 'Create a workout plan', icon: Dumbbell, color: 'text-cyan-500' },
  { label: 'Track my progress', icon: TrendingUp, color: 'text-green-500' },
  { label: 'Explain a condition', icon: FileText, color: 'text-blue-500' },
  { label: 'Generate a recipe', icon: ChefHat, color: 'text-yellow-500' },
  { label: 'Teach me about mindfulness', icon: BrainCircuit, color: 'text-purple-500' },
];

export default function NewChatPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
        <GeminiChat title="New Chat" actionChips={homeActionChips} />
    </div>
  );
}
