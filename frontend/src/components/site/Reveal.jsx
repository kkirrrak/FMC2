import { useEffect, useRef, useState } from "react";

/**
 * Reveal children when they enter viewport.
 * Usage: <Reveal delay={0.1}><div>...</div></Reveal>
 */
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        setInView(true);
                        obs.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            className={`reveal ${inView ? "in" : ""} ${className}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </Tag>
    );
}
