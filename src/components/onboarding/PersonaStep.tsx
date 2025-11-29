import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BrainCircuit } from 'lucide-react';

type StepProps = {
  onNext: () => void;
};

export default function PersonaStep({ onNext }: StepProps) {
  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-2xl font-bold font-headline">Persona &amp; Deep Goals</h1>
        <p className="text-muted-foreground">Customize your NWE companion.</p>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Choose your coach's persona</Label>
          <div className="grid grid-cols-3 gap-2">
            <Button variant="outline" className="h-16 text-xs flex-col">Zen Master</Button>
            <Button variant="secondary" className="h-16 text-xs flex-col">Supportive Friend</Button>
            <Button variant="outline" className="h-16 text-xs flex-col">No-Nonsense Coach</Button>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Choose a metaphor style</Label>
          <div className="grid grid-cols-3 gap-2">
            <Button variant="secondary" className="h-16 text-xs flex-col">Nature</Button>
            <Button variant="outline" className="h-16 text-xs flex-col">Sports</Button>
            <Button variant="outline" className="h-16 text-xs flex-col">Sci-Fi</Button>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="goal">What will success *feel* like?</Label>
          <Input id="goal" placeholder="e.g., 'Energetic and in control'" />
        </div>
      </div>
       <div className="text-center space-y-4 mt-4">
        <div className="flex justify-center">
            <BrainCircuit className="h-8 w-8 text-primary"/>
        </div>
        <p className="text-sm font-semibold text-primary">Profile Complete! Generating Your Narrative...</p>
        <Button onClick={onNext} className="w-full">Go to my Dashboard</Button>
      </div>
    </div>
  );
}
