import { getBlogPostBySlug } from '@/lib/strapi/blog';
import { notFound } from 'next/navigation';
import BlogContent from '@/components/BlogContent';

interface BlogPostProps {
    params: {
        slug: string;
    };
}

// Generación estática si es posible (Incremental Static Regeneration)
export async function generateMetadata({ params }: BlogPostProps) {
    const post = await getBlogPostBySlug(params.slug);
    if (!post) return { title: 'Post Not Found' };
    return {
        title: `${post.title} - Bluechat Blog`,
        description: post.description,
        openGraph: {
            images: [post.coverImage.url],
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
    const post = await getBlogPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white text-google-text-primary">

            {/* Minimal top padding like Antigravity */}
            <article className="pt-20 pb-24">
                {/* Header Section - Compact spacing */}
                <header className="max-w-[900px] mx-auto px-6 text-center mb-16">

                    {/* Category + Date - Small, minimal bottom margin */}
                    <div className="flex items-center justify-center gap-2 text-[16px] text-google-text-secondary font-normal mb-8">
                        <span>{post.category}</span>
                        <span>·</span>
                        <span>{post.publishedAt}</span>
                    </div>

                    {/* Title - Large but compact line-height */}
                    <h1 className="text-[26px] md:text-[42px] font-normal leading-[1.1] tracking-tight text-google-text-primary mb-8">
                        {post.title}
                    </h1>

                    {/* Author - Minimal spacing */}
                    <p className="text-[16px] text-google-text-secondary font-normal">
                        The Bluechat Team
                    </p>
                </header>

                {/* Featured Image - Nearly full-width like Antigravity */}
                <div className="max-w-[1440px] mx-auto px-4 md:px-6 mb-12">
                    <div className="aspect-video w-full rounded-[32px] overflow-hidden bg-google-surface">
                        <img
                            src={post.coverImage.url}
                            alt={post.coverImage.alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Body - Professional Blocks Renderer */}
                <div className="max-w-[720px] mx-auto px-8">
                    {/* Check if content is Blocks array or legacy string */}
                    {Array.isArray(post.content) ? (
                        // Modern Strapi Blocks Editor content
                        <BlogContent content={post.content} />
                    ) : (
                        // Legacy string content (HTML/Markdown) - fallback
                        <div
                            className="article-content"
                            dangerouslySetInnerHTML={{ __html: post.content || "" }}
                        />
                    )}
                </div>

            </article>

        </main>
    );
}
