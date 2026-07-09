import { useMemo, useState } from "react";
import Reveal from "@/components/site/Reveal";
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "@/data/gallery";
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import useSeo from "@/lib/useSeo";

export default function Gallery() {
    useSeo({
        title: "Gallery — Real Car Repairs & Doorstep Service | FixMyCar",
        description: "See real before-after photos of car repairs, detailing, ceramic coating and roadside rescues completed by FixMyCar across Hyderabad.",
        keywords: "car repair gallery hyderabad, before after car repair, ceramic coating photos, car detailing photos hyderabad",
        path: "/gallery",
    });
    const [active, setActive] = useState("All");
    const [selected, setSelected] = useState(null);

    const items = useMemo(
        () =>
            active === "All"
                ? GALLERY_ITEMS
                : GALLERY_ITEMS.filter((i) => i.cat === active),
        [active]
    );

    return (
        <div>
            {/* Hero */}
            <section className="relative pt-32 md:pt-40 pb-16 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="w-full h-full bg-gradient-to-b from-black via-brand-charcoal/40 to-black" />
                </div>
                <div className="max-w-7xl mx-auto relative">
                    <Reveal>
                        <div className="text-brand-yellow text-xs uppercase tracking-[0.3em] mb-3">
                            Gallery
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tighter max-w-4xl">
                            Real work.{" "}
                            <span className="italic text-white/80">Real cars.</span>{" "}
                            <span className="text-yellow-gradient">
                                Real results.
                            </span>
                        </h1>
                        <p className="mt-6 text-white/70 max-w-2xl text-lg">
                            A visual walk through our workshops, doorstep visits and
                            roadside rescues across Hyderabad.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Filters */}
            <section className="px-6 sticky top-24 z-30 backdrop-blur-md">
                <div
                    className="max-w-7xl mx-auto flex gap-2 overflow-x-auto pb-3 no-scrollbar"
                    data-testid="gallery-filters"
                >
                    {GALLERY_CATEGORIES.map((c) => (
                        <button
                            key={c}
                            onClick={() => setActive(c)}
                            data-testid={`gallery-filter-${c.toLowerCase().replace(/\s+/g, "-")}`}
                            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition ${
                                active === c
                                    ? "bg-brand-yellow text-white border-brand-yellow"
                                    : "border-white/10 text-white/70 hover:text-white hover:border-white/30"
                            }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </section>

            {/* Masonry */}
            <section className="py-10 px-6">
                <div className="max-w-7xl mx-auto masonry">
                    {items.map((g, i) => (
                        <button
                            key={`${g.src}-${i}`}
                            onClick={() => setSelected(g)}
                            data-testid={`gallery-item-${i}`}
                            className="block w-full rounded-2xl overflow-hidden group relative"
                        >
                            <img
                                src={g.src}
                                alt={g.alt}
                                loading="lazy"
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                <span className="text-xs uppercase tracking-widest text-white/80">
                                    {g.cat}
                                </span>
                            </div>
                        </button>
                    ))}
                </div>
                {items.length === 0 && (
                    <div className="text-center text-white/50 py-24">
                        No photos in this category yet.
                    </div>
                )}
            </section>

            {/* Lightbox */}
            <Dialog
                open={!!selected}
                onOpenChange={(v) => !v && setSelected(null)}
            >
                <DialogContent className="bg-black/95 border-white/10 max-w-5xl p-0 overflow-hidden">
                    <DialogTitle className="sr-only">Photo</DialogTitle>
                    <button
                        onClick={() => setSelected(null)}
                        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80"
                        aria-label="Close"
                        data-testid="lightbox-close"
                    >
                        <X size={20} />
                    </button>
                    {selected && (
                        <img
                            src={selected.src}
                            alt={selected.alt}
                            className="w-full h-auto max-h-[85vh] object-contain"
                        />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
