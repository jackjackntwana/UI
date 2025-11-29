'use client';
import { useState, useEffect } from 'react';
import GeminiChat from '@/components/gemini-chat/GeminiChat';
import { Heart, Droplet, Brain, Apple, Footprints, Activity, HelpCircle } from 'lucide-react';

const allActionChips = [
  { label: 'Help me understand my blood sugar', icon: Droplet, color: 'text-blue-500' },
  { label: 'What do I do for a tight chest?', icon: Heart, color: 'text-red-500' },
  { label: 'Can you suggest a good meal for my heart?', icon: Apple, color: 'text-green-500' },
  { label: 'I feel confused, is it my diabetes?', icon: Brain, color: 'text-purple-500' },
  { label: 'Show me easy exercises to get started', icon: Activity, color: 'text-orange-500' },
  { label: 'My feet are feeling numb, what should I do?', icon: Footprints, color: 'text-yellow-500' },
  { label: 'I need help with my diet', icon: HelpCircle, color: 'text-green-500'},
  { label: 'Is this chest pain serious?', icon: Heart, color: 'text-red-500' },
];

const greetings = [
    "Ready for a new chat, Tholumuzi?",
    "What's on your mind, Tholumuzi?",
    "Let's talk, Tholumuzi.",
    "How can I assist you now, Tholumuzi?",
];

// Function to shuffle array and pick a few items
const getShuffledItems = <T,>(arr: T[], num = 6): T[] => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

export default function NewChatPage() {
  const [title, setTitle] = useState('New Chat');
  const [actionChips, setActionChips] = useState<typeof allActionChips>([]);

   useEffect(() => {
    // This runs only on the client, after hydration
    setTitle(greetings[Math.floor(Math.random() * greetings.length)]);
    setActionChips(getShuffledItems(allActionChips, 6));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full">
        <GeminiChat title={title} actionChips={actionChips} />
    </div>
  );
}
