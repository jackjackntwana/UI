
'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Thermometer, Wind, MessageSquare, Save, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

const chartData = [
  { date: "May 15", cough: 4, breath: 3, wheezing: 2 },
  { date: "May 16", cough: 5, breath: 4, wheezing: 3 },
  { date: "May 17", cough: 3, breath: 2, wheezing: 1 },
  { date: "May 18", cough: 6, breath: 5, wheezing: 4 },
  { date: "May 19", cough: 4, breath: 3, wheezing: 2 },
  { date: "May 20", cough: 2, breath: 1, wheezing: 0 },
  { date: "May 21", cough: 3, breath: 2, wheezing: 1 },
];

const chartConfig = {
  cough: { label: "Cough", color: "hsl(var(--chart-1))" },
  breath: { label: "Shortness of Breath", color: "hsl(var(--chart-2))" },
};


export default function SymptomTrackingPage() {
  const [coughSeverity, setCoughSeverity] = useState(3);
  const [wheezing, setWheezing] = useState('none');
  const [shortnessOfBreath, setShortnessOfBreath] = useState(2);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="flex items-center justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold animate-gradient-text">Track Your Symptoms</h1>
      </div>
      <div className="text-muted-foreground space-y-2">
        <p>
            Logging how you feel each day provides crucial data for understanding your health trends. By noting your symptoms, you can identify patterns, recognize triggers, and have more productive conversations with your healthcare provider.
        </p>
         <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><span className='font-semibold'>Be Consistent:</span> Daily tracking, even when you feel good, provides a more complete picture.</li>
            <li><span className='font-semibold'>Use the Scale:</span> The 0-10 scale helps quantify your symptoms, making it easier to spot changes over time.</li>
            <li><span className='font-semibold'>Add Notes:</span> Context is key. Did something trigger your symptoms? Did you try a new activity? Note it down.</li>
        </ul>
      </div>
      
        <Card className="rounded-none shadow-md">
            <CardHeader>
                <CardTitle className='flex items-center'><TrendingUp className="mr-2 h-5 w-5"/>Symptom Trends</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-64 w-full">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="date" tickLine={false} tickMargin={10} axisLine={false} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="cough" fill="var(--color-cough)" radius={0} />
                        <Bar dataKey="breath" fill="var(--color-breath)" radius={0} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>

      <div className="space-y-8 pt-6">
        <Card className="rounded-none shadow-md">
            <CardHeader>
                <CardTitle>Log Today's Symptoms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
                <div className="space-y-4">
                    <Label htmlFor="cough-severity" className="text-lg font-medium">Cough Severity</Label>
                    <div className="flex items-center gap-4">
                    <span className="font-bold text-lg w-10 text-center">0</span>
                    <Slider
                        id="cough-severity"
                        min={0}
                        max={10}
                        step={1}
                        value={[coughSeverity]}
                        onValueChange={(value) => setCoughSeverity(value[0])}
                    />
                    <span className="font-bold text-lg w-10 text-center">10</span>
                    </div>
                     <p className='text-center text-muted-foreground font-bold text-xl'>{coughSeverity}</p>
                </div>
                <div className="space-y-4">
                    <Label htmlFor="shortness-of-breath" className="text-lg font-medium">Shortness of Breath</Label>
                    <div className="flex items-center gap-4">
                     <span className="font-bold text-lg w-10 text-center">0</span>
                    <Slider
                        id="shortness-of-breath"
                        min={0}
                        max={10}
                        step={1}
                        value={[shortnessOfBreath]}
                        onValueChange={(value) => setShortnessOfBreath(value[0])}
                    />
                     <span className="font-bold text-lg w-10 text-center">10</span>
                    </div>
                     <p className='text-center text-muted-foreground font-bold text-xl'>{shortnessOfBreath}</p>
                </div>

                <div className="space-y-4">
                    <Label className="text-lg font-medium">Wheezing</Label>
                    <RadioGroup
                        value={wheezing}
                        onValueChange={setWheezing}
                        className="flex flex-col sm:flex-row gap-4 pt-2"
                    >
                        <div className="flex items-center space-x-2">
                        <RadioGroupItem value="none" id="wheeze-none" />
                        <Label htmlFor="wheeze-none" className='cursor-pointer'>None</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mild" id="wheeze-mild" />
                        <Label htmlFor="wheeze-mild" className='cursor-pointer'>Mild</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                        <RadioGroupItem value="moderate" id="wheeze-moderate" />
                        <Label htmlFor="wheeze-moderate" className='cursor-pointer'>Moderate</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                        <RadioGroupItem value="severe" id="wheeze-severe" />
                        <Label htmlFor="wheeze-severe" className='cursor-pointer'>Severe</Label>
                        </div>
                    </RadioGroup>
                </div>
            </CardContent>
        </Card>

        <Card className="rounded-none shadow-md">
            <CardHeader>
                <CardTitle className="flex items-center"><MessageSquare className="mr-2 h-5 w-5" />Additional Notes</CardTitle>
            </CardHeader>
            <CardContent>
                <Textarea id="notes" placeholder="Any specific triggers? Woke you up at night? Did a rescue inhaler help?..." className="w-full" />
            </CardContent>
        </Card>
      </div>

      <div className="flex justify-end">
          <Button size="lg" className="w-full md:w-auto shadow-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
              <Save className="mr-2 h-4 w-4" /> Save Log Entry
          </Button>
      </div>
    </div>
  );
}
