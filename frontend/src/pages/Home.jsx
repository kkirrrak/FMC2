import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Siren, Zap, ShieldCheck, Timer, Award, Sparkles, MapPin, Star, CheckCircle2, Calendar, Wrench as Wrench2 } from "lucide-react";
import Particles from "@/components/site/Particles";
import Eyebrow from "@/components/site/Eyebrow";
import Reveal from "@/components/site/Reveal";
import StatCounter from "@/components/site/StatCounter";
import ServiceCategoryCard from "@/components/site/ServiceCategoryCard";
import BookingForm from "@/components/site/BookingForm";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";
import useSeo from "@/lib/useSeo";
import { BRAND, openWhatsApp, buildSosMessage } from "@/lib/brand";
import { SERVICE_CATEGORIES } from "@/data/services";
import { TESTIMONIALS, FAQS } from "@/data/content";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const HERO_STATS = [
    { v: "1000+", l: "Cars Repaired", icon: Sparkles },
    { v: "24×7", l: "Emergency Support", icon: Zap },
    { v: "30", l: "Min Avg Response", suffix: " min", icon: Timer },
    { v: "Certified", l: "Mechanics", icon: Award },
];

// Hero background slider — cinematic crossfade like a premium repair-shop showcase
const HERO_SLIDES = [
    {
        img: "https://images.unsplash.com/photo-1722385640799-4ee84eb90038?crop=entropy&cs=srgb&fm=jpg&q=85&w=1900",
        alt: "Premium luxury car in a darkened studio — FixMyCarHub doorstep car care",
    },
    {
        img: "https://images.unsplash.com/photo-1696494561430-de087dd0bd69?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxjYXIlMjBicmFrZXN8ZW58MHx8fHwxNzgzNTQ3OTQwfDA&ixlib=rb-4.1.0&q=85&w=1900",
        alt: "Certified technician inspecting brakes — FixMyCarHub precision repair",
    },
    {
        img: "https://images.unsplash.com/photo-1725289339928-06ee31684df5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmV8ZW58MHx8fHwxNzgzNTQ3OTQwfDA&ixlib=rb-4.1.0&q=85&w=1900",
        alt: "Engine diagnostics in progress — FixMyCarHub certified mechanics",
    },
];

// Working process — FixMyCarHub's real doorstep-first flow
const WORK_STEPS = [
    { n: "01", icon: Calendar, t: "Book Now", d: "Fill the 30-second form or tap SOS — details land straight on our WhatsApp." },
    { n: "02", icon: ShieldCheck, t: "Vehicle Inspection", d: "A certified mechanic inspects your car at home, office or roadside for a flat ₹599." },
    { n: "03", icon: Wrench2, t: "Expert Service", d: "You get a written quote first. Repair only begins after your explicit approval." },
    { n: "04", icon: MapPin, t: "Doorstep Delivery", d: "Genuine OEM parts, warranty on eligible repairs — handed back at your doorstep." },
];

export default function Home() {
    const [slide, setSlide] = useState(0);
    useEffect(() => {
        const t = setInterval(
            () => setSlide((s) => (s + 1) % HERO_SLIDES.length),
            5500
        );
        return () => clearInterval(t);
    }, []);
    useSeo({
        title:
            "FixMyCarHub — Premium Car Repair & 24×7 Roadside Assistance in Hyderabad",
        description:
            "Certified doorstep car service in Hyderabad, Secunderabad, Gachibowli, Madhapur, Kondapur & more. Flat ₹599 inspection, 24×7 roadside SOS, transparent quotes and warranty on eligible repairs.",
        keywords:
            "car repair hyderabad, doorstep car service hyderabad, car mechanic near me, 24x7 roadside assistance hyderabad, car ac service hyderabad, battery jump start, tow truck hyderabad, gachibowli car service, madhapur car repair, banjara hills car workshop, luxury car repair hyderabad",
        image: "/logo.png",
        path: "/",
    });
    return (
        <div className="relative">
            {/* HERO */}
            <section className="relative min-h-[92vh] md:min-h-screen w-full overflow-hidden pt-24 md:pt-32">
                <div className="absolute inset-0">
                    {HERO_SLIDES.map((s, i) => (
                        <img
                            key={s.img}
                            src={s.img}
                            alt={s.alt}
                            fetchpriority={i === 0 ? "high" : "low"}
                            loading={i === 0 ? "eager" : "lazy"}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ease-in-out ${
                                i === slide ? "opacity-100 kenburns" : "opacity-0"
                            }`}
                        />
                    ))}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/55 to-transparent md:from-black/95 md:via-black/40 md:to-transparent" />
                </div>
                <div className="headlight-glow -top-40 -left-40" />
                <div className="headlight-glow top-1/3 -right-40" />
                <Particles count={30} />

                {/* Slider dot navigation — left edge, desktop only */}
                <div className="hidden lg:flex flex-col items-center gap-3 absolute left-6 top-1/2 -translate-y-1/2 z-10">
                    <span className="w-px h-10 bg-white/25" />
                    {HERO_SLIDES.map((_, i) => (
                        <button
                            key={i}
                            aria-label={`Show slide ${i + 1}`}
                            onClick={() => setSlide(i)}
                            className={`rounded-full transition-all duration-300 ${
                                i === slide
                                    ? "w-2.5 h-2.5 bg-brand-yellow shadow-[0_0_12px_rgba(227,34,38,0.7)]"
                                    : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                            }`}
                        />
                    ))}
                    <span className="w-px h-10 bg-white/25" />
                </div>

                <div className="relative max-w-7xl mx-auto px-6 pt-6 md:pt-16 pb-24 md:pb-32">
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full glass-light text-[10px] md:text-xs text-white/80 uppercase tracking-widest mb-4 md:mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow animate-pulse" />
                            24 × 7 Roadside Assistance • Hyderabad
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[92px] font-extrabold leading-[0.95] tracking-tighter max-w-3xl md:max-w-4xl">
                            <span className="text-yellow-gradient">
                                Premium
                            </span>{" "}
                            Car Care.{" "}
                            <span className="italic font-medium text-white/90 block md:inline">
                                At Your Doorstep.
                            </span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="mt-4 md:mt-6 text-sm md:text-lg text-white/70 max-w-lg leading-relaxed">
                            Fast <span className="text-brand-yellow">•</span>{" "}
                            Reliable <span className="text-brand-yellow">•</span>{" "}
                            Certified
                        </p>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-2 md:gap-3">
                            <Link
                                to="/book"
                                data-testid="hero-book-btn"
                                className="btn-sweep w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-brand-yellow text-white font-bold rounded-full px-5 md:px-8 py-3.5 md:py-4 text-sm md:text-base hover:bg-red-600 transition"
                            >
                                <span>Book <span className="hidden sm:inline">₹599 </span>Inspection</span>
                                <ArrowRight size={16} />
                            </Link>
                            <Link
                                to="/sos"
                                data-testid="hero-sos-btn"
                                aria-label="Emergency SOS"
                                className="hidden md:inline-flex items-center gap-2 bg-red-600 text-white font-bold rounded-full px-4 md:px-6 py-3 md:py-4 hover:bg-red-500 transition shadow-[0_0_30px_rgba(220,38,38,0.35)] text-sm md:text-base"
                            >
                                <Siren size={16} />
                                <span className="hidden md:inline">Emergency SOS</span>
                            </Link>
                            <button
                                onClick={() => openWhatsApp(buildSosMessage())}
                                data-testid="hero-whatsapp-btn"
                                aria-label="WhatsApp"
                                className="hidden md:inline-flex items-center justify-center md:w-auto md:h-auto md:gap-2 bg-[#25D366] text-white font-semibold rounded-full md:px-6 md:py-4 hover:bg-[#20b957] transition"
                            >
                                <WhatsAppIcon size={20} />
                                <span className="hidden md:inline">WhatsApp</span>
                            </button>
                            <a
                                href={`tel:${BRAND.phoneRaw}`}
                                data-testid="hero-call-btn"
                                aria-label="Call Now"
                                className="hidden md:inline-flex items-center justify-center md:w-auto md:h-auto md:gap-2 border border-white/15 text-white rounded-full md:px-6 md:py-4 hover:bg-white/5 transition"
                            >
                                <Phone size={18} />
                                <span className="hidden md:inline">Call Now</span>
                            </a>
                        </div>
                        <p className="md:hidden mt-3 text-xs text-white/50">
                            Need urgent help? SOS, WhatsApp & Call are in the menu above ↑
                        </p>
                    </Reveal>

                    {/* Stats strip — desktop only inside hero, moved below hero on mobile so the car photo shows in full */}
                    <Reveal delay={0.4}>
                        <div className="hidden md:grid mt-10 md:mt-16 grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl">
                            {HERO_STATS.map((s, i) => (
                                <div
                                    key={i}
                                    className="glass rounded-2xl p-3 md:p-5"
                                    data-testid={`hero-stat-${i}`}
                                >
                                    <s.icon
                                        size={18}
                                        className="text-brand-yellow mb-2 md:mb-3"
                                    />
                                    <div className="font-display text-xl md:text-4xl font-extrabold">
                                        {typeof s.v === "string" && /\d/.test(s.v) ? (
                                            <StatCounter value={s.v} />
                                        ) : (
                                            s.v
                                        )}
                                        {s.suffix || ""}
                                    </div>
                                    <div className="text-white/60 text-[10px] md:text-sm mt-0.5 md:mt-1">
                                        {s.l}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* HERO STATS — mobile only, placed below the hero so the car photo is in full view */}
            <section className="md:hidden px-6 pt-8 pb-2">
                <div className="grid grid-cols-2 gap-3">
                    {HERO_STATS.map((s, i) => (
                        <div
                            key={i}
                            className="glass rounded-2xl p-3"
                            data-testid={`hero-stat-mobile-${i}`}
                        >
                            <s.icon size={18} className="text-brand-yellow mb-2" />
                            <div className="font-display text-xl font-extrabold">
                                {typeof s.v === "string" && /\d/.test(s.v) ? (
                                    <StatCounter value={s.v} />
                                ) : (
                                    s.v
                                )}
                                {s.suffix || ""}
                            </div>
                            <div className="text-white/60 text-[10px] mt-0.5">
                                {s.l}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* MARQUEE STRIP */}
            <section className="border-y border-gray-200 bg-gray-50 py-4 overflow-hidden">
                <div className="marquee-track gap-16 whitespace-nowrap text-brand-black/50 text-sm uppercase tracking-widest">
                    {Array.from({ length: 2 }).map((_, r) => (
                        <div key={r} className="flex items-center gap-16 pr-16">
                            {[
                                "Certified Mechanics",
                                "Doorstep Service",
                                "Original Parts",
                                "Transparent Billing",
                                "24×7 SOS",
                                "Warranty on Eligible Repairs",
                                "Modern Equipment",
                                "5-Star Customer Care",
                            ].map((t) => (
                                <span key={`${r}-${t}`} className="flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full" />
                                    {t}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* SERVICES */}
            <section className="relative py-24 md:py-32 px-6 bg-white text-brand-black">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                            <div>
                                <Eyebrow>01 — Services</Eyebrow>
                                <h2 className="font-display text-4xl md:text-6xl font-bold leading-[0.95] max-w-3xl">
                                    Every service your car will{" "}
                                    <span className="italic text-brand-black/60">ever</span>{" "}
                                    need.
                                </h2>
                            </div>
                            <Link
                                to="/services"
                                data-testid="home-view-all-services"
                                className="inline-flex self-start md:self-end items-center gap-2 text-brand-black/70 hover:text-brand-yellow transition"
                            >
                                View all services <ArrowRight size={16} />
                            </Link>
                        </div>
                    </Reveal>
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
                        {SERVICE_CATEGORIES.map((c, i) => (
                            <Reveal key={c.id} delay={i * 0.05}>
                                <ServiceCategoryCard category={c} index={i} />
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* WORKING PROCESS */}
            <section className="relative py-24 md:py-32 px-6 bg-gray-50 border-y border-gray-200 overflow-hidden">
                <div className="max-w-7xl mx-auto relative text-center">
                    <Reveal>
                        <Eyebrow className="!inline-flex mx-auto justify-center">
                            How It Works
                        </Eyebrow>
                        <h2 className="font-display text-4xl md:text-6xl font-bold leading-[0.95] text-brand-black">
                            From SOS to sorted{" "}
                            <span className="text-yellow-gradient">in four steps.</span>
                        </h2>
                    </Reveal>
                    <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-left">
                        {WORK_STEPS.map((s, i) => (
                            <Reveal key={s.n} delay={i * 0.08}>
                                <div className="group relative rounded-2xl md:rounded-3xl p-6 md:p-7 bg-gradient-to-b from-brand-graphite to-black border border-white/5 hover:border-brand-yellow/40 transition-all duration-500 h-full">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-white transition-colors duration-300">
                                            <s.icon size={20} />
                                        </div>
                                        <span className="font-display text-2xl md:text-3xl font-extrabold text-brand-yellow bg-brand-yellow/10 rounded-xl px-2.5 py-1">
                                            {s.n}
                                        </span>
                                    </div>
                                    <h3 className="font-display text-lg md:text-xl font-bold">
                                        {s.t}
                                    </h3>
                                    <p className="text-white/60 text-sm mt-2 leading-relaxed">
                                        {s.d}
                                    </p>
                                    {i < WORK_STEPS.length - 1 && (
                                        <span className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-white/20" />
                                    )}
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING TRANSPARENCY */}
            <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-white text-brand-black">
                <div className="max-w-5xl mx-auto text-center relative">
                    <Reveal>
                        <Eyebrow className="!inline-flex mx-auto justify-center">
                            02 — Transparent Pricing
                        </Eyebrow>
                        <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
                            One honest inspection charge.
                            <br />
                            <span className="text-yellow-gradient">₹599 fixed.</span>{" "}
                            Everywhere.
                        </h2>
                        <p className="text-brand-black/60 mt-6 max-w-2xl mx-auto leading-relaxed">
                            Whether the car is at home, on the roadside, in our garage,
                            your office or apartment — inspection is a flat ₹599.
                            Repairs are quoted transparently after inspection and
                            never begin without your explicit approval.
                        </p>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3 max-w-3xl mx-auto">
                            {["Home", "Roadside", "Garage", "Office", "Apartment"].map(
                                (l) => (
                                    <div
                                        key={l}
                                        className="card-light rounded-2xl py-4 px-2 text-sm text-brand-black/80"
                                    >
                                        <MapPin
                                            size={16}
                                            className="mx-auto text-brand-yellow mb-2"
                                        />
                                        {l}
                                    </div>
                                )
                            )}
                        </div>
                    </Reveal>
                    <Reveal delay={0.25}>
                        <div className="mt-8 text-xs text-brand-black/45 max-w-xl mx-auto">
                            Additional repair charges depend on parts, labour and
                            complexity. Customer approval is mandatory before any
                            repair begins.
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="relative py-24 md:py-32 px-6 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <Eyebrow>03 — Why FixMyCarHub</Eyebrow>
                        <h2 className="font-display text-4xl md:text-6xl font-bold max-w-3xl leading-[0.95] text-brand-black">
                            Built for people who don’t{" "}
                            <span className="italic text-brand-black/60">tolerate</span>{" "}
                            surprises.
                        </h2>
                    </Reveal>
                    <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                        {[
                            { icon: ShieldCheck, t: "Certified Mechanics", d: "Every technician is factory trained and background verified." },
                            { icon: Timer, t: "Fast Response", d: "30-minute average arrival across Hyderabad." },
                            { icon: Sparkles, t: "Modern Equipment", d: "Latest OEM-grade diagnostic tools and lifts." },
                            { icon: CheckCircle2, t: "Transparent Billing", d: "Written quote before work. No hidden costs." },
                            { icon: Award, t: "Warranty on Repairs", d: "Eligible repairs carry a service warranty." },
                            { icon: Star, t: "5-star Customer Care", d: "Concierge experience via WhatsApp." },
                            { icon: MapPin, t: "Doorstep Service", d: "We come to your home, office or breakdown site." },
                            { icon: Zap, t: "Original Parts", d: "OEM parts by default — options if you prefer." },
                        ].map((b, i) => (
                            <Reveal key={i} delay={i * 0.05}>
                                <div className="card-light rounded-2xl md:rounded-3xl p-3.5 md:p-6 h-full hover:border-brand-yellow/40 transition group">
                                    <div className="w-9 h-9 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-white transition">
                                        <b.icon size={18} className="md:hidden" />
                                        <b.icon size={22} className="hidden md:block" />
                                    </div>
                                    <h3 className="font-display text-sm md:text-xl font-bold mt-3 md:mt-5 text-brand-black">
                                        {b.t}
                                    </h3>
                                    <p className="text-brand-black/55 text-xs md:text-sm mt-1.5 md:mt-2 leading-relaxed">
                                        {b.d}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="relative py-24 md:py-32 px-6 bg-white text-brand-black">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                            <div>
                                <Eyebrow>04 — Testimonials</Eyebrow>
                                <h2 className="font-display text-4xl md:text-6xl font-bold leading-[0.95] max-w-3xl">
                                    Trusted by{" "}
                                    <span className="text-yellow-gradient">1000+</span>{" "}
                                    car owners across Hyderabad.
                                </h2>
                            </div>
                        </div>
                    </Reveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {TESTIMONIALS.map((t, i) => (
                            <Reveal key={i} delay={i * 0.05}>
                                <div
                                    data-testid={`testimonial-${i}`}
                                    className="card-light rounded-3xl p-6 md:p-7 h-full flex flex-col"
                                >
                                    <div className="flex items-center gap-1 mb-4">
                                        {Array.from({ length: t.rating }).map((_, k) => (
                                            <Star
                                                key={k}
                                                size={14}
                                                className="fill-brand-yellow text-brand-yellow"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-brand-black/75 text-base leading-relaxed flex-1">
                                        “{t.text}”
                                    </p>
                                    <div className="mt-6 flex items-center gap-3">
                                        <img
                                            src={t.photo}
                                            alt={t.name}
                                            className="w-10 h-10 rounded-full object-cover border border-black/10"
                                        />
                                        <div>
                                            <div className="text-brand-black font-semibold text-sm">
                                                {t.name}
                                            </div>
                                            <div className="text-brand-black/45 text-xs">
                                                {t.car} • {t.city}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICE AREAS */}
            <section className="relative py-24 md:py-32 px-6 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <Reveal>
                        <div>
                            <Eyebrow>05 — Service Areas</Eyebrow>
                            <h2 className="font-display text-4xl md:text-5xl font-bold leading-[0.95] text-brand-black">
                                Doorstep across{" "}
                                <span className="text-yellow-gradient">
                                    Hyderabad
                                </span>{" "}
                                & nearby.
                            </h2>
                            <div className="mt-8 flex flex-wrap gap-2">
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
                                ].map((a) => (
                                    <span
                                        key={a}
                                        className="px-4 py-2 rounded-full border border-black/10 bg-white text-brand-black/75 text-sm"
                                    >
                                        {a}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <div className="rounded-3xl overflow-hidden border border-black/10 aspect-[4/3] bg-black">
                            <iframe
                                title="FixMyCarHub Service Areas"
                                src="https://www.google.com/maps?q=Hyderabad,%20Telangana&output=embed"
                                className="w-full h-full grayscale contrast-125"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* BOOKING CTA — red accent section, matches reference */}
            <section id="book" className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-brand-yellow via-red-700 to-brand-black overflow-hidden">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start relative">
                    <Reveal>
                        <div className="inline-flex items-center gap-2.5 text-white text-xs md:text-sm font-semibold uppercase tracking-[0.25em] mb-3">
                            <span className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                <span className="w-6 md:w-8 h-px bg-white/60" />
                            </span>
                            06 — Book Now
                        </div>
                        <h2 className="font-display text-4xl md:text-6xl font-bold leading-[0.95] text-white">
                            30-second booking.{" "}
                            <span className="italic text-white/80">Instant</span>{" "}
                            WhatsApp confirmation.
                        </h2>
                        <p className="text-white/80 mt-6 leading-relaxed">
                            Fill the form and we’ll continue on WhatsApp — share
                            photos, confirm the slot, get the ₹599 inspection scheduled.
                        </p>
                        <div className="mt-8 space-y-3">
                            {[
                                "Certified mechanics dispatched to your location",
                                "Written estimate before any repair begins",
                                "Genuine OEM parts • Warranty on eligible repairs",
                                "Concierge follow-up on WhatsApp",
                            ].map((l) => (
                                <div key={l} className="flex items-start gap-3">
                                    <CheckCircle2
                                        size={20}
                                        className="text-white shrink-0 mt-0.5"
                                    />
                                    <span className="text-white/90">{l}</span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <BookingForm />
                    </Reveal>
                </div>
            </section>

            {/* FAQ */}
            <section className="relative py-24 md:py-32 px-6 bg-white text-brand-black">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <Eyebrow>07 — Frequently Asked</Eyebrow>
                        <h2 className="font-display text-4xl md:text-6xl font-bold leading-[0.95] mb-10">
                            Straight answers.{" "}
                            <span className="italic text-brand-black/60">No fine print.</span>
                        </h2>
                    </Reveal>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                "@context": "https://schema.org",
                                "@type": "FAQPage",
                                mainEntity: FAQS.slice(0, 10).map((f) => ({
                                    "@type": "Question",
                                    name: f.q,
                                    acceptedAnswer: {
                                        "@type": "Answer",
                                        text: f.a,
                                    },
                                })),
                            }),
                        }}
                    />
                    <Accordion
                        type="single"
                        collapsible
                        className="space-y-3"
                        data-testid="faq-accordion"
                    >
                        {FAQS.slice(0, 10).map((f, i) => (
                            <AccordionItem
                                key={i}
                                value={`item-${i}`}
                                className="card-light rounded-2xl px-5"
                            >
                                <AccordionTrigger
                                    className="text-left text-brand-black font-semibold hover:no-underline py-5"
                                    data-testid={`faq-trigger-${i}`}
                                >
                                    {f.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-brand-black/65 leading-relaxed pb-5">
                                    {f.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <div className="text-center mt-8">
                        <Link
                            to="/contact"
                            className="text-brand-yellow hover:underline"
                        >
                            Have a specific question? Talk to us →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
