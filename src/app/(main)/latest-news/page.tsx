
'use client';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Newspaper, BrainCircuit } from 'lucide-react';
import { synthesizeHealthcareNews } from '@/ai/flows/synthesize-healthcare-news';
import { useState, useEffect } from 'react';

const staticNewsItems = [
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
    const [aiNews, setAiNews] = useState<string | null>(null);

    useEffect(() => {
        async function getNews() {
            try {
                const res = await synthesizeHealthcareNews({ interests: "Asthma Research, Healthy Living" });
                setAiNews(res.newsDigest);
            } catch (error) {
                console.error("Error fetching AI news:", error);
                setAiNews("Could not load AI-synthesized news. Please check your connection and try again.");
            }
        }
        getNews();
    }, []);


  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 animate-fade-in">
        <div className="flex items-center justify-between gap-4 mb-8">
            <h1 className="text-3xl font-bold animate-gradient-text">Your Personalized News Digest</h1>
        </div>
        <div className="text-muted-foreground">
            <p>
                Knowledge is power, especially when it comes to your health. This digest, curated by AI, brings you the latest and most relevant news based on your interests. We sift through the noise to deliver concise, trustworthy information that can support your health journey.
            </p>
        </div>

        <Card className="rounded-none shadow-md bg-secondary border-l-4 border-primary">
            <CardHeader>
                <CardTitle className='flex items-center'><BrainCircuit className="mr-2 h-5 w-5 text-primary"/>AI-Synthesized Health Briefing</CardTitle>
                <CardDescription>Based on your interest in Asthma and Healthy Living</CardDescription>
            </CardHeader>
            <CardContent>
                {aiNews ? (
                <p className='text-secondary-foreground'>{aiNews}</p>
                ) : (
                <p className='text-muted-foreground'>Generating your personalized news briefing...</p>
                )}
            </CardContent>
        </Card>

        <div className="grid gap-6">
            {staticNewsItems.map((item, index) => (
                <Card key={index} className="rounded-none shadow-md flex flex-col">
                    <CardHeader>
                        <p className="text-sm font-semibold text-primary">{item.category}</p>
                        <CardTitle className="text-xl">{item.title}</CardTitle>
                        <CardDescription>Source: {item.source}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{item.summary}</p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="link" className="text-primary hover:text-primary/80">Read More</Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    </div>
  );
}
