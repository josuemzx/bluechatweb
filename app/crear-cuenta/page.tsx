"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckIcon, ShieldCheckIcon, AlertCircleIcon, Loader2Icon } from "lucide-react";

const API_WEBHOOK = "https://n8n.bluechat.lat/webhook/criar_empresa_cf7";

interface ValidationState {
    length: boolean;
    uppercase: boolean;
    lowercase: boolean;
    number: boolean;
    special: boolean;
}

export default function CrearCuentaPage() {
    const [formData, setFormData] = useState({
        empresa: "",
        "usuario-admin": "",
        email: "",
        contrasenha: "",
        dni: "",
        whatsapp: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
    const [passValidation, setPassValidation] = useState<ValidationState>({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false,
    });

    // Password validation logic
    useEffect(() => {
        const p = formData.contrasenha;
        setPassValidation({
            length: p.length >= 6,
            uppercase: /[A-Z]/.test(p),
            lowercase: /[a-z]/.test(p),
            number: /\d/.test(p),
            special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(p),
        });
    }, [formData.contrasenha]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when typing
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.empresa.trim()) newErrors.empresa = "Requerido";
        if (!formData["usuario-admin"].trim()) newErrors["usuario-admin"] = "Requerido";
        if (!formData.email.trim()) {
            newErrors.email = "Requerido";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Email inválido";
        }

        const isPassValid = Object.values(passValidation).every(Boolean);
        if (!formData.contrasenha) {
            newErrors.contrasenha = "Requerida";
        } else if (!isPassValid) {
            newErrors.contrasenha = "No cumple los requisitos";
        }

        if (!formData.whatsapp.trim()) {
            newErrors.whatsapp = "Requerido";
        } else if (!/^\+[1-9]\d{6,14}$/.test(formData.whatsapp.trim())) {
            newErrors.whatsapp = "Formato: +51999999999";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus(null);

        if (!validate()) return;

        setIsLoading(true);
        try {
            const response = await fetch(API_WEBHOOK, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.redirectUrl) {
                setSubmitStatus({ type: "success", message: "¡Cuenta creada! Redirigiendo..." });
                setTimeout(() => {
                    window.location.href = result.redirectUrl;
                }, 1500);
            } else if (result.approveUrl) {
                window.location.href = result.approveUrl;
            } else {
                throw new Error(result.message || "No se recibió confirmación del servidor.");
            }
        } catch (error: any) {
            setSubmitStatus({
                type: "error",
                message: error.message || "Error al crear cuenta. Intenta de nuevo."
            });
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white font-sans py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-[600px]">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-10 text-center"
                >
                    <h1 className="text-3xl font-semibold text-[#1c2024] tracking-tight">Crear una cuenta</h1>
                    <p className="mt-3 text-[#5f6368] text-[15px]">Empieza a gestionar tus clientes de forma profesional hoy mismo.</p>
                </motion.div>

                <div className="bg-white p-2 md:p-4">
                    <div className="bg-[#e6f7f3] text-[#0d5c46] p-4 rounded-xl text-sm flex gap-3 mb-8">
                        <ShieldCheckIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <div>
                            <span className="font-semibold block">20 días de prueba gratis.</span>
                            No se realizará ningún cobro durante este periodo. Al finalizar, podrás elegir tu plan.
                        </div>
                    </div>

                    <AnimatePresence>
                        {submitStatus && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className={`p-4 rounded-xl text-sm flex gap-3 mb-8 ${submitStatus.type === "success"
                                    ? "bg-green-50 text-green-700 border border-green-100"
                                    : "bg-red-50 text-red-700 border border-red-100"
                                    }`}
                            >
                                {submitStatus.type === "success" ? <CheckIcon className="w-5 h-5" /> : <AlertCircleIcon className="w-5 h-5" />}
                                {submitStatus.message}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <InputField
                                label="Nombre de empresa"
                                name="empresa"
                                placeholder="Ingrese su empresa"
                                value={formData.empresa}
                                onChange={handleChange}
                                error={errors.empresa}
                                required
                            />
                            <InputField
                                label="Nombre completo"
                                name="usuario-admin"
                                placeholder="Ingrese su nombre"
                                value={formData["usuario-admin"]}
                                onChange={handleChange}
                                error={errors["usuario-admin"]}
                                required
                            />
                        </div>

                        <InputField
                            label="Correo electrónico"
                            name="email"
                            type="email"
                            placeholder="ejemplo@dominio.com"
                            value={formData.email}
                            onChange={handleChange}
                            error={errors.email}
                            required
                        />

                        <div>
                            <InputField
                                label="Contraseña"
                                name="contrasenha"
                                type="password"
                                placeholder="••••••••"
                                value={formData.contrasenha}
                                onChange={handleChange}
                                error={errors.contrasenha}
                                required
                            />
                            <div className="mt-3 grid grid-cols-2 gap-2 p-3 bg-gray-50 rounded-xl">
                                <CheckItem label="Al menos 6 caracteres" isValid={passValidation.length} />
                                <CheckItem label="Una mayúscula" isValid={passValidation.uppercase} />
                                <CheckItem label="Una minúscula" isValid={passValidation.lowercase} />
                                <CheckItem label="Un número" isValid={passValidation.number} />
                                <CheckItem label="Un carácter especial" isValid={passValidation.special} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <InputField
                                label="Documento de identidad"
                                name="dni"
                                placeholder="Número de identificación"
                                value={formData.dni}
                                onChange={handleChange}
                            />
                            <InputField
                                label="WhatsApp"
                                name="whatsapp"
                                type="tel"
                                placeholder="+51999999999"
                                value={formData.whatsapp}
                                onChange={handleChange}
                                error={errors.whatsapp}
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            size="xl"
                            className="w-full mt-4"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2Icon className="w-5 h-5 animate-spin mr-2" />
                                    Procesando...
                                </>
                            ) : (
                                "Crear una cuenta"
                            )}
                        </Button>
                    </form>

                    <div className="mt-8 text-center text-sm text-gray-500">
                        ¿Ya tienes una cuenta?{" "}
                        <Link href="https://app.bluechat.lat" className="text-bluechat-primary font-medium hover:underline">
                            Inicia sesión en Bluechat.
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InputField({ label, error, required, ...props }: any) {
    return (
        <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-[13px] font-medium text-[#1c2024]">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                {...props}
                className={`w-full px-4 py-2 bg-[#f8f8f8] border rounded-lg text-sm transition-all outline-none ${error ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-black focus:bg-white focus:ring-4 focus:ring-gray-100"
                    }`}
            />
            {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
        </div>
    );
}

function CheckItem({ label, isValid }: { label: string; isValid: boolean }) {
    return (
        <div className={`flex items-center gap-2 text-[12px] transition-colors ${isValid ? "text-green-600" : "text-gray-400"}`}>
            <div className={`w-4 h-4 rounded flex items-center justify-center border ${isValid ? "bg-green-600 border-green-600 text-white" : "border-gray-300"}`}>
                <CheckIcon className="w-3 h-3" />
            </div>
            <span>{label}</span>
        </div>
    );
}

function TestimonialCard({ text, author, role, avatar }: any) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/50"
        >
            <p className="text-sm text-gray-700 leading-relaxed italic mb-4">{text}</p>
            <div className="flex items-center gap-3">
                <img src={avatar} alt={author} className="w-10 h-10 rounded-full object-cover shadow-sm" />
                <div>
                    <h4 className="text-[13px] font-bold text-gray-900">{author}</h4>
                    <p className="text-[11px] text-gray-500">{role}</p>
                </div>
            </div>
        </motion.div>
    );
}
