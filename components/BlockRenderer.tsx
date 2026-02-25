import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';

export default function BlockRenderer({ block }: { block: any }) {
    // El campo __component viene de Strapi (ej: 'blocks.hero')
    switch (block.__component) {
        case 'blocks.hero':
            return <Hero data={block} />;
        case 'blocks.features':
            return <Features data={block} />;
        case 'blocks.pricing':
            return <Pricing data={block} />;
        default:
            return null;
    }
}
