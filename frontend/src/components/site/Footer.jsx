import { Link } from "react-router-dom";
import { BRAND, openWhatsApp, buildSosMessage } from "@/lib/brand";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import WhatsAppIcon from "@/components/site/WhatsAppIcon";

export default function Footer() {
    return (
        <footer
            data-testid="site-footer"
            className="relative z-10 bg-black border-t border-white/5 pt-16 pb-28 lg:pb-16 overflow-hidden"
        >
            <div className="headlight-glow -bottom-40 -left-40" />
            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="relative flex items-center justify-center h-12 w-auto">
                                <span className="absolute inset-0 -m-2 rounded-full bg-brand-yellow/50 blur-md scale-110" aria-hidden="true" />
                                <img
                                    src={BRAND.logo}
                                    alt="FixMyCarHub"
                                    className="relative h-12 w-auto"
                                />
                            </div>
                            <span className="font-display text-2xl font-bold">
                                Fix<span className="text-brand-yellow">MyCar</span>Hub
                            </span>
                        </div>
                        <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                            {BRAND.tagline}. Premium doorstep repair &
                            24×7 roadside assistance across Hyderabad.
                        </p>
                        <div className="flex items-center gap-3 mt-5">
                            <a
                                href={BRAND.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/5 hover:bg-brand-yellow hover:text-white text-white/70 transition"
                                aria-label="Facebook"
                            >
                                <Facebook size={16} />
                            </a>
                            <a
                                href={BRAND.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/5 hover:bg-brand-yellow hover:text-white text-white/70 transition"
                                aria-label="Instagram"
                            >
                                <Instagram size={16} />
                            </a>
                            <a
                                href={BRAND.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/5 hover:bg-brand-yellow hover:text-white text-white/70 transition"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={16} />
                            </a>
                            <button
                                onClick={() => openWhatsApp(buildSosMessage())}
                                className="p-2 rounded-full bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white transition"
                                aria-label="WhatsApp"
                                data-testid="footer-whatsapp"
                            >
                                <WhatsAppIcon size={16} />
                            </button>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-display font-semibold mb-4 text-lg">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5 text-sm text-white/60">
                            <li>
                                <Link
                                    to="/services"
                                    className="hover:text-brand-yellow transition"
                                >
                                    All Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/sos"
                                    className="hover:text-brand-yellow transition"
                                >
                                    SOS Emergency
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/gallery"
                                    className="hover:text-brand-yellow transition"
                                >
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    className="hover:text-brand-yellow transition"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-brand-yellow transition"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-brand-yellow transition"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/book"
                                    className="hover:text-brand-yellow transition"
                                >
                                    Book Inspection
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-display font-semibold mb-4 text-lg">
                            Popular
                        </h4>
                        <ul className="space-y-2.5 text-sm text-white/60">
                            <li>
                                <Link
                                    to="/services/roadside-breakdown"
                                    className="hover:text-brand-yellow transition"
                                >
                                    Roadside Breakdown
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/battery-jump-start"
                                    className="hover:text-brand-yellow transition"
                                >
                                    Battery Jump Start
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/ac-service"
                                    className="hover:text-brand-yellow transition"
                                >
                                    AC Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/general-service"
                                    className="hover:text-brand-yellow transition"
                                >
                                    General Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/pre-purchase-inspection"
                                    className="hover:text-brand-yellow transition"
                                >
                                    Pre-Purchase Inspection
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services/ceramic-coating"
                                    className="hover:text-brand-yellow transition"
                                >
                                    Ceramic Coating
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-display font-semibold mb-4 text-lg">
                            Reach Us
                        </h4>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li className="flex gap-2 items-start">
                                <Phone
                                    size={16}
                                    className="text-brand-yellow mt-0.5"
                                />
                                <a
                                    href={`tel:${BRAND.phoneRaw}`}
                                    className="hover:text-white"
                                >
                                    Call Us
                                </a>
                            </li>
                            <li className="flex gap-2 items-start">
                                <Mail
                                    size={16}
                                    className="text-brand-yellow mt-0.5"
                                />
                                <a
                                    href={`mailto:${BRAND.email}`}
                                    className="hover:text-white"
                                >
                                    Email Us
                                </a>
                            </li>
                            <li className="flex gap-2 items-start">
                                <MapPin
                                    size={16}
                                    className="text-brand-yellow mt-0.5"
                                />
                                <span>{BRAND.address}</span>
                            </li>
                            <li className="text-white/50">{BRAND.hours}</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
                    <p>
                        © {new Date().getFullYear()} FixMyCarHub. All rights reserved.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <a href="#" className="hover:text-brand-yellow">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-brand-yellow">
                            Terms of Service
                        </a>
                        <a
                            href="https://idesign4u.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="footer-idesign-credit"
                            className="text-white/50 hover:text-brand-yellow"
                        >
                            Website developed by{" "}
                            <span className="font-semibold text-white/80">
                                iDesign4u
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
