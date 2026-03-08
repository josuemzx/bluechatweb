/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'http',
                hostname: '127.0.0.1',
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
            }
        ],
    },
    async rewrites() {
        return [
            {
                source: '/activar-suscripcion',
                destination: '/activar-suscripcion.html',
            },
            {
                source: '/portal-de-facturacion',
                destination: '/portal-de-facturacion.html',
            },
            {
                source: '/helpcenter',
                destination: '/helpcenter.html',
            },
        ];
    },
    output: 'standalone',
};

export default nextConfig;
