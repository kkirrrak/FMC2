import { Link } from "react-router-dom";
import { SERVICE_CATEGORIES } from "@/data/services";
import * as Icons from "lucide-react";
import Reveal from "@/components/site/Reveal";
import Particles from "@/components/site/Particles";
import BookingForm from "@/components/site/BookingForm";
import { ArrowRight } from "lucide-react";
import useSeo from "@/lib/useSeo";

export default function Services() {
    useSeo({
        title: "All Car Repair Services in Hyderabad — FixMyCar",
        description: "Browse every car service FixMyCar offers in Hyderabad: emergency roadside assistance, mechanical repairs, AC service, denting-painting, detailing, ceramic coating and more — all at your doorstep.",
        keywords: "car repair services hyderabad, car ac service, car denting painting, ceramic coating hyderabad, car detailing hyderabad, mechanic near me",
        path: "/services",
    });
    return (
        <div>
            {/* Hero */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1900&q=80"
                        alt="Workshop"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
                </div>
                <Particles count={30} />
                <div className="max-w-7xl mx-auto relative">
                    <Reveal>
                        <div className="text-brand-yellow text-xs uppercase tracking-[0.3em] mb-3">
                            Full-Service Menu
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tighter max-w-5xl">
                            Every service.{" "}
                            <span className="italic text-white/80">One brand.</span>{" "}
                            <span className="text-yellow-gradient">
                                Zero surprises.
                            </span>
                        </h1>
                        <p className="mt-6 text-white/70 max-w-2xl text-lg">
                            Explore all 10 service categories with 80+ specialised
                            services — every one delivered by certified mechanics
                            with the same ₹599 inspection promise.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Category sections */}
            <div className="max-w-7xl mx-auto px-6 pb-24 space-y-24">
                {SERVICE_CATEGORIES.map((cat, ci) => {
                    const Icon = Icons[cat.icon] || Icons.Wrench;
                    return (
                        <section
                            key={cat.id}
                            id={cat.id}
                            className="scroll-mt-32"
                            data-testid={`services-section-${cat.id}`}
                        >
                            <Reveal>
                                <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-end mb-8">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 rounded-2xl bg-brand-yellow text-white flex items-center justify-center">
                                                <Icon size={22} />
                                            </div>
                                            <span className="text-white/40 text-xs uppercase tracking-widest">
                                                Category 0{ci + 1}
                                            </span>
                                        </div>
                                        <h2 className="font-display text-4xl md:text-5xl font-bold leading-[0.95]">
                                            {cat.title}
                                        </h2>
                                        <p className="text-white/60 mt-3">
                                            {cat.blurb}
                                        </p>
                                    </div>
                                    <div className="aspect-[16/9] rounded-3xl overflow-hidden border border-white/10">
                                        <img
                                            src={cat.image}
                                            alt={cat.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </Reveal>

                            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                                {cat.services.map((s, i) => (
                                    <Reveal key={s.slug} delay={i * 0.03}>
                                        <Link
                                            to={`/services/${s.slug}`}
                                            data-testid={`service-tile-${s.slug}`}
                                            className="group relative rounded-2xl border border-white/5 bg-brand-charcoal/80 p-5 hover:border-brand-yellow/40 hover:bg-brand-charcoal transition h-full flex flex-col justify-between min-h-[130px]"
                                        >
                                            <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest">
                                                {cat.title}
                                            </div>
                                            <div className="flex items-end justify-between gap-3 mt-3">
                                                <h3 className="font-display text-lg md:text-xl font-bold leading-tight text-white">
                                                    {s.name}
                                                </h3>
                                                <ArrowRight
                                                    size={18}
                                                    className="shrink-0 text-white/40 group-hover:text-brand-yellow group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                                                />
                                            </div>
                                            <span className="absolute inset-x-5 -bottom-px h-px bg-gradient-to-r from-transparent via-brand-yellow to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </Reveal>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>

            {/* Booking CTA */}
            <section className="py-24 md:py-32 px-6 bg-brand-charcoal/40 border-t border-white/5">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                            Ready to book?
                        </h2>
                        <p className="text-white/60 mt-4 max-w-md">
                            Send us your details and we’ll continue on WhatsApp
                            with your inspection slot.
                        </p>
                    </div>
                    <BookingForm />
                </div>
            </section>
        </div>
    );
}
