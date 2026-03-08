import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { getStrapiMedia } from "@/lib/strapi";

interface HeroProps {
    data: {
        heading: string;
        subheading: string;
        ctaText: string;
        ctaLink: string;
        image: any;
    };
}

export default function Hero({ data }: HeroProps) {
    const { heading, subheading, ctaText, ctaLink, image } = data;
    const imageUrl = image?.data ? getStrapiMedia(image) : null;

    return (
        <Section className="relative isolate pt-14 bg-white overflow-hidden">
            <Container>
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-[#1c2024] sm:text-5xl lg:text-6xl font-sans">
                        {heading}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-[#5f6368] max-w-2xl mx-auto">
                        {subheading}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        {ctaText && ctaLink && (
                            <Button href={ctaLink} variant="primary" size="xl">
                                {ctaText}
                            </Button>
                        )}
                        <Link
                            href="/pricing"
                            className="text-sm font-semibold leading-6 text-[#1c2024] flex items-center gap-1 hover:gap-2 transition-all"
                        >
                            Ver servicios <ArrowRightIcon className="w-4 h-4" />
                        </Link>
                    </div>

                    {imageUrl && (
                        <div className="mt-16 flow-root sm:mt-24">
                            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4 bg-white/40 backdrop-blur-xl">
                                <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
                                    <Image
                                        src={imageUrl}
                                        alt="Hero Image"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </Section>
    );
}
