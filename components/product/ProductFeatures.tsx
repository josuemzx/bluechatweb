"use client";

import { motion } from "framer-motion";
import {
    Squares2X2Icon,
    CubeIcon,
    SparklesIcon
} from "@heroicons/react/24/outline";

const features = [
    {
        title: "Conversaciones en un solo lugar",
        description: "Centraliza WhatsApp, Instagram, Facebook y el chat de tu sitio web en una sola plataforma. Responde a todos tus clientes desde un único panel.",
        icon: Squares2X2Icon,
    },
    {
        title: "Trabajo en equipo",
        description: "Asigna conversaciones, colabora entre agentes y mantén el historial completo de cada cliente para que tu equipo trabaje organizado.",
        icon: CubeIcon,
    },
    {
        title: "Automatización inteligente",
        description: "Usa respuestas automáticas, etiquetas y flujos inteligentes para atender más clientes y convertir conversaciones en ventas.",
        icon: SparklesIcon,
    },
];

export default function ProductFeatures() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.21, 0.45, 0.32, 0.9] }}
                            className="flex flex-col gap-6"
                        >
                            <div className="w-12 h-12 flex items-center justify-start text-[#202124]">
                                <feature.icon className="w-8 h-8 stroke-[1.5]" />
                            </div>

                            <div className="flex flex-col gap-4">
                                <h3 className="text-[22px] font-medium text-[#202124] tracking-tight leading-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-[17px] text-[#5F6368] leading-relaxed font-normal">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
