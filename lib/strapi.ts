import qs from 'qs';

/**
 * Get the Strapi URL from environment variables
 */
export function getStrapiURL(path = '') {
    return `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337'}${path}`;
}

/**
 * Helper to make GET requests to Strapi API
 */
export async function fetchAPI(path: string, urlParamsObject = {}, options = {}) {
    // Merge default and user options
    const mergedOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(`/api${path}${queryString ? `?${queryString}` : ''}`)}`;

    // Trigger API call
    const response = await fetch(requestUrl, mergedOptions);

    // Handle response
    if (!response.ok) {
        console.error(`Error fetching from Strapi: ${response.status} ${response.statusText}`);
        console.error(`URL: ${requestUrl}`);
        try {
            const errorBody = await response.text();
            console.error(`Response body: ${errorBody}`);
        } catch (e) { /* ignore */ }
        throw new Error(`Strapi Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data;
}

/**
 * Helper to get media URL (prepend Strapi URL if local)
 */
export function getStrapiMedia(media: any) {
    if (!media) return null;

    // Support various Strapi formats (v4, v5, populated, etc)
    const url = media.url || media.data?.url || media.data?.attributes?.url;

    if (!url) return null;

    const imageUrl = url.startsWith('/') ? getStrapiURL(url) : url;
    return imageUrl;
}
