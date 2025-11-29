'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function MedicationPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Pill className="mr-2" /> Medication
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is where your medication information will be displayed.</p>
        </CardContent>
      </Card>
    </div>
  );
}
