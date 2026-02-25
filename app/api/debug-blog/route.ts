import { NextResponse } from 'next/server';
import { getBlogPostBySlug } from '@/lib/strapi/blog';

// Habilitamos dinámico para evitar caché estática en debug
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    if (!slug) {
        return NextResponse.json({ error: 'Missing slug parameter' }, { status: 400 });
    }

    console.log(`🔍 [DEBUG API] Testing slug: "${slug}"`);

    // Llamada real a la función problemática
    const result = await getBlogPostBySlug(slug);

    return NextResponse.json({
        diagnostics: {
            inputSlug: slug,
            encodedSlug: encodeURIComponent(slug),
            strapiUrl: process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337",
            timestamp: new Date().toISOString()
        },
        result: result || "NULL (Post not found)"
    });
}
