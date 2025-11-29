import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader } from 'lucide-react';

type StepProps = {
  onNext: () => void;
};

export default function RhythmStep({ onNext }: StepProps) {
  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <div className="text-center">
        <h1 className="text-2xl font-bold font-headline">Daily Rhythm &amp; Environment</h1>
        <p className="text-muted-foreground">Help us understand your day and surroundings.</p>
      </div>
      <div className="space-y-4">
         <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="sleep">Sleep Time</Label>
                <Input id="sleep" type="time" defaultValue="22:30" />
            </div>
             <div className="space-y-2">
                <Label htmlFor="wake">Wake Time</Label>
                <Input id="wake" type="time" defaultValue="06:30" />
            </div>
         </div>
        <div className="space-y-2">
          <Label htmlFor="stressor">Biggest Daily Stressor</Label>
          <Input id="stressor" placeholder="e.g., Morning commute" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="energy">When do you have the most energy?</Label>
          <Input id="energy" placeholder="e.g., Late morning" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location / Area Code</Label>
          <div className="flex items-center gap-2">
            <Input id="location" placeholder="For weather, pollen, etc." />
            <Loader className="h-5 w-5 animate-spin text-muted-foreground"/>
          </div>
        </div>
      </div>
      <Button onClick={onNext} className="w-full">Next</Button>
    </div>
  );
}
