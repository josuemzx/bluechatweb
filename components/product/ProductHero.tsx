"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function ProductHero() {
    const text = "Todas tus conversaciones en un solo lugar";
    const [displayedText, setDisplayedText] = useState("");
    const [showButtons, setShowButtons] = useState(false);
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText(text.slice(0, index + 1));
            index++;
            if (index === text.length) {
                clearInterval(intervalId);
                setIsTypingComplete(true);
                setTimeout(() => setShowButtons(true), 500); // Small delay before buttons appear
            }
        }, 50); // Typing speed

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Section padding="none" className="relative min-h-[80vh] flex items-center bg-white pt-8 overflow-hidden">
            <Container className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12 items-center">
                {/* Left Side: Typewriter Text & Buttons */}
                <div className="flex flex-col items-start gap-8 z-10 w-full">
                    <h1 className="text-4xl sm:text-5xl lg:text-[2.2rem] leading-[1.1] font-medium tracking-tight text-[#202124] font-sans h-auto">
                        {displayedText}
                        {!isTypingComplete && (
                            <span className="inline-block w-1 h-[0.9em] bg-black ml-1 animate-pulse align-middle"></span>
                        )}
                        {isTypingComplete && (
                            <span className="inline-block w-1 h-[0.9em] bg-transparent ml-1 align-middle"></span>
                        )}
                    </h1>

                    {/* Buttons fade in after typing */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={showButtons ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-wrap gap-4 mt-2"
                    >
                        <Button variant="primary" size="xl">
                            Empieza gratis
                        </Button>
                        <Button variant="outline" size="xl">
                            Explorar casos de uso
                        </Button>
                    </motion.div>
                </div>

                {/* Right Side: Image Workspace */}
                <div className="relative w-full flex items-center justify-center">
                    <div className="w-full rounded-2xl overflow-hidden border border-gray-100/60">
                        <Image
                            src="/slider-principal.jpg"
                            alt="Panel principal de Bluechat"
                            width={1440}
                            height={900}
                            className="w-full h-auto block"
                            priority
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
}
