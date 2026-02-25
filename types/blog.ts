// Dynamic Zone component type (Strapi format)
export interface DynamicComponent {
    __component: string;
    id: number;
    [key: string]: any;
}

export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    category: string;
    publishedAt: string;
    description: string;
    coverImage: {
        url: string;
        alt: string;
    };
    content?: DynamicComponent[]; // Dynamic Zone with blog components
}
