import BottomNav from '@/components/layout/BottomNav';
import type { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background text-foreground font-body min-h-screen">
      <main className="pb-24">{children}</main>
      <BottomNav />
    </div>
  );
}
