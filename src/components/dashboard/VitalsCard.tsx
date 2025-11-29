import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartPulse, Droplets, BedDouble } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

type VitalsCardProps = {
  vitals: {
    bp: string;
    glucose: string;
    sleep: string;
  };
};

const VitalItem = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex flex-col items-center text-center gap-1.5 flex-1">
    <div className="p-2.5 bg-secondary rounded-full">
      {icon}
    </div>
    <p className="text-xs text-muted-foreground">{label}</p>
    <p className="font-semibold text-lg">{value}</p>
  </div>
);

export default function VitalsCard({ vitals }: VitalsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Core Vitals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-around items-start">
          <VitalItem icon={<HeartPulse className="h-6 w-6 text-destructive" />} label="Blood Pressure" value={vitals.bp} />
          <VitalItem icon={<Droplets className="h-6 w-6 text-blue-500" />} label="Glucose" value={vitals.glucose} />
          <VitalItem icon={<BedDouble className="h-6 w-6 text-indigo-500" />} label="Sleep" value={vitals.sleep} />
        </div>
      </CardContent>
    </Card>
  );
}
