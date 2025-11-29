
'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Line, LineChart } from 'recharts';
import { CalendarCheck, TrendingUp, Activity, Bed } from 'lucide-react';

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
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
        <div className="flex items-center gap-4">
            <CalendarCheck className="h-8 w-8" />
            <h1 className="text-3xl font-bold animate-gradient-text">Weekly Health Summary</h1>
        </div>
        <p className="text-muted-foreground">A look at your activity, sleep, and symptom trends from the past week.</p>
        
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
            </CardHeader>
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
