import { cn } from '@/lib/utils';

interface BodyIconProps extends React.SVGProps<SVGSVGElement> {
  onPartClick: (part: string) => void;
  painPoints: string[];
}

export function BodyIcon({ onPartClick, painPoints, className, ...props }: BodyIconProps) {
  const isPainPoint = (part: string) => painPoints.includes(part);

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.02);
          }
        }
        .pulsate {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 200"
        className={cn("w-40 h-80", className)}
        {...props}
      >
        <g
          id="head"
          onClick={() => onPartClick('head')}
          className={cn(
            'fill-muted-foreground/30 hover:fill-accent transition-colors cursor-pointer',
            isPainPoint('head') &amp;&amp; 'fill-primary/70 pulsate'
          )}
        >
          <circle cx="50" cy="20" r="15" />
        </g>
        <g
          id="torso"
          onClick={() => onPartClick('torso')}
          className={cn(
            'fill-muted-foreground/30 hover:fill-accent transition-colors cursor-pointer',
             isPainPoint('torso') &amp;&amp; 'fill-primary/70 pulsate'
          )}
        >
          <path d="M50 35 L35 40 V 90 L65 90 V 40 Z" />
        </g>
        <g
          id="shoulders"
          onClick={() => onPartClick('shoulders')}
           className={cn(
            'fill-muted-foreground/30 hover:fill-accent transition-colors cursor-pointer',
             isPainPoint('shoulders') &amp;&amp; 'fill-primary/70 pulsate'
          )}
        >
          <rect x="30" y="40" width="40" height="10" rx="5"/>
        </g>
        <g
          id="arms"
          onClick={() => onPartClick('arms')}
           className={cn(
            'fill-muted-foreground/30 hover:fill-accent transition-colors cursor-pointer',
             isPainPoint('arms') &amp;&amp; 'fill-primary/70 pulsate'
          )}
        >
          <rect x="25" y="45" width="10" height="60" rx="5"/>
          <rect x="65" y="45" width="10" height="60" rx="5"/>
        </g>
        <g
          id="back"
          onClick={() => onPartClick('back')}
           className={cn(
            'fill-muted-foreground/30 hover:fill-accent transition-colors cursor-pointer',
             isPainPoint('back') &amp;&amp; 'fill-primary/70 pulsate'
          )}
        >
           <rect x="42.5" y="45" width="15" height="45" className="opacity-0"/>
        </g>
         <g
          id="legs"
          onClick={() => onPartClick('legs')}
          className={cn(
            'fill-muted-foreground/30 hover:fill-accent transition-colors cursor-pointer',
             isPainPoint('legs') &amp;&amp; 'fill-primary/70 pulsate'
          )}
        >
          <rect x="35" y="90" width="12" height="80" rx="5"/>
          <rect x="53" y="90" width="12" height="80" rx="5"/>
        </g>
         <g
          id="knees"
          onClick={() => onPartClick('knees')}
          className={cn(
            'fill-muted-foreground/30 hover:fill-accent transition-colors cursor-pointer',
             isPainPoint('knees') &amp;&amp; 'fill-primary/70 pulsate'
          )}
        >
          <rect x="35" y="125" width="12" height="15" className="opacity-0"/>
          <rect x="53" y="125" width="12" height="15" className="opacity-0"/>
        </g>
        <g
          id="feet"
          onClick={() => onPartClick('feet')}
          className={cn(
            'fill-muted-foreground/30 hover:fill-accent transition-colors cursor-pointer',
             isPainPoint('feet') &amp;&amp; 'fill-primary/70 pulsate'
          )}
        >
          <rect x="32" y="170" width="18" height="8" rx="4"/>
          <rect x="50" y="170" width="18" height="8" rx="4"/>
        </g>
      </svg>
    </>
  );
}
