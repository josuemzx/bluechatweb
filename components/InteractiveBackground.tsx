"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export default function InteractiveBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ clientX, clientY, currentTarget }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // Máscara radial que sigue al mouse
    const maskImage = useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

    return (
        <div
            className="absolute inset-0 w-full h-full bg-white group"
            onMouseMove={handleMouseMove}
        >
            {/* 1. Grid Base (Estático, muy tenue) */}
            <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>

            {/* 2. Grid Interactivo (Se revela con el mouse en Azul Bluechat) */}
            <motion.div
                className="absolute inset-0 h-full w-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] opacity-100"
                style={{
                    maskImage: maskImage,
                    WebkitMaskImage: maskImage
                }}
            />

            {/* 3. Acentos de fondo sutiles (Fijos para profundidad) */}
            <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/80 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-cyan-50/80 rounded-full blur-[100px] pointer-events-none"></div>
        </div>
    );
}
