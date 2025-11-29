'use client';
import GeminiChat from '@/components/gemini-chat/GeminiChat';
import { Stethoscope, Pill, FileText, HelpCircle, Activity } from 'lucide-react';

const clinicalActionChips = [
  { label: 'Explain my condition', icon: Stethoscope, color: 'text-cyan-500' },
  { label: 'Tell me about my medication', icon: Pill, color: 'text-indigo-500' },
  { label: 'Summarize my health record', icon: FileText, color: 'text-blue-500' },
  { label: 'Log a new symptom', icon: Activity, color: 'text-green-500' },
  { label: 'When should I see a doctor?', icon: HelpCircle, color: 'text-red-500' },
];

export default function ClinicalCoachPage() {
  return (
     <div className="flex flex-col items-center justify-center h-full">
        <GeminiChat title="Chat with Zandi (Clinical)" actionChips={clinicalActionChips} />
    </div>
  );
}
