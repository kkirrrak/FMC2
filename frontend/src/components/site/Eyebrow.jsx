export default function Eyebrow({ children, className = "" }) {
    return (
        <div
            className={`inline-flex items-center gap-2.5 text-brand-yellow text-xs md:text-sm font-semibold uppercase tracking-[0.25em] mb-3 ${className}`}
        >
            <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                <span className="w-6 md:w-8 h-px bg-brand-yellow/60" />
            </span>
            {children}
        </div>
    );
}
