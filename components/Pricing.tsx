import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Markdown from 'react-markdown';

interface PricingPlan {
    id: number;
    name: string;
    price: string;
    features: string;
    isPopular: boolean;
    ctaText: string;
    ctaLink: string;
}

interface PricingProps {
    data: {
        title: string;
        description: string;
        plans: PricingPlan[];
    };
}

export default function Pricing({ data }: PricingProps) {
    const { title, description, plans } = data;

    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary-500">Pricing</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        {title}
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                    {description}
                </p>
                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {plans && plans.map((tier, tierIdx) => (
                        <div
                            key={tier.id}
                            className={clsx(
                                tier.isPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                                tierIdx === 0 ? 'lg:rounded-r-none' : '',
                                tierIdx === plans.length - 1 ? 'lg:rounded-l-none' : '',
                                'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1',
                                tier.isPopular ? 'ring-2 ring-primary-500 bg-primary-50/10' : ''
                            )}
                        >
                            <div>
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3
                                        id={`tier-${tier.id}`}
                                        className={clsx(
                                            tier.isPopular ? 'text-primary-600' : 'text-gray-900',
                                            'text-lg font-semibold leading-8'
                                        )}
                                    >
                                        {tier.name}
                                    </h3>
                                    {tier.isPopular ? (
                                        <p className="rounded-full bg-primary-100 px-2.5 py-1 text-xs font-semibold leading-5 text-primary-600">
                                            Most popular
                                        </p>
                                    ) : null}
                                </div>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</span>
                                    <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                                </p>

                                {/* Features List rendered from Markdown or Rich Text */}
                                <div className="mt-8 text-sm leading-6 text-gray-600">
                                    <div className="prose prose-sm prose-blue">
                                        {/* We can do a simple split if it's not full markdown, or use react-markdown */}
                                        <Markdown components={{
                                            li: ({ node, ...props }) => (
                                                <div className="flex gap-x-3 mb-2">
                                                    <CheckIcon className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                                                    <span>{props.children}</span>
                                                </div>
                                            ),
                                            ul: ({ node, ...props }) => <div {...props} />
                                        }}>
                                            {tier.features}
                                        </Markdown>
                                    </div>
                                </div>
                            </div>
                            <Link
                                href={tier.ctaLink || '#'}
                                aria-describedby={`tier-${tier.id}`}
                                className={clsx(
                                    tier.isPopular
                                        ? 'bg-primary-500 text-white shadow-sm hover:bg-primary-400 focus-visible:outline-primary-500 hover:shadow-[0_0_20px_rgba(1,102,255,0.4)]'
                                        : 'bg-primary-50 text-primary-600 hover:bg-primary-100 ring-1 ring-inset ring-primary-200',
                                    'mt-8 block rounded-full py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all'
                                )}
                            >
                                {tier.ctaText}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
