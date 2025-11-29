'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Edit, Settings, Dumbbell, Heart, Brain, Bed } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

const navItems = [
  { href: '/new-chat', icon: Edit, label: 'New Chat' },
  { href: '/settings', icon: Settings, label: 'Settings' },
];

const coachItems = [
  { href: '/diet-coach', icon: Heart, label: 'Thabo (Diet)' },
  { href: '/fitness-coach', icon: Dumbbell, label: 'Muzi (Fitness)' },
  { href: '/mindfulness-coach', icon: Brain, label: 'Zola (Mindfulness)' },
  { href: '/sleep-coach', icon: Bed, label: 'Amahle (Sleep)' },
]

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        'hidden md:flex flex-col bg-secondary text-secondary-foreground transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64'
      )}
    >
      <div className="flex items-center h-16 px-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <Menu />
        </Button>
      </div>
      <nav className="flex-1 px-2 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <item.icon className="h-5 w-5" />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
        
        {!isCollapsed && <div className="px-3 py-2 text-xs font-semibold text-muted-foreground">Your Coaches</div>}
        
        {coachItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <item.icon className="h-5 w-5" />
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
