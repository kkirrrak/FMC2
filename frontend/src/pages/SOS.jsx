import { Phone, Siren, MapPin, Timer, Wrench, ShieldCheck } from "lucide-react";
import Particles from "@/components/site/Particles";
import Reveal from "@/components/site/Reveal";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";
import { BRAND, openWhatsApp, buildSosMessage } from "@/lib/brand";
import useSeo from "@/lib/useSeo";

export default function SOS() {
    useSeo({
        title: "24×7 Emergency Roadside Assistance in Hyderabad — FixMyCar SOS",
        description: "Broken down in Hyderabad? FixMyCar's SOS unit reaches you in an average of 30 minutes — 24×7 towing, battery jump start, flat tyre and accident recovery.",
        keywords: "roadside assistance hyderabad, car breakdown help, emergency car repair hyderabad, towing hyderabad, battery jump start near me",
        path: "/sos",
    });
    return (
        <div className="relative min-h-screen">
            {/* HERO / SOS Button */}
            <section className="relative pt-32 md:pt-40 pb-20 px-6 min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.pexels.com/photos/8931963/pexels-photo-8931963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Roadside emergency"
                        className="w-full h-full object-cover opacity-40 kenburns"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
                </div>
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-red-600/15 blur-[120px]" />
                </div>
                <Particles count={30} />

                <div className="max-w-4xl mx-auto text-center relative">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/20 border border-red-600/40 text-red-400 text-xs uppercase tracking-widest mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            Emergency Assistance • 24 × 7
                        </div>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-extrabold leading-[0.9] tracking-tighter">
                            Broken down?
                            <br />
                            <span className="text-red-500">We’re coming.</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <p className="mt-6 text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
                            Tap SOS to reach our dispatch team instantly. 30-minute
                            average response across Hyderabad.
                        </p>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <div className="mt-12 flex flex-col items-center gap-6">
                            <a
                                href={`tel:${BRAND.phoneRaw}`}
                                data-testid="sos-big-call"
                                className="relative group"
                                aria-label="Call SOS"
                            >
                                <span className="sos-ring" />
                                <span className="sos-ring delay-1" />
                                <span className="sos-ring delay-2" />
                                <span className="relative flex flex-col items-center justify-center w-48 h-48 md:w-64 md:h-64 rounded-full bg-red-600 text-white font-display font-black text-4xl md:text-6xl shadow-[0_0_80px_rgba(220,38,38,0.6)] hover:scale-105 transition-transform">
                                    <Siren
                                        size={40}
                                        className="mb-2 md:mb-3"
                                    />
                                    SOS
                                </span>
                            </a>
                            <div className="flex flex-wrap justify-center gap-3">
                                <a
                                    href={`tel:${BRAND.phoneRaw}`}
                                    data-testid="sos-call-btn"
                                    aria-label="Call SOS"
                                    className="inline-flex items-center gap-2 bg-red-600 text-white font-semibold rounded-full px-6 py-3 hover:bg-red-500 transition"
                                >
                                    <Phone size={16} /> Call Now
                                </a>
                                <button
                                    onClick={() => openWhatsApp(buildSosMessage())}
                                    data-testid="sos-whatsapp-btn"
                                    aria-label="WhatsApp Alert"
                                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold rounded-full px-4 md:px-6 py-3 hover:bg-[#20b957] transition text-sm md:text-base"
                                >
                                    <WhatsAppIcon size={18} />
                                    <span className="hidden md:inline">WhatsApp Alert</span>
                                    <span className="md:hidden">WhatsApp</span>
                                </button>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Instant help checklist */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: Timer,
                            t: "Under 30 min",
                            d: "Average response across Hyderabad city limits.",
                        },
                        {
                            icon: Wrench,
                            t: "Fix or Tow",
                            d: "Repair on the spot when possible, or safe towing to workshop.",
                        },
                        {
                            icon: ShieldCheck,
                            t: "Certified & Insured",
                            d: "Background-verified technicians. Insurance-friendly documentation.",
                        },
                    ].map((c, i) => (
                        <Reveal key={i} delay={i * 0.05}>
                            <div className="glass rounded-3xl p-6">
                                <div className="w-12 h-12 rounded-2xl bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow flex items-center justify-center">
                                    <c.icon size={22} />
                                </div>
                                <h3 className="font-display text-xl font-bold mt-5">
                                    {c.t}
                                </h3>
                                <p className="text-white/60 text-sm mt-2">
                                    {c.d}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* What to tell us */}
            <section className="py-24 px-6 bg-brand-charcoal/40 border-y border-white/5">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <div className="text-brand-yellow text-xs uppercase tracking-[0.3em] mb-3">
                            Prefilled WhatsApp
                        </div>
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                            Send this to us on WhatsApp
                        </h2>
                        <div className="glass rounded-3xl p-6 md:p-8 whitespace-pre-line text-white/80 leading-relaxed">
{`Hello FixMyCar 🚨

My vehicle has broken down.
I need roadside assistance immediately.

Location:
Vehicle:
Problem:

Please send a mechanic urgently.`}
                        </div>
                        <button
                            onClick={() => openWhatsApp(buildSosMessage())}
                            data-testid="sos-send-message"
                            className="mt-6 inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold rounded-full px-6 py-3 hover:bg-[#20b957] transition"
                        >
                            <WhatsAppIcon size={18} /> Open in WhatsApp
                        </button>
                    </Reveal>
                </div>
            </section>

            {/* Coverage areas */}
            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <Reveal>
                        <div className="text-brand-yellow text-xs uppercase tracking-[0.3em] mb-3">
                            SOS Coverage
                        </div>
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
                            Reachable everywhere in Hyderabad
                        </h2>
                        <div className="flex flex-wrap justify-center gap-2">
                            {[
                                "Hyderabad",
                                "Secunderabad",
                                "Gachibowli",
                                "Madhapur",
                                "Kondapur",
                                "Kukatpally",
                                "Banjara Hills",
                                "Jubilee Hills",
                                "Hitech City",
                                "Miyapur",
                                "Ameerpet",
                                "LB Nagar",
                                "Uppal",
                                "Kompally",
                                "Financial District",
                            ].map((a) => (
                                <span
                                    key={a}
                                    className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white/80 text-sm inline-flex items-center gap-1.5"
                                >
                                    <MapPin size={12} className="text-brand-yellow" />
                                    {a}
                                </span>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
