'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BodyIcon } from '@/components/icons/BodyIcon';
import { bodyMapTips } from '@/lib/mock-data';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export default function InteractiveBodyMap() {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const handlePartClick = (part: string) => {
    if (bodyMapTips[part]) {
      setSelectedPart(part);
    }
  };

  const handleClose = () => setSelectedPart(null);

  const painPoints = ['back', 'knees'];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Symptom Tracker</CardTitle>
        <CardDescription>Tap a highlighted area for generative tips.</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <BodyIcon onPartClick={handlePartClick} painPoints={painPoints} />
      </CardContent>

      <Dialog open={!!selectedPart} onOpenChange={(isOpen) => !isOpen &amp;&amp; handleClose()}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="capitalize font-headline">{selectedPart} Wellness Tip</DialogTitle>
            <DialogDescription className="pt-4 text-base text-foreground">
              {selectedPart &amp;&amp; bodyMapTips[selectedPart]}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
