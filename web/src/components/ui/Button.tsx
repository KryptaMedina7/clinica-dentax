"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 tracking-wide";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20",
      secondary: "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-accent/20",
      outline: "border border-primary text-primary hover:bg-primary hover:text-white",
      ghost: "text-primary hover:bg-surface",
    };

    const sizes = {
      sm: "h-10 px-6 text-sm",
      md: "h-12 px-8 text-base",
      lg: "h-14 px-10 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props as any}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
