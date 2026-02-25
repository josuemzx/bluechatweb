import { getBlogPosts, getCategories } from '@/lib/strapi/blog';
import Link from 'next/link';

export const metadata = {
    title: 'Bluechat Blog | Noticias y Recursos',
    description: 'Descubre las últimas tendencias en comunicación conversacional y actualizaciones de Bluechat.',
};

export default async function BlogPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const category = typeof searchParams.category === 'string' ? searchParams.category : 'All';

    const [posts, categories] = await Promise.all([
        getBlogPosts(100, category),
        getCategories()
    ]);

    const featuredPost = posts.length > 0 ? posts[0] : null;
    const gridPosts = posts.length > 0 ? posts.slice(1) : [];

    return (
        <div className="min-h-screen bg-white text-google-text-primary font-sans">
            <div className="pt-32 pb-20 px-6 lg:px-8 max-w-[1440px] mx-auto">

                {/* 1. FEATURED SECTION (Restored) */}
                {featuredPost && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-24 lg:mb-32">
                        {/* LEFT: Content */}
                        <div className="order-2 lg:order-1 flex flex-col items-start px-2">
                            <span className="text-[18px] font-medium text-google-text-primary mb-4">
                                {featuredPost.category}
                            </span>

                            <Link href={`/blog/${featuredPost.slug}`} className="group block mb-6">
                                <h1 className="text-[28px] sm:text-[36px] lg:text-[42px] tracking-[-0.02em] font-normal text-google-text-primary group-hover:opacity-80 transition-opacity leading-tight">
                                    {featuredPost.title}
                                </h1>
                            </Link>

                            <div className="flex items-center gap-3 text-[16px] text-google-text-secondary mb-8 font-medium">
                                <span>{featuredPost.publishedAt}</span>
                            </div>

                            <Link
                                href={`/blog/${featuredPost.slug}`}
                                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-google-surface text-google-text-primary font-medium text-[16px] hover:bg-google-surface-hover transition-colors"
                            >
                                Leer artículo
                            </Link>
                        </div>

                        {/* RIGHT: Image */}
                        <div className="order-1 lg:order-2 w-full">
                            <Link
                                href={`/blog/${featuredPost.slug}`}
                                className="block relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-google-text-primary hover:opacity-95 transition-opacity"
                            >
                                <img
                                    src={featuredPost.coverImage.url}
                                    alt={featuredPost.coverImage.alt}
                                    className="w-full h-full object-cover"
                                />
                            </Link>
                        </div>
                    </div>
                )}

                {/* 2. CATEGORY TABS */}
                <div className="flex border-b border-gray-200 mb-16 overflow-x-auto no-scrollbar">
                    <div className="flex space-x-8 px-2">
                        {categories.map((cat) => {
                            const isActive = category === cat || (category === 'All' && cat === 'All');
                            return (
                                <Link
                                    key={cat}
                                    href={cat === 'All' ? '/blog' : `/blog?category=${encodeURIComponent(cat)}`}
                                    className={`relative pb-4 text-[16px] font-medium whitespace-nowrap transition-colors ${isActive
                                        ? "text-google-text-primary"
                                        : "text-google-text-secondary hover:text-google-text-primary"
                                        }`}
                                >
                                    {cat}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-google-text-primary" />
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                {/* 3. POSTS GRID (Horizontal Cards) */}
                {gridPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 px-2">
                        {gridPosts.map((post) => (
                            <div key={post.id} className="flex flex-row justify-between items-start gap-6 group">
                                {/* LEFT: Text Content */}
                                <div className="flex flex-col items-start w-full pr-4">
                                    <Link href={`/blog/${post.slug}`} className="block mb-3">
                                        {/* Title: Reduced size */}
                                        <h3 className="text-blog-title md:text-blog-title-md font-normal text-google-text-primary tracking-tight group-hover:opacity-80 transition-opacity">
                                            {post.title}
                                        </h3>
                                    </Link>

                                    {/* Meta */}
                                    <div className="flex items-center gap-3 text-[14px] text-google-text-secondary font-medium mb-6">
                                        <span>{post.publishedAt}</span>
                                        <span>{post.category}</span>
                                    </div>

                                    {/* Button */}
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-google-surface text-google-text-primary text-[14px] font-medium hover:bg-google-surface-hover transition-colors mt-auto"
                                    >
                                        Leer artículo
                                    </Link>
                                </div>

                                {/* RIGHT: Image (Rectangular) */}
                                <div className="flex-shrink-0">
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="block relative w-[160px] h-[100px] sm:w-[220px] sm:h-[138px] rounded-[16px] overflow-hidden bg-gray-100 hover:opacity-95 transition-opacity"
                                    >
                                        {post.coverImage.url ? (
                                            <img
                                                src={post.coverImage.url}
                                                alt={post.coverImage.alt || post.title}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-gray-400 bg-gray-200">
                                                No Image
                                            </div>
                                        )}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center">
                        <p className="text-xl text-google-text-secondary">No articles found in this category.</p>
                        <Link href="/blog" className="text-google-blue hover:underline mt-4 inline-block">
                            View all
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

