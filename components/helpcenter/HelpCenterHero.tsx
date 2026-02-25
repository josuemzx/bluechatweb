"use client";

import Link from "next/link";

export default function HelpCenterHero() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 overflow-hidden">
            {/* Dense dot grid — defined in globals.css as .hc-dot-grid */}
            <div className="absolute inset-0 -z-10 hc-dot-grid" />

            {/* Radial vignette — fades dots near the center text */}
            <div className="absolute inset-0 -z-10 hc-radial-fade" />

            {/* Top/bottom edge fade using Tailwind gradient utilities */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/80 via-transparent to-white/80" />

            <h1 className="text-4xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 leading-[1.08] max-w-3xl">
                ¿Cómo podemos ayudarte?
            </h1>

            <div className="mt-10">
                <Link
                    href="https://app.bluechat.lat/hc/support/es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm px-8 py-3 text-[15px] font-medium text-gray-900 hover:bg-google-surface transition-all duration-200"
                >
                    Ver documentación
                </Link>
            </div>
        </section>
    );
}
