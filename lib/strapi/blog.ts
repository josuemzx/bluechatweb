import { BlogPost } from "@/types/blog";

// URL base de Strapi
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

/**
 * Obtiene los artículos desde Strapi con soporte para filtrado por categoría.
 */
export async function getBlogPosts(limit: number = 10, category?: string): Promise<BlogPost[]> {
    try {
        let url = `${STRAPI_URL}/api/articles?populate=*&sort[0]=publishedAt:desc&pagination[limit]=${limit}`;

        // Si hay categoría y no es "All", agregamos el filtro
        if (category && category !== "All") {
            url += `&filters[category][name][$eq]=${encodeURIComponent(category)}`;
        }

        const res = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {})
            },
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            console.error(`❌ STRAPI ERROR: Failed to fetch articles.`);
            return [];
        }

        const json = await res.json();
        if (!json.data || !Array.isArray(json.data)) return [];

        return json.data.map((item: any) => processSingleItem(item));

    } catch (error) {
        console.error("Critical error fetching blog articles from Strapi:", error);
        return [];
    }
}

/**
 * Obtiene todas las categorías únicas disponibles en los artículos recientes.
 * (Idealmente esto debería venir de un endpoint /api/categories, pero lo inferimos aquí para no romper nada)
 */
export async function getCategories(): Promise<string[]> {
    try {
        // Traemos suficientes artículos para descubrir categorías
        const posts = await getBlogPosts(50);
        const categories = new Set(posts.map(p => p.category).filter(c => c && c !== "Sin categoría"));
        return ["All", ...Array.from(categories)];
    } catch (error) {
        return ["All"];
    }
}

/**
 * Obtiene un artículo individual por Slug real o DocumentId (fallback).
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    try {
        // 1. Intentar por SLUG
        let url = `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`;
        let res = await fetch(url, { headers: { 'Content-Type': 'application/json', ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}) }, next: { revalidate: 60 } });
        let json = await res.json();

        if (res.ok && json.data && json.data.length > 0) {
            return processSingleItem(json.data[0]);
        }

        // 2. Fallback: Intentar por documentId (si el slug parece un id o el anterior fallo)
        let urlDoc = `${STRAPI_URL}/api/articles?filters[documentId][$eq]=${slug}&populate=*`;
        let resDoc = await fetch(urlDoc, { headers: { 'Content-Type': 'application/json', ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}) }, next: { revalidate: 60 } });
        let jsonDoc = await resDoc.json();

        if (resDoc.ok && jsonDoc.data && jsonDoc.data.length > 0) {
            return processSingleItem(jsonDoc.data[0]);
        }

        // 3. Last resort: Escaneo manual
        const fallbackUrl = `${STRAPI_URL}/api/articles?populate=*&sort[0]=publishedAt:desc&pagination[limit]=100`;
        const fallbackRes = await fetch(fallbackUrl, { headers: { 'Content-Type': 'application/json', ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}) }, next: { revalidate: 60 } });
        const fallbackJson = await fallbackRes.json();

        if (fallbackRes.ok && fallbackJson.data && fallbackJson.data.length > 0) {
            const targetSlug = slug.toLowerCase().trim();
            const foundItem = fallbackJson.data.find((item: any) => {
                const itemSlug = (item.attributes?.slug || item.slug || "").toLowerCase().trim();
                const itemDocId = item.documentId || "";
                return itemSlug === targetSlug || itemDocId === slug;
            });

            if (foundItem) return processSingleItem(foundItem);
        }

        return null;

    } catch (error) {
        console.error(`Critical error fetching article slug or id: ${slug}`, error);
        return null;
    }
}

// Helper para procesar el item crudo a BlogPost limpio
function processSingleItem(item: any): BlogPost {
    const attr = item.attributes || item;

    // RESILIENCIA: Si el slug es nulo, usamos el documentId para que no se rompa el enlace
    const finalSlug = attr.slug || item.documentId || item.id?.toString();

    return {
        id: item.id,
        title: attr.title,
        slug: finalSlug,
        category: attr.category?.data?.attributes?.name || attr.category?.name || "Sin categoría",
        publishedAt: new Date(attr.publishedAt).toLocaleDateString("en-US", {
            month: "short", day: "numeric", year: "numeric"
        }),
        description: attr.description || "",
        coverImage: {
            url: getCoverUrl(attr.cover || attr.coverImage),
            alt: attr.cover?.data?.attributes?.alternativeText || attr.cover?.alternativeText || attr.coverImage?.data?.attributes?.alternativeText || attr.coverImage?.alternativeText || attr.title
        },
        content: attr.content || ""
    };
}

// Helper para extraer URL de imagen en v4 y v5
function getCoverUrl(coverObj: any): string {
    if (!coverObj) return "";
    if (coverObj.data?.attributes?.url) return `${STRAPI_URL}${coverObj.data.attributes.url}`;
    if (coverObj.url) return `${STRAPI_URL}${coverObj.url}`;
    if (Array.isArray(coverObj) && coverObj[0]?.url) return `${STRAPI_URL}${coverObj[0].url}`;
    return "";
}
