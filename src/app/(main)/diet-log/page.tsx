'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Notebook, Fish, Carrot, Flame } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const dietLog = [
  { time: '8:00 AM', meal: 'Breakfast', item: 'Oatmeal with berries', calories: 350, protein: 10, carbs: 60, fat: 8 },
  { time: '1:00 PM', meal: 'Lunch', item: 'Grilled Chicken Salad', calories: 450, protein: 40, carbs: 20, fat: 25 },
  { time: '7:30 PM', meal: 'Dinner', item: 'Salmon with Quinoa', calories: 550, protein: 45, carbs: 40, fat: 22 },
];

const activityLog = [
    { time: '9:30 AM', activity: 'Brisk Walk', duration: '30 min', calories: 150 },
    { time: '5:30 PM', activity: 'Yoga', duration: '45 min', calories: 200 },
];

export default function DietLogPage() {
  const totalCalories = dietLog.reduce((sum, item) => sum + item.calories, 0);
  const totalProtein = dietLog.reduce((sum, item) => sum + item.protein, 0);
  const totalCarbs = dietLog.reduce((sum, item) => sum + item.carbs, 0);
  const totalFat = dietLog.reduce((sum, item) => sum + item.fat, 0);
  const calorieGoal = 2000;

  return (
    <div className="container mx-auto py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Notebook className="mr-3 h-6 w-6" /> Diet & Activity Log
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Today's Calorie Intake</h3>
            <div className="flex items-center gap-4">
                <Progress value={(totalCalories / calorieGoal) * 100} className="w-full" />
                <span className="font-bold text-lg">{totalCalories} / {calorieGoal} kcal</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-secondary rounded-lg">
                    <p className="text-sm text-muted-foreground">Protein</p>
                    <p className="text-2xl font-bold">{totalProtein}g</p>
                </div>
                 <div className="p-4 bg-secondary rounded-lg">
                    <p className="text-sm text-muted-foreground">Carbs</p>
                    <p className="text-2xl font-bold">{totalCarbs}g</p>
                </div>
                 <div className="p-4 bg-secondary rounded-lg">
                    <p className="text-sm text-muted-foreground">Fat</p>
                    <p className="text-2xl font-bold">{totalFat}g</p>
                </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center"><Fish className="mr-2 h-5 w-5" />Diet Log</h3>
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
                  <TableRow key={index}>
                    <TableCell>{item.time}</TableCell>
                    <TableCell>{item.meal}</TableCell>
                    <TableCell className="font-medium">{item.item}</TableCell>
                    <TableCell className="text-right">{item.calories}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center"><Flame className="mr-2 h-5 w-5" />Activity Log</h3>
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
                  <TableRow key={index}>
                    <TableCell>{item.time}</TableCell>
                    <TableCell className="font-medium">{item.activity}</TableCell>
                    <TableCell>{item.duration}</TableCell>
                    <TableCell className="text-right">{item.calories}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
