'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Notebook } from 'lucide-react';

export default function DietLogPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Notebook className="mr-2" /> Diet & Activity Log
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is where your diet and activity log will be displayed.</p>
        </CardContent>
      </Card>
    </div>
  );
}
