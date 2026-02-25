"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface FeatureShowcaseProps {
    title: string;
    description: string;
    videoSrc: string;
}

export default function FeatureShowcase({ title, description, videoSrc }: FeatureShowcaseProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="py-6 bg-white">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-10 lg:gap-0">

                    {/* LEFT: Texto */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="w-full lg:w-[30%] lg:flex-shrink-0 flex flex-col gap-4"
                    >
                        <h2 className="text-[28px] lg:text-[42px] leading-[1.04] tracking-[-0.73px] font-[450] text-[#121317]">
                            {title}
                        </h2>
                        <p className="text-[16px] lg:text-[17.5px] leading-[25px] tracking-[0.18px] font-normal text-[#45474D]">
                            {description}
                        </p>
                    </motion.div>

                    {/* RIGHT: Video */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.75, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="w-full lg:w-[52%] lg:flex-shrink-0"
                    >
                        <video
                            className="w-full h-auto block rounded-[28px]"
                            src={videoSrc}
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
