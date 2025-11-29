
'use client';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Pill, PlusCircle } from 'lucide-react';

const medications = [
  { name: 'Albuterol (ProAir)', type: 'Rescue Inhaler', dosage: '2 puffs as needed', frequency: 'For emergencies' },
  { name: 'Fluticasone (Flovent)', type: 'Controller Inhaler', dosage: '1 puff, twice daily', frequency: 'Morning & Evening' },
  { name: 'Lisinopril', type: 'Blood Pressure', dosage: '10mg Tablet', frequency: 'Once daily' },
  { name: 'Montelukast (Singulair)', type: 'Allergy/Asthma', dosage: '10mg Tablet', frequency: 'Once daily at night' },
];

export default function MedicationPage() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Pill className="h-8 w-8" />
                <h1 className="text-3xl font-bold animate-gradient-text">My Medications</h1>
            </div>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Add Medication
            </Button>
        </div>
        
        <Card className="rounded-none shadow-md">
            <CardContent className="p-0">
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Medication</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Dosage</TableHead>
                    <TableHead>Frequency</TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {medications.map((med) => (
                    <TableRow key={med.name}>
                    <TableCell className="font-medium">{med.name}</TableCell>
                    <TableCell>{med.type}</TableCell>
                    <TableCell>{med.dosage}</TableCell>
                    <TableCell>{med.frequency}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </CardContent>
        </Card>
    </div>
  );
}
