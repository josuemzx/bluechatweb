import { ChatBubbleLeftRightIcon, BoltIcon, GlobeAltIcon, UserGroupIcon, ShieldCheckIcon, ChartBarIcon, StarIcon } from '@heroicons/react/24/outline';

const iconMap: any = {
    chat: ChatBubbleLeftRightIcon,
    bolt: BoltIcon,
    globe: GlobeAltIcon,
    users: UserGroupIcon,
    shield: ShieldCheckIcon,
    chart: ChartBarIcon,
    star: StarIcon,
};

interface FeatureItem {
    id: number;
    title: string;
    description: string;
    icon: string;
}

interface FeaturesProps {
    data: {
        title: string;
        description: string;
        items: FeatureItem[];
    };
}

export default function Features({ data }: FeaturesProps) {
    const { title, description, items } = data;

    return (
        <section className="py-24 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-primary-500">Deploy faster</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {title}
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        {description}
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {items && items.map((feature) => {
                            const IconComponent = iconMap[feature.icon] || iconMap.star;

                            return (
                                <div key={feature.id} className="flex flex-col items-start p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-gray-100 group">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-500 group-hover:scale-110 transition-transform">
                                        <IconComponent className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    <dt className="text-xl font-semibold leading-7 text-gray-900">
                                        {feature.title}
                                    </dt>
                                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                        <p className="flex-auto">{feature.description}</p>
                                    </dd>
                                </div>
                            );
                        })}
                    </dl>
                </div>
            </div>
        </section>
    );
}
