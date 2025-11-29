import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function SummariesPage() {
  return (
    <div className="p-4">
      <Card className="mt-8 max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <FileText className="h-6 w-6" />
            Summaries
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">AI-generated health summaries, including Pivotal Moments, Provider Summaries, and the Wellness Digest will be available here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
