import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { getStrapiMedia } from '@/lib/strapi';

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
        <section className="relative isolate pt-14 dark:bg-gray-900 overflow-hidden">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0166ff] to-[#7ab7ff] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
            </div>

            <div className="py-24 sm:py-32 lg:pb-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl font-sans">
                            {heading}
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                            {subheading}
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            {ctaText && ctaLink && (
                                <Link
                                    href={ctaLink}
                                    className="rounded-full bg-primary-500 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(1,102,255,0.4)]"
                                >
                                    {ctaText}
                                </Link>
                            )}
                            <Link href="/pricing" className="text-sm font-semibold leading-6 text-gray-900 flex items-center gap-1 hover:gap-2 transition-all">
                                View pricing <ArrowRightIcon className="w-4 h-4" />
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
                </div>
            </div>
        </section>
    );
}
