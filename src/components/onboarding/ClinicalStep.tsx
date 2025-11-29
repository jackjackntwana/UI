import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type StepProps = {
  onNext: () => void;
};

export default function ClinicalStep({ onNext }: StepProps) {
  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-2xl font-bold font-headline">Clinical &amp; Diet Foundation</h1>
        <p className="text-muted-foreground">Let's start with the basics.</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="condition">What is your primary condition?</Label>
          <Input id="condition" placeholder="e.g., Asthma, Type 2 Diabetes" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="medication">Medication List</Label>
          <Textarea id="medication" placeholder="e.g., Albuterol, Metformin" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="diet">Core diet requirements or restrictions</Label>
          <Input id="diet" placeholder="e.g., Low Carb, Vegan, Allergies" />
        </div>
      </div>
      <div className="space-y-2">
         <Button onClick={onNext} className="w-full">Next</Button>
         <Button variant="outline" className="w-full">Simulate Lab/EHR Import</Button>
      </div>
    </div>
  );
}
