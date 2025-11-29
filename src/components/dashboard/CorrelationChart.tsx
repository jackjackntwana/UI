'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, ComposedChart, Line } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from '@/components/ui/chart';
import { correlationChartData, chartConfig } from '@/lib/mock-data';
import { Lightbulb } from 'lucide-react';

export default function CorrelationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Sleep &amp; Mood</CardTitle>
        <CardDescription>7-day correlation</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <ComposedChart data={correlationChartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" tickLine={false} tickMargin={10} axisLine={false} />
            <YAxis yAxisId="left" orientation="left" stroke="hsl(var(--chart-1))" hide />
            <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--chart-2))" hide />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="sleep" fill="hsl(var(--chart-1))" radius={4} yAxisId="left" />
            <Line type="monotone" dataKey="mood" stroke="hsl(var(--chart-2))" strokeWidth={2} yAxisId="right" dot={false} />
          </ComposedChart>
        </ChartContainer>
        <div className="mt-4 flex items-start gap-3 rounded-lg border bg-muted/50 p-3 text-sm">
          <Lightbulb className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">NWE Insight:</span> Your mood scores drop by an average of 25% on days following &lt;7 hours of sleep.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
