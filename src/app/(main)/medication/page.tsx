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
    <div className="container mx-auto py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center text-2xl">
            <Pill className="mr-3 h-6 w-6" /> My Medications
          </CardTitle>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Add Medication
          </Button>
        </CardHeader>
        <CardContent>
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
