import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';

export default function ChatPage() {
  return (
    <div className="p-4">
      <Card className="mt-8 max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <MessageSquare className="h-6 w-6" />
            Chat
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">The Generative Companion chat interface will be available here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
