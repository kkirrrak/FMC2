// FixMyCarHub Services catalogue
// Categories, each with sub-services. Each sub-service has slug + description used on detail page.

export const SERVICE_CATEGORIES = [
    {
        id: "emergency",
        title: "Emergency & SOS",
        blurb:
            "Fast response roadside rescue anywhere in Hyderabad — 24×7.",
        icon: "Siren",
        image:
            "https://images.pexels.com/photos/8931963/pexels-photo-8931963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        services: [
            { slug: "roadside-breakdown", name: "Roadside Breakdown" },
            { slug: "sos-emergency", name: "SOS Emergency" },
            { slug: "flat-tyre-assist", name: "Flat Tyre Assist" },
            { slug: "battery-jump-start", name: "Battery Jump Start" },
            { slug: "fuel-delivery", name: "Fuel Delivery" },
            { slug: "lockout-assistance", name: "Lockout Assistance" },
            { slug: "towing", name: "Towing" },
            { slug: "accident-recovery", name: "Accident Recovery" },
            { slug: "emergency-repair", name: "Emergency Repair" },
        ],
    },
    {
        id: "mechanical",
        title: "Mechanical",
        blurb:
            "Full mechanical diagnostics and repairs by certified specialists.",
        icon: "Wrench",
        image:
            "https://images.unsplash.com/photo-1725289339928-06ee31684df5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxjYXIlMjBlbmdpbmV8ZW58MHx8fHwxNzgzNTQ3OTQwfDA&ixlib=rb-4.1.0&q=85",
        services: [
            { slug: "engine-diagnostics", name: "Engine Diagnostics" },
            { slug: "engine-repair", name: "Engine Repair" },
            { slug: "gearbox", name: "Gearbox" },
            { slug: "clutch", name: "Clutch" },
            { slug: "transmission", name: "Transmission" },
            { slug: "suspension", name: "Suspension" },
            { slug: "steering", name: "Steering" },
            { slug: "radiator", name: "Radiator" },
            { slug: "water-pump", name: "Water Pump" },
            { slug: "cooling-system", name: "Cooling System" },
            { slug: "timing-belt", name: "Timing Belt" },
            { slug: "turbo", name: "Turbo" },
        ],
    },
    {
        id: "electrical",
        title: "Electrical",
        blurb: "Complete auto-electrical diagnosis and wiring solutions.",
        icon: "Zap",
        image:
            "https://images.pexels.com/photos/1409999/pexels-photo-1409999.jpeg?auto=compress&cs=tinysrgb&w=1600",
        services: [
            { slug: "battery", name: "Battery" },
            { slug: "alternator", name: "Alternator" },
            { slug: "starter-motor", name: "Starter Motor" },
            { slug: "ecu-diagnostics", name: "ECU Diagnostics" },
            { slug: "wiring", name: "Wiring" },
            { slug: "fuse", name: "Fuse" },
            { slug: "sensors", name: "Sensors" },
            { slug: "power-windows", name: "Power Windows" },
            { slug: "central-locking", name: "Central Locking" },
            { slug: "horn", name: "Horn" },
        ],
    },
    {
        id: "brakes",
        title: "Brakes",
        blurb: "Precision brake service for uncompromising safety.",
        icon: "Disc3",
        image:
            "https://images.unsplash.com/photo-1696494561430-de087dd0bd69?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxjYXIlMjBicmFrZXN8ZW58MHx8fHwxNzgzNTQ3OTQwfDA&ixlib=rb-4.1.0&q=85",
        services: [
            { slug: "brake-pads", name: "Brake Pads" },
            { slug: "brake-disc", name: "Brake Disc" },
            { slug: "brake-oil", name: "Brake Oil" },
            { slug: "abs", name: "ABS" },
            { slug: "brake-inspection", name: "Brake Inspection" },
        ],
    },
    {
        id: "ac",
        title: "AC & Climate",
        blurb: "Ice-cold cabins restored, sensors calibrated.",
        icon: "Snowflake",
        image:
            "https://images.pexels.com/photos/8985457/pexels-photo-8985457.jpeg?auto=compress&cs=tinysrgb&w=1600",
        services: [
            { slug: "ac-service", name: "AC Service" },
            { slug: "ac-repair", name: "AC Repair" },
            { slug: "ac-gas-filling", name: "Gas Filling" },
            { slug: "compressor", name: "Compressor" },
            { slug: "cooling-check", name: "Cooling Check" },
        ],
    },
    {
        id: "tyres",
        title: "Tyres & Wheels",
        blurb: "From punctures to precision alignment.",
        icon: "CircleDot",
        image:
            "https://images.pexels.com/photos/18372024/pexels-photo-18372024.jpeg",
        services: [
            { slug: "flat-tyre", name: "Flat Tyre" },
            { slug: "tyre-change", name: "Tyre Change" },
            { slug: "puncture-repair", name: "Puncture Repair" },
            { slug: "wheel-alignment", name: "Wheel Alignment" },
            { slug: "wheel-balancing", name: "Wheel Balancing" },
            { slug: "tyre-rotation", name: "Tyre Rotation" },
            { slug: "nitrogen-filling", name: "Nitrogen Filling" },
        ],
    },
    {
        id: "maintenance",
        title: "Maintenance",
        blurb: "Preventive service that keeps you moving.",
        icon: "Gauge",
        image:
            "https://images.pexels.com/photos/8986105/pexels-photo-8986105.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        services: [
            { slug: "oil-change", name: "Oil Change" },
            { slug: "filter-change", name: "Filter Change" },
            { slug: "general-service", name: "General Service" },
            { slug: "inspection", name: "Inspection" },
            { slug: "computer-diagnostics", name: "Computer Diagnostics" },
            {
                slug: "pre-purchase-inspection",
                name: "Pre-Purchase Inspection",
            },
            { slug: "coolant-flush", name: "Coolant Flush" },
            { slug: "brake-fluid", name: "Brake Fluid" },
        ],
    },
    {
        id: "body-shop",
        title: "Body Shop & Detailing",
        blurb: "Restore the showroom finish — inside and out.",
        icon: "SprayCan",
        image:
            "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxjYXIlMjB3YXNoaW5nfGVufDB8fHx8MTc4MzU0NzkzOXww&ixlib=rb-4.1.0&q=85",
        services: [
            { slug: "denting", name: "Denting" },
            { slug: "painting", name: "Painting" },
            { slug: "scratch-repair", name: "Scratch Repair" },
            { slug: "bumper-repair", name: "Bumper Repair" },
            { slug: "windshield", name: "Windshield" },
            { slug: "rust-repair", name: "Rust Repair" },
            { slug: "ceramic-coating", name: "Ceramic Coating" },
            { slug: "polishing", name: "Polishing" },
            { slug: "ppf-consultation", name: "PPF Consultation" },
        ],
    },
    {
        id: "cleaning",
        title: "Cleaning & Detailing",
        blurb: "Studio-grade wash and interior detailing.",
        icon: "Droplets",
        image:
            "https://images.pexels.com/photos/6873120/pexels-photo-6873120.jpeg?auto=compress&cs=tinysrgb&w=1600",
        services: [
            { slug: "car-wash", name: "Car Wash" },
            { slug: "steam-wash", name: "Steam Wash" },
            { slug: "foam-wash", name: "Foam Wash" },
            { slug: "interior-cleaning", name: "Interior Cleaning" },
            { slug: "exterior-cleaning", name: "Exterior Cleaning" },
            { slug: "engine-bay-cleaning", name: "Engine Bay Cleaning" },
            { slug: "vacuum", name: "Vacuum" },
            { slug: "detailing", name: "Detailing" },
        ],
    },
    {
        id: "others",
        title: "Concierge & Others",
        blurb: "Pickup, drop, fleet & corporate solutions.",
        icon: "Truck",
        image:
            "https://images.pexels.com/photos/7643907/pexels-photo-7643907.jpeg?auto=compress&cs=tinysrgb&w=1600",
        services: [
            { slug: "pickup-drop", name: "Pickup & Drop" },
            { slug: "fleet-maintenance", name: "Fleet Maintenance" },
            { slug: "doorstep-mechanic", name: "Doorstep Mechanic" },
            { slug: "home-repair", name: "Home Repair" },
            { slug: "garage-repair", name: "Garage Repair" },
            { slug: "insurance-assistance", name: "Insurance Assistance" },
            { slug: "rc-assistance", name: "RC Assistance" },
            { slug: "corporate-service", name: "Corporate Service" },
        ],
    },
];

// Flat lookup helpers
export const ALL_SERVICES = SERVICE_CATEGORIES.flatMap((c) =>
    c.services.map((s) => ({ ...s, categoryId: c.id, category: c.title, image: c.image, icon: c.icon }))
);

export const findService = (slug) =>
    ALL_SERVICES.find((s) => s.slug === slug);

export const findCategoryForSlug = (slug) =>
    SERVICE_CATEGORIES.find((c) => c.services.some((s) => s.slug === slug));
