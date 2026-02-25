"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

export default function VideoSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    // Scroll Animation Logic
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 85%", "start 50%"], // Faster expansion: completes when top reaches middle
    });

    // Scale expands from smaller to full width
    const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
    const smoothScale = useSpring(scale, { stiffness: 120, damping: 20 });

    // Custom Cursor Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <section ref={containerRef} className="relative w-full pt-2 pb-10 bg-white min-h-[80vh] flex flex-col items-center">

            {/* 
          Container for the video.
          Antigravity style: Almost full width, heavily rounded corners.
      */}
            <div className="w-[96%] max-w-[1600px] mx-auto perspective-1000">

                <motion.div
                    style={{ scale: smoothScale }}
                    className="relative aspect-video w-full rounded-[2.5rem] overflow-hidden bg-black shadow-2xl group cursor-none border border-gray-900/10"
                    onMouseMove={handleMouseMove}
                    onClick={() => setIsVideoOpen(true)}
                >
                    {/* 1. Preview Loop Video (Background) */}
                    <div className="absolute inset-0 bg-black">
                        {/* 
                    VIDEO FILE SETUP:
                    Ensure you have a video file named 'hero-video.mp4' in your project's 'public/' folder.
                */}
                        <video
                            className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
                            src="/hero-video.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />

                        {/* Fallback/Overlay if video fails or just for style */}
                        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                    </div>

                    {/* 2. Magnetic Play Button Cursor Follower */}
                    <CursorButton mouseX={mouseX} mouseY={mouseY} />

                </motion.div>

            </div>

            {/* 3. Full Video Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-300">
                    <button
                        onClick={(e) => { e.stopPropagation(); setIsVideoOpen(false); }}
                        className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors z-50 bg-white/10 rounded-full p-3 hover:bg-white/20 backdrop-blur-sm"
                        aria-label="Close video"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full max-w-7xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black relative border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* YouTube Embed */}
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                            title="Product Intro"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0"
                        ></iframe>
                    </motion.div>
                </div>
            )}
        </section>
    );
}

function CursorButton({ mouseX, mouseY }: { mouseX: any, mouseY: any }) {
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    return (
        <motion.div
            style={{
                x,
                y,
                left: 0,
                top: 0
            }}
            className="absolute pointer-events-none z-20 flex items-center justify-center -ml-[70px] -mt-[28px]"
        >
            <div className="flex items-center gap-2.5 bg-white px-6 py-3.5 rounded-full shadow-xl transform transition-transform duration-300">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="translate-x-0.5">
                    <path d="M10.5 5.76795C11.1667 6.15285 11.1667 7.1151 10.5 7.5L1.5 12.6962C0.833334 13.0811 0 12.6009 0 11.8311L0 1.43685C0 0.667049 0.833333 0.186924 1.5 0.571824L10.5 5.76795Z" fill="#1A1A1A" />
                </svg>
                <span className="font-semibold text-[15px] text-[#1A1A1A] tracking-tight">Play intro</span>
            </div>
        </motion.div>
    );
}
