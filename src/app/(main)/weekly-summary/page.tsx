
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Share2 } from 'lucide-react';
import { generateProviderSummary } from '@/ai/flows/generate-provider-summary';

const vitalData = [
  {
    day: 'Mon',
    'Blood Pressure': '120/80',
    Glucose: 95,
    Sleep: 7.5,
    'Mood Score': 8,
  },
  {
    day: 'Tue',
    'Blood Pressure': '122/81',
    Glucose: 100,
    Sleep: 7,
    'Mood Score': 7,
  },
  {
    day: 'Wed',
    'Blood Pressure': '118/79',
    Glucose: 92,
    Sleep: 8,
    'Mood Score': 9,
  },
  {
    day: 'Thu',
    'Blood Pressure': '125/85',
    Glucose: 105,
    Sleep: 6.5,
    'Mood Score': 6,
  },
  {
    day: 'Fri',
    'Blood Pressure': '123/82',
    Glucose: 98,
    Sleep: 7,
    'Mood Score': 8,
  },
  {
    day: 'Sat',
    'Blood Pressure': '121/80',
    Glucose: 96,
    Sleep: 8.5,
    'Mood Score': 9,
  },
  {
    day: 'Sun',
    'Blood Pressure': '119/78',
    Glucose: 94,
    Sleep: 8,
    'Mood Score': 9,
  },
];

const sleepData = [
  { name: 'Mon', hours: 7.5 },
  { name: 'Tue', hours: 7 },
  { name: 'Wed', hours: 8 },
  { name: 'Thu', hours: 6.5 },
  { name: 'Fri', hours: 7 },
  { name: 'Sat', hours: 8.5 },
  { name: 'Sun', hours: 8 },
];

const moodData = [
    { name: 'Mon', score: 8 },
    { name: 'Tue', score: 7 },
    { name: 'Wed', score: 9 },
    { name: 'Thu', score: 6 },
    { name: 'Fri', score: 8 },
    { name: 'Sat', score: 9 },
    { name: 'Sun', score: 9 },
];

export default function WeeklySummaryPage() {
  const [providerSummary, setProviderSummary] = useState('');

  const handleGenerateSummary = async () => {
    const summary = await generateProviderSummary({
        healthNarrative: 'The user has been managing their asthma and reports feeling generally well this week, with some fluctuations in mood and sleep.',
        vitalSigns: JSON.stringify(vitalData, null, 2),
        medicationList: 'Albuterol (as needed), Fluticasone (daily)',
        keyEvents: 'One instance of increased shortness of breath on Thursday, possibly related to poor sleep and higher pollen counts.'
    });
    setProviderSummary(summary.providerSummary);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
        <div className="flex items-center justify-between gap-4 mb-8">
            <h1 className="text-3xl font-bold animate-gradient-text">Weekly Health Summary</h1>
            <Button size="lg" className="shadow-lg" onClick={handleGenerateSummary}>
                <Share2 className="mr-2 h-4 w-4" /> Generate & Share
            </Button>
        </div>
         <p className="text-muted-foreground -mt-4">
           This summary provides a comprehensive overview of your health data from the past week. By visualizing your vitals, sleep, and mood, you can uncover trends, understand the interplay between different aspects of your health, and make more informed decisions.
             <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><span className='font-semibold'>Look for Patterns:</span> Do you notice a connection between your sleep quality and your mood the next day? Does your blood pressure change after certain activities?</li>
                <li><span className='font-semibold'>Celebrate Progress:</span> Acknowledge the days you met your goals and felt your best. Consistency is key.</li>
                <li><span className='font-semibold'>Share with Your Provider:</span> Use the "Generate & Share" button to create a concise summary for your doctor, facilitating more productive conversations about your care.</li>
            </ul>
        </p>

      {providerSummary && (
        <Card className="rounded-none shadow-md">
          <CardHeader>
            <CardTitle>Provider Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap">{providerSummary}</p>
          </CardContent>
        </Card>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="rounded-none shadow-md">
          <CardHeader>
            <CardTitle>Sleep Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sleepData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Hours', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="hours" stroke="hsl(var(--primary))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="rounded-none shadow-md">
          <CardHeader>
            <CardTitle>Mood Score</CardTitle>
          </CardHeader>
          <CardContent>
             <ResponsiveContainer width="100%" height={300}>
              <LineChart data={moodData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Score', angle: -90, position: 'insideLeft' }} domain={[0, 10]} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="score" name="Mood Score" stroke="hsl(var(--chart-2))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
