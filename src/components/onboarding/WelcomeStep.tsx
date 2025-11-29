import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

type StepProps = {
  onNext: () => void;
};

export default function WelcomeStep({ onNext }: StepProps) {
  return (
    <div className="text-center flex flex-col items-center gap-8 animate-fade-in">
      <div className="p-6 bg-primary/10 rounded-full animate-pulse">
        <Zap className="h-16 w-16 text-primary" strokeWidth={1.5}/>
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold font-headline">Siyakwamukela!</h1>
        <h2 className="text-2xl font-semibold font-headline text-primary">Your Narrative Wellness Engine.</h2>
      </div>
      <p className="text-muted-foreground max-w-sm">
        Transforming data into your personal health story. <strong>Proactive guidance, reduced uncertainty, simplified chronic care.</strong>
      </p>
      <Button onClick={onNext} className="w-full max-w-xs" size="lg">
        Begin My Personalized Journey
      </Button>
    </div>
  );
}
