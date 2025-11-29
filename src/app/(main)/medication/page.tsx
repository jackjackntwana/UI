
'use client';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Pill, PlusCircle, CheckCircle, Bell } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const initialMedications = [
  { name: 'Albuterol (ProAir)', type: 'Rescue Inhaler', dosage: '2 puffs as needed', frequency: 'For emergencies', lastTaken: null },
  { name: 'Fluticasone (Flovent)', type: 'Controller Inhaler', dosage: '1 puff, twice daily', frequency: 'Morning & Evening', lastTaken: new Date('2024-07-21T08:00:00') },
  { name: 'Lisinopril', type: 'Blood Pressure', dosage: '10mg Tablet', frequency: 'Once daily', lastTaken: new Date('2024-07-21T08:05:00') },
  { name: 'Montelukast (Singulair)', type: 'Allergy/Asthma', dosage: '10mg Tablet', frequency: 'Once daily at night', lastTaken: null },
];

export default function MedicationPage() {
    const [medications, setMedications] = useState(initialMedications);

    const handleLogMed = (medName: string) => {
        setMedications(meds => 
            meds.map(med => 
                med.name === medName ? { ...med, lastTaken: new Date() } : med
            )
        );
    };

    const formatTimeAgo = (date: Date | null) => {
        if (!date) return <Badge variant="destructive">Never</Badge>;
        const now = new Date();
        const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) return <Badge variant="secondary">{Math.floor(interval)}y ago</Badge>;
        interval = seconds / 2592000;
        if (interval > 1) return <Badge variant="secondary">{Math.floor(interval)}mo ago</Badge>;
        interval = seconds / 86400;
        if (interval > 1) return <Badge variant="secondary">{Math.floor(interval)}d ago</Badge>;
        interval = seconds / 3600;
        if (interval > 1) return <Badge variant="secondary">{Math.floor(interval)}h ago</Badge>;
        interval = seconds / 60;
        if (interval > 1) return <Badge variant="secondary">{Math.floor(interval)}m ago</Badge>;
        return <Badge variant="default">{Math.floor(seconds)}s ago</Badge>;
    }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
        <div className="flex items-center justify-between gap-4 mb-8">
            <h1 className="text-3xl font-bold animate-gradient-text">My Medications</h1>
            <Button size="lg" className="shadow-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Medication
            </Button>
        </div>
        <div className="text-muted-foreground space-y-2">
            <p>
                Staying on top of your medication is crucial for managing your health. This interactive list helps you track your prescriptions, dosages, and adherence. Logging your intake creates a valuable record for you and your healthcare provider.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><span className='font-semibold'>Log with one click:</span> Simply click "Log as Taken" to record the current time.</li>
                <li><span className='font-semibold'>Adherence History:</span> The "Last Taken" column provides a quick overview of your schedule.</li>
                <li><span className='font-semibold'>Never miss a dose:</span> Set reminders to ensure you're always on track (feature coming soon).</li>
            </ul>
        </div>
        
        <Card className="rounded-none shadow-md">
            <CardContent className="p-0">
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Medication</TableHead>
                    <TableHead>Dosage</TableHead>
                    <TableHead>Last Taken</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {medications.map((med) => (
                    <TableRow key={med.name} className="hover:bg-primary/10 transition-colors">
                        <TableCell className="font-medium">
                            <div className='flex items-center gap-2'>
                                <Pill className='h-5 w-5 text-primary' />
                                <div>
                                    <div>{med.name}</div>
                                    <div className="text-xs text-muted-foreground">{med.type}</div>
                                </div>
                            </div>
                        </TableCell>
                        <TableCell>{med.dosage}</TableCell>
                        <TableCell>
                             <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>{formatTimeAgo(med.lastTaken)}</TooltipTrigger>
                                    <TooltipContent>
                                    <p>{med.lastTaken ? med.lastTaken.toLocaleString() : 'Not taken yet'}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </TableCell>
                        <TableCell className="text-right">
                            <Button variant="outline" size="sm" onClick={() => handleLogMed(med.name)} className="rounded-full hover:bg-green-100 hover:text-green-800 transition-colors">
                                <CheckCircle className="mr-2 h-4 w-4 text-green-500" /> Log as Taken
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </CardContent>
        </Card>
    </div>
  );
}
