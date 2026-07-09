import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        if (hash) {
            const id = hash.replace(/^#/, "");
            // Wait a tick for the DOM to render
            const t = setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                else window.scrollTo({ top: 0, behavior: "instant" });
            }, 60);
            return () => clearTimeout(t);
        }
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [pathname, hash]);
    return null;
}
