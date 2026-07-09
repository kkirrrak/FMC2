import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import * as Icons from "lucide-react";

export default function ServiceCategoryCard({ category, index = 0 }) {
    const Icon = Icons[category.icon] || Icons.Wrench;
    return (
        <Link
            to={`/services#${category.id}`}
            data-testid={`service-category-${category.id}`}
            className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/5 bg-brand-charcoal/80 hover:border-brand-yellow/40 transition-all duration-500 h-full flex flex-col"
        >
            <div className="aspect-[4/3] overflow-hidden relative">
                <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                {/* Servixa-style number badge, top-left */}
                <div className="absolute top-0 left-0 bg-brand-yellow text-white font-display font-extrabold text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 rounded-br-2xl shadow-[0_4px_20px_rgba(227,34,38,0.5)]">
                    0{index + 1}
                </div>
                <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white text-brand-yellow flex items-center justify-center shadow-lg group-hover:bg-brand-yellow group-hover:text-white transition-colors duration-300">
                    <Icon size={16} className="md:hidden" />
                    <Icon size={20} className="hidden md:block" />
                </div>
            </div>
            <div className="p-3 md:p-5 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display text-base md:text-2xl font-bold leading-tight">
                        {category.title}
                    </h3>
                    <ArrowUpRight
                        size={18}
                        className="text-white/40 group-hover:text-brand-yellow group-hover:-translate-y-1 group-hover:translate-x-1 transition-all shrink-0"
                    />
                </div>
                <p className="hidden md:block text-white/60 text-sm mt-2 leading-relaxed">
                    {category.blurb}
                </p>
                <div className="text-[10px] md:text-xs text-white/40 mt-2 md:mt-3">
                    {category.services.length} services
                </div>
            </div>
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-brand-yellow/10 rounded-full blur-3xl" />
            </div>
        </Link>
    );
}
