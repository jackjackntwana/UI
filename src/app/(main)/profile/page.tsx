// src/app/(main)/profile/page.tsx
'use client';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Apple,
  Upload,
  User,
  HeartPulse,
  BrainCircuit,
  MapPin,
  Clock,
  Sun,
  Bell,
  Watch,
  Smartphone,
} from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const GoogleFitIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <path fill="#4285F4" d="M93.31 21.65l-2.07 3.6-43.26 74.93-24.66 42.7-1.74 3-2.07-3.6 22.9-39.66 23.22-40.23 23.23-40.22 2.3-4L93.3 21.65z" />
        <path fill="#34A853" d="M213.36 93.43l-45.02-77.98-2.3-4-2.06 3.6-43.6 75.52-44.68 77.38-2.07 3.6 2.3 4 67.23 42.33 2.53.95 2.07-3.6 44.35-76.81 22.93-39.71 1.72-3z" />
        <path fill="#EA4335" d="M213.36 93.43l-2.07 3.6-67.27 116.5-24.93-43.18-44.68-77.38 2.07-3.6 43.6-75.52 2.3-4 2.06 3.6 45.02 77.98 44.8 77.98z" />
        <path fill="#FBBC05" d="M72.98 233.53l-2.07-3.6-22.9-39.66-23.22-40.23L4.1 82.23l-2.07-3.6 2.3-4 44.68-77.38 2.07-3.6 2.07 3.6 67.27 116.5 24.93 43.18-44.35 76.81-2.53.95z" />
    </svg>
);


export default function ProfilePage() {
  const [setupMethod, setSetupMethod] = useState<'ai' | 'manual' | 'upload' | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8 animate-fade-in">
      <div className="flex items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold animate-gradient-text">Your Health Profile</h1>
      </div>
      <div className="text-muted-foreground">
        <p>
            Your health profile is the engine that powers personalized insights. By providing your information, you enable us to tailor recommendations, alerts, and content specifically to you. Choose your preferred method to get started.
        </p>
      </div>

      {!setupMethod && (
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <Card className="rounded-none shadow-md hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setSetupMethod('ai')}>
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                <BrainCircuit className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4">AI-Assisted Setup</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Chat with our AI to set up your profile conversationally. It's the fastest and most intuitive way to get started.</p>
            </CardContent>
          </Card>
          <Card className="rounded-none shadow-md hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setSetupMethod('manual')}>
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                <User className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4">Manual Entry</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Fill out a guided form with your health information, conditions, and goals at your own pace.</p>
            </CardContent>
          </Card>
          <Card className="rounded-none shadow-md hover:shadow-xl transition-shadow cursor-pointer" onClick={() => setSetupMethod('upload')}>
            <CardHeader>
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="mt-4">Upload a Health Record</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Have a digital health summary? Upload a PDF or CSV file to populate your profile automatically.</p>
            </CardContent>
          </Card>
        </div>
      )}

      {setupMethod && (
         <div className="flex justify-end mb-4">
            <Button variant="link" onClick={() => setSetupMethod(null)}>Choose a different method</Button>
        </div>
      )}

      {setupMethod === 'manual' && (
        <Card className="rounded-none shadow-md">
            <CardHeader><CardTitle>Manual Profile Setup</CardTitle></CardHeader>
            <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input id="age" type="number" placeholder="42" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="conditions">Primary Health Condition(s)</Label>
                    <Input id="conditions" placeholder="e.g., Asthma, Type 2 Diabetes" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="goals">What are your main health goals?</Label>
                    <Textarea id="goals" placeholder="e.g., Better asthma control, lose weight, improve sleep quality" />
                </div>
            </CardContent>
            <CardFooter>
                <Button>Save Profile</Button>
            </CardFooter>
        </Card>
      )}

       {setupMethod === 'upload' && (
        <Card className="rounded-none shadow-md">
            <CardHeader><CardTitle>Upload Health Record</CardTitle><CardDescription>Upload a PDF, TXT, or CSV file. We'll use AI to extract the relevant information.</CardDescription></CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-4 border-2 border-dashed border-muted rounded-lg p-12">
                <Upload className="h-12 w-12 text-muted-foreground" />
                <p className="text-muted-foreground">Drag & drop your file here or</p>
                <Button variant="outline">
                    <Upload className="mr-2 h-4 w-4" />
                    Browse Files
                </Button>
            </CardContent>
        </Card>
      )}
      
      {setupMethod === 'ai' && (
         <Card className="rounded-none shadow-md">
            <CardHeader><CardTitle>AI-Assisted Setup</CardTitle><CardDescription>Our AI will ask you a few questions to build your profile.</CardDescription></CardHeader>
            <CardContent>
                <div className='h-96 bg-secondary rounded-lg flex items-center justify-center'>
                    <p className='text-muted-foreground'>AI Chatbot interface coming soon...</p>
                </div>
            </CardContent>
        </Card>
      )}


      <Card className="rounded-none shadow-md">
        <CardHeader>
          <CardTitle>Connect Your Accounts</CardTitle>
          <CardDescription>
            Sync data from your favorite health apps and devices to get a holistic view of your well-being.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
           <Button variant="outline" className="justify-start p-6 text-lg rounded-none shadow-sm">
                <GoogleFitIcon /> Connect Google Fit
           </Button>
           <Button variant="outline" className="justify-start p-6 text-lg rounded-none shadow-sm">
                <Apple /> Connect Apple Health
           </Button>
           <Button variant="outline" className="justify-start p-6 text-lg rounded-none shadow-sm">
                <Watch /> Connect Smartwatch
           </Button>
        </CardContent>
      </Card>
      
      <Card className="rounded-none shadow-md">
        <CardHeader>
          <CardTitle>Data & Permissions</CardTitle>
          <CardDescription>
            You control your data. Grant permissions to enhance your experience with localized and timely insights.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                <div>
                    <Label htmlFor="location" className="font-semibold">Location Access</Label>
                    <p className="text-sm text-muted-foreground">For localized air quality and pollen alerts.</p>
                </div>
                <Switch id="location" />
            </div>
             <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                <div>
                    <Label htmlFor="weather" className="font-semibold">Weather & Time</Label>
                    <p className="text-sm text-muted-foreground">To correlate environmental factors with your symptoms.</p>
                </div>
                <Switch id="weather" defaultChecked />
            </div>
             <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                <div>
                    <Label htmlFor="notifications" className="font-semibold">App Notifications</Label>
                    <p className="text-sm text-muted-foreground">For medication reminders and critical alerts.</p>
                </div>
                <Switch id="notifications" defaultChecked />
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
