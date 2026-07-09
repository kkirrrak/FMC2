import { Link, useParams, Navigate } from "react-router-dom";
import * as Icons from "lucide-react";
import { findService, findCategoryForSlug, SERVICE_CATEGORIES } from "@/data/services";
import { FAQS } from "@/data/content";
import Reveal from "@/components/site/Reveal";
import BookingForm from "@/components/site/BookingForm";
import { ArrowRight, CheckCircle2, Phone, ChevronRight } from "lucide-react";
import { BRAND, openWhatsApp, buildSosMessage } from "@/lib/brand";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { GALLERY_ITEMS } from "@/data/gallery";
import useSeo from "@/lib/useSeo";

const benefits = [
    "Certified technicians dispatched to your location",
    "Genuine OEM parts by default (options if you prefer)",
    "Written estimate before any work starts",
    "Warranty on eligible repairs",
    "Concierge follow-up via WhatsApp",
    "Transparent invoicing with GST",
];

export default function ServiceDetail() {
    const { slug } = useParams();
    const service = findService(slug);
    const category = findCategoryForSlug(slug);

    useSeo({
        title: service
            ? `${service.name} in Hyderabad — Doorstep ${category.title} | FixMyCar`
            : undefined,
        description: service
            ? `Book ${service.name.toLowerCase()} at your doorstep in Hyderabad. Certified mechanics, transparent ₹599 inspection, genuine parts and warranty on eligible repairs. ${category.blurb}`
            : undefined,
        keywords: service
            ? `${service.name.toLowerCase()} hyderabad, ${category.title.toLowerCase()} hyderabad, doorstep ${service.name.toLowerCase()}, car ${service.name.toLowerCase()} near me`
            : undefined,
        image: category?.image,
        path: `/services/${slug}`,
    });

    if (!service || !category) return <Navigate to="/services" replace />;
    const Icon = Icons[category.icon] || Icons.Wrench;

    const related = category.services
        .filter((s) => s.slug !== slug)
        .slice(0, 6);

    const galleryPicks = GALLERY_ITEMS.slice(0, 6);

    return (
        <div>
            {/* Hero */}
            <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={category.image}
                        alt={service.name}
                        className="w-full h-full object-cover opacity-45 kenburns"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
                </div>
                <div className="max-w-7xl mx-auto relative">
                    <Reveal>
                        <nav
                            className="text-xs text-white/50 mb-6 flex items-center gap-1"
                            data-testid="service-breadcrumb"
                        >
                            <Link to="/" className="hover:text-white">
                                Home
                            </Link>
                            <ChevronRight size={12} />
                            <Link to="/services" className="hover:text-white">
                                Services
                            </Link>
                            <ChevronRight size={12} />
                            <Link
                                to={`/services#${category.id}`}
                                className="hover:text-white"
                            >
                                {category.title}
                            </Link>
                            <ChevronRight size={12} />
                            <span className="text-brand-yellow">{service.name}</span>
                        </nav>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-brand-yellow text-white flex items-center justify-center">
                                <Icon size={22} />
                            </div>
                            <span className="text-white/60 text-sm uppercase tracking-widest">
                                {category.title}
                            </span>
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tighter max-w-4xl">
                            {service.name}
                        </h1>
                        <p className="text-white/70 mt-6 max-w-2xl text-lg leading-relaxed">
                            Premium {service.name.toLowerCase()} delivered at your
                            doorstep or workshop by certified mechanics. Every job
                            starts with a ₹599 inspection and a written estimate — you
                            approve before we begin.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-2 md:gap-3">
                            <a
                                href="#book"
                                data-testid="service-book-btn"
                                className="btn-sweep inline-flex items-center gap-2 bg-brand-yellow text-white font-bold rounded-full px-5 md:px-6 py-3 md:py-4 hover:bg-red-600 transition text-sm md:text-base"
                            >
                                Book This Service <ArrowRight size={16} />
                            </a>
                            <button
                                onClick={() => openWhatsApp(`Hello FixMyCar, I'd like to book: ${service.name}. Please share the earliest slot.`)}
                                data-testid="service-whatsapp-btn"
                                aria-label="WhatsApp"
                                className="inline-flex items-center justify-center w-11 h-11 md:w-auto md:h-auto md:gap-2 bg-[#25D366] text-white font-semibold rounded-full md:px-6 md:py-4 hover:bg-[#20b957] transition"
                            >
                                <WhatsAppIcon size={18} />
                                <span className="hidden md:inline">WhatsApp</span>
                            </button>
                            <a
                                href={`tel:${BRAND.phoneRaw}`}
                                data-testid="service-call-btn"
                                aria-label="Call"
                                className="inline-flex items-center justify-center w-11 h-11 md:w-auto md:h-auto md:gap-2 border border-white/15 text-white rounded-full md:px-6 md:py-4 hover:bg-white/5 transition"
                            >
                                <Phone size={18} />
                                <span className="hidden md:inline">Call</span>
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Description + Benefits */}
            <section className="py-16 md:py-24 px-6">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
                    <Reveal className="lg:col-span-2">
                        <div className="text-brand-yellow text-xs uppercase tracking-[0.3em] mb-3">
                            About this service
                        </div>
                        <h2 className="font-display text-3xl md:text-5xl font-bold leading-[0.95] mb-6">
                            Why choose FixMyCar for {service.name}?
                        </h2>
                        <p className="text-white/70 text-lg leading-relaxed">
                            Our {service.name.toLowerCase()} process is designed for
                            transparency and precision. We use OEM-grade tools,
                            factory-trained technicians and a documented workflow.
                            After the ₹599 inspection you receive a clear, itemised
                            quote. Nothing is opened, replaced or charged without
                            your explicit approval.
                        </p>
                        <div className="mt-8 grid sm:grid-cols-2 gap-4">
                            {benefits.map((b) => (
                                <div key={b} className="flex items-start gap-3">
                                    <CheckCircle2
                                        size={20}
                                        className="text-brand-yellow shrink-0 mt-0.5"
                                    />
                                    <span className="text-white/80 text-sm leading-relaxed">
                                        {b}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <div className="glass rounded-3xl p-6">
                            <div className="text-white/50 text-xs uppercase tracking-widest">
                                Inspection Charge
                            </div>
                            <div className="mt-2 flex items-end gap-2">
                                <span className="font-display text-6xl font-extrabold text-brand-yellow">
                                    ₹599
                                </span>
                                <span className="text-white/60 mb-2">fixed</span>
                            </div>
                            <p className="text-white/60 text-sm mt-4 leading-relaxed">
                                Repair charges depend on parts, labour and complexity.
                                Nothing begins without your approval.
                            </p>
                            <a
                                href="#book"
                                data-testid="service-side-book"
                                className="mt-6 block text-center bg-brand-yellow text-white font-bold rounded-full py-3 hover:bg-red-600 transition"
                            >
                                Book Inspection
                            </a>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-16 md:py-20 px-6 bg-brand-charcoal/40 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <div className="text-brand-yellow text-xs uppercase tracking-[0.3em] mb-3">
                            Gallery
                        </div>
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
                            Craft in every detail.
                        </h2>
                    </Reveal>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        {galleryPicks.map((g, i) => (
                            <Reveal key={i} delay={i * 0.05}>
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden group">
                                    <img
                                        src={g.src}
                                        alt={g.alt}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Booking */}
            <section id="book" className="py-20 md:py-28 px-6 scroll-mt-24">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                    <Reveal>
                        <div className="text-brand-yellow text-xs uppercase tracking-[0.3em] mb-3">
                            Book — 30 seconds
                        </div>
                        <h2 className="font-display text-4xl md:text-5xl font-bold leading-[0.95]">
                            Reserve your{" "}
                            <span className="text-yellow-gradient">
                                {service.name}
                            </span>{" "}
                            slot.
                        </h2>
                        <p className="text-white/60 mt-4 leading-relaxed">
                            We continue the conversation on WhatsApp — share photos,
                            confirm the slot and get the ₹599 inspection scheduled.
                        </p>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <BookingForm
                            defaultService={service.name}
                            defaultSlug={service.slug}
                        />
                    </Reveal>
                </div>
            </section>

            {/* Related services */}
            <section className="py-20 md:py-24 px-6 bg-brand-charcoal/40 border-t border-white/5">
                <div className="max-w-7xl mx-auto">
                    <Reveal>
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
                            Related in {category.title}
                        </h2>
                    </Reveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {related.map((r, i) => (
                            <Reveal key={r.slug} delay={i * 0.05}>
                                <Link
                                    to={`/services/${r.slug}`}
                                    data-testid={`related-${r.slug}`}
                                    className="glass rounded-2xl p-5 hover:border-brand-yellow/40 transition flex items-center justify-between"
                                >
                                    <span className="font-display font-bold text-lg">
                                        {r.name}
                                    </span>
                                    <ArrowRight
                                        size={18}
                                        className="text-white/40 hover:text-brand-yellow"
                                    />
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 md:py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <Reveal>
                        <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
                            Frequently asked
                        </h2>
                    </Reveal>
                    <Accordion type="single" collapsible className="space-y-3">
                        {FAQS.slice(0, 6).map((f, i) => (
                            <AccordionItem
                                key={i}
                                value={`sd-${i}`}
                                className="glass rounded-2xl px-5 border-white/10"
                            >
                                <AccordionTrigger className="text-left text-white font-semibold hover:no-underline py-5">
                                    {f.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-white/70 leading-relaxed pb-5">
                                    {f.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </div>
    );
}
