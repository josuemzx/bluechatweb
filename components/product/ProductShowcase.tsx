"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const features = [
    {
        label: "Gestión de agentes",
        title: "Administra tu equipo desde un solo panel",
        description:
            "Agrega, edita y gestiona agentes con roles diferenciados (Agente / Administrador). Asigna permisos y mantén el control de quién atiende qué.",
        image: "/vista-agentes.png",
        alt: "Vista de agentes",
    },
    {
        label: "Bandeja omnicanal",
        title: "Responde a todos tus clientes desde una sola bandeja",
        description:
            "Centraliza mensajes de todos los canales. Asigna conversaciones, agrega notas privadas y accede al historial completo del contacto en tiempo real.",
        image: "/chat-interactivo.png",
        alt: "Bandeja de conversaciones",
    },
];

export default function ProductShowcase() {
    return (
        <section className="bg-white">
            {/* Feature sections — texto izq, imagen der */}
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pb-24 flex flex-col gap-6">
                {features.map((feature, i) => (
                    <FeatureRow key={i} feature={feature} />
                ))}
            </div>
        </section>
    );
}

function FeatureRow({ feature }: { feature: typeof features[0] }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <div
            ref={ref}
            className="flex flex-col lg:flex-row lg:justify-between items-center gap-10 py-6"
        >
            {/* LEFT: Texto */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full lg:w-[30%] lg:flex-shrink-0 flex flex-col gap-4"
            >
                <span className="inline-block text-[13px] font-medium text-[#0166FF] bg-[#EFF4FF] rounded-full px-3 py-1 w-fit">
                    {feature.label}
                </span>
                <h3 className="text-[26px] lg:text-[34px] leading-[1.1] tracking-[-0.5px] font-[450] text-[#121317]">
                    {feature.title}
                </h3>
                <p className="text-[15px] lg:text-[16.5px] leading-[24px] text-[#45474D]">
                    {feature.description}
                </p>
            </motion.div>

            {/* RIGHT: Imagen */}
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="w-full lg:w-[62%] lg:flex-shrink-0"
            >
                <div className="rounded-[28px] overflow-hidden border border-gray-100 shadow-sm">
                    <Image
                        src={feature.image}
                        alt={feature.alt}
                        width={1000}
                        height={600}
                        className="w-full h-auto block"
                    />
                </div>
            </motion.div>
        </div>
    );
}
