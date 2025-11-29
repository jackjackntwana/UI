
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Menu,
  Edit,
  Settings,
  Dumbbell,
  Leaf,
  HeartPulse,
  BedDouble,
  Stethoscope,
  BookOpen,
  Pill,
  CalendarCheck,
  Newspaper,
  BellRing,
  Activity,
  Notebook,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

const navItems = [{ href: '/new-chat', icon: Edit, label: 'New Chat', color: 'text-blue-500' }];

const coachItems = [
  { href: '/diet-coach', icon: Leaf, label: 'Thabo (Diet)', color: 'text-green-500' },
  { href: '/fitness-coach', icon: Dumbbell, label: 'Muzi (Fitness)', color: 'text-blue-500' },
  { href: '/mindfulness-coach', icon: HeartPulse, label: 'Zola (Mindfulness)', color: 'text-red-500' },
  { href: '/sleep-coach', icon: BedDouble, label: 'Amahle (Sleep)', color: 'text-purple-500' },
  { href: '/clinical-coach', icon: Stethoscope, label: 'Zandi (Clinical)', color: 'text-cyan-500' },
  { href: '/story-teller', icon: BookOpen, label: 'Lebo (Storyteller)', color: 'text-orange-500' },
];

const insightsItems = [
  { href: '/medication', icon: Pill, label: 'Medication', color: 'text-indigo-500' },
  { href: '/latest-news', icon: Newspaper, label: 'Latest News', color: 'text-yellow-500' },
  { href: '/alerts', icon: BellRing, label: 'Alerts & Reminders', color: 'text-red-500' },
  { href: '/symptom-tracking', icon: Activity, label: 'Symptom Tracking', color: 'text-green-500' },
  { href: '/diet-log', icon: Notebook, label: 'Diet & Activity Log', color: 'text-blue-500' },
  { href: '/weekly-summary', icon: CalendarCheck, label: 'Weekly Summary', color: 'text-purple-500' },
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
      <ScrollArea className="flex-1">
        <nav className="px-2 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'animate-gradient-text'
                    : 'hover:bg-accent hover:text-accent-foreground'
                )}
              >
                <item.icon className={cn('h-5 w-5', item.color)} />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
          
          {!isCollapsed && <div className="px-3 pt-4 pb-2 text-xs font-semibold text-muted-foreground">Your Health Coaches</div>}
          
          {coachItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'animate-gradient-text'
                    : 'hover:bg-accent hover:text-accent-foreground'
                )}
              >
                <item.icon className={cn('h-5 w-5', item.color)} />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            );
          })}

          {!isCollapsed && <div className="px-3 pt-4 pb-2 text-xs font-semibold text-muted-foreground">Information and Insights</div>}

          {insightsItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive
                    ? 'animate-gradient-text'
                    : 'hover:bg-accent hover:text-accent-foreground'
                )}
              >
                <item.icon className={cn('h-5 w-5', item.color)} />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
      <div className="border-t mt-auto p-2 space-y-1">
          <Link
            href="/profile"
            className={cn(
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
              pathname === '/profile'
                ? 'animate-gradient-text'
                : 'hover:bg-accent hover:text-accent-foreground'
            )}
          >
            <User className="h-5 w-5" />
            {!isCollapsed && <span>Profile</span>}
          </Link>
          <Link
            href="/settings"
            className={cn(
              'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
              pathname === '/settings'
                ? 'animate-gradient-text'
                : 'hover:bg-accent hover:text-accent-foreground'
            )}
          >
            <Settings className="h-5 w-5" />
            {!isCollapsed && <span>Settings</span>}
          </Link>
      </div>
    </div>
  );
}
