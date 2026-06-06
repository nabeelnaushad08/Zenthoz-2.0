'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export function Card({ children, className, hover = true, gradient = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
      className={cn(
        'rounded-2xl p-6',
        'bg-white/[0.03] border border-white/[0.06]',
        'backdrop-blur-sm',
        gradient && 'gradient-border',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
