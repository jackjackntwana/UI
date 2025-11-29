import { Button } from '@/components/ui/button';
import { Carrot, Dumbbell, TrendingUp, FileText, ChefHat, BrainCircuit } from 'lucide-react';

const actions = [
  { label: 'Suggest a diet', icon: Carrot },
  { label: 'Create a workout plan', icon: Dumbbell },
  { label: 'Track my progress', icon: TrendingUp },
  { label: 'Explain a condition', icon: FileText },
  { label: 'Generate a recipe', icon: ChefHat },
  { label: 'Teach me about mindfulness', icon: BrainCircuit },
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
          <action.icon className="h-4 w-4 mr-2" />
          {action.label}
        </Button>
      ))}
    </div>
  );
}
