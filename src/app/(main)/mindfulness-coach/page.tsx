'use client';
import GeminiChat from '@/components/gemini-chat/GeminiChat';
import { BrainCircuit, Wind, Smile, Ear, Moon } from 'lucide-react';

const mindfulnessActionChips = [
  { label: 'Guide a breathing exercise', icon: Wind, color: 'text-cyan-500' },
  { label: 'Help me reflect on my day', icon: BrainCircuit, color: 'text-purple-500' },
  { label: 'Log my current mood', icon: Smile, color: 'text-yellow-500' },
  { label: 'Play calming sounds', icon: Ear, color: 'text-blue-500' },
  { label: 'Prepare me for sleep', icon: Moon, color: 'text-indigo-500' },
];

export default function MindfulnessCoachPage() {
  return <GeminiChat title="Chat with Zola (Mindfulness)" actionChips={mindfulnessActionChips} />;
}
