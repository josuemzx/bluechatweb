import Image from "next/image";

export default function WhatsAppButton() {
    return (
        <a
            href="https://api.whatsapp.com/send/?phone=51993014085&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chatea por WhatsApp"
            className="fixed bottom-6 right-2 z-50 flex items-center justify-center w-20 h-20 hover:scale-110 transition-transform duration-200"
        >
            <Image
                src="/logo-whatsapp.png"
                alt="WhatsApp"
                width={52}
                height={52}
            />
        </a>
    );
}
