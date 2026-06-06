'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gradient' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'gradient', size = 'md', loading, className, children, ...props }, ref) => {
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const variants = {
      gradient:
        'relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25',
      outline:
        'relative border border-white/20 text-white font-semibold rounded-full hover:border-white/40 hover:bg-white/5 transition-all',
      ghost: 'text-white/70 hover:text-white font-medium transition-colors',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
          sizes[size],
          variants[variant],
          className
        )}
        disabled={loading || props.disabled}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
      >
        {loading && (
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        )}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
