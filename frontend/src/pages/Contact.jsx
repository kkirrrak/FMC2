import { useState } from "react";
import { toast } from "sonner";
import Reveal from "@/components/site/Reveal";
import { BRAND, openWhatsApp, buildSosMessage, buildContactMessage, buildWhatsAppUrl } from "@/lib/brand";
import { Phone, Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import useSeo from "@/lib/useSeo";

const initial = {
    name: "",
    email: "",
    mobile: "",
    subject: "General Enquiry",
    message: "",
};

export default function Contact() {
    useSeo({
        title: "Contact FixMyCar — Car Repair & Roadside Assistance in Hyderabad",
        description: "Get in touch with FixMyCar for car repair bookings, roadside assistance, fleet enquiries and support. Call, WhatsApp or fill the contact form — we respond fast.",
        keywords: "contact fixmycar, car service hyderabad contact, car repair enquiry, roadside assistance contact",
        path: "/contact",
    });
    const [v, setV] = useState(initial);
    const [submitting, setSubmitting] = useState(false);
    const [sent, setSent] = useState(false);

    const set = (k, val) => setV((s) => ({ ...s, [k]: val }));

    const submit = async (e) => {
        e.preventDefault();
        if (!v.name.trim() || !v.message.trim() || !v.mobile.trim()) {
            toast.error("Please fill name, mobile and message");
            return;
        }
        setSubmitting(true);
        const message = buildContactMessage(v);
        const url = buildWhatsAppUrl(message);
        setSent(true);
        toast.success("Redirecting to WhatsApp…");
        setTimeout(() => {
            window.open(url, "_blank", "noopener,noreferrer");
        }, 500);
        setSubmitting(false);
    };

    return (
        <div>
            <section className="relative pt-32 md:pt-40 pb-16 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-brand-charcoal/40 to-black" />
                <div className="headlight-glow -top-40 -right-40" />
                <div className="max-w-7xl mx-auto relative">
                    <Reveal>
                        <div className="text-brand-yellow text-xs uppercase tracking-[0.3em] mb-3">
                            Contact
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tighter max-w-5xl">
                            Talk to a{" "}
                            <span className="italic text-white/80">real</span>{" "}
                            <span className="text-yellow-gradient">
                                car specialist.
                            </span>
                        </h1>
                        <p className="mt-6 text-white/70 max-w-2xl text-lg">
                            Prefer typing? Prefer talking? Prefer WhatsApp? We’re on
                            every channel — pick what’s easiest.
                        </p>
                    </Reveal>
                </div>
            </section>

            <section className="py-16 md:py-20 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-10">
                    <Reveal>
                        {sent ? (
                            <div className="glass rounded-3xl p-10 text-center">
                                <CheckCircle2
                                    className="text-brand-yellow mx-auto"
                                    size={40}
                                />
                                <h3 className="font-display text-2xl font-bold mt-4">
                                    Redirecting to WhatsApp…
                                </h3>
                                <p className="text-white/70 mt-2">
                                    If it didn't open automatically, tap below to
                                    continue the conversation.
                                </p>
                                <button
                                    onClick={() =>
                                        openWhatsApp(buildContactMessage(v))
                                    }
                                    data-testid="contact-whatsapp-after"
                                    className="mt-6 inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold rounded-full px-6 py-3 hover:bg-[#20b957] transition"
                                >
                                    <WhatsAppIcon size={18} /> Open WhatsApp
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={submit}
                                data-testid="contact-form"
                                className="glass rounded-2xl md:rounded-3xl p-4 md:p-8 space-y-4 md:space-y-5"
                            >
                                <h2 className="font-display text-2xl md:text-3xl font-bold">
                                    Send us a message
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                    <div className="space-y-1.5">
                                        <Label className="text-white/70 text-xs uppercase tracking-wider">
                                            Name *
                                        </Label>
                                        <Input
                                            data-testid="contact-name"
                                            value={v.name}
                                            onChange={(e) => set("name", e.target.value)}
                                            className="fmc-input"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-white/70 text-xs uppercase tracking-wider">
                                            Mobile *
                                        </Label>
                                        <Input
                                            data-testid="contact-mobile"
                                            value={v.mobile}
                                            onChange={(e) => set("mobile", e.target.value)}
                                            className="fmc-input"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-white/70 text-xs uppercase tracking-wider">
                                            Email
                                        </Label>
                                        <Input
                                            data-testid="contact-email"
                                            type="email"
                                            value={v.email}
                                            onChange={(e) => set("email", e.target.value)}
                                            className="fmc-input"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label className="text-white/70 text-xs uppercase tracking-wider">
                                            Subject
                                        </Label>
                                        <Select
                                            value={v.subject}
                                            onValueChange={(val) => set("subject", val)}
                                        >
                                            <SelectTrigger
                                                data-testid="contact-subject"
                                                className="fmc-input"
                                            >
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="bg-brand-charcoal border-white/10 text-white">
                                                <SelectItem value="General Enquiry">
                                                    General Enquiry
                                                </SelectItem>
                                                <SelectItem value="Service Booking">
                                                    Service Booking
                                                </SelectItem>
                                                <SelectItem value="Emergency / SOS">
                                                    Emergency / SOS
                                                </SelectItem>
                                                <SelectItem value="Corporate & Fleet">
                                                    Corporate & Fleet
                                                </SelectItem>
                                                <SelectItem value="Feedback">
                                                    Feedback
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <Label className="text-white/70 text-xs uppercase tracking-wider">
                                        Message *
                                    </Label>
                                    <Textarea
                                        data-testid="contact-message"
                                        rows={5}
                                        value={v.message}
                                        onChange={(e) => set("message", e.target.value)}
                                        className="fmc-input"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    data-testid="contact-submit"
                                    disabled={submitting}
                                    className="btn-sweep inline-flex items-center gap-2 bg-brand-yellow text-white font-bold rounded-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base hover:bg-red-600 transition disabled:opacity-60"
                                >
                                    {submitting ? (
                                        <>
                                            <Loader2 className="animate-spin" size={16} />
                                            Sending…
                                        </>
                                    ) : (
                                        <>Send Message</>
                                    )}
                                </button>
                            </form>
                        )}
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="space-y-4">
                            <button
                                onClick={() => openWhatsApp(buildSosMessage())}
                                data-testid="contact-phone-tile"
                                className="w-full glass rounded-3xl p-6 flex items-start gap-4 hover:border-brand-yellow/40 transition text-left"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow flex items-center justify-center shrink-0">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <div className="text-white/50 text-xs uppercase tracking-widest">
                                        Phone (opens WhatsApp)
                                    </div>
                                    <div className="text-white font-display text-2xl font-bold mt-1">
                                        {BRAND.phone}
                                    </div>
                                </div>
                            </button>
                            <a
                                href={`mailto:${BRAND.email}`}
                                data-testid="contact-email-tile"
                                className="w-full glass rounded-3xl p-6 flex items-start gap-4 hover:border-brand-yellow/40 transition"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow flex items-center justify-center shrink-0">
                                    <Mail size={22} />
                                </div>
                                <div>
                                    <div className="text-white/50 text-xs uppercase tracking-widest">
                                        Email
                                    </div>
                                    <div className="text-white font-display text-2xl font-bold mt-1">
                                        {BRAND.email}
                                    </div>
                                </div>
                            </a>
                            <div className="glass rounded-3xl p-6 flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow flex items-center justify-center shrink-0">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <div className="text-white/50 text-xs uppercase tracking-widest">
                                        Address
                                    </div>
                                    <div className="text-white mt-1">
                                        Hyderabad, Telangana, India
                                    </div>
                                    <div className="text-white/50 text-sm mt-2">
                                        Workshop: 8AM – 9PM
                                        <br />
                                        Emergency SOS: 24 × 7
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Map */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="rounded-3xl overflow-hidden border border-white/10 aspect-[16/8] bg-black">
                        <iframe
                            title="FixMyCar Location"
                            src="https://www.google.com/maps?q=Hyderabad,%20Telangana&output=embed"
                            className="w-full h-full grayscale contrast-125"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
