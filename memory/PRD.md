# FixMyCar — PRD

## Original Problem
Premium cinematic multi-page website for FixMyCar (Hyderabad) — a luxury automotive repair & 24×7 roadside assistance brand.
Design language inspired by Porsche / Mercedes / RAC / AAA. Theme: Black, Charcoal, Yellow, White. Must feel like a luxury commercial (Ken Burns, particles, glass, parallax). Floating pill navigation, no hamburger.
Booking forms save leads to DB and redirect user to WhatsApp +91 9281410305 with a prefilled message. Only pricing shown: ₹599 fixed inspection.

## Stack
- Backend: FastAPI + MongoDB (motor)
- Frontend: React 19 + React Router 7 + Tailwind + shadcn/ui + Framer Motion (available) + Lucide icons
- Fonts: Bricolage Grotesque (display) + Manrope (body)

## User Personas
- Individual car owner in Hyderabad needing doorstep repair / roadside SOS
- Fleet / corporate manager scheduling maintenance
- Emergency user in urgent breakdown situation

## Core Requirements (static)
- No repair prices ever — only ₹599 fixed inspection charge everywhere (Home / Roadside / Garage / Office / Apartment)
- Every service page has: hero, description, benefits, gallery, booking form, FAQ, related services
- Booking flow: save to Mongo → redirect to WhatsApp with prefilled message
- Photo uploads captured in form but user shares them on WhatsApp
- Google Maps: embedded iframe (no API key)
- Contact "phone" tile opens WhatsApp

## Implemented (Dec 2025)
- Backend endpoints: `POST/GET /api/bookings`, `POST/GET /api/contacts`, `GET /api/`
- 10 pages: Home, Services (with 10 categories, 80+ services), ServiceDetail (dynamic /services/:slug), SOS, Gallery, About, Contact, BookInspection (+ 404 fallback via redirect)
- Floating glass pill nav (desktop) + mobile bottom nav + sheet menu
- Cinematic hero (Ken Burns image + floating particles + headlight glow + gradient overlays)
- Animated stat counters, scroll-reveal, marquee trust strip
- Booking form (Name, Mobile, WhatsApp, Email, Brand, Model, Year, Reg, Location, Service Location, Date, Time, Photos, Issue, Emergency switch) — saves to DB then redirects to WhatsApp
- Contact form (name, mobile, email, subject, message) — saves to DB, success state
- Gallery: 24 curated images, masonry, category filter chips, lightbox dialog
- Service Areas embedded iframe map (Hyderabad)
- 22 FAQs, 6 testimonials, 5-step timeline
- Floating CTAs (WhatsApp + SOS) with pulse rings
- SOS page with pulsing animated SOS button + prefilled WhatsApp message

## Testing (iteration_1)
- Backend: 100% (13/13 pytest)
- Frontend: 100% — every data-testid flow verified (nav, hero, book, sos, services, service detail, gallery, contact, about, mobile viewport)

## Backlog / P1
- Admin dashboard (JWT) to view bookings/contacts
- Actual photo upload to cloud storage (currently user shares on WhatsApp)
- Newsletter capture on footer
- Blog / SEO content pages
- Google Maps API integration for interactive map with markers per service area
- Real Google Reviews embed
- Emergent-managed Google Auth for a customer portal (booking history)
- Push notifications / SMS confirmations (Twilio)

## Backlog / P2
- Multi-language (Telugu, Hindi)
- Live chat widget
- Live SOS technician tracking (like Ola)
- Payment gateway for inspection prepay (Razorpay)
