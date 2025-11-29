'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper } from 'lucide-react';

const newsItems = [
  {
    category: 'Asthma Research',
    title: 'New Study Identifies Key Genetic Marker for Severe Asthma',
    source: 'New England Journal of Medicine',
    summary: 'Researchers have discovered a genetic variation that significantly increases the risk of severe, treatment-resistant asthma, paving the way for targeted therapies.',
  },
  {
    category: 'Healthy Living',
    title: 'The Mediterranean Diet: More Than Just Heart Health',
    source: 'Wellness Today',
    summary: 'A recent meta-analysis suggests the Mediterranean diet can improve lung function and reduce asthma flare-ups in adults.',
  },
  {
    category: 'Technology',
    title: 'Smart Inhalers Are Changing Asthma Management',
    source: 'TechHealth Weekly',
    summary: 'Bluetooth-enabled smart inhalers that track usage and provide reminders are showing promising results in improving medication adherence.',
  },
  {
    category: 'Environment',
    title: 'Wildfire Smoke and Respiratory Health: What You Need to Know',
    source: 'National Environmental Agency',
    summary: 'As wildfire seasons intensify, experts provide guidance on how to protect your respiratory system from harmful particulate matter.',
  }
];

export default function LatestNewsPage() {
  return (
    <div className="container mx-auto py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <Newspaper className="mr-3 h-6 w-6" /> Your Personalized News Digest
          </CardTitle>
          <CardDescription>Curated news and insights related to Asthma and healthy living.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
            {newsItems.map((item, index) => (
                <Card key={index}>
                    <CardHeader>
                        <p className="text-sm font-semibold text-primary">{item.category}</p>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription>Source: {item.source}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{item.summary}</p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="outline">Read More</Button>
                    </CardFooter>
                </Card>
            ))}
        </CardContent>
      </Card>
    </div>
  );
}
