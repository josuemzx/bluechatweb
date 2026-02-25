"use client";

// Card is a <div> container — NOT an <a> wrapper.
// Only the action label at the bottom is an actual anchor.
// This prevents browser link-color bleed on all child text.

const supportOptions = [
    {
        id: "whatsapp",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-black">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
        title: "Escríbenos por WhatsApp",
        description: "¿Tienes dudas o necesitas ayuda rápida? Nuestro equipo está disponible para asistirte directamente por WhatsApp.",
        label: "Chatear",
        href: "https://wa.me/51993014085?text=Hola%20Bluechat,%20necesito%20ayuda",
    },
    {
        id: "meeting",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8 text-black">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
        ),
        title: "Agenda una reunión",
        description: "¿Prefieres una videollamada para resolver tus dudas? Agenda una reunión con nuestro equipo y te enviaremos un enlace de Google Meet.",
        label: "Agendar",
        href: "https://calendly.com/bluechat/30min?hide_gdpr",
    },
    {
        id: "billing",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8 text-black">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
        ),
        title: "Facturación y pagos",
        description: "Consulta tus facturas, cambia de plan o actualiza tus métodos de pago.",
        label: "Ir al portal",
        href: "https://bluechat.lat/portal-de-facturacion.html",
    },
    {
        id: "docs",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-8 h-8 text-black">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
            </svg>
        ),
        title: "Documentación",
        description: "Accede a la documentación de características y configuración.",
        label: "Ver docs",
        href: "https://app.bluechat.lat/hc/support/es",
    },
];

export default function HelpCenterCards() {
    return (
        <section className="px-6 lg:px-8 pb-32 max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {supportOptions.map((option) => (
                    <div
                        key={option.id}
                        className="group flex flex-col rounded-3xl p-7 bg-hc-card hover:bg-hc-card-hover transition-colors duration-200 cursor-pointer"
                        onClick={() => window.open(option.href, "_blank", "noopener,noreferrer")}
                    >
                        {/* Icon box — light gray bg, dark icon */}
                        <div className="mb-6 w-[72px] h-[72px] flex items-center justify-center rounded-2xl flex-shrink-0 bg-hc-icon-box">
                            {option.icon}
                        </div>

                        {/* Title — plain div, never blue */}
                        <div className="text-[16px] font-semibold leading-snug mb-2 text-black">
                            {option.title}
                        </div>

                        {/* Description — secondary color */}
                        <div className="text-[14px] leading-relaxed flex-1 text-google-text-secondary">
                            {option.description}
                        </div>

                        {/* Action link — the ONLY actual anchor in the card */}
                        <a
                            href={option.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-1 text-[14px] font-medium text-black no-underline"
                            onClick={e => e.stopPropagation()}
                        >
                            {option.label}
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
