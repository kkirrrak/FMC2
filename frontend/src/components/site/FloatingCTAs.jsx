import { openWhatsApp, buildSosMessage } from "@/lib/brand";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";

export default function FloatingCTAs() {
    return (
        <div
            data-testid="floating-ctas"
            className="fixed bottom-24 lg:bottom-6 right-4 lg:right-6 z-40"
        >
            <button
                data-testid="fab-whatsapp"
                onClick={() => openWhatsApp(buildSosMessage())}
                aria-label="Chat on WhatsApp"
                className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform"
            >
                <WhatsAppIcon size={26} />
            </button>
        </div>
    );
}
