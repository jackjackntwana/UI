
'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Fish, Flame, PlusCircle } from 'lucide-react';
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
  const proteinGoal = 100;
  const carbGoal = 250;
  const fatGoal = 65;


  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
        <div className="flex items-center justify-between gap-4 mb-8">
            <h1 className="text-3xl font-bold animate-gradient-text">Diet & Activity Log</h1>
             <Button size="lg" className='shadow-lg'>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Entry
            </Button>
        </div>
        <p className="text-muted-foreground -mt-4">
            Tracking your food intake and physical activity is a powerful way to understand your body's needs and make informed decisions. This log provides a clear visual breakdown of your daily habits, helping you see where you're excelling and where you can improve.
             <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><span className='font-semibold'>Consistent Logging:</span> Aim to log your meals and activities every day to build a comprehensive health picture.</li>
                <li><span className='font-semibold'>Macro Balance:</span> Pay attention to the balance of protein, carbs, and fats to ensure you're fueling your body optimally.</li>
                <li><span className='font-semibold'>Stay Active:</span> Even short bursts of activity can make a big difference in your daily energy expenditure and overall well-being.</li>
            </ul>
        </p>

        <Card className="rounded-none shadow-md">
            <CardHeader>
                <CardTitle>Today's Calorie Intake</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-4">
                    <span className="font-bold text-lg">{totalCalories}</span>
                    <Progress value={(totalCalories / calorieGoal) * 100} className="w-full" />
                    <span className="font-bold text-lg">{calorieGoal} kcal</span>
                </div>
            </CardContent>
        </Card>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <Card className="p-4 bg-secondary rounded-none shadow-md">
                <p className="text-sm text-muted-foreground">Protein</p>
                <p className="text-2xl font-bold">{totalProtein}g</p>
                 <Progress value={(totalProtein / proteinGoal) * 100} className="mt-2 h-2" />
            </Card>
            <Card className="p-4 bg-secondary rounded-none shadow-md">
                <p className="text-sm text-muted-foreground">Carbs</p>
                <p className="text-2xl font-bold">{totalCarbs}g</p>
                <Progress value={(totalCarbs / carbGoal) * 100} className="mt-2 h-2" />
            </Card>
            <Card className="p-4 bg-secondary rounded-none shadow-md">
                <p className="text-sm text-muted-foreground">Fat</p>
                <p className="text-2xl font-bold">{totalFat}g</p>
                <Progress value={(totalFat / fatGoal) * 100} className="mt-2 h-2" />
            </Card>
        </div>

        <Card className="rounded-none shadow-md">
            <CardHeader>
                <CardTitle className="flex items-center"><Fish className="mr-2 h-5 w-5" />Diet Log</CardTitle>
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
                <CardTitle className="flex items-center"><Flame className="mr-2 h-5 w-5" />Activity Log</CardTitle>
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
