import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    as?: React.ElementType;
    padding?: "sm" | "md" | "lg" | "none";
}

const paddings = {
    sm: "py-12 sm:py-16",
    md: "py-16 sm:py-24",
    lg: "py-24 sm:py-32",
    none: "",
};

export const Section = ({ children, className, id, as: Component = "section", padding = "md" }: SectionProps) => {
    return (
        <Component id={id} className={cn(paddings[padding], className)}>
            {children}
        </Component>
    );
};
