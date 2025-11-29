'use client';
import GeminiChat from '@/components/gemini-chat/GeminiChat';
import { Apple, Scale, BookOpen, Soup, Info } from 'lucide-react';

const dietActionChips = [
  { label: 'Log my last meal', icon: Apple, color: 'text-green-500' },
  { label: 'Give me a healthy recipe', icon: Soup, color: 'text-orange-500' },
  { label: 'Analyze my daily intake', icon: Scale, color: 'text-blue-500' },
  { label: 'Explain macronutrients', icon: BookOpen, color: 'text-yellow-500' },
  { label: 'Any dietary red flags today?', icon: Info, color: 'text-red-500' },
];

export default function DietCoachPage() {
  return <GeminiChat title="Chat with Thabo (Diet)" actionChips={dietActionChips} />;
}
