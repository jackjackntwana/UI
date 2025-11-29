'use client';
import GeminiChat from '@/components/gemini-chat/GeminiChat';
import { Dumbbell, Clock, Flame, Activity, Target } from 'lucide-react';

const fitnessActionChips = [
  { label: 'Suggest a quick workout', icon: Dumbbell, color: 'text-blue-500' },
  { label: 'How long was my workout?', icon: Clock, color: 'text-purple-500' },
  { label: 'Estimate calories burned', icon: Flame, color: 'text-orange-500' },
  { label: 'Log my activity for today', icon: Activity, color: 'text-green-500' },
  { label: 'Set a new fitness goal', icon: Target, color: 'text-red-500' },
];

export default function FitnessCoachPage() {
  return (
     <div className="flex flex-col items-center justify-center h-full">
        <GeminiChat title="Chat with Muzi (Fitness)" actionChips={fitnessActionChips} />
    </div>
  );
}
