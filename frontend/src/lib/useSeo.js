import { useEffect } from "react";

/**
 * Lightweight SEO manager — updates title, description, keywords and canonical.
 * Also emits OpenGraph and Twitter tags.
 */
export default function useSeo({ title, description, keywords, image, path }) {
    useEffect(() => {
        if (title) document.title = title;
        const setMeta = (name, content, attr = "name") => {
            if (!content) return;
            let el = document.querySelector(`meta[${attr}='${name}']`);
            if (!el) {
                el = document.createElement("meta");
                el.setAttribute(attr, name);
                document.head.appendChild(el);
            }
            el.setAttribute("content", content);
        };
        setMeta("description", description);
        setMeta("keywords", keywords);
        setMeta("og:title", title, "property");
        setMeta("og:description", description, "property");
        setMeta("og:type", "website", "property");
        setMeta("og:site_name", "FixMyCar", "property");
        if (image) setMeta("og:image", image, "property");
        setMeta("twitter:card", "summary_large_image");
        setMeta("twitter:title", title);
        setMeta("twitter:description", description);
        if (image) setMeta("twitter:image", image);

        // Canonical
        if (path) {
            const href = `${window.location.origin}${path}`;
            let link = document.querySelector("link[rel='canonical']");
            if (!link) {
                link = document.createElement("link");
                link.setAttribute("rel", "canonical");
                document.head.appendChild(link);
            }
            link.setAttribute("href", href);
        }
    }, [title, description, keywords, image, path]);
}
