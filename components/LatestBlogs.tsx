"use client";

import { BlogPost } from "@/types/blog";
import Link from "next/link";

interface LatestBlogsProps {
    posts: BlogPost[];
}

export default function LatestBlogs({ posts }: LatestBlogsProps) {
    if (!posts || posts.length === 0) return null;

    return (
        <section className="py-20 bg-white font-sans">
            {/* 
               CONTENEDOR PRINCIPAL:
               - max-w-[1440px]: Ancho máximo alineado con Navbar.
               - px-6 lg:px-8: Padding exacto del Navbar para alineación perfecta a los costados.
            */}
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8">

                {/* Header: Title + Button */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-[32px] font-medium tracking-tight text-google-text-primary">
                        Últimos artículos
                    </h2>
                    <Link
                        href="/blog"
                        className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-gray-300 text-[14px] font-medium text-google-text-secondary hover:bg-google-surface transition-colors"
                    >
                        Ver blog
                    </Link>
                </div>

                {/* Blog Grid - 4 columns on large screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {posts.map((post) => (
                        <div key={post.id} className="group flex flex-col items-start w-full">

                            {/* 
                                1. IMAGEN DEL ARTÍCULO
                                - Aspect Ratio: aspect-video (16:9) para que sea rectangular bajita.
                                - Si quieres más alta: cambia 'aspect-video' por 'aspect-[4/3]'.
                                - Si quieres cuadrada: usa 'aspect-square'.
                            */}
                            <Link href={`/blog/${post.slug}`} className="block w-full mb-4 relative">
                                <div className="aspect-video w-full relative rounded-[24px] overflow-hidden bg-google-surface">
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/[0.03] transition-colors duration-200 z-10" />
                                    <img
                                        src={post.coverImage.url}
                                        alt={post.coverImage.alt}
                                        className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                                    />
                                </div>
                            </Link>

                            {/* 2. Content */}
                            <div className="w-full">
                                {/* Title */}
                                <Link href={`/blog/${post.slug}`} className="block mb-2">
                                    <h3 className="text-[20px] leading-[1.3] font-medium text-google-text-primary tracking-tight transition-colors duration-200">
                                        {post.title}
                                    </h3>
                                </Link>

                                {/* Meta: Date & Category */}
                                <div className="text-[13px] leading-none text-google-text-secondary mb-3 flex items-center mt-2 font-medium">
                                    <span>{post.publishedAt}</span>
                                    <span className="mx-2 text-[8px] opacity-60">●</span>
                                    <span>{post.category}</span>
                                </div>

                                {/* "Read blog" Link */}
                                <div className="mt-auto">
                                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-[14px] font-medium text-google-text-primary hover:text-google-blue transition-colors group/link">
                                        Leer artículo
                                        <svg className="ml-1.5 w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
