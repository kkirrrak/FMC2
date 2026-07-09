import { Link, useParams, Navigate } from "react-router-dom";
import { findPost, BLOG_POSTS } from "@/data/blog";
import useSeo from "@/lib/useSeo";
import Reveal from "@/components/site/Reveal";
import { Calendar, Clock, ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

export default function BlogDetail() {
    const { slug } = useParams();
    const post = findPost(slug);
    useSeo({
        title: post
            ? `${post.title} | FixMyCar Hyderabad`
            : "FixMyCar Blog",
        description: post?.excerpt,
        keywords: post?.keywords,
        image: post?.cover,
        path: `/blog/${slug}`,
    });

    if (!post) return <Navigate to="/blog" replace />;

    const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

    return (
        <article>
            {/* Article JSON-LD structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        headline: post.title,
                        image: [post.cover],
                        datePublished: post.date,
                        author: {
                            "@type": "Organization",
                            name: post.author,
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "FixMyCar",
                            logo: {
                                "@type": "ImageObject",
                                url: `${typeof window !== "undefined" ? window.location.origin : ""}/logo.png`,
                            },
                        },
                        description: post.excerpt,
                        keywords: post.keywords,
                    }),
                }}
            />

            {/* Hero */}
            <section className="relative pt-32 md:pt-40 pb-10 md:pb-14 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={post.cover}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-30 kenburns"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black" />
                </div>
                <div className="max-w-4xl mx-auto relative">
                    <Reveal>
                        <nav className="text-xs text-white/50 mb-6 flex items-center gap-1">
                            <Link to="/" className="hover:text-white">
                                Home
                            </Link>
                            <ChevronRight size={12} />
                            <Link to="/blog" className="hover:text-white">
                                Blog
                            </Link>
                            <ChevronRight size={12} />
                            <span className="text-brand-yellow truncate max-w-[200px]">
                                {post.title}
                            </span>
                        </nav>
                        <div className="flex flex-wrap gap-2 mb-5">
                            {post.tags.map((t) => (
                                <span
                                    key={t}
                                    className="text-[10px] uppercase tracking-widest text-brand-yellow border border-brand-yellow/30 rounded-full px-3 py-1"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tighter">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 mt-5 md:mt-6 text-xs md:text-sm text-white/60">
                            <span className="inline-flex items-center gap-1.5">
                                <Calendar size={12} /> {post.date}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                                <Clock size={12} /> {post.readMinutes} min read
                            </span>
                            <span>By {post.author}</span>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Body */}
            <section className="px-6 pb-16 md:pb-20">
                <div className="max-w-3xl mx-auto">
                    <Reveal>
                        <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-8 md:mb-10 font-medium">
                            {post.excerpt}
                        </p>
                    </Reveal>
                    <div className="space-y-8 md:space-y-10">
                        {post.content.map((block, i) => (
                            <Reveal key={i} delay={i * 0.03}>
                                <div>
                                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                                        {block.h}
                                    </h2>
                                    <p className="text-white/70 leading-relaxed text-base md:text-lg">
                                        {block.p}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                    <div className="mt-14 pt-8 border-t border-white/10 flex items-center justify-between">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition"
                        >
                            <ArrowLeft size={16} /> All articles
                        </Link>
                        <Link
                            to="/book"
                            className="btn-sweep inline-flex items-center gap-2 bg-brand-yellow text-white font-bold rounded-full px-5 md:px-6 py-3 hover:bg-red-600 transition text-sm md:text-base"
                        >
                            Book ₹599 Inspection <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Related */}
            <section className="px-6 pb-24 bg-brand-charcoal/40 border-t border-white/5 pt-16 md:pt-20">
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-display text-2xl md:text-4xl font-bold mb-8">
                        Related reads
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {related.map((p) => (
                            <Link
                                key={p.slug}
                                to={`/blog/${p.slug}`}
                                className="group block rounded-3xl overflow-hidden border border-white/5 hover:border-brand-yellow/40 bg-black/60 transition-all"
                            >
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img
                                        src={p.cover}
                                        alt={p.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5">
                                    <h3 className="font-display text-lg font-bold leading-tight">
                                        {p.title}
                                    </h3>
                                    <p className="text-white/60 text-sm mt-2 line-clamp-2">
                                        {p.excerpt}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </article>
    );
}
