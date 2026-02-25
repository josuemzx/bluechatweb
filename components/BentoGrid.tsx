"use client";

import { motion } from "framer-motion";

export default function BentoGrid() {
    return (
        <section className="py-32 bg-white text-[#202124]">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

                {/* Header */}
                <div className="max-w-3xl mb-20">
                    <h2 className="text-[40px] md:text-[56px] leading-[1.1] font-medium tracking-tight mb-6">
                        Todo lo que necesitas para <br />
                        <span className="text-blue-600">conectar con tus clientes.</span>
                    </h2>
                    <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
                        Unifica tus canales, automatiza respuestas y mide resultados. Todo desde una sola plataforma diseñada para equipos modernos.
                    </p>
                </div>

                {/* Grid Layout (Antigravity Style: Big Rounded Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Card 1: Large Span (Inbox) */}
                    <div className="lg:col-span-2 rounded-[40px] bg-[#F7F9FC] p-10 md:p-14 overflow-hidden relative group min-h-[500px]">
                        <div className="relative z-10 max-w-md">
                            <h3 className="text-3xl font-medium mb-4">Bandeja de Entrada Unificada</h3>
                            <p className="text-gray-600 text-lg">
                                Gestiona WhatsApp, Messenger, Email y Live Chat desde un solo lugar. Sin pestañas, sin caos.
                            </p>
                        </div>
                        {/* Visual Placeholder (Simulating UI Interface) */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="absolute bottom-0 right-0 w-[85%] h-[60%] bg-white rounded-tl-[32px] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] border-l border-t border-gray-100/50"
                        >
                            <div className="p-8 space-y-6 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                                <div className="flex gap-4 items-center border-b border-gray-100 pb-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100"></div>
                                    <div className="space-y-2">
                                        <div className="w-32 h-3 bg-gray-200 rounded-full"></div>
                                        <div className="w-20 h-2 bg-gray-100 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="w-full h-10 bg-gray-50 rounded-xl rounded-bl-sm"></div>
                                    <div className="w-3/4 h-10 bg-blue-500 rounded-xl rounded-br-sm ml-auto"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Card 2: Tall (Automation / AI) */}
                    <div className="lg:col-span-1 lg:row-span-2 rounded-[40px] bg-[#F0F4FF] p-10 md:p-14 relative overflow-hidden flex flex-col justify-between min-h-[500px]">
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg shadow-blue-500/20">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <h3 className="text-3xl font-medium mb-4 text-blue-900">Automatización Inteligente</h3>
                            <p className="text-blue-700/80 text-lg">
                                Asigna conversaciones y responde preguntas frecuentes automáticamente con Chatbots.
                            </p>
                        </div>

                        {/* Visual: Abstract Gradient */}
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-blue-200/40 via-blue-100/10 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Card 3: Standard (Analytics) */}
                    <div className="rounded-[40px] bg-[#F7F9FC] p-10 md:p-14 min-h-[400px] relative group overflow-hidden">
                        <h3 className="text-2xl font-medium mb-3">Reportes en Tiempo Real</h3>
                        <p className="text-gray-500 mb-10 text-lg">Mide tiempos de respuesta y satisfacción.</p>

                        {/* Visual: Bar Chart Animation */}
                        <div className="absolute bottom-0 inset-x-0 h-48 px-10 flex items-end justify-between gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                            {[40, 70, 45, 90, 65, 85].map((h, i) => (
                                <div
                                    key={i}
                                    className="w-full bg-blue-500 rounded-t-lg transition-all duration-700 ease-out group-hover:bg-blue-600"
                                    style={{ height: `${h}%`, opacity: 0.2 + (i * 0.1) }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Card 4: Standard (Live Chat) */}
                    <div className="rounded-[40px] bg-[#1A1A1A] p-10 md:p-14 min-h-[400px] relative overflow-hidden text-white flex flex-col justify-between group">
                        <div className="z-10">
                            <h3 className="text-2xl font-medium mb-3">Live Chat Widget</h3>
                            <p className="text-gray-400 text-lg">Personalizable para tu marca.</p>
                        </div>

                        {/* Visual: Chat Bubble Pop */}
                        <div className="bg-[#2A2A2A] rounded-2xl p-5 mt-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 border border-white/5">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold">BC</div>
                                <div className="text-sm font-medium text-gray-200">Hola, ¿en qué podemos ayudarte?</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
