"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function HeroDefault() {
    const line1Text = "Gestiona y mejora la atención";
    const line2Text = "a tus clientes desde ";
    const highlightText = "un solo lugar";



    const [charIndex, setCharIndex] = useState(0);
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    const len1 = line1Text.length;
    const len2 = line2Text.length;
    const len3 = highlightText.length;
    const totalLength = len1 + len2 + len3;

    useEffect(() => {
        if (charIndex < totalLength) {
            const timeout = setTimeout(() => {
                setCharIndex((prev) => prev + 1);
            }, 50);
            return () => clearTimeout(timeout);
        } else {
            setIsTypingComplete(true);
            const cursorTimeout = setTimeout(() => setShowCursor(false), 2500);
            return () => clearTimeout(cursorTimeout);
        }
    }, [charIndex, totalLength]);

    const visibleLine1 = line1Text.slice(0, Math.min(charIndex, len1));
    const indexInLine2 = Math.max(0, charIndex - len1);
    const visibleLine2 = line2Text.slice(0, Math.min(indexInLine2, len2));
    const indexInHighlight = Math.max(0, charIndex - (len1 + len2));
    const visibleHighlight = highlightText.slice(0, Math.min(indexInHighlight, len3));

    const isCursorOnLine1 = charIndex < len1;
    const isCursorOnLine2 = charIndex >= len1 && charIndex < totalLength;
    const isFinished = charIndex >= totalLength;

    return (
        <main className="bg-white overflow-hidden w-full flex flex-col items-center justify-start relative font-sans">
            {/* Background Effect: Dynamic Particles */}
            <div className="absolute inset-0 pointer-events-auto z-0 h-full w-full">
                <InteractiveBackground />
            </div>

            {/* Content Wrapper */}
            <div className="relative hero-layout-width z-10 pointer-events-none">
                {/* Pointer events none on container so clicks pass to canvas if needed, 
                BUT interactive elements inside need pointer-events-auto */}

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0 }}
                    className="flex justify-center mb-8 pointer-events-auto"
                >
                    <div className="flex items-center gap-2">
                        <img src="/logo2.png" alt="Bluechat" className="h-6 w-auto grayscale" />
                    </div>
                </motion.div>

                {/* Semantic Text Container */}
                <div className="hero-text-cont relative pointer-events-auto">
                    {/* Ghost Text */}
                    <h1 className="hero-title-responsive text-balance invisible pointer-events-none select-none">
                        <span className="block">
                            {line1Text}
                        </span>
                        <span className="block mt-1 sm:mt-2">
                            {line2Text}
                            <span className="text-blue-600">{highlightText}</span>
                        </span>
                    </h1>

                    {/* Real Animated Text */}
                    <h1 className="hero-title-responsive text-balance absolute top-0 left-0 w-full h-full z-10">
                        <span className="block">
                            {visibleLine1}
                            {isCursorOnLine1 && (
                                <span className="hero-cursor"></span>
                            )}
                        </span>

                        <span className="block mt-1 sm:mt-2">
                            {visibleLine2}
                            <span className="text-blue-600">{visibleHighlight}</span>

                            {(isCursorOnLine2 || (isFinished && showCursor)) && (
                                <span className="hero-cursor"></span>
                            )}
                        </span>
                    </h1>
                </div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={isTypingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="mt-6 pointer-events-auto"
                >
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        {/* Primary Button */}
                        <a href="https://app.bluechat.lat/auth/signup" className="hero-btn-primary group">
                            Comienza tu prueba gratuita
                        </a>

                        {/* Secondary Button */}
                        <a href="/product" className="hero-btn-secondary">
                            Explorar casos de uso
                        </a>
                    </div>
                </motion.div>

            </div>
        </main>
    );
}
