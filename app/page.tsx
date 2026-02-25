import HeroDefault from '@/components/HeroDefault';
import VideoSection from '@/components/VideoSection';
import FeatureShowcase from '@/components/FeatureShowcase';
// Eliminado BentoGrid que no fue solicitado
import { getBlogPosts } from '@/lib/strapi/blog';
import LatestBlogs from '@/components/LatestBlogs';

export default async function Home() {
    // 1. Obtener posts dinámicos reales
    const posts = await getBlogPosts(4);

    return (
        <main>
            {/* 1. Hero Section */}
            <HeroDefault />

            {/* 2. Video Section */}
            <VideoSection />

            {/* 3. Feature Showcase #1 — Bandejas */}
            <FeatureShowcase
                title="Agrega todos tus canales de atención"
                description="Conecta WhatsApp, Chat web, Facebook, Instagram, TikTok, Telegram, Line, X, SMS, Gmail y API."
                videoSrc="/bandejas.mp4"
            />

            {/* 4. Feature Showcase #2 — Equipos */}
            <FeatureShowcase
                title="Organiza a tus agentes en equipos"
                description="Agrúpalos por área o función y gestiona mejor la asignación de conversaciones para responder más rápido y con mayor orden."
                videoSrc="/agregar-equipos.mp4"
            />

            {/* 5. Feature Showcase #3 — Etiquetas */}
            <FeatureShowcase
                title="Etiqueta y personaliza cada contacto"
                description="Usa etiquetas y atributos personalizados para segmentar tus contactos, identificar oportunidades y ofrecer una atención más relevante."
                videoSrc="/etiquetas-y-atributos-personalizados-de-contacto.mp4"
            />

            {/* 6. Feature Showcase #4 — Fecha de contacto */}
            <FeatureShowcase
                title="Accede a la ficha de cada cliente"
                description="Consulta toda la información de tus contactos en un solo lugar: historial de conversaciones, atributos personalizados y datos de contacto siempre a la mano."
                videoSrc="/ficha-de-contacto-de-cliente.mp4"
            />

            {/* 5. Latest Blogs */}
            <LatestBlogs posts={posts} />
        </main>
    );
}
