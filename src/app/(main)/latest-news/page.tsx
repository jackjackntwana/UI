'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Newspaper } from 'lucide-react';

export default function LatestNewsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Newspaper className="mr-2" /> Latest News
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is where the latest healthcare news will be displayed.</p>
        </CardContent>
      </Card>
    </div>
  );
}
