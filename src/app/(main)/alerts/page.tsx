'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BellRing, Pill, Droplets, Wind, Leaf } from 'lucide-react';

const alerts = [
  {
    icon: Pill,
    title: 'Medication Reminder: Lisinopril',
    description: 'Time to take your 10mg dose. It\'s been 24 hours since your last one.',
    time: '2 minutes ago',
    variant: 'default',
  },
  {
    icon: Droplets,
    title: 'High Blood Pressure',
    description: 'Your recent reading (145/92 mmHg) is higher than usual. Please monitor and rest.',
    time: '1 hour ago',
    variant: 'destructive',
  },
  {
    icon: Wind,
    title: 'High AQI Predicted',
    description: 'Air quality is expected to be poor tomorrow. Plan indoor activities if possible.',
    time: 'Yesterday',
    variant: 'default',
  },
  {
    icon: Leaf,
    title: 'High Pollen Count',
    description: 'Oak pollen is high in your area. Be mindful of allergy symptoms.',
    time: 'Yesterday',
    variant: 'default',
  },
];

export default function AlertsPage() {
  return (
    <div className="container mx-auto py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <BellRing className="mr-3 h-6 w-6" /> Alerts & Reminders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <Alert key={index} variant={alert.variant} className="flex items-start">
                <alert.icon className="h-5 w-5 mr-4 mt-1" />
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <AlertTitle>{alert.title}</AlertTitle>
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                  </div>
                  <AlertDescription>{alert.description}</AlertDescription>
                </div>
              </Alert>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
