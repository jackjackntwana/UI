import { ArrowUp, Plus, Mic, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type ChatInputProps = {
  prompt: string;
  setPrompt: (prompt: string) => void;
};

export default function ChatInput({ prompt, setPrompt }: ChatInputProps) {
  return (
    <div className="bg-card p-4 rounded-xl shadow-lg border animate-color-cycle-border transition-all duration-500 w-full">
      <div className="relative">
        <Textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a prompt here"
          className="bg-transparent border-0 pl-4 pr-20 resize-none focus-visible:ring-0 text-base"
          rows={1}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
          {prompt ? (
            <Button size="icon">
              <ArrowUp className="h-5 w-5" />
            </Button>
          ) : (
            <Button variant="ghost" size="icon">
              <Mic className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Plus className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <SlidersHorizontal className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                Fast <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Fast</DropdownMenuItem>
              <DropdownMenuItem>Deep reasoning</DropdownMenuItem>
              <DropdownMenuItem>Search on Google</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
