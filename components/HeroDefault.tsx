"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function HeroDefault() {
    // ... (text and state logic remains the same)
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
        <Section padding="none" as="main" className="bg-white overflow-hidden w-full flex flex-col items-center justify-start relative font-sans">
            {/* Background Effect: Dynamic Particles */}
            <div className="absolute inset-0 pointer-events-auto z-0 h-full w-full">
                <InteractiveBackground />
            </div>

            {/* Content Wrapper */}
            <Container className="relative z-10 pointer-events-none flex flex-col items-center pt-16 lg:pt-32">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0 }}
                    className="flex justify-center mb-10 pointer-events-auto"
                >
                    <div className="flex items-center gap-2">
                        <img src="/logo2.png" alt="Bluechat" className="h-[28px] w-auto opacity-40 grayscale" />

                    </div>
                </motion.div>

                {/* Animated Text */}
                <div className="relative pointer-events-auto w-full max-w-[900px] text-center">
                    {/* Ghost Text for layout consistency */}
                    <h1 className="text-[32px] md:text-[48px] lg:text-[52px] leading-[1.02] font-medium tracking-tight text-[#1a1a1b] invisible">
                        {line1Text} {line2Text}
                        <span className="text-bluechat-primary">{highlightText}</span>
                    </h1>

                    {/* Real Animated Text */}
                    <h1 className="text-[32px] md:text-[48px] lg:text-[52px] leading-[1.02] font-medium tracking-tight text-[#1a1a1b] absolute top-0 left-0 w-full h-full z-10">
                        <span>
                            {visibleLine1}
                            {isCursorOnLine1 && <span className="hero-cursor"></span>}
                        </span>
                        {" "}
                        <span>
                            {visibleLine2}
                            <span className="text-bluechat-primary">{visibleHighlight}</span>
                            {(isCursorOnLine2 || (isFinished && showCursor)) && <span className="hero-cursor"></span>}
                        </span>
                    </h1>
                </div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={isTypingComplete ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="mt-12 pointer-events-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                >
                    <Button href="/crear-cuenta" variant="primary" size="xl" className="px-10">
                        Comienza tu prueba gratuita
                    </Button>
                    <Button href="/product" variant="outline" size="xl" className="px-10">
                        Explorar casos de uso
                    </Button>
                </motion.div>
            </Container>
        </Section>
    );
}
