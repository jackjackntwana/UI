'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

export type ActionChipItem = {
  label: string;
  icon: LucideIcon;
  color: string;
};

export default function ActionChips({ actions }: { actions: ActionChipItem[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-6">
      {actions.map((action, index) => (
        <Button
          key={index}
          variant="outline"
          className="bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-full"
        >
          <action.icon className={cn("h-4 w-4 mr-2", action.color)} />
          {action.label}
        </Button>
      ))}
    </div>
  );
}
