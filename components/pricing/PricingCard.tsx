import Link from "next/link";
import { CheckIcon } from "@heroicons/react/24/outline";

export interface PricingFeature {
    text: string;
    footnote?: boolean;
}

export interface PricingCardProps {
    badge?: string;
    badgeColor?: "blue" | "gray";
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    buttonStyle?: "primary" | "secondary" | "disabled";
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    featuresTitle?: string;
    features: PricingFeature[];
}

export default function PricingCard({
    badge,
    badgeColor = "blue",
    title,
    subtitle,
    description,
    buttonText,
    buttonLink,
    buttonStyle = "primary",
    secondaryButtonText,
    secondaryButtonLink,
    featuresTitle,
    features,
}: PricingCardProps) {

    const badgeStyles = badgeColor === "blue"
        ? "bg-blue-50 text-blue-600"
        : "bg-gray-100 text-gray-600";

    const buttonStyles = {
        primary: "bg-[#202124] text-white hover:bg-gray-800 shadow-sm",
        secondary: "bg-[#F1F3F4] text-[#202124] hover:bg-gray-200",
        disabled: "bg-[#F1F3F4] text-[#202124] opacity-60 cursor-not-allowed",
    };

    return (
        <div className="flex flex-col h-full bg-[#F9FAFB] rounded-[24px] p-8 transition-colors shadow-sm hover:shadow-md">
            {/* Badge */}
            <div className="mb-6 h-6">
                {badge && (
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeStyles}`}>
                        {badge}
                    </span>
                )}
            </div>

            {/* Header */}
            <div className="mb-6">
                <h3 className="text-2xl font-normal text-[#202124] mb-1">{title}</h3>
                <p className="text-sm text-gray-500 font-medium">{subtitle}</p>
            </div>

            {/* Description - Fixed height for alignment only on desktop */}
            <div className="mb-4 lg:min-h-[100px]">
                <p className="text-[15px] text-[#5f6368] leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Buttons */}
            <div className="mb-6 space-y-3">
                {buttonStyle === "disabled" ? (
                    <button disabled className={`w-full rounded-full px-6 py-3 text-sm font-medium transition-colors ${buttonStyles[buttonStyle]}`}>
                        {buttonText}
                    </button>
                ) : (
                    <Link
                        href={buttonLink}
                        className={`block w-full text-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${buttonStyles[buttonStyle]}`}
                    >
                        {buttonText}
                    </Link>
                )}

                {secondaryButtonText && secondaryButtonLink && (
                    <Link
                        href={secondaryButtonLink}
                        className={`block w-full text-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${buttonStyles.secondary}`}
                    >
                        {secondaryButtonText}
                    </Link>
                )}
            </div>

            {/* Features */}
            <div className="mt-2 text-left">
                {featuresTitle && (
                    <p className="text-sm font-medium text-[#202124] mb-4">{featuresTitle}</p>
                )}
                <ul className="space-y-4">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckIcon className="w-5 h-5 text-[#202124] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                            <span className="text-[14px] text-[#3c4043] leading-snug">
                                {feature.text}
                                {feature.footnote && <sup className="text-blue-600 ml-0.5">*</sup>}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
