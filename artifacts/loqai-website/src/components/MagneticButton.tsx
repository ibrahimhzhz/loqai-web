import { MouseEvent, ReactNode } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  magneticStrength?: number;
}

export default function MagneticButton({
  href,
  children,
  className,
  magneticStrength = 14,
}: MagneticButtonProps) {
  const reduceMotion = useReducedMotion();
  const x = useSpring(0, { stiffness: 220, damping: 16, mass: 0.2 });
  const y = useSpring(0, { stiffness: 220, damping: 16, mass: 0.2 });

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const offsetY = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

    x.set(offsetX * magneticStrength);
    y.set(offsetY * magneticStrength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      className={cn("magnetic-button", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: reduceMotion ? 0 : x, y: reduceMotion ? 0 : y }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <span className="magnetic-button-shimmer" aria-hidden="true" />
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </motion.a>
  );
}