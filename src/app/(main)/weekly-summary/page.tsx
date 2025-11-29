
'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Line, LineChart } from 'recharts';
import { TrendingUp, Activity, Bed } from 'lucide-react';
import { generatePersonalizedHealthNarrative } from '@/ai/flows/generate-personalized-health-narrative';
import { useState, useEffect } from 'react';
import { BrainCircuit } from 'lucide-react';

const chartConfig = {
  steps: { label: 'Steps', color: 'hsl(var(--chart-1))' },
  sleep: { label: 'Sleep', color: 'hsl(var(--chart-2))' },
  symptoms: { label: 'Symptom Score', color: 'hsl(var(--chart-3))' },
};

const activityData = [
  { day: 'Mon', steps: 5500 },
  { day: 'Tue', steps: 7200 },
  { day: 'Wed', steps: 4800 },
  { day: 'Thu', steps: 8100 },
  { day: 'Fri', steps: 6200 },
  { day: 'Sat', steps: 10500 },
  { day: 'Sun', steps: 5800 },
];

const sleepData = [
  { day: 'Mon', hours: 6.5 },
  { day: 'Tue', hours: 7.0 },
  { day: 'Wed', hours: 8.0 },
  { day: 'Thu', hours: 6.0 },
  { day: 'Fri', hours: 7.5 },
  { day: 'Sat', hours: 8.5 },
  { day: 'Sun', hours: 7.0 },
];

const symptomData = [
  { day: 'Mon', score: 4 },
  { day: 'Tue', score: 3 },
  { day: 'Wed', score: 2 },
  { day: 'Thu', score: 5 },
  { day: 'Fri', score: 3 },
  { day: 'Sat', score: 1 },
  { day: 'Sun', score: 2 },
]

export default function WeeklySummaryPage() {
    const [narrative, setNarrative] = useState<string | null>(null);

    useEffect(() => {
        async function getNarrative() {
            try {
                const res = await generatePersonalizedHealthNarrative({
                    vitals: { bloodPressure: "122/80", glucose: "95 mg/dL", sleep: "Avg. 7.2 hours", moodScore: "8/10" },
                    dietaryGoalAdherence: '90%',
                    lastMealMacroBreakdown: '40% carbs, 30% protein, 30% fat',
                    pivotalMomentSummary: "Completed a 5k walk without significant breathlessness.",
                    weatherAlert: "High pollen count expected today.",
                    airQualityAlert: "AQI is moderate at 78.",
                    pollenAlert: "Oak pollen is high.",
                    activityLevel: "Moderately active, 6,500 average daily steps.",
                });
                setNarrative(res.narrative);
            } catch (error) {
                console.error("Error fetching health narrative:", error);
                setNarrative("Could not load AI health narrative. Please check your connection and try again.");
            }
        }
        getNarrative();
    }, []);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
        <div className="flex items-center gap-4 mb-8">
            <h1 className="text-3xl font-bold animate-gradient-text">Weekly Health Summary</h1>
        </div>
        <p className="text-muted-foreground -mt-4">
            Reviewing your week provides powerful insights into the connections between your activities, sleep, and symptoms. Use this summary to identify trends and celebrate progress. This data-driven overview empowers you to make smarter choices for the week ahead.
        </p>

        <Card className="rounded-none shadow-md bg-secondary border-l-4 border-primary">
            <CardHeader>
                <CardTitle className='flex items-center'><BrainCircuit className="mr-2 h-5 w-5 text-primary" />Your AI-Generated Health Narrative</CardTitle>
            </CardHeader>
            <CardContent>
                {narrative ? (
                    <p className='text-secondary-foreground'>{narrative}</p>
                ) : (
                    <p className='text-muted-foreground'>Generating your personalized health story...</p>
                )}
            </CardContent>
        </Card>
        
        <Card className="rounded-none shadow-md">
            <CardHeader>
                <CardTitle className="flex items-center"><Activity className="mr-2"/>Activity</CardTitle>
                <CardDescription>Daily steps for the last 7 days.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-64 w-full">
                    <BarChart accessibilityLayer data={activityData}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="day" tickLine={false} axisLine={false} />
                        <YAxis hide/>
                         <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="steps" fill="var(--color-steps)" radius={0} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>

        <Card className="rounded-none shadow-md">
            <CardHeader>
                <CardTitle className="flex items-center"><Bed className="mr-2"/>Sleep</CardTitle>
                 <CardDescription>Hours of sleep per night.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-64 w-full">
                    <LineChart accessibilityLayer data={sleepData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="day" tickLine={false} axisLine={false} />
                         <YAxis dataKey="hours" domain={[4, 9]} hide />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line type="monotone" dataKey="hours" name="Sleep" stroke="var(--color-sleep)" strokeWidth={3} dot={false} />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>

        <Card className="rounded-none shadow-md">
            <CardHeader>
                <CardTitle className="flex items-center"><TrendingUp className="mr-2"/>Symptom Trend</CardTitle>
                 <CardDescription>Daily symptom severity score (lower is better).</CardDescription>
            </Header>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-64 w-full">
                    <LineChart accessibilityLayer data={symptomData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="day" tickLine={false} axisLine={false} />
                        <YAxis domain={[0, 10]} hide/>
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Line type="monotone" dataKey="score" name="Symptom Score" stroke="var(--color-symptoms)" strokeWidth={3} />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    </div>
  );
}
