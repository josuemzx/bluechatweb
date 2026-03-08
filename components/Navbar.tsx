"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/Button';

const navigation = [
    { name: 'Producto', href: '/product' },
    { name: 'Precios', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Soporte', href: '/soporte' },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Ocultar Navbar en el Studio
    if (pathname?.startsWith('/studio')) return null;

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm shadow-sm" />
            <nav className="relative flex items-center justify-between px-6 py-2 lg:px-8 max-w-[1440px] mx-auto" aria-label="Global">
                <div className="flex items-center gap-8">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <span className="sr-only">Bluechat</span>
                        <img
                            className="h-7 w-auto"
                            src="/logo.png"
                            alt="Bluechat"
                        />
                    </Link>
                    <div className="hidden lg:flex lg:gap-x-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-[14px] font-medium leading-6 text-[#5f6368] hover:text-[#202124] transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
                    <Link
                        href="https://app.bluechat.lat"
                        className="text-[14px] font-medium text-[#5f6368] hover:text-[#202124] transition-colors"
                    >
                        Iniciar sesión
                    </Link>
                    <Button
                        href="/crear-cuenta"
                        variant="primary"
                        size="md"
                    >
                        Crear cuenta
                    </Button>
                </div>
            </nav>

            {/* Mobile menu */}
            {/* Mobile menu - Antigravity Style */}
            {mobileMenuOpen && (
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    {/* Background backdrop */}
                    <div className="fixed inset-0 z-50 bg-white"></div>

                    <div className="fixed inset-0 z-50 w-full overflow-y-auto bg-white px-6 py-6">
                        <div className="flex items-center justify-between mb-8">
                            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                                <span className="sr-only">Bluechat</span>
                                <img
                                    className="h-8 w-auto"
                                    src="/logo.png"
                                    alt="Bluechat"
                                />
                            </Link>
                            <button
                                type="button"
                                className="rounded-full bg-[#1a1a1a] p-2 text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-100">
                                <div className="space-y-1 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-4 text-3xl font-medium leading-7 text-[#202124] hover:bg-gray-50 transition-colors"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6 space-y-4">
                                    <Link
                                        href="https://app.bluechat.lat"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-xl font-medium leading-7 text-[#5f6368] hover:text-[#202124]"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Iniciar sesión
                                    </Link>
                                    <Button
                                        href="/crear-cuenta"
                                        variant="primary"
                                        size="lg"
                                        className="w-full"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Crear cuenta
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
