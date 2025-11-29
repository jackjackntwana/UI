'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SymptomTrackingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="mr-2" /> Symptom Tracking
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is where you can track your symptoms.</p>
        </CardContent>
      </Card>
    </div>
  );
}
