"use client";

const CARD_BG = "#f1f3f4";
const CARD_BG_HOVER = "#e8eaed";

const channels = [
    {
        id: "meet",
        iconBg: "#1a1a1a",
        icon: (
            <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
            </svg>
        ),
        name: "Google Meet",
        desc: "Videollamada con el equipo",
        href: "https://calendly.com/bluechat/30min?hide_gdpr",
    },
    {
        id: "whatsapp",
        iconBg: "#1a1a1a",
        icon: (
            <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
        ),
        name: "WhatsApp",
        desc: "Ayuda rápida en tiempo real",
        href: "https://wa.me/51993014085?text=Hola%20Bluechat,%20necesito%20ayuda",
    },
    {
        id: "docs",
        iconBg: "#1a1a1a",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="w-8 h-8">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
            </svg>
        ),
        name: "Documentación",
        desc: "Base de conocimiento completa",
        href: "https://app.bluechat.lat/hc/support/es",
    },
];

export default function HelpCenterSchedule() {
    return (
        <section className="px-6 lg:px-8 pt-2 pb-32 max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {channels.map((ch) => (
                    <div
                        key={ch.id}
                        className="group flex flex-col rounded-3xl p-7 transition-colors duration-200 cursor-pointer"
                        style={{ backgroundColor: CARD_BG }}
                        onMouseEnter={e => (e.currentTarget.style.backgroundColor = CARD_BG_HOVER)}
                        onMouseLeave={e => (e.currentTarget.style.backgroundColor = CARD_BG)}
                        onClick={() => window.open(ch.href, "_blank", "noopener,noreferrer")}
                    >
                        {/* Dark icon box — matches Antigravity's YouTube/LinkedIn style */}
                        <div
                            className="mb-5 flex items-center justify-center rounded-2xl flex-shrink-0"
                            style={{ width: 72, height: 72, backgroundColor: ch.iconBg }}
                        >
                            {ch.icon}
                        </div>

                        <div className="text-[16px] font-semibold" style={{ color: "#202124" }}>
                            {ch.name}
                        </div>
                        <div className="text-[14px] mt-1 leading-relaxed" style={{ color: "#5f6368" }}>
                            {ch.desc}
                        </div>

                        {/* Only the Visit label is an actual anchor */}
                        <a
                            href={ch.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-1 text-[14px] font-medium"
                            style={{ color: "#202124", textDecoration: "none" }}
                            onClick={e => e.stopPropagation()}
                        >
                            Visitar
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
