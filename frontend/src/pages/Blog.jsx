import { Link } from "react-router-dom";
import Reveal from "@/components/site/Reveal";
import { BLOG_POSTS } from "@/data/blog";
import useSeo from "@/lib/useSeo";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
    useSeo({
        title:
            "FixMyCarHub Blog — Car Repair, Maintenance & Roadside Tips in Hyderabad",
        description:
            "Expert car care advice, doorstep repair tips, roadside SOS guides, service pricing and maintenance checklists for Hyderabad drivers. Updated weekly.",
        keywords:
            "car service hyderabad, car repair blog, doorstep car service, 24x7 roadside assistance hyderabad, car maintenance tips india, fixmycar",
        image:
            "https://images.pexels.com/photos/8986105/pexels-photo-8986105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        path: "/blog",
    });

    const [featured, ...rest] = BLOG_POSTS;

    return (
        <div>
            {/* Hero */}
            <section className="relative pt-32 md:pt-40 pb-14 md:pb-16 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-brand-charcoal/40 to-black" />
                <div className="headlight-glow -top-40 -right-40" />
                <div className="max-w-7xl mx-auto relative">
                    <Reveal>
                        <div className="text-brand-yellow text-xs uppercase tracking-[0.3em] mb-3">
                            The FixMyCarHub Blog
                        </div>
                        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tighter max-w-5xl">
                            Car care,{" "}
                            <span className="italic text-white/80">demystified</span>{" "}
                            <span className="text-yellow-gradient">for Hyderabad.</span>
                        </h1>
                        <p className="mt-5 md:mt-6 text-white/70 max-w-2xl text-base md:text-lg">
                            Expert guides on service, repair, roadside SOS and
                            saving money on your car — written by our certified
                            mechanics.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Featured */}
            <section className="px-6 mb-12">
                <div className="max-w-7xl mx-auto">
                    <Link
                        to={`/blog/${featured.slug}`}
                        data-testid={`blog-featured-${featured.slug}`}
                        className="group grid md:grid-cols-2 gap-6 md:gap-8 items-center rounded-3xl overflow-hidden border border-white/5 hover:border-brand-yellow/40 transition-all bg-brand-charcoal/60"
                    >
                        <div className="aspect-[4/3] md:aspect-[16/12] overflow-hidden">
                            <img
                                src={featured.cover}
                                alt={featured.title}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-5 md:p-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/15 border border-brand-yellow/30 text-brand-yellow text-[10px] uppercase tracking-widest mb-4">
                                Featured
                            </div>
                            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                                {featured.title}
                            </h2>
                            <p className="text-white/70 mt-3 md:mt-4 text-sm md:text-base leading-relaxed">
                                {featured.excerpt}
                            </p>
                            <div className="flex flex-wrap items-center gap-4 mt-4 md:mt-6 text-xs text-white/50">
                                <span className="inline-flex items-center gap-1.5">
                                    <Calendar size={12} /> {featured.date}
                                </span>
                                <span className="inline-flex items-center gap-1.5">
                                    <Clock size={12} /> {featured.readMinutes} min read
                                </span>
                                <span>By {featured.author}</span>
                            </div>
                            <span className="inline-flex items-center gap-1 mt-5 md:mt-6 text-brand-yellow font-semibold">
                                Read the guide{" "}
                                <ArrowRight
                                    size={16}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </span>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Grid */}
            <section className="px-6 pb-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                    {rest.map((p, i) => (
                        <Reveal key={p.slug} delay={i * 0.04}>
                            <Link
                                to={`/blog/${p.slug}`}
                                data-testid={`blog-card-${p.slug}`}
                                className="group block h-full rounded-3xl overflow-hidden border border-white/5 hover:border-brand-yellow/40 bg-brand-charcoal/60 transition-all"
                            >
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img
                                        src={p.cover}
                                        alt={p.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5 md:p-6">
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        {p.tags.slice(0, 2).map((t) => (
                                            <span
                                                key={t}
                                                className="text-[10px] uppercase tracking-widest text-white/50 border border-white/10 rounded-full px-2 py-0.5"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="font-display text-lg md:text-xl font-bold leading-tight">
                                        {p.title}
                                    </h3>
                                    <p className="text-white/60 text-sm mt-2 leading-relaxed line-clamp-3">
                                        {p.excerpt}
                                    </p>
                                    <div className="flex items-center gap-3 mt-4 text-xs text-white/50">
                                        <span>{p.date}</span>
                                        <span>•</span>
                                        <span>{p.readMinutes} min</span>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </section>
        </div>
    );
}
