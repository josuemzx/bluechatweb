import ProductHero from "@/components/product/ProductHero";
import ProductFeatures from "@/components/product/ProductFeatures";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export default function ProductPage() {
    return (
        <div className="bg-white font-sans">
            <ProductHero />

            <ProductFeatures />

            {/* "Explore the product" Sections (4 Copies) */}
            <Section padding="md" className="bg-white">
                <Container>
                    <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-gray-900 mb-12 sm:mb-16 max-w-xl font-sans">
                        Explore the product
                        <span className="block text-gray-400">An agent-first experience</span>
                    </h2>

                    {/* 1st Item: Full-width */}
                    <div className="w-full flex flex-col sm:block relative rounded-3xl overflow-hidden border border-gray-100/60 bg-bluechat-surface mb-8 group hover:border-gray-200 transition-colors">
                        <div className="w-full">
                            <img src="/assets/panel-principal.png" alt="Agent Manager Interface" className="w-full h-auto block" />
                        </div>
                        <div className="p-8 sm:p-0 sm:absolute sm:bottom-12 sm:left-12 max-w-full sm:max-w-xs transition-transform duration-300">
                            <h3 className="text-xl sm:text-[22px] font-medium text-gray-900 mb-3 tracking-tight">Agent manager</h3>
                            <p className="text-base sm:text-[17px] text-gray-500 leading-relaxed sm:leading-[1.6]">
                                Your mission control to manage multiple agents in parallel, across multiple workspaces.
                            </p>
                        </div>
                    </div>

                    {/* 2nd Item: Full-width (New Large Block) */}
                    <div className="w-full flex flex-col sm:block relative rounded-3xl overflow-hidden border border-gray-100/60 bg-bluechat-surface mb-8 group hover:border-gray-200 transition-colors">
                        <div className="w-full">
                            <img src="/home.png" alt="Panel de Control" className="w-full h-auto block" />
                        </div>
                        <div className="p-8 sm:p-0 sm:absolute sm:bottom-12 sm:left-12 max-w-full sm:max-w-xs">
                            <h3 className="text-xl sm:text-[22px] font-medium text-[#202124] mb-3 tracking-tight">Panel de Control</h3>
                            <p className="text-base sm:text-[17px] text-[#5f6368] leading-relaxed sm:leading-[1.6]">
                                Una visión completa de toda tu operación desde una sola interfaz intuitiva.
                            </p>
                        </div>
                    </div>

                    {/* 3rd Item: Full-width */}
                    <div className="w-full flex flex-col sm:block relative rounded-3xl overflow-hidden border border-gray-100/60 bg-bluechat-surface group hover:border-gray-200 transition-colors">
                        <div className="w-full">
                            <img src="/assets/agent-manager.png" alt="Agent Manager Interface" className="w-full h-auto block" />
                        </div>
                        <div className="p-8 sm:p-0 sm:absolute sm:bottom-12 sm:left-12 max-w-full sm:max-w-xs">
                            <h3 className="text-xl sm:text-[22px] font-medium text-gray-900 mb-3 tracking-tight">Gestión avanzada</h3>
                            <p className="text-base sm:text-[17px] text-gray-500 leading-relaxed sm:leading-[1.6]">
                                Potencia la productividad de tu equipo con herramientas diseñadas para la colaboración.
                            </p>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
