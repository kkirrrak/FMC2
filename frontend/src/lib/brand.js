// FixMyCarHub brand constants
export const BRAND = {
    name: "FixMyCarHub",
    tagline: "Expert Care For Your Ride",
    phone: "+91 9281410305",
    phoneRaw: "919281410305",
    email: "support@fixmycar.in",
    logo: "/logo.png",
    address: "Hyderabad, Telangana, India",
    hours: "24 × 7 Emergency • Workshop 8AM – 9PM",
    social: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
    },
};

export const buildWhatsAppUrl = (message = "") => {
    const text = encodeURIComponent(message);
    return `https://wa.me/${BRAND.phoneRaw}?text=${text}`;
};

export const openWhatsApp = (message) => {
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
};

export const buildBookingMessage = (data) => {
    const lines = [
        "Hello FixMyCarHub 👋",
        "",
        "I'd like to book a service. Details below:",
        "",
        `• Name: ${data.name || "-"}`,
        `• Mobile: ${data.mobile || "-"}`,
        data.whatsapp ? `• WhatsApp: ${data.whatsapp}` : null,
        data.email ? `• Email: ${data.email}` : null,
        `• Car: ${[data.car_brand, data.car_model, data.car_year]
            .filter(Boolean)
            .join(" ")}`,
        data.registration_number
            ? `• Registration: ${data.registration_number}`
            : null,
        data.current_location ? `• Location: ${data.current_location}` : null,
        data.service_location
            ? `• Service at: ${data.service_location}`
            : null,
        data.service_type ? `• Service Type: ${data.service_type}` : null,
        data.issue_description ? `• Issue: ${data.issue_description}` : null,
        data.preferred_date
            ? `• Preferred Date: ${data.preferred_date}`
            : null,
        data.preferred_time
            ? `• Preferred Time: ${data.preferred_time}`
            : null,
        data.emergency ? "🚨 EMERGENCY: Yes — please respond urgently" : null,
        "",
        "I will share vehicle photos on this WhatsApp chat.",
        "",
        "Please confirm the ₹599 inspection booking.",
    ].filter(Boolean);
    return lines.join("\n");
};

export const buildSosMessage = () => `Hello FixMyCarHub 🚨

My vehicle has broken down.
I need roadside assistance immediately.

Location:
Vehicle:
Problem:

Please send a mechanic urgently.`;

export const buildContactMessage = (data) => {
    const lines = [
        "Hello FixMyCarHub 👋",
        "",
        `• Name: ${data.name || "-"}`,
        `• Mobile: ${data.mobile || "-"}`,
        data.email ? `• Email: ${data.email}` : null,
        data.subject ? `• Subject: ${data.subject}` : null,
        "",
        data.message || "",
    ].filter(Boolean);
    return lines.join("\n");
};
