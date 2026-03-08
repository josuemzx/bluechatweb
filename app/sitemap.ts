import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://bluechat.lat';
    const today = new Date();

    return [
        {
            url: baseUrl,
            lastModified: today,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/product`,
            lastModified: today,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: today,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: today,
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/crear-cuenta`,
            lastModified: today,
            changeFrequency: 'yearly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/soporte`,
            lastModified: today,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
    ];
}
