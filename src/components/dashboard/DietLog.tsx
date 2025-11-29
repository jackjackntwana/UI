import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, Type } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

type DietLogProps = {
  adherence: number;
  lastMeal: string;
};

export default function DietLog({ adherence, lastMeal }: DietLogProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Diet &amp; Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-foreground">Low Carb Adherence</span>
            <span className="text-sm font-bold text-primary">{adherence}%</span>
          </div>
          <Progress value={adherence} className="h-2" />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground mb-1">Last Meal Macros</p>
          <p className="text-sm text-muted-foreground bg-muted/50 p-2 rounded-md">{lastMeal}</p>
        </div>
        <div className="flex gap-2 pt-2">
          <Button variant="secondary" className="flex-1">
            <Type className="mr-2 h-4 w-4" /> Log with Text
          </Button>
          <Button variant="secondary" className="flex-1">
            <Camera className="mr-2 h-4 w-4" /> Log with Photo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
