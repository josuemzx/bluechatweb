import ProductHero from "@/components/product/ProductHero";
import ProductFeatures from "@/components/product/ProductFeatures";
import ProductShowcase from "@/components/product/ProductShowcase";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ProductPage() {
    return (
        <div className="bg-white font-sans">
            <ProductHero />

            <ProductFeatures />

            <ProductShowcase />

            {/* "Explore the product" Section */}
            <section className="py-24 bg-white">
                <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
                    <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-gray-900 mb-16 max-w-xl">
                        Explore the product
                        <span className="block text-gray-500">An agent-first experience</span>
                    </h2>

                    <div className="w-full relative rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm bg-white">
                        {/* Image Asset - Natural height */}
                        <img
                            src="/assets/agent-manager.jpg"
                            alt="Agent Manager Interface"
                            className="w-full h-auto block"
                        />

                        {/* Text Overlay */}
                        <div className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 max-w-[280px] sm:max-w-xs">
                            <h3 className="text-[22px] font-medium text-gray-900 mb-3 tracking-tight">Agent manager</h3>
                            <p className="text-[17px] text-gray-500 leading-[1.6]">
                                Your mission control to manage multiple agents in parallel, across multiple workspaces.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA (Pre-Footer) similar to Antigravity's implicit flow */}
            <section className="py-24 sm:py-32 bg-[#F9FAFB] border-t border-gray-100">
                <div className="mx-auto max-w-3xl text-center px-6">
                    <h2 className="text-4xl sm:text-5xl font-medium text-[#202124] mb-10 tracking-tight">Ready to achieve liftoff?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/signup" className="rounded-full bg-[#0166FF] px-8 py-4 text-[17px] font-medium text-white hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30">
                            Get started for free
                        </Link>
                        <Link href="/contact" className="rounded-full bg-white px-8 py-4 text-[17px] font-medium text-[#202124] border border-gray-200 hover:bg-gray-50 transition-colors">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
