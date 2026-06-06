'use client';

import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  style?: React.CSSProperties;
}

export function GradientText({ children, className, as: Tag = 'span', style }: GradientTextProps) {
  return (
    <Tag
      className={cn(
        'bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent',
        className
      )}
      style={style}
    >
      {children}
    </Tag>
  );
}
