import { WandSparkles, Plus, Mic } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

type ChatInputProps = {
  prompt: string;
  setPrompt: (prompt: string) => void;
};

export default function ChatInput({ prompt, setPrompt }: ChatInputProps) {
  return (
    <div className="bg-card p-4 rounded-xl shadow-lg border w-full">
      <div className="relative">
        <WandSparkles className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a prompt for Gemini"
          className="bg-transparent border-0 pl-10 pr-20 resize-none focus-visible:ring-0 text-base"
          rows={1}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Mic className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <Plus className="h-4 w-4 mr-2" /> Tools
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Fast
          </Button>
        </div>
      </div>
    </div>
  );
}
