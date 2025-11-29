import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Share, Newspaper } from 'lucide-react';

const SummaryItem = ({ icon, title, description, cta }: { icon: React.ReactNode, title: string, description: string, cta: string }) => (
    <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
        <div className="text-primary bg-primary/10 p-3 rounded-lg">
            {icon}
        </div>
        <div className="flex-1">
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <Button variant="ghost" size="icon" aria-label={cta}>
            <ArrowRight className="h-5 w-5" />
        </Button>
    </div>
)

export default function SummariesGateway() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Your Health Story</CardTitle>
        <CardDescription>AI-powered summaries and insights.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <SummaryItem 
            icon={<Newspaper className="h-6 w-6" />}
            title="Pivotal Moment"
            description="A key insight from your week."
            cta="View Pivotal Moment"
        />
        <SummaryItem 
            icon={<Share className="h-6 w-6" />}
            title="Provider Summary"
            description="Generate &amp; share for your next visit."
            cta="Generate and Share Summary"
        />
        <SummaryItem 
            icon={<Newspaper className="h-6 w-6" />}
            title="Wellness Digest"
            description="Personalized healthcare news."
            cta="Read Wellness Digest"
        />
      </CardContent>
    </Card>
  );
}
