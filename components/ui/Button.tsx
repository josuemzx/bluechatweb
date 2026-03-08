"use client";

import React from "react";
import Link from "next/link";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg" | "xl";
    href?: string;
    children: React.ReactNode;
    className?: string;
}

const variants = {
    primary: "bg-[#1a1a1a] text-white hover:bg-black shadow-sm",
    secondary: "bg-[#f1f3f4] text-[#202124] hover:bg-[#e8eaed] shadow-sm",
    outline: "bg-white text-[#1a1a1a] border border-gray-200 hover:bg-gray-50",
    ghost: "bg-transparent text-[#5f6368] hover:text-[#1a1a1a] hover:bg-gray-50",
};

const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2 text-[14px]",
    lg: "px-8 py-2.5 text-[16px]",
    xl: "px-10 py-3 text-[17px]",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
        const classes = cn(
            "inline-flex items-center justify-center rounded-full font-medium transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none",
            variants[variant],
            sizes[size],
            className
        );

        if (href) {
            return (
                <Link href={href} className={classes}>
                    {children}
                </Link>
            );
        }

        return (
            <button className={classes} ref={ref} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";
