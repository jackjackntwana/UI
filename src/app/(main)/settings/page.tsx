'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  User,
  Bell,
  Palette,
  Shield,
  HelpCircle,
  LogOut,
  Settings
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function SettingsPage() {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
        <div className="flex items-center gap-4 mb-8">
            <h1 className="text-3xl font-bold animate-gradient-text">Settings</h1>
        </div>
        <div className="text-muted-foreground">
            <p>
                Manage your account, customize your experience, and set your preferences. Your settings are saved automatically.
            </p>
        </div>

        <Card className="rounded-none shadow-md">
            <CardHeader>
                <CardTitle className='flex items-center'><User className="mr-2 h-5 w-5"/>Account Information</CardTitle>
                <CardDescription>Update your personal details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" defaultValue="Tholumuzi" />
                    </div>
                    <div className="space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="tholumuzi@example.com" />
                    </div>
                </div>
                <div className='pt-2'>
                     <Button>Update Profile</Button>
                </div>
            </CardContent>
        </Card>
        
        <Card className="rounded-none shadow-md">
            <CardHeader>
                <CardTitle className='flex items-center'><Bell className="mr-2 h-5 w-5"/>Notifications</CardTitle>
                <CardDescription>Choose how you want to be notified.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                    <div>
                        <Label htmlFor="push-notifications" className="font-semibold">Push Notifications</Label>
                        <p className="text-sm text-muted-foreground">For reminders and critical alerts on your device.</p>
                    </div>
                    <Switch id="push-notifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                    <div>
                        <Label htmlFor="email-notifications" className="font-semibold">Email Digests</Label>
                        <p className="text-sm text-muted-foreground">Receive weekly summaries and news in your inbox.</p>
                    </div>
                    <Switch id="email-notifications" />
                </div>
            </CardContent>
        </Card>
        
        <Card className="rounded-none shadow-md">
            <CardHeader>
                <CardTitle className='flex items-center'><Palette className="mr-2 h-5 w-5"/>Appearance</CardTitle>
                <CardDescription>Customize the look and feel of the app.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg bg-secondary">
                    <div>
                        <Label htmlFor="theme" className="font-semibold">Theme</Label>
                        <p className="text-sm text-muted-foreground">Switch between light and dark mode.</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <span>Light</span>
                        <Switch id="theme" />
                        <span>Dark</span>
                    </div>
                </div>
            </CardContent>
        </Card>
        
         <Card className="rounded-none shadow-md">
            <CardHeader>
                <CardTitle className='flex items-center'><Shield className="mr-2 h-5 w-5"/>Security & Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <Button variant="outline" className='w-full justify-start'>Change Password</Button>
                <Button variant="outline" className='w-full justify-start'>Manage Connected Apps</Button>
                <Button variant="outline" className='w-full justify-start'>Download My Data</Button>
                <Button variant="destructive" className='w-full justify-start mt-4'>Delete My Account</Button>
            </CardContent>
        </Card>
        
        <div className="flex justify-center items-center space-x-4 text-sm text-muted-foreground">
            <Button variant="link" className='text-muted-foreground'><HelpCircle className='mr-1 h-4 w-4'/>Help Center</Button>
            <Separator orientation="vertical" className="h-4" />
             <Button variant="link" className='text-muted-foreground'><LogOut className='mr-1 h-4 w-4'/>Log Out</Button>
        </div>
    </div>
  );
}
