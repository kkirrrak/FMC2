import { useState } from "react";
import { toast } from "sonner";
import { Loader2, CheckCircle2, Upload } from "lucide-react";
import { buildBookingMessage, buildWhatsAppUrl } from "@/lib/brand";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const CAR_BRANDS = [
    "Maruti Suzuki",
    "Hyundai",
    "Tata",
    "Mahindra",
    "Honda",
    "Toyota",
    "Kia",
    "Volkswagen",
    "Skoda",
    "Renault",
    "MG",
    "Nissan",
    "Ford",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Jaguar",
    "Land Rover",
    "Volvo",
    "Porsche",
    "Lexus",
    "Other",
];

const initial = {
    name: "",
    mobile: "",
    whatsapp: "",
    email: "",
    car_brand: "",
    car_model: "",
    car_year: "",
    registration_number: "",
    current_location: "",
    service_location: "home",
    issue_description: "",
    preferred_date: "",
    preferred_time: "",
    emergency: false,
};

export default function BookingForm({ defaultService = "", defaultSlug = "", compact = false }) {
    const [values, setValues] = useState(initial);
    const [photos, setPhotos] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const set = (k, v) => setValues((s) => ({ ...s, [k]: v }));

    const validate = () => {
        if (!values.name.trim()) return "Please enter your name";
        if (!/^[0-9+\s-]{10,15}$/.test(values.mobile))
            return "Please enter a valid mobile number";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const err = validate();
        if (err) {
            toast.error(err);
            return;
        }
        setSubmitting(true);
        const payload = {
            ...values,
            whatsapp: values.whatsapp || values.mobile,
            service_type: defaultService || "General",
            service_slug: defaultSlug || "",
        };
        const message = buildBookingMessage(payload);
        const url = buildWhatsAppUrl(message);
        setSuccess(true);
        setSubmitting(false);
        toast.success("Booking captured — redirecting to WhatsApp…");
        setTimeout(() => {
            window.open(url, "_blank", "noopener,noreferrer");
        }, 600);
    };

    if (success) {
        return (
            <div
                data-testid="booking-success"
                className="glass rounded-3xl p-10 text-center"
            >
                <div className="mx-auto w-16 h-16 rounded-full bg-brand-yellow/20 flex items-center justify-center mb-4">
                    <CheckCircle2 className="text-brand-yellow" size={36} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">
                    Booking Received!
                </h3>
                <p className="text-white/70 max-w-md mx-auto">
                    Continue on WhatsApp to share vehicle photos and confirm your
                    inspection slot. Our team responds within a few minutes.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-white/60">
                    <span>Inspection Charge</span>
                    <span className="text-brand-yellow font-bold text-lg">₹599</span>
                    <span>fixed</span>
                </div>
                <button
                    onClick={() => {
                        setSuccess(false);
                        setValues(initial);
                        setPhotos([]);
                    }}
                    className="mt-6 text-brand-yellow text-sm underline"
                    data-testid="booking-new"
                >
                    Book another service
                </button>
            </div>
        );
    }

    return (
        <form
            data-testid="booking-form"
            onSubmit={handleSubmit}
            className={`glass rounded-2xl md:rounded-3xl p-4 md:p-8 space-y-4 md:space-y-5 ${compact ? "" : ""}`}
        >
            <div className="flex items-center justify-between">
                <h3 className="font-display text-xl md:text-3xl font-bold">
                    Book <span className="text-brand-yellow">Inspection</span>
                </h3>
                <div className="text-right text-[10px] md:text-xs text-white/50 leading-tight">
                    <div>Inspection</div>
                    <div className="text-brand-yellow font-bold text-base md:text-lg leading-none">
                        ₹599
                    </div>
                    <div>fixed</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <Field label="Full Name *">
                    <Input
                        data-testid="input-name"
                        value={values.name}
                        onChange={(e) => set("name", e.target.value)}
                        placeholder="Your name"
                        className="fmc-input"
                        required
                    />
                </Field>
                <Field label="Mobile *">
                    <Input
                        data-testid="input-mobile"
                        value={values.mobile}
                        onChange={(e) => set("mobile", e.target.value)}
                        placeholder="10-digit mobile"
                        className="fmc-input"
                        required
                    />
                </Field>
                <Field label="WhatsApp">
                    <Input
                        data-testid="input-whatsapp"
                        value={values.whatsapp}
                        onChange={(e) => set("whatsapp", e.target.value)}
                        placeholder="Same as mobile"
                        className="fmc-input"
                    />
                </Field>
                <Field label="Email">
                    <Input
                        data-testid="input-email"
                        type="email"
                        value={values.email}
                        onChange={(e) => set("email", e.target.value)}
                        placeholder="you@example.com"
                        className="fmc-input"
                    />
                </Field>
                <Field label="Car Brand">
                    <Select
                        value={values.car_brand}
                        onValueChange={(v) => set("car_brand", v)}
                    >
                        <SelectTrigger
                            className="fmc-input"
                            data-testid="select-brand"
                        >
                            <SelectValue placeholder="Select brand" />
                        </SelectTrigger>
                        <SelectContent className="bg-brand-charcoal border-white/10 text-white max-h-72">
                            {CAR_BRANDS.map((b) => (
                                <SelectItem key={b} value={b}>
                                    {b}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </Field>
                <Field label="Model">
                    <Input
                        data-testid="input-model"
                        value={values.car_model}
                        onChange={(e) => set("car_model", e.target.value)}
                        placeholder="e.g. City, Creta"
                        className="fmc-input"
                    />
                </Field>
                <Field label="Manufacturing Year">
                    <Input
                        data-testid="input-year"
                        value={values.car_year}
                        onChange={(e) => set("car_year", e.target.value)}
                        placeholder="2021"
                        className="fmc-input"
                    />
                </Field>
                <Field label="Registration Number">
                    <Input
                        data-testid="input-reg"
                        value={values.registration_number}
                        onChange={(e) =>
                            set("registration_number", e.target.value)
                        }
                        placeholder="TS 09 XX 1234"
                        className="fmc-input"
                    />
                </Field>
                <Field label="Current Location" className="md:col-span-2">
                    <Input
                        data-testid="input-location"
                        value={values.current_location}
                        onChange={(e) => set("current_location", e.target.value)}
                        placeholder="Colony / Landmark / Google Maps pin"
                        className="fmc-input"
                    />
                </Field>
                <Field label="Service Location">
                    <Select
                        value={values.service_location}
                        onValueChange={(v) => set("service_location", v)}
                    >
                        <SelectTrigger
                            className="fmc-input"
                            data-testid="select-service-location"
                        >
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-brand-charcoal border-white/10 text-white">
                            <SelectItem value="home">Home</SelectItem>
                            <SelectItem value="roadside">Roadside</SelectItem>
                            <SelectItem value="garage">Garage Visit</SelectItem>
                            <SelectItem value="office">Office</SelectItem>
                            <SelectItem value="apartment">Apartment</SelectItem>
                        </SelectContent>
                    </Select>
                </Field>
                <Field label="Preferred Date">
                    <Input
                        data-testid="input-date"
                        type="date"
                        value={values.preferred_date}
                        onChange={(e) => set("preferred_date", e.target.value)}
                        className="fmc-input"
                    />
                </Field>
                <Field label="Preferred Time">
                    <Input
                        data-testid="input-time"
                        type="time"
                        value={values.preferred_time}
                        onChange={(e) => set("preferred_time", e.target.value)}
                        className="fmc-input"
                    />
                </Field>
                <Field label="Photos (share on WhatsApp)">
                    <label className="fmc-input flex items-center gap-2 cursor-pointer hover:border-brand-yellow/50">
                        <Upload size={16} className="text-brand-yellow" />
                        <span className="text-sm text-white/70">
                            {photos.length
                                ? `${photos.length} file(s) — share on WhatsApp`
                                : "Add photos"}
                        </span>
                        <input
                            data-testid="input-photos"
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={(e) => setPhotos([...(e.target.files || [])])}
                        />
                    </label>
                </Field>
                <Field label="Issue Description" className="md:col-span-2">
                    <Textarea
                        data-testid="input-issue"
                        value={values.issue_description}
                        onChange={(e) =>
                            set("issue_description", e.target.value)
                        }
                        placeholder="Describe the problem, warning lights, sounds…"
                        rows={3}
                        className="fmc-input"
                    />
                </Field>
            </div>

            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
                <div>
                    <div className="text-white font-semibold text-sm">
                        Emergency?
                    </div>
                    <div className="text-white/50 text-xs">
                        Requires an immediate SOS response
                    </div>
                </div>
                <Switch
                    data-testid="switch-emergency"
                    checked={values.emergency}
                    onCheckedChange={(v) => set("emergency", v)}
                />
            </div>

            <div className="text-xs text-white/50 leading-relaxed">
                Additional repair charges depend on parts, labour and complexity.
                Your explicit approval is required before any repair begins.
            </div>

            <button
                type="submit"
                data-testid="submit-booking"
                disabled={submitting}
                className="btn-sweep w-full md:w-auto inline-flex items-center justify-center gap-2 bg-brand-yellow text-white font-bold rounded-full px-6 md:px-8 py-3 md:py-4 text-sm md:text-base hover:bg-red-600 transition disabled:opacity-60"
            >
                {submitting ? (
                    <>
                        <Loader2 className="animate-spin" size={16} />
                        Sending…
                    </>
                ) : (
                    <>
                        <span className="hidden sm:inline">Send to WhatsApp — </span>
                        Book ₹599 Inspection
                    </>
                )}
            </button>
        </form>
    );
}

function Field({ label, children, className = "" }) {
    return (
        <div className={`space-y-1.5 ${className}`}>
            <Label className="text-white/70 text-xs uppercase tracking-wider">
                {label}
            </Label>
            {children}
        </div>
    );
}
