import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

type RevealDirection = "up" | "down" | "left" | "right";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: RevealDirection;
  once?: boolean;
}

const directionOffsets: Record<RevealDirection, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.65,
  distance = 24,
  direction = "up",
  once = true,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();
  const offset = directionOffsets[direction];

  const initialX = reduceMotion ? 0 : (offset.x / 24) * distance;
  const initialY = reduceMotion ? 0 : (offset.y / 24) * distance;

  return (
    <motion.div
      className={className}
      initial={{ opacity: reduceMotion ? 1 : 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0.01 : duration,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}