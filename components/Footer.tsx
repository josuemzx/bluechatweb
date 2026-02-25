"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const footerNavigation = {
    product: [
        { name: 'Características', href: '#' },
        { name: 'Integraciones', href: '#' },
        { name: 'Precios', href: '/pricing' },
        { name: 'Cambios', href: '#' },
    ],
    company: [
        { name: 'Nosotros', href: '#' },
        { name: 'Blog', href: '/blog' },
        { name: 'Empleo', href: '#' },
        { name: 'Clientes', href: '#' },
    ],
    legal: [
        { name: 'Privacidad', href: '#' },
        { name: 'Términos', href: '#' },
    ],
};

export default function Footer() {
    const pathname = usePathname();
    if (pathname?.startsWith('/studio')) return null;

    return (
        <footer className="bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-16 sm:pt-24 lg:px-8 lg:pt-32">

                {/* Main Grid Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
                    {/* Left Column: Headline (Spans 6 cols) */}
                    <div className="lg:col-span-6">
                        <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#202124]">
                            Comunícate con tus clientes más fácil que nunca.
                        </h2>
                    </div>

                    {/* Right Column: Links (Spans 6 cols, starts at col 7 for Antigravity spacing) */}
                    <div className="lg:col-span-6 grid grid-cols-2 gap-8 sm:gap-16">
                        <div className="flex flex-col gap-3">
                            <Link href="#" className="text-[14px] font-medium text-[#202124] hover:text-blue-600 transition-colors">Descargar</Link>
                            <Link href="/product" className="text-[14px] font-medium text-[#202124] hover:text-blue-600 transition-colors">Producto</Link>
                            <Link href="#" className="text-[14px] font-medium text-[#202124] hover:text-blue-600 transition-colors">Documentación</Link>
                            <Link href="#" className="text-[14px] font-medium text-[#202124] hover:text-blue-600 transition-colors">Cambios</Link>
                            <Link href="#" className="text-[14px] font-medium text-[#202124] hover:text-blue-600 transition-colors">Prensa</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Link href="/blog" className="text-[14px] font-medium text-[#202124] hover:text-blue-600 transition-colors">Blog</Link>
                            <Link href="/pricing" className="text-[14px] font-medium text-[#202124] hover:text-blue-600 transition-colors">Precios</Link>
                            <Link href="#" className="text-[14px] font-medium text-[#202124] hover:text-blue-600 transition-colors">Casos de uso</Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center border-t border-transparent mt-8">
                    {/* Left: Brand Logo (Natural Block Alignment with PNG) */}
                    <div className="lg:col-span-6">
                        <img
                            src="/logo.png"
                            alt="Bluechat"
                            className="h-6 w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        />
                    </div>

                    {/* Right: Legal Links (Aligned with Links columns) */}
                    <div className="lg:col-span-6 flex gap-6 sm:gap-8 text-[13px] font-medium text-[#5f6368]">
                        <Link href="#" className="hover:text-[#202124] transition-colors">Sobre Bluechat</Link>
                        <Link href="#" className="hover:text-[#202124] transition-colors">Privacidad</Link>
                        <Link href="#" className="hover:text-[#202124] transition-colors">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
