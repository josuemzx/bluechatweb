import PricingGrid from "@/components/pricing/PricingGrid";

export default function PricingPage() {
    return (
        <div className="bg-white min-h-screen pt-12 pb-24 font-sans">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-8">
                {/* Hero Section */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-[#202124] mb-6">
                        Planes que crecen contigo
                    </h1>
                    <p className="text-[16px] text-google-text-secondary leading-relaxed">
                        Prueba Bluechat gratis por 20 días y potencia a tu equipo comercial.
                    </p>
                </div>

                {/* Pricing Grid */}
                <PricingGrid />
            </div>
        </div>
    );
}
