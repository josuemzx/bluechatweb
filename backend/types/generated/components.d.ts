import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksContent extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contents';
  info: {
    displayName: 'content';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface BlocksFeatures extends Struct.ComponentSchema {
  collectionName: 'components_blocks_features';
  info: {
    description: 'Grid of features with icons';
    displayName: 'Features Grid';
    icon: 'layout';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'elements.feature-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    description: 'Hero section with gradient background';
    displayName: 'Hero';
    icon: 'crown';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    subheading: Schema.Attribute.Text;
  };
}

export interface BlocksPricing extends Struct.ComponentSchema {
  collectionName: 'components_blocks_pricings';
  info: {
    description: 'Pricing plans table';
    displayName: 'Pricing Table';
    icon: 'shopping-cart';
  };
  attributes: {
    description: Schema.Attribute.Text;
    plans: Schema.Attribute.Component<'elements.pricing-plan', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlogBlogRichText extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_rich_texts';
  info: {
    displayName: 'blog.RichText';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface BlogCode extends Struct.ComponentSchema {
  collectionName: 'components_blog_codes';
  info: {
    displayName: 'Code';
  };
  attributes: {
    code: Schema.Attribute.Text;
    language: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'javascript'>;
  };
}

export interface BlogHeading extends Struct.ComponentSchema {
  collectionName: 'components_blog_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    level: Schema.Attribute.Enumeration<['h2', 'h3', 'h4']> &
      Schema.Attribute.DefaultTo<'h2'>;
    text: Schema.Attribute.String;
  };
}

export interface BlogImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlogQuote extends Struct.ComponentSchema {
  collectionName: 'components_blog_quotes';
  info: {
    displayName: 'Quote';
  };
  attributes: {
    author: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface BlogVideo extends Struct.ComponentSchema {
  collectionName: 'components_blog_videos';
  info: {
    displayName: 'Video';
  };
  attributes: {
    caption: Schema.Attribute.String;
    url: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Placeholder: https://www.youtube.com/watch?v=...'>;
  };
}

export interface ElementsFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_items';
  info: {
    description: 'Individual feature item';
    displayName: 'Feature Item';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String & Schema.Attribute.DefaultTo<'star'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsPricingPlan extends Struct.ComponentSchema {
  collectionName: 'components_elements_pricing_plans';
  info: {
    description: 'Individual pricing plan';
    displayName: 'Pricing Plan';
    icon: 'money-bill';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Get Started'>;
    features: Schema.Attribute.RichText;
    isPopular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: 'SEO Metadata';
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.content': BlocksContent;
      'blocks.features': BlocksFeatures;
      'blocks.hero': BlocksHero;
      'blocks.pricing': BlocksPricing;
      'blog.blog-rich-text': BlogBlogRichText;
      'blog.code': BlogCode;
      'blog.heading': BlogHeading;
      'blog.image': BlogImage;
      'blog.quote': BlogQuote;
      'blog.video': BlogVideo;
      'elements.feature-item': ElementsFeatureItem;
      'elements.pricing-plan': ElementsPricingPlan;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
