import { useMemo } from "react";

export default function Particles({ count = 30, className = "" }) {
    const items = useMemo(
        () =>
            Array.from({ length: count }).map((_, i) => ({
                id: i,
                left: Math.random() * 100,
                size: Math.random() * 3 + 1,
                delay: Math.random() * 12,
                duration: Math.random() * 10 + 12,
                opacity: Math.random() * 0.5 + 0.2,
            })),
        [count]
    );
    return (
        <div
            aria-hidden
            className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
        >
            {items.map((p) => (
                <span
                    key={p.id}
                    className="particle"
                    style={{
                        left: `${p.left}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        animationDelay: `${p.delay}s`,
                        animationDuration: `${p.duration}s`,
                        opacity: p.opacity,
                    }}
                />
            ))}
        </div>
    );
}
