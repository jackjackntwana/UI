'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BellRing } from 'lucide-react';

export default function AlertsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <BellRing className="mr-2" /> Alerts & Reminders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is where your alerts and reminders will be displayed.</p>
        </CardContent>
      </Card>
    </div>
  );
}
