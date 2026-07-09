import { useEffect, useRef, useState } from "react";

/**
 * Counts from 0 to `value` when in view.
 * Supports numeric strings like "1000+" or "24×7" (non-numeric passes through).
 */
export default function StatCounter({ value, duration = 1400, className = "" }) {
    const ref = useRef(null);
    const [display, setDisplay] = useState(
        typeof value === "number" ? "0" : value
    );

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const match =
            typeof value === "string" ? value.match(/^(\d+)(.*)$/) : null;

        if (typeof value !== "number" && !match) {
            setDisplay(value);
            return;
        }
        const target = typeof value === "number" ? value : parseInt(match[1], 10);
        const suffix = match ? match[2] : "";

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (!e.isIntersecting) return;
                    const start = performance.now();
                    const tick = (now) => {
                        const p = Math.min(1, (now - start) / duration);
                        const eased = 1 - Math.pow(1 - p, 3);
                        const val = Math.floor(eased * target);
                        setDisplay(`${val}${suffix}`);
                        if (p < 1) requestAnimationFrame(tick);
                        else setDisplay(`${target}${suffix}`);
                    };
                    requestAnimationFrame(tick);
                    obs.unobserve(e.target);
                });
            },
            { threshold: 0.3 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, [value, duration]);

    return (
        <span ref={ref} className={className} data-testid="stat-counter">
            {display}
        </span>
    );
}
