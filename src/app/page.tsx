'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/onboarding');
  }, [router]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-background p-8">
      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-40 w-full mt-4" />
        <Skeleton className="h-10 w-full mt-2" />
      </div>
    </div>
  );
}
