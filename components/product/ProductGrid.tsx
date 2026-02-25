"use client";

import { Square3Stack3DIcon, CubeIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function ProductGrid() {
    const features = [
        {
            title: "Evolving to agent-first",
            description: "Introducing a new agent-first Agent Manager experience. This innovative approach enables agents to operate seamlessly across all surfaces, including your browser.",
            icon: Square3Stack3DIcon,
        },
        {
            title: "A more natural abstraction",
            description: "Gain a complete understanding of agentic operations at the task level, supported by the essential artifacts and verification outcomes, fostering confidence.",
            icon: CubeIcon,
        },
        {
            title: "Guidance to go from 90% to 100%",
            description: "Intuitively provide feedback across every surface and Artifact to steer the agent to your desired outcomes.",
            icon: SparklesIcon,
        },
    ];

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-start">
                            <div className="mb-6 p-0">
                                <feature.icon className="w-12 h-12 text-gray-900 stroke-1" />
                            </div>
                            <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-lg leading-relaxed text-gray-500">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
