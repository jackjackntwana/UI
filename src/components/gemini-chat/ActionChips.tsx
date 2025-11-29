'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Carrot, Dumbbell, TrendingUp, FileText, ChefHat, BrainCircuit } from 'lucide-react';

const actions = [
  { label: 'Suggest a diet', icon: Carrot, color: 'text-orange-500' },
  { label: 'Create a workout plan', icon: Dumbbell, color: 'text-cyan-500' },
  { label: 'Track my progress', icon: TrendingUp, color: 'text-green-500' },
  { label: 'Explain a condition', icon: FileText, color: 'text-blue-500' },
  { label: 'Generate a recipe', icon: ChefHat, color: 'text-yellow-500' },
  { label: 'Teach me about mindfulness', icon: BrainCircuit, color: 'text-purple-500' },
];

export default function ActionChips() {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-6">
      {actions.map((action, index) => (
        <Button
          key={index}
          variant="outline"
          className="bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full"
        >
          <action.icon className={cn("h-4 w-4 mr-2", action.color)} />
          {action.label}
        </Button>
      ))}
    </div>
  );
}
