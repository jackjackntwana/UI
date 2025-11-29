import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="p-4">
      <Card className="mt-8 max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <User className="h-6 w-6" />
            Profile
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">User profile settings, persona choices, and goal management will be available here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
