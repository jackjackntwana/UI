
'use client';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Pill, PlusCircle, CheckCircle, Bell } from 'lucide-react';

const initialMedications = [
  { name: 'Albuterol (ProAir)', type: 'Rescue Inhaler', dosage: '2 puffs as needed', frequency: 'For emergencies', lastTaken: null },
  { name: 'Fluticasone (Flovent)', type: 'Controller Inhaler', dosage: '1 puff, twice daily', frequency: 'Morning & Evening', lastTaken: new Date('2024-05-21T08:00:00') },
  { name: 'Lisinopril', type: 'Blood Pressure', dosage: '10mg Tablet', frequency: 'Once daily', lastTaken: new Date('2024-05-21T08:05:00') },
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
        if (!date) return 'Not taken yet';
        const now = new Date();
        const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
        let interval = seconds / 31536000;
        if (interval > 1) return Math.floor(interval) + " years ago";
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + " months ago";
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + " days ago";
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + " hours ago";
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + " minutes ago";
        return Math.floor(seconds) + " seconds ago";
    }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
        <div className="flex items-center justify-between gap-4 mb-8">
            <h1 className="text-3xl font-bold animate-gradient-text">My Medications</h1>
            <Button size="lg" className="shadow-lg">
                <PlusCircle className="mr-2 h-4 w-4" /> Add Medication
            </Button>
        </div>
        <p className="text-muted-foreground -mt-4">
            Staying on top of your medication is crucial for managing your health. This interactive list helps you track your prescriptions, dosages, and adherence. Logging your intake creates a valuable record for you and your healthcare provider.
            <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><span className='font-semibold'>Log with one click:</span> Simply click "Log as Taken" to record the current time.</li>
                <li><span className='font-semibold'>Adherence History:</span> The "Last Taken" column provides a quick overview of your schedule.</li>
                <li><span className='font-semibold'>Never miss a dose:</span> Set reminders to ensure you're always on track (feature coming soon).</li>
            </ul>
        </p>
        
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
                        <TableCell className='text-sm text-muted-foreground'>{formatTimeAgo(med.lastTaken)}</TableCell>
                        <TableCell className="text-right">
                            <Button variant="outline" size="sm" onClick={() => handleLogMed(med.name)}>
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
