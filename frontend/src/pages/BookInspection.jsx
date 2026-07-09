import Reveal from "@/components/site/Reveal";
import Particles from "@/components/site/Particles";
import BookingForm from "@/components/site/BookingForm";
import { CheckCircle2, ShieldCheck, Timer, Award, MapPin } from "lucide-react";
import useSeo from "@/lib/useSeo";

export default function BookInspection() {
    useSeo({
        title: "Book ₹599 Car Inspection in Hyderabad — FixMyCar",
        description: "Book a flat ₹599 doorstep car inspection in Hyderabad in 30 seconds. Instant WhatsApp confirmation, certified mechanics and a transparent written quote before any repair.",
        keywords: "book car inspection hyderabad, car inspection near me, doorstep car checkup, ₹599 car inspection",
        path: "/book",
    });
    return (
        <div>
            <section className="relative pt-32 md:pt-40 pb-16 px-6 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.pexels.com/photos/8986105/pexels-photo-8986105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Mechanic"
                        className="w-full h-full object-cover opacity-30 kenburns"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
                </div>
                <div className="headlight-glow top-10 -right-40" />
                <Particles count={25} />
                <div className="max-w-7xl mx-auto relative grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
                    <Reveal>
                        <div className="text-brand-yellow text-xs uppercase tracking-[0.3em] mb-3">
                            Book Inspection
                        </div>
                        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tighter">
                            One flat fee.
                            <br />
                            <span className="text-yellow-gradient">₹599</span>{" "}
                            everywhere.
                        </h1>
                        <p className="mt-6 text-white/70 text-lg leading-relaxed">
                            Certified mechanic dispatched to your home, roadside,
                            office or apartment. Written estimate before any repair
                            begins.
                        </p>
                        <div className="mt-8 space-y-3">
                            {[
                                { icon: Timer, t: "30-min average response" },
                                { icon: ShieldCheck, t: "Certified & verified technicians" },
                                { icon: Award, t: "Warranty on eligible repairs" },
                                { icon: MapPin, t: "Doorstep across Hyderabad & suburbs" },
                                { icon: CheckCircle2, t: "Transparent, itemised quote" },
                            ].map((b, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <b.icon
                                        size={20}
                                        className="text-brand-yellow shrink-0"
                                    />
                                    <span className="text-white/85">{b.t}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 glass rounded-2xl p-5">
                            <div className="text-white/50 text-xs uppercase tracking-widest">
                                Inspection Charge
                            </div>
                            <div className="mt-1 flex items-end gap-2">
                                <span className="font-display text-5xl font-extrabold text-brand-yellow">
                                    ₹599
                                </span>
                                <span className="text-white/60 mb-2">fixed</span>
                            </div>
                            <div className="mt-3 grid grid-cols-5 gap-2 text-xs text-white/70">
                                {["Home", "Roadside", "Garage", "Office", "Apartment"].map(
                                    (l) => (
                                        <div
                                            key={l}
                                            className="border border-white/10 rounded-full py-1.5 text-center bg-white/[0.02]"
                                        >
                                            {l}
                                        </div>
                                    )
                                )}
                            </div>
                            <p className="text-white/50 text-xs mt-3 leading-relaxed">
                                Additional repair charges depend on parts, labour and
                                complexity. Customer approval mandatory.
                            </p>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <BookingForm />
                    </Reveal>
                </div>
            </section>
        </div>
    );
}
