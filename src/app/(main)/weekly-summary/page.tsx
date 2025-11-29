'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CalendarCheck } from 'lucide-react';

export default function WeeklySummaryPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <CalendarCheck className="mr-2" /> Weekly Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is where your weekly summary will be displayed.</p>
        </CardContent>
      </Card>
    </div>
  );
}
