import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const GA_ID = 'G-EBDYYBPLLJ';

export const metadata: Metadata = {
    title: 'Bluechat CRM | Centraliza WhatsApp, Facebook e Instagram',
    description: 'Bluechat es un CRM multicanal que reúne en un solo lugar las conversaciones de WhatsApp, Facebook, Instagram y Webchat. Permite asignar chats a agentes o a equipos completos.',
    metadataBase: new URL('https://bluechat.lat'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Bluechat CRM | Centraliza WhatsApp, Facebook e Instagram',
        description: 'Bluechat es un CRM multicanal que reúne en un solo lugar las conversaciones de WhatsApp, Facebook, Instagram y Webchat.',
        url: 'https://bluechat.lat',
        siteName: 'Bluechat',
        locale: 'es_ES',
        type: 'website',
    },
    icons: {
        icon: '/favicon.png',
        shortcut: '/favicon.png',
        apple: '/favicon.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" className="scroll-smooth">
            <body className={`${inter.variable} font-sans antialiased text-gray-900 bg-white selection:bg-primary-100 selection:text-primary-900`}>
                {/* Google Analytics */}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GA_ID}');
                    `}
                </Script>
                <Navbar />
                <main className="min-h-screen pt-20">
                    {children}
                </main>
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}
