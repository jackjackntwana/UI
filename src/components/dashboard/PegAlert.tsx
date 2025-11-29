import { AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';

type PegAlertProps = {
  message: string;
};

export default function PegAlert({ message }: PegAlertProps) {
  return (
    <Card className="bg-primary/10 border-primary/20 p-3">
      <div className="flex items-start gap-3">
        <AlertTriangle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
        <p className="text-sm font-medium text-primary-foreground">
          {message}
        </p>
      </div>
    </Card>
  );
}
