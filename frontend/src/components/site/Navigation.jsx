import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BRAND, openWhatsApp, buildSosMessage } from "@/lib/brand";
import { Phone, Siren, Home as HomeIcon, Wrench, ImageIcon, Info, Mail, Calendar, Menu, BookOpen } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";
import { Button } from "@/components/ui/button";

const links = [
    { to: "/", label: "Home", icon: HomeIcon },
    { to: "/services", label: "Services", icon: Wrench },
    { to: "/sos", label: "SOS", icon: Siren },
    { to: "/gallery", label: "Gallery", icon: ImageIcon },
    { to: "/blog", label: "Blog", icon: BookOpen },
    { to: "/about", label: "About", icon: Info },
    { to: "/contact", label: "Contact", icon: Mail },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => setMobileOpen(false), [location.pathname]);

    return (
        <>
            {/* Desktop floating pill */}
            <header
                data-testid="site-header"
                className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[96%] max-w-6xl`}
            >
                <div
                    className={`glass-heavy rounded-full flex items-center justify-between pl-3 pr-2 py-2 md:pl-4 md:pr-3 md:py-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] transition-all duration-500 ${scrolled ? "border-white/10" : "border-white/5"}`}
                >
                    {/* Logo */}
                    <Link
                        to="/"
                        data-testid="nav-logo"
                        className="flex items-center gap-2 group shrink-0"
                    >
                        <div
                            className={`relative flex items-center justify-center transition-all duration-500 ${scrolled ? "h-9 md:h-10" : "h-10 md:h-12"} w-auto`}
                        >
                            <span className="absolute inset-0 -m-1.5 rounded-full bg-brand-yellow/50 blur-md scale-110" aria-hidden="true" />
                            <img
                                src={BRAND.logo}
                                alt="FixMyCarHub"
                                className="relative h-full w-auto object-contain"
                            />
                        </div>
                        <span className="hidden sm:block font-display font-bold text-white text-lg md:text-xl tracking-tight">
                            Fix<span className="text-brand-yellow">MyCar</span>Hub
                        </span>
                    </Link>

                    {/* Center links (desktop) */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {links.map((l) => (
                            <NavLink
                                key={l.to}
                                to={l.to}
                                end={l.to === "/"}
                                data-testid={`nav-link-${l.label.toLowerCase()}`}
                                className={({ isActive }) =>
                                    `relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                                        isActive
                                            ? "text-white bg-brand-yellow shadow-[0_0_20px_rgba(227,34,38,0.35)]"
                                            : "text-white/80 hover:text-white hover:bg-white/5"
                                    }`
                                }
                            >
                                {l.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* CTAs */}
                    <div className="flex items-center gap-1.5 md:gap-2">
                        <a
                            href={`tel:${BRAND.phoneRaw}`}
                            data-testid="nav-call-btn"
                            title="Call Now"
                            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition"
                        >
                            <Phone size={16} />
                            <span className="hidden xl:inline text-sm">
                                Call
                            </span>
                        </a>
                        <button
                            data-testid="nav-whatsapp-btn"
                            onClick={() => openWhatsApp(buildSosMessage())}
                            title="WhatsApp"
                            aria-label="WhatsApp"
                            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full text-[#25D366] hover:bg-[#25D366]/15 border border-[#25D366]/30 transition"
                        >
                            <WhatsAppIcon size={16} />
                            <span className="hidden xl:inline text-sm">
                                WhatsApp
                            </span>
                        </button>
                        <Link
                            to="/sos"
                            data-testid="nav-sos-btn"
                            title="SOS"
                            className="relative inline-flex items-center gap-2 px-3 py-2 rounded-full text-white bg-red-600 hover:bg-red-500 transition font-semibold text-sm shadow-[0_0_20px_rgba(220,38,38,0.5)]"
                        >
                            <Siren size={16} />
                            <span className="hidden md:inline">SOS</span>
                        </Link>
                        <Link
                            to="/book"
                            data-testid="nav-book-btn"
                            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow text-white hover:bg-red-600 transition font-semibold text-sm btn-sweep"
                        >
                            <span>Book Inspection</span>
                        </Link>

                        {/* Mobile menu */}
                        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                            <SheetTrigger asChild>
                                <button
                                    data-testid="nav-mobile-toggle"
                                    className="lg:hidden p-2 rounded-full text-white hover:bg-white/10"
                                    aria-label="Open menu"
                                >
                                    <Menu size={20} />
                                </button>
                            </SheetTrigger>
                            <SheetContent
                                side="right"
                                className="bg-black/95 border-l border-white/10 text-white w-[85%] sm:w-[420px] backdrop-blur-2xl"
                            >
                                <SheetTitle className="sr-only">
                                    Main Navigation
                                </SheetTitle>
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center gap-2 pb-6 border-b border-white/10">
                                        <div className="relative flex items-center justify-center h-10 w-auto">
                                            <span className="absolute inset-0 -m-1.5 rounded-full bg-brand-yellow/50 blur-md scale-110" aria-hidden="true" />
                                            <img
                                                src={BRAND.logo}
                                                alt="FixMyCarHub"
                                                className="relative h-10 w-auto"
                                            />
                                        </div>
                                        <span className="font-display text-xl font-bold">
                                            Fix
                                            <span className="text-brand-yellow">
                                                MyCar
                                            </span>
                                        </span>
                                    </div>
                                    <nav className="flex flex-col gap-1 py-6 flex-1">
                                        {links.map((l) => (
                                            <NavLink
                                                key={l.to}
                                                to={l.to}
                                                end={l.to === "/"}
                                                data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                                                className={({ isActive }) =>
                                                    `flex items-center gap-3 px-4 py-3 rounded-2xl transition text-lg font-medium ${
                                                        isActive
                                                            ? "bg-brand-yellow text-white"
                                                            : "text-white/80 hover:text-white hover:bg-white/5"
                                                    }`
                                                }
                                            >
                                                <l.icon size={20} />
                                                {l.label}
                                            </NavLink>
                                        ))}
                                        <NavLink
                                            to="/book"
                                            data-testid="mobile-nav-book"
                                            className="flex items-center gap-3 px-4 py-3 rounded-2xl mt-2 bg-brand-yellow text-white font-bold text-lg"
                                        >
                                            <Calendar size={20} />
                                            Book Inspection
                                        </NavLink>
                                    </nav>
                                    <div className="flex items-center justify-center gap-3 pt-6 border-t border-white/10">
                                        <a
                                            href={`tel:${BRAND.phoneRaw}`}
                                            aria-label="Call"
                                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
                                            data-testid="mobile-call"
                                        >
                                            <Phone size={18} />
                                        </a>
                                        <button
                                            onClick={() =>
                                                openWhatsApp(buildSosMessage())
                                            }
                                            aria-label="WhatsApp"
                                            className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] text-white"
                                            data-testid="mobile-whatsapp"
                                        >
                                            <WhatsAppIcon size={20} />
                                        </button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </header>

            {/* Mobile bottom nav */}
            <nav
                data-testid="mobile-bottom-nav"
                className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-40 glass-heavy rounded-full px-1.5 py-2 flex items-center shadow-[0_20px_60px_-20px_rgba(0,0,0,0.9)] w-[96%] max-w-md justify-between"
            >
                {links.map((l) => (
                    <NavLink
                        key={l.to}
                        to={l.to}
                        end={l.to === "/"}
                        aria-label={l.label}
                        data-testid={`bottom-nav-${l.label.toLowerCase()}`}
                        className={({ isActive }) =>
                            `flex flex-1 flex-col items-center gap-0.5 px-1 py-1.5 rounded-full transition ${
                                isActive
                                    ? "text-white bg-brand-yellow"
                                    : "text-white/80"
                            }`
                        }
                    >
                        <l.icon size={16} />
                        <span className="text-[9px] font-medium leading-none">
                            {l.label}
                        </span>
                    </NavLink>
                ))}
            </nav>
        </>
    );
}
