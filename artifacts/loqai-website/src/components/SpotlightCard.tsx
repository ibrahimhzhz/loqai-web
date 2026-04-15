import { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export default function SpotlightCard({ children, className }: SpotlightCardProps) {
  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    target.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div className={cn("spotlight-card", className)} onMouseMove={handlePointerMove}>
      {children}
    </div>
  );
}