'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Settings } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="mr-2" /> Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is where your app settings will be configured.</p>
        </CardContent>
      </Card>
    </div>
  );
}
