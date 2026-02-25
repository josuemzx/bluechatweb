'use client';

/**
 * Professional Dynamic Zone Renderer for Strapi Blog
 * 
 * Supports all blog components:
 * - blog.RichText (paragraphs with formatting)
 * - blog.Image (images with captions)
 * - blog.Code (code blocks with language)
 * - blog.Quote (blockquotes with author)
 * - blog.Heading (H2, H3, H4)
 * - blog.Video (YouTube/Vimeo embeds)
 */

interface DynamicComponent {
    __component: string;
    id: number;
    [key: string]: any;
}

interface BlogContentProps {
    content: DynamicComponent[];
}

export default function BlogContent({ content }: BlogContentProps) {

    // Helper: Render Rich Text Blocks (nested structure from Strapi)
    const renderRichTextBlocks = (blocks: any[]): React.ReactNode => {
        if (!blocks || !Array.isArray(blocks)) return null;

        return blocks.map((block, index) => {
            switch (block.type) {
                case 'paragraph':
                    return <p key={index}>{renderChildren(block.children || [])}</p>;

                case 'heading':
                    const HeadingTag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
                    return <HeadingTag key={index}>{renderChildren(block.children || [])}</HeadingTag>;

                case 'list':
                    const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
                    return (
                        <ListTag key={index}>
                            {block.children?.map((item: any, i: number) => (
                                <li key={i}>{renderChildren(item.children || [])}</li>
                            ))}
                        </ListTag>
                    );

                case 'quote':
                    return <blockquote key={index}>{renderChildren(block.children || [])}</blockquote>;

                case 'code':
                    return (
                        <pre key={index}>
                            <code>{renderChildren(block.children || [])}</code>
                        </pre>
                    );

                default:
                    return null;
            }
        });
    };

    // Helper: Render text children with formatting
    const renderChildren = (children: any[]): React.ReactNode => {
        if (!children) return null;

        return children.map((child, index) => {
            if (child.type === 'text') {
                let text: React.ReactNode = child.text;

                if (child.bold) text = <strong key={index}>{text}</strong>;
                if (child.italic) text = <em key={index}>{text}</em>;
                if (child.underline) text = <u key={index}>{text}</u>;
                if (child.strikethrough) text = <s key={index}>{text}</s>;
                if (child.code) text = <code key={index}>{text}</code>;

                return text;
            }

            if (child.type === 'link') {
                return (
                    <a key={index} href={child.url} target="_blank" rel="noopener noreferrer">
                        {renderChildren(child.children)}
                    </a>
                );
            }

            return renderChildren(child.children || []);
        });
    };

    // Helper: Extract YouTube/Vimeo video ID
    const getVideoEmbedUrl = (url: string): string | null => {
        // YouTube
        const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const youtubeMatch = url.match(youtubeRegex);
        if (youtubeMatch) {
            return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
        }

        // Vimeo
        const vimeoRegex = /vimeo\.com\/(?:.*\/)?(\d+)/;
        const vimeoMatch = url.match(vimeoRegex);
        if (vimeoMatch) {
            return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
        }

        return null;
    };

    // Main renderer for each Dynamic Zone component
    const renderComponent = (component: DynamicComponent, index: number): React.ReactNode => {
        const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

        switch (component.__component) {
            // blog.RichText - Rich text blocks
            case 'blog.rich-text':
                return (
                    <div key={index} className="rich-text-block">
                        {renderRichTextBlocks(component.content)}
                    </div>
                );

            // blog.RichText - Alternative naming
            case 'blog.blog-rich-text':
                return (
                    <div key={index} className="rich-text-block">
                        {renderRichTextBlocks(component.content)}
                    </div>
                );

            // blog.Image - Image with caption
            case 'blog.image':
                if (!component.image?.data) return null;
                const imageData = component.image.data.attributes;
                const imageUrl = imageData.url.startsWith('http')
                    ? imageData.url
                    : `${strapiUrl}${imageData.url}`;

                return (
                    <figure key={index} className="blog-image">
                        <img
                            src={imageUrl}
                            alt={imageData.alternativeText || component.caption || ''}
                            width={imageData.width}
                            height={imageData.height}
                        />
                        {component.caption && (
                            <figcaption>{component.caption}</figcaption>
                        )}
                    </figure>
                );

            // blog.Image - Alternative naming
            case 'blog.blog-image':
                console.log('Image component data:', component);

                // Handle different possible structures
                if (!component.image) {
                    console.warn('No image data found in component');
                    return null;
                }

                // Check if it's the data.attributes structure
                if (component.image.data) {
                    const imageData2 = component.image.data.attributes;
                    const imageUrl2 = imageData2.url.startsWith('http')
                        ? imageData2.url
                        : `${strapiUrl}${imageData2.url}`;

                    return (
                        <figure key={index} className="blog-image">
                            <img
                                src={imageUrl2}
                                alt={imageData2.alternativeText || component.caption || ''}
                                width={imageData2.width}
                                height={imageData2.height}
                            />
                            {component.caption && (
                                <figcaption>{component.caption}</figcaption>
                            )}
                        </figure>
                    );
                }

                // Direct image object (alternative structure)
                if (component.image.url) {
                    const imageUrl3 = component.image.url.startsWith('http')
                        ? component.image.url
                        : `${strapiUrl}${component.image.url}`;

                    return (
                        <figure key={index} className="blog-image">
                            <img
                                src={imageUrl3}
                                alt={component.image.alternativeText || component.caption || ''}
                                width={component.image.width}
                                height={component.image.height}
                            />
                            {component.caption && (
                                <figcaption>{component.caption}</figcaption>
                            )}
                        </figure>
                    );
                }

                console.warn('Unknown image structure:', component.image);
                return null;

            // blog.Code - Code block with language
            case 'blog.code':
                return (
                    <div key={index} className="code-block">
                        {component.language && (
                            <div className="code-language">{component.language}</div>
                        )}
                        <pre>
                            <code className={component.language ? `language-${component.language}` : ''}>
                                {component.code}
                            </code>
                        </pre>
                    </div>
                );

            // blog.Code - Alternative naming
            case 'blog.blog-code':
                return (
                    <div key={index} className="code-block">
                        {component.language && (
                            <div className="code-language">{component.language}</div>
                        )}
                        <pre>
                            <code className={component.language ? `language-${component.language}` : ''}>
                                {component.code}
                            </code>
                        </pre>
                    </div>
                );

            // blog.Quote - Blockquote with author
            case 'blog.quote':
                return (
                    <blockquote key={index} className="blog-quote">
                        <p>{component.text}</p>
                        {component.author && (
                            <cite>— {component.author}</cite>
                        )}
                    </blockquote>
                );

            // blog.Quote - Alternative naming
            case 'blog.blog-quote':
                return (
                    <blockquote key={index} className="blog-quote">
                        <p>{component.text}</p>
                        {component.author && (
                            <cite>— {component.author}</cite>
                        )}
                    </blockquote>
                );

            // blog.Heading - Custom heading
            case 'blog.heading':
                const HeadingTag = (component.level || 'h2') as keyof JSX.IntrinsicElements;
                return <HeadingTag key={index}>{component.text}</HeadingTag>;

            // blog.Heading - Alternative naming
            case 'blog.blog-heading':
                const HeadingTag2 = (component.level || 'h2') as keyof JSX.IntrinsicElements;
                return <HeadingTag2 key={index}>{component.text}</HeadingTag2>;

            // blog.Video - YouTube/Vimeo embed
            case 'blog.video':
                const embedUrl = getVideoEmbedUrl(component.url);
                if (!embedUrl) return null;

                return (
                    <figure key={index} className="blog-video">
                        <div className="video-wrapper">
                            <iframe
                                src={embedUrl}
                                title={component.caption || 'Video'}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        {component.caption && (
                            <figcaption>{component.caption}</figcaption>
                        )}
                    </figure>
                );

            // blog.Video - Alternative naming
            case 'blog.blog-video':
                const embedUrl2 = getVideoEmbedUrl(component.url);
                if (!embedUrl2) return null;

                return (
                    <figure key={index} className="blog-video">
                        <div className="video-wrapper">
                            <iframe
                                src={embedUrl2}
                                title={component.caption || 'Video'}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        {component.caption && (
                            <figcaption>{component.caption}</figcaption>
                        )}
                    </figure>
                );


            default:
                console.warn(`Unknown component type: ${component.__component}`);
                return null;
        }
    };

    if (!content || !Array.isArray(content)) {
        return <div className="article-content">No content available</div>;
    }

    return (
        <div className="article-content">
            {content.map((component, index) => renderComponent(component, index))}
        </div>
    );
}
