import { Button } from '@/components/ui/button';
import { ShieldCheck, ArrowRight, Apple, Activity } from 'lucide-react';

type StepProps = {
  onNext: () => void;
};

export default function DataConnectivityStep({ onNext }: StepProps) {
  return (
    <div className="flex flex-col gap-6 animate-fade-in text-center">
      <div>
        <h1 className="text-2xl font-bold font-headline">Data Connectivity</h1>
        <p className="text-muted-foreground">Connect your health data for passive input.</p>
      </div>
      
      <div className="flex items-center justify-center gap-4 text-muted-foreground my-4">
        <Apple className="h-10 w-10" />
        <ArrowRight className="h-6 w-6" />
        <ShieldCheck className="h-12 w-12 text-primary" />
        <ArrowRight className="h-6 w-6" />
        <Activity className="h-10 w-10" />
      </div>

      <div className="space-y-3">
        <Button onClick={onNext} size="lg" className="w-full justify-start p-6">
          <Apple className="mr-4 h-6 w-6" /> Connect Apple Health
        </Button>
        <Button onClick={onNext} size="lg" className="w-full justify-start p-6">
          <Activity className="mr-4 h-6 w-6" /> Connect Google Fit
        </Button>
        <Button onClick={onNext} variant="secondary" className="w-full">
          Manual Entry Only
        </Button>
      </div>
    </div>
  );
}
