'use client';
import GeminiChat from '@/components/gemini-chat/GeminiChat';
import { BedDouble, Clock, Sun, Book, Coffee } from 'lucide-react';

const sleepActionChips = [
  { label: 'Log my sleep time', icon: Clock, color: 'text-blue-500' },
  { label: 'How can I improve sleep?', icon: BedDouble, color: 'text-purple-500' },
  { label: 'Create a wind-down routine', icon: Book, color: 'text-yellow-500' },
  { label: 'Tips for waking up refreshed', icon: Sun, color: 'text-orange-500' },
  { label: 'Impact of caffeine on sleep', icon: Coffee, color: 'text-red-500' },
];

export default function SleepCoachPage() {
  return (
     <div className="flex flex-col items-center justify-center h-full">
        <GeminiChat title="Chat with Amahle (Sleep)" actionChips={sleepActionChips} />
    </div>
  );
}
