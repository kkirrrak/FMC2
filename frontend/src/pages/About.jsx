import Reveal from "@/components/site/Reveal";
import Particles from "@/components/site/Particles";
import { TIMELINE } from "@/data/content";
import { Target, Compass, Sparkles, Users, ShieldCheck, MapPin, Award, Star } from "lucide-react";
import useSeo from "@/lib/useSeo";

export default function About() {
    useSeo({
        title: "About FixMyCar — Trusted Doorstep Car Repair in Hyderabad",
        description: "FixMyCar is Hyderabad's certified doorstep car care team — transparent pricing, factory-trained mechanics and 24×7 roadside assistance trusted by 1000+ car owners.",
        keywords: "about fixmycar, car repair company hyderabad, doorstep mechanic hyderabad, trusted car service hyderabad",
        path: "/about",
    });
    return (
        <div>
            {/* Hero */}
            <section className="relative pt-32 md:pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1900&q=80"
                        alt="Workshop"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
                </div>
                <Particles count={25} />
                <div className="max-w-7xl mx-auto relative">
                    <Reveal>
                        <div className="text-brand-yellow text-xs uppercase tracking-[0.3em] mb-3">
                            About FixMyCar
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tighter max-w-5xl">
                            A luxury standard for{" "}
                            <span className="italic text-white/80">everyday</span>{" "}
                            <span className="text-yellow-gradient">
                                car care.
                            </span>
                        </h1>
                        <p className="mt-6 text-white/70 max-w-2xl text-lg leading-relaxed">
                            FixMyCar was built by automotive engineers to give
                            Hyderabad drivers what they never had — an honest,
                            transparent, doorstep-first car service you can actually
                            trust.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Mission / Vision */}
            <section className="py-20 md:py-24 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
                    <Reveal>
                        <div className="glass rounded-3xl p-8 md:p-10 h-full">
                            <Target
                                size={28}
                                className="text-brand-yellow"
                            />
                            <h3 className="font-display text-3xl font-bold mt-5">
                                Our Mission
                            </h3>
                            <p className="text-white/70 mt-4 leading-relaxed">
                                To make transparent, doorstep-quality car service the
                                default in India — starting with Hyderabad. No
                                surprise bills. No jargon. No compromises on quality.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <div className="glass rounded-3xl p-8 md:p-10 h-full">
                            <Compass
                                size={28}
                                className="text-brand-yellow"
                            />
                            <h3 className="font-display text-3xl font-bold mt-5">
                                Our Vision
                            </h3>
                            <p className="text-white/70 mt-4 leading-relaxed">
                                To be India’s most-loved automotive service brand — a
                                name people recommend because we consistently
                                over-deliver on speed, quality and honesty.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Story / Timeline */}
            <section className="py-20 md:py-24 px-6 bg-brand-charcoal/40 border-y border-white/5">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <div className="text-brand-yellow text-xs uppercase tracking-[0.3em] mb-3">
                            Our Story & Timeline
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold leading-[0.95] mb-10">
                            From one workshop to Hyderabad’s most-trusted service.
                        </h2>
                    </Reveal>
                    <div className="relative border-l border-white/10 ml-3 pl-8 space-y-10">
                        {TIMELINE.map((t, i) => (
                            <Reveal key={i} delay={i * 0.05}>
                                <div className="relative">
                                    <span className="absolute -left-[42px] top-1 w-4 h-4 rounded-full bg-brand-yellow shadow-[0_0_20px_rgba(227,34,38,0.6)]" />
                                    <div className="text-brand-yellow text-sm font-semibold tracking-widest uppercase">
                                        {t.year}
                                    </div>
                                    <h3 className="font-display text-2xl font-bold mt-1">
                                        {t.title}
                                    </h3>
                                    <p className="text-white/60 mt-2 leading-relaxed">
                                        {t.text}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose */}
            <section className="py-20 md:py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <div className="text-brand-yellow text-xs uppercase tracking-[0.3em] mb-3">
                            Why Choose Us
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold max-w-3xl leading-[0.95]">
                            Five reasons customers keep coming back.
                        </h2>
                    </Reveal>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {[
                            { icon: Award, t: "Certified Mechanics", d: "Factory-trained & background verified." },
                            { icon: MapPin, t: "Doorstep Repairs", d: "Home, office, roadside — we come to you." },
                            { icon: Sparkles, t: "Modern Equipment", d: "OEM-grade diagnostics & lifts." },
                            { icon: ShieldCheck, t: "Transparent Process", d: "Written quote before any work." },
                            { icon: Users, t: "Customer First", d: "Concierge follow-up via WhatsApp." },
                        ].map((b, i) => (
                            <Reveal key={i} delay={i * 0.05}>
                                <div className="glass rounded-3xl p-6 h-full">
                                    <div className="w-11 h-11 rounded-2xl bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow flex items-center justify-center">
                                        <b.icon size={20} />
                                    </div>
                                    <h3 className="font-display text-lg font-bold mt-4">
                                        {b.t}
                                    </h3>
                                    <p className="text-white/60 text-sm mt-2">
                                        {b.d}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Numbers */}
            <section className="py-20 px-6 bg-brand-charcoal/40 border-y border-white/5">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { v: "1000+", l: "Cars Repaired" },
                        { v: "5000+", l: "Roadside Rescues" },
                        { v: "4.9★", l: "Average Rating" },
                        { v: "24×7", l: "Support Availability" },
                    ].map((s, i) => (
                        <Reveal key={i} delay={i * 0.05}>
                            <div className="glass rounded-2xl p-6 text-center">
                                <div className="font-display text-4xl md:text-5xl font-extrabold text-brand-yellow">
                                    {s.v}
                                </div>
                                <div className="text-white/60 mt-2 text-sm">
                                    {s.l}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>
        </div>
    );
}
