import { Button } from '@/components/ui/button';
import { MessageSquarePlus } from 'lucide-react';

type CompanionPromptProps = {
  message: string;
};

export default function CompanionPrompt({ message }: CompanionPromptProps) {
  return (
    <div className="relative rounded-xl bg-accent/50 border border-accent/60 p-4 shadow-sm">
      <p className="text-center text-accent-foreground font-medium italic mb-4">"{message}"</p>
      <div className="flex justify-center">
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <MessageSquarePlus className="mr-2 h-5 w-5" />
          Chat Now
        </Button>
      </div>
    </div>
  );
}
