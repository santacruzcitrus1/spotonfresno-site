import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";


export const metadata: Metadata = {
  title: "Cleaning Services | Carpet, Tile, Upholstery & More",
  description:
    "Spot On Carpet & Tile Cleaning offers carpet cleaning, tile & grout cleaning, upholstery cleaning, aggregate cleaning, pet stain removal, and commercial cleaning in Fresno, CA. Eco-friendly, low-moisture. Call (559) 721-4400.",
};

// Photo URLs: free Unsplash images, no attribution required, commercial use OK
// Replace with Garo's real photos when available — swap the URL, done.
const services = [
  {
    title: "Carpet Cleaning",
    photo: "/carpet-clean.jpg", // real clean carpet living room photo from Judd
    desc: "Our low-moisture carpet cleaning lifts deep-set dirt, allergens, and stains from every fiber — without soaking your carpet. Most rooms dry in about 4 hours, not 24. We use 100% biodegradable, pet-safe products that leave zero toxic residue.",
    features: ["Deep fiber extraction", "Pet-safe & eco-friendly", "Dries in ~4 hours", "80% less water than steam"],
  },
  {
    title: "Tile & Grout Cleaning",
    photo: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80&fit=crop", // tile floor
    desc: "Tile floors and grout lines trap dirt that regular mopping can't reach. Our professional cleaning restores your tile to like-new condition — kitchens, bathrooms, entryways, and more. We clean ceramic, porcelain, travertine, and natural stone.",
    features: ["Grout line deep clean", "Ceramic, porcelain & stone", "Kitchen & bathroom floors", "Seal & protect options"],
  },
  {
    title: "Upholstery Cleaning",
    photo: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80&fit=crop", // clean sofa
    desc: "Your couch, chairs, and sofas collect dust, allergens, and odors over time. We clean upholstery with the same professional-grade, eco-friendly products we use on your floors — safe for the whole family, including pets.",
    features: ["Couches, chairs & loveseats", "Fabric & microfiber safe", "Odor & allergen removal", "Fast drying"],
  },
  {
    title: "Aggregate Cleaning",
    photo: "/aggregate-clean.jpg", // real aggregate flooring photo
    desc: "Exposed aggregate driveways, patios, and walkways need specialized care. We clean and restore aggregate surfaces, removing embedded grime, mold, and weather stains to bring back the original texture and appearance.",
    features: ["Driveways & patios", "Mold & mildew removal", "Restores original texture", "Weather stain removal"],
  },
  {
    title: "Pet Stain & Odor Removal",
    photo: "/garo-dog.jpg", // Garo's dog + daughter on carpet (his real photo)
    desc: "We specialize in complete pet stain and odor extraction. Our products break down organic matter at the molecular level — no masking, no cover-ups. If your pet left a mark, we'll make it disappear completely.",
    features: ["Complete odor extraction", "Enzyme-based treatment", "No masking fragrances", "Safe for all pets"],
  },
  {
    title: "Commercial Cleaning",
    photo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop", // clean office interior
    desc: "Offices, retail spaces, churches, and commercial buildings deserve the same quality clean. We work around your business hours and handle high-traffic areas that take a beating. Volume discounts available for recurring service.",
    features: ["Offices & retail spaces", "Flexible scheduling", "High-traffic specialists", "Volume discounts"],
  },
];

function ServiceRow({ service, index, isNavy, isLast }: {
  service: typeof services[0];
  index: number;
  isNavy: boolean;
  isLast: boolean;
}) {
  const textColor = isNavy ? "#fff" : "#1B2A4A";
  const descColor = isNavy ? "rgba(255,255,255,0.85)" : "#555";
  const chipBg = isNavy ? "rgba(255,255,255,0.12)" : "rgba(27,42,74,0.07)";

  return (
    <div className="service-row" style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center",
      marginBottom: isLast ? 0 : 80,
      direction: index % 2 === 1 ? "rtl" : "ltr",
    }}>
      {/* Photo card */}
      <AnimateIn direction={index % 2 === 0 ? "left" : "right"}>
      <div style={{
        backgroundImage: `linear-gradient(135deg, rgba(27,42,74,0.50), rgba(42,63,111,0.55)), url(${service.photo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 16,
        minHeight: 380,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "40px",
        textAlign: "center",
        direction: "ltr",
      }}>
        <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "14px 36px" }}>
          Get a Free Quote
        </Link>
      </div>
      </AnimateIn>

      {/* Content */}
      <AnimateIn direction={index % 2 === 0 ? "right" : "left"} delay={150}>
      <div style={{ direction: "ltr" }}>
        <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: textColor, marginBottom: 16 }}>
          {service.title}
        </h2>
        <p style={{ color: descColor, lineHeight: 1.8, fontSize: "1.05rem", marginBottom: 24 }}>
          {service.desc}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {service.features.map((f) => (
            <div key={f} style={{
              background: chipBg,
              borderRadius: 8,
              padding: "10px 14px",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: textColor,
            }}>
              ✓ {f}
            </div>
          ))}
        </div>
      </div>
      </AnimateIn>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "#1B2A4A",
        padding: "100px 24px 80px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: 20,
          }}>
            Professional Cleaning Services<br />
            <span style={{ color: "#CC0000" }}>for Every Surface</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 36px" }}>
            Every service uses 80% less water, biodegradable products, and is backed by 28 five-star reviews. Licensed & insured.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Schedule Now</Link>
            <a href="tel:5597214400" className="btn-white">📞 (559) 721-4400</a>
          </div>
        </div>
      </section>

      {/* Services 1 & 2 — white background */}
      <section style={{ padding: "88px 24px 120px", background: "#fff", position: "relative" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {services.slice(0, 2).map((service, i) => (
            <ServiceRow key={service.title} service={service} index={i} isNavy={false} isLast={i === 1} />
          ))}
        </div>
        {/* Chevron pointing down into navy */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: 80, display: "block" }}>
            <polygon points="0,0 720,80 1440,0 1440,80 0,80" fill="#1B2A4A" />
          </svg>
        </div>
      </section>

      {/* Services 3 & 4 — navy background */}
      <section style={{ padding: "88px 24px 120px", background: "#1B2A4A", position: "relative" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {services.slice(2, 4).map((service, i) => (
            <ServiceRow key={service.title} service={service} index={i} isNavy={true} isLast={i === 1} />
          ))}
        </div>
        {/* Chevron pointing down into white */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: 80, display: "block" }}>
            <polygon points="0,0 720,80 1440,0 1440,80 0,80" fill="#fff" />
          </svg>
        </div>
      </section>

      {/* Services 5 & 6 — white background */}
      <section style={{ padding: "88px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {services.slice(4, 6).map((service, i) => (
            <ServiceRow key={service.title} service={service} index={i} isNavy={false} isLast={i === 1} />
          ))}
        </div>
      </section>

      {/* Pricing note */}
      <section style={{ background: "#F5F5F5", padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div className="section-tag">Fair & Transparent</div>
          <h2 className="section-title">Simple Pricing, No Surprises</h2>
          <p style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: 12 }}>
            Most rooms run <strong style={{ color: "#CC0000", fontSize: "1.3rem" }}>$50–$75 per room</strong> depending on size and condition. We always provide a free estimate before we start — no hidden fees, no upsells.
          </p>
          <p style={{ color: "#888", fontSize: "0.95rem", marginBottom: 32 }}>
            Volume discounts available for whole-home and commercial jobs.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
            <a href="tel:5597214400" className="btn-secondary">Call (559) 721-4400</a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "linear-gradient(135deg, #CC0000, #AA0000)", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, marginBottom: 16 }}>
            Ready for a Spot On Clean?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: 32 }}>
            Call Garo today — quick response, honest pricing, and results guaranteed.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-white">Schedule Now</Link>
            <a href="tel:5597214400" className="btn-primary" style={{ background: "#1B2A4A" }}>📞 (559) 721-4400</a>
          </div>
        </div>
      </section>
    </>
  );
}
