import { Button } from '@/components/ui/button';
import { Lightbulb, Pencil, Code, Search, Film } from 'lucide-react';

const actions = [
  { label: 'Suggest ideas', icon: Lightbulb },
  { label: 'Draft a story', icon: Pencil },
  { label: 'Code something', icon: Code },
  { label: 'Research a topic', icon: Search },
  { label: 'Make a video', icon: Film },
  { label: 'Help me learn', icon: Lightbulb },
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
