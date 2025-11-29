'use client';
import {
  Send,
  Plus,
  Mic,
  SlidersHorizontal,
  ChevronDown,
  Zap,
  BrainCircuit,
  Search,
  Shield,
} from 'lucide-react';
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
    <div className="bg-card p-0.5 rounded-2xl shadow-lg animate-gradient-border transition-all duration-500 w-full">
      <div className="bg-card rounded-[14px] p-4">
        <div className="relative flex items-center">
          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Enter a prompt here"
            className="bg-transparent border-0 pr-12 resize-none focus-visible:ring-0 text-base"
            rows={1}
          />
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon">
              <Plus className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <SlidersHorizontal className="h-5 w-5 mr-2" />
              Tools
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="bg-secondary text-secondary-foreground rounded-full"
                >
                  Fast <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <Zap className="mr-2 h-4 w-4" />
                  <span>Fast</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BrainCircuit className="mr-2 h-4 w-4" />
                  <span>Deep reasoning</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Search className="mr-2 h-4 w-4" />
                  <span>Search on Google</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="flex items-center">
              {prompt ? (
                <Button size="icon" variant="ghost">
                  <Send className="h-5 w-5" />
                </Button>
              ) : (
                <Button variant="ghost" size="icon">
                  <Mic className="h-5 w-5" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
