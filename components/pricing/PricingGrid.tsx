import PricingCard, { PricingCardProps } from "./PricingCard";

const plans: PricingCardProps[] = [
    {
        badge: "Para empezar",
        title: "Gratis",
        subtitle: "$00/mes",
        description: "Ideal para equipos pequeños que quieren centralizar sus primeras conversaciones y organizar su atención.",
        buttonText: "Obtener plan",
        buttonLink: "#",
        buttonStyle: "primary",
        featuresTitle: "Incluye:",
        features: [
            { text: "1 bandeja de entrada" },
            { text: "1 cuenta administrador + 1 agente" },
            { text: "Equipos, notas privadas, @menciones, etiquetas, filtros personalizados, horario de atención, barra de comandos, atajos de teclado" },
            { text: "Notas de contacto, atributos personalizados" },
            { text: "Automatización, asignación automática, respuesta automática" },
            { text: "Help center" },
            { text: "Notas de contacto, atributos personalizados", footnote: true },
        ],
    },
    {
        badge: "Más elegido",
        title: "Startups",
        subtitle: "$25/mes",
        description: "Perfecto para equipos en crecimiento que necesitan colaboración, automatización y mayor capacidad operativa.",
        buttonText: "Obtener plan",
        buttonLink: "#",
        buttonStyle: "primary",
        featuresTitle: "Incluye:",
        features: [
            { text: "5 bandejas de entrada" },
            { text: "1 cuenta administrador + 5 agentes" },
            { text: "Equipos, notas privadas, @menciones, etiquetas, filtros personalizados, horario de atención, barra de comandos, atajos de teclado" },
            { text: "Notas de contacto, atributos personalizados" },
            { text: "Automatización, asignación automática, respuesta automática" },
            { text: "Help center" },
            { text: "Notas de contacto, atributos personalizados", footnote: true },
        ],
    },
    {
        badge: "Recomendado",
        title: "Premium",
        subtitle: "$99/mes",
        description: "Pensado para empresas con alto volumen de conversaciones que requieren mayor control, rendimiento y estructura.",
        buttonText: "Obtener plan",
        buttonLink: "#",
        buttonStyle: "primary",
        featuresTitle: "Incluye:",
        features: [
            { text: "8 bandejas de entrada" },
            { text: "2 cuentas administrador + 10 agentes" },
            { text: "Equipos, notas privadas, @menciones, etiquetas, filtros personalizados, horario de atención, barra de comandos, atajos de teclado" },
            { text: "Notas de contacto, atributos personalizados" },
            { text: "Automatización, asignación automática, respuesta automática" },
            { text: "Help center" },
            { text: "Notas de contacto, atributos personalizados", footnote: true },
        ],
    },
    {
        badge: "Solución avanzada",
        title: "Enterprise",
        subtitle: "$349/mes",
        description: "Para organizaciones con operaciones complejas que necesitan máxima capacidad, personalización y soporte prioritario.",
        buttonText: "Obtener plan",
        buttonLink: "#",
        buttonStyle: "primary",
        featuresTitle: "Incluye:",
        features: [
            { text: "13 bandejas de entrada" },
            { text: "3 cuentas administrador + 24 agentes" },
            { text: "Equipos, notas privadas, @menciones, etiquetas, filtros personalizados, horario de atención, barra de comandos, atajos de teclado" },
            { text: "Notas de contacto, atributos personalizados" },
            { text: "Automatización, asignación automática, respuesta automática" },
            { text: "Help center" },
            { text: "Notas de contacto, atributos personalizados", footnote: true },
        ],
    },
];

export default function PricingGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
                <PricingCard key={index} {...plan} />
            ))}
        </div>
    );
}
