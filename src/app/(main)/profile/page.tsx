// src/app/(main)/profile/page.tsx
'use client';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
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
    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.64 5.93h.02a3.34 3.34 0 0 1-3.34-3.34h-.01a3.34 3.34 0 0 1 3.33 3.34z" fill="#4285f4"/>
        <path d="M7.14 12.83a3.34 3.34 0 0 1 3.34-3.34h.01a3.34 3.34 0 0 1-3.35 3.34z" fill="#ea4335"/>
        <path d="M12.8 2.59a3.34 3.34 0 0 1 3.33 3.34h-.01a3.34 3.34 0 0 1-3.32-3.34z" fill="#fbbc05"/>
        <path d="M12.8 9.49a3.34 3.34 0 0 1 3.33 3.34h-.01a3.34 3.34 0 0 1-3.32-3.34z" fill="#34a853"/>
        <path d="M15.3 12.83a4.51 4.51 0 0 1-4.51 4.51h-.02a4.51 4.51 0 0 1 4.53-4.51z" fill="#34a853"/>
        <path d="M8.29 5.93a4.51 4.51 0 0 1 4.51 4.51h-.02a4.51 4.51 0 0 1-4.49-4.51z" fill="#fbbc05"/>
        <path d="M17.31 4.71l-2.83 2.83a.47.47 0 0 1-.66 0l-.88-.88a.47.47 0 0 1 0-.66l2.83-2.83a.47.47 0 0 1 .66 0l.88.88a.47.47 0 0 1 0 .66z" fill="#ea4335"/>
        <path d="M12.03 21.05a5.64 5.64 0 0 1-5.63-5.64h.01a5.64 5.64 0 0 1 5.62 5.64z" fill="#4285f4"/>
        <path d="M4.09 13.62a.47.47 0 0 1 0-.66l.88-.88a.47.47 0 0 1 .66 0l2.83 2.83a.47.47 0 0 1 0 .66l-.88.88a.47.47 0 0 1-.66 0z" fill="#4285f4"/>
    </svg>
);

const AppleHealthIcon = () => (
    <svg className="w-6 h-6 mr-2" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF586A" fillRule="evenodd" d="M10.655 2.494a.5.5 0 0 0-.848-.358L5.47 6.438A5.474 5.474 0 0 0 4 9.87v.002a5.474 5.474 0 0 0 5.473 5.472A5.474 5.474 0 0 0 14.945 9.87a5.474 5.474 0 0 0-1.468-3.43L10.99 3.51a.5.5 0 0 0-.335-1.016zM9.53 8.31a.5.5 0 0 1 .71.026l.75 1a.5.5 0 0 1-.736.688l-.75-1a.5.5 0 0 1 .026-.714zM11.97 8.31a.5.5 0 0 0-.71.026l-1.5 2a.5.5 0 0 0 .736.688l1.5-2a.5.5 0 0 0-.026-.714z"/>
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
                <AppleHealthIcon /> Connect Apple Health
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
