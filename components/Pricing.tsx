import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { CheckIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import Markdown from "react-markdown";

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
        <Section className="bg-white">
            <Container>
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-bluechat-primary">Planes</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-[#1c2024] sm:text-5xl">
                        {title}
                    </p>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#5f6368]">
                        {description}
                    </p>
                </div>

                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {plans && plans.map((tier, tierIdx) => (
                        <div
                            key={tier.id}
                            className={clsx(
                                tier.isPopular ? "lg:z-10 lg:rounded-b-none" : "lg:mt-8",
                                tierIdx === 0 ? "lg:rounded-r-none" : "",
                                tierIdx === plans.length - 1 ? "lg:rounded-l-none" : "",
                                "flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1",
                                tier.isPopular ? "ring-2 ring-bluechat-primary bg-blue-50/10" : "bg-bluechat-surface"
                            )}
                        >
                            <div>
                                <div className="flex items-center justify-between gap-x-4">
                                    <h3
                                        id={`tier-${tier.id}`}
                                        className={clsx(
                                            tier.isPopular ? "text-bluechat-primary" : "text-[#1c2024]",
                                            "text-lg font-semibold leading-8"
                                        )}
                                    >
                                        {tier.name}
                                    </h3>
                                    {tier.isPopular && (
                                        <p className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold leading-5 text-bluechat-primary">
                                            Más popular
                                        </p>
                                    )}
                                </div>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-[#1c2024]">{tier.price}</span>
                                    <span className="text-sm font-semibold leading-6 text-[#5f6368]">/mes</span>
                                </p>

                                <div className="mt-8 text-sm leading-6 text-[#5f6368]">
                                    <div className="prose prose-sm prose-blue">
                                        <Markdown components={{
                                            li: ({ node, ...props }: any) => (
                                                <div className="flex gap-x-3 mb-2">
                                                    <CheckIcon className="h-6 w-5 flex-none text-bluechat-primary" aria-hidden="true" />
                                                    <span>{props.children}</span>
                                                </div>
                                            ),
                                            ul: ({ node, ...props }: any) => <div {...props} />
                                        }}>
                                            {tier.features}
                                        </Markdown>
                                    </div>
                                </div>
                            </div>

                            <Button
                                href={tier.ctaLink || "#"}
                                variant={tier.isPopular ? "primary" : "outline"}
                                size="lg"
                                className="w-full mt-8"
                            >
                                {tier.ctaText}
                            </Button>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
