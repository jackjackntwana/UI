
'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BellRing, Pill, Droplets, Wind, Leaf } from 'lucide-react';
import { providePredictiveEnvironmentAlerts } from '@/ai/flows/provide-predictive-environment-alerts';
import { useState, useEffect } from 'react';

const staticAlerts = [
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
];

export default function AlertsPage() {
    const [aiAlert, setAiAlert] = useState<{ alert: string; proactivePlan: string } | null>(null);

    useEffect(() => {
        async function getAlerts() {
            try {
                const res = await providePredictiveEnvironmentAlerts({
                    airQuality: "Moderate",
                    pollenLevel: "High",
                    temperature: "24°C",
                    condition: "Asthma"
                });
                setAiAlert(res);
            } catch (error) {
                console.error("Error fetching AI alerts:", error);
                setAiAlert({
                    alert: "Could not load AI-powered alerts.",
                    proactivePlan: "There was an issue connecting to the AI service. Please check your connection and try again."
                });
            }
        }
        getAlerts();
    }, []);


  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
       <div className="flex items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold animate-gradient-text">Alerts & Reminders</h1>
      </div>
        <div className="text-muted-foreground">
            <p>
                Stay ahead of your health with personalized, AI-powered alerts. Below you'll find real-time updates and proactive advice based on your condition, local weather, and environmental factors. These insights are designed to help you anticipate challenges and manage your health more effectively.
            </p>
        </div>
        {aiAlert ? (
            <Alert variant='default' className='shadow-md rounded-none border-l-4 border-primary'>
                 <Wind className="h-5 w-5 mr-4 mt-1" />
                 <div className='w-full'>
                    <AlertTitle>{aiAlert.alert}</AlertTitle>
                    <AlertDescription>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>{aiAlert.proactivePlan}</li>
                            <li>Consider keeping windows closed to minimize pollen exposure.</li>
                            <li>Ensure your rescue inhaler is easily accessible throughout the day.</li>
                        </ul>
                    </AlertDescription>
                 </div>
            </Alert>
        ) : (
             <Alert className='shadow-md rounded-none'>
                 <Wind className="h-5 w-5 mr-4 mt-1" />
                 <div className='w-full'>
                    <AlertTitle>Loading AI-powered advice...</AlertTitle>
                    <AlertDescription>Please wait while we generate personalized alerts for you.</AlertDescription>
                 </div>
            </Alert>
        )}
      <div className="space-y-4">
        {staticAlerts.map((alert, index) => (
          <Alert key={index} variant={alert.variant as "default" | "destructive"} className="flex items-start rounded-none shadow-md">
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
    </div>
  );
}
