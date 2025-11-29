'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Activity, Thermometer, Wind, MessageSquare, Save } from 'lucide-react';
import { useState } from 'react';

export default function SymptomTrackingPage() {
  const [coughSeverity, setCoughSeverity] = useState(3);
  const [wheezing, setWheezing] = useState('none');
  const [shortnessOfBreath, setShortnessOfBreath] = useState(2);

  return (
    <div className="container mx-auto py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Activity className="mr-3 h-6 w-6" /> Track Your Symptoms
          </CardTitle>
          <CardDescription>Log how you're feeling today to see trends over time.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          <div className="space-y-4">
            <Label htmlFor="cough-severity" className="text-lg font-medium">Cough Severity</Label>
            <div className="flex items-center gap-4">
              <Wind className="h-5 w-5 text-muted-foreground" />
              <Slider
                id="cough-severity"
                min={0}
                max={10}
                step={1}
                value={[coughSeverity]}
                onValueChange={(value) => setCoughSeverity(value[0])}
              />
              <span className="font-bold text-lg w-10 text-center">{coughSeverity}</span>
            </div>
          </div>
          <div className="space-y-4">
            <Label htmlFor="shortness-of-breath" className="text-lg font-medium">Shortness of Breath</Label>
             <div className="flex items-center gap-4">
              <Thermometer className="h-5 w-5 text-muted-foreground" />
              <Slider
                id="shortness-of-breath"
                min={0}
                max={10}
                step={1}
                value={[shortnessOfBreath]}
                onValueChange={(value) => setShortnessOfBreath(value[0])}
              />
               <span className="font-bold text-lg w-10 text-center">{shortnessOfBreath}</span>
            </div>
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-medium">Wheezing</Label>
             <RadioGroup
                value={wheezing}
                onValueChange={setWheezing}
                className="flex flex-col md:flex-row gap-4 pt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="none" id="wheeze-none" />
                  <Label htmlFor="wheeze-none">None</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mild" id="wheeze-mild" />
                  <Label htmlFor="wheeze-mild">Mild</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="moderate" id="wheeze-moderate" />
                  <Label htmlFor="wheeze-moderate">Moderate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="severe" id="wheeze-severe" />
                  <Label htmlFor="wheeze-severe">Severe</Label>
                </div>
              </RadioGroup>
          </div>

          <div className="space-y-4">
            <Label htmlFor="notes" className="text-lg font-medium">Additional Notes</Label>
            <div className="flex items-start gap-4">
                <MessageSquare className="h-5 w-5 text-muted-foreground mt-3" />
                <Textarea id="notes" placeholder="Any specific triggers? Woke you up at night?..." className="w-full" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
            <Button size="lg" className="w-full md:w-auto ml-auto">
                <Save className="mr-2 h-4 w-4" /> Save Log Entry
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
