
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
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
import { Share2, Fish, Flame } from 'lucide-react';
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

const bloodPressureData = vitalData.map(d => {
    const [systolic, diastolic] = d['Blood Pressure'].split('/').map(Number);
    return { name: d.day, systolic, diastolic };
});

const sleepData = vitalData.map(d => ({ name: d.day, hours: d.Sleep }));

const moodData = vitalData.map(d => ({ name: d.day, score: d['Mood Score'] }));

const dietLog = [
  { time: '8:00 AM', meal: 'Breakfast', item: 'Oatmeal with berries', calories: 350 },
  { time: '1:00 PM', meal: 'Lunch', item: 'Grilled Chicken Salad', calories: 450 },
  { time: '7:30 PM', meal: 'Dinner', item: 'Salmon with Quinoa', calories: 550 },
];

const activityLog = [
    { time: '9:30 AM', activity: 'Brisk Walk', duration: '30 min', calories: 150 },
    { time: '5:30 PM', activity: 'Yoga', duration: '45 min', calories: 200 },
];


export default function WeeklySummaryPage() {
  const [providerSummary, setProviderSummary] = useState('');

  const handleGenerateSummary = async () => {
    try {
        const summary = await generateProviderSummary({
            healthNarrative: 'The user has been managing their asthma and reports feeling generally well this week, with some fluctuations in mood, sleep, and blood pressure.',
            vitalSigns: JSON.stringify(vitalData, null, 2),
            medicationList: 'Albuterol (as needed), Fluticasone (daily)',
            keyEvents: `One instance of increased shortness of breath on Thursday, possibly related to poor sleep and higher pollen counts. Diet has been consistent. Activity includes daily walks and yoga. Full logs attached. Diet Log: ${JSON.stringify(dietLog, null, 2)}. Activity Log: ${JSON.stringify(activityLog, null, 2)}`
        });
        setProviderSummary(summary.providerSummary);
    } catch (error) {
        console.error("Error generating provider summary:", error);
        setProviderSummary("Could not generate summary. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
        <div className="flex items-center justify-between gap-4 mb-8">
            <h1 className="text-3xl font-bold animate-gradient-text">Weekly Health Summary</h1>
            <Button size="lg" className="shadow-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105" onClick={handleGenerateSummary}>
                <Share2 className="mr-2 h-4 w-4" /> Generate & Share
            </Button>
        </div>
         <div className="text-muted-foreground space-y-2">
           <p>
           This summary provides a comprehensive overview of your health data from the past week. By visualizing your vitals, sleep, and mood, you can uncover trends, understand the interplay between different aspects of your health, and make more informed decisions.
           </p>
             <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><span className='font-semibold'>Look for Patterns:</span> Do you notice a connection between your sleep quality and your mood the next day? Does your blood pressure change after certain activities?</li>
                <li><span className='font-semibold'>Celebrate Progress:</span> Acknowledge the days you met your goals and felt your best. Consistency is key.</li>
                <li><span className='font-semibold'>Share with Your Provider:</span> Use the "Generate & Share" button to create a concise summary for your doctor, facilitating more productive conversations about your care.</li>
            </ul>
        </div>

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
      
      <Card className="rounded-none shadow-md">
          <CardHeader>
            <CardTitle>Blood Pressure (mmHg)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={bloodPressureData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'mmHg', angle: -90, position: 'insideLeft' }} domain={['dataMin - 5', 'dataMax + 5']} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="systolic" stroke="hsl(var(--chart-1))" strokeWidth={2} />
                <Line type="monotone" dataKey="diastolic" stroke="hsl(var(--chart-2))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>


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
      
       <Card className="rounded-none shadow-md">
            <CardHeader>
                <CardTitle className="flex items-center"><Fish className="mr-2 h-5 w-5" />Weekly Diet Log</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Meal</TableHead>
                    <TableHead>Item</TableHead>
                    <TableHead className="text-right">Calories</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {dietLog.map((item, index) => (
                    <TableRow key={index} className="hover:bg-primary/10 transition-colors">
                        <TableCell>{item.time}</TableCell>
                        <TableCell>{item.meal}</TableCell>
                        <TableCell className="font-medium">{item.item}</TableCell>
                        <TableCell className="text-right">{item.calories}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
        </Card>
        
        <Card className="rounded-none shadow-md">
            <CardHeader>
                <CardTitle className="flex items-center"><Flame className="mr-2 h-5 w-5" />Weekly Activity Log</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Time</TableHead>
                    <TableHead>Activity</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead className="text-right">Calories Burned (est.)</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {activityLog.map((item, index) => (
                    <TableRow key={index} className="hover:bg-primary/10 transition-colors">
                        <TableCell>{item.time}</TableCell>
                        <TableCell className="font-medium">{item.activity}</TableCell>
                        <TableCell>{item.duration}</TableCell>
                        <TableCell className="text-right">{item.calories}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  );
}
