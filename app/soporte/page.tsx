import type { Metadata } from "next";
import HelpCenterHero from "@/components/helpcenter/HelpCenterHero";
import HelpCenterCards from "@/components/helpcenter/HelpCenterCards";

export const metadata: Metadata = {
    title: "Centro de Soporte | Bluechat",
    description:
        "Encuentra respuestas rápidas, agenda una reunión con nuestro equipo o consulta la documentación de Bluechat.",
};

export default function SoportePage() {
    return (
        <main className="bg-white min-h-screen font-sans">
            <HelpCenterHero />
            <HelpCenterCards />
        </main>
    );
}
