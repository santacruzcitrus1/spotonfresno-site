import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cleaning Services | Carpet, Tile, Upholstery & More",
  description:
    "Spot On Carpet & Tile Cleaning offers carpet cleaning, tile & grout cleaning, upholstery cleaning, aggregate cleaning, pet stain removal, and commercial cleaning in Fresno, CA. Eco-friendly, low-moisture. Call (559) 721-4400.",
};

const services = [
  {
    icon: "🏠",
    title: "Carpet Cleaning",
    desc: "Our low-moisture carpet cleaning lifts deep-set dirt, allergens, and stains from every fiber — without soaking your carpet. Most rooms dry in about 4 hours, not 24. We use 100% biodegradable, pet-safe products that leave zero toxic residue.",
    features: ["Deep fiber extraction", "Pet-safe & eco-friendly", "Dries in ~4 hours", "80% less water than steam"],
  },
  {
    icon: "🔲",
    title: "Tile & Grout Cleaning",
    desc: "Tile floors and grout lines trap dirt that regular mopping can't reach. Our professional cleaning restores your tile to like-new condition — kitchens, bathrooms, entryways, and more. We clean ceramic, porcelain, travertine, and natural stone.",
    features: ["Grout line deep clean", "Ceramic, porcelain & stone", "Kitchen & bathroom floors", "Seal & protect options"],
  },
  {
    icon: "🛋️",
    title: "Upholstery Cleaning",
    desc: "Your couch, chairs, and sofas collect dust, allergens, and odors over time. We clean upholstery with the same professional-grade, eco-friendly products we use on your floors — safe for the whole family, including pets.",
    features: ["Couches, chairs & loveseats", "Fabric & microfiber safe", "Odor & allergen removal", "Fast drying"],
  },
  {
    icon: "🏗️",
    title: "Aggregate Cleaning",
    desc: "Exposed aggregate driveways, patios, and walkways need specialized care. We clean and restore aggregate surfaces, removing embedded grime, mold, and weather stains to bring back the original texture and appearance.",
    features: ["Driveways & patios", "Mold & mildew removal", "Restores original texture", "Weather stain removal"],
  },
  {
    icon: "🐾",
    title: "Pet Stain & Odor Removal",
    desc: "We specialize in complete pet stain and odor extraction. Our products break down organic matter at the molecular level — no masking, no cover-ups. If your pet left a mark, we'll make it disappear completely.",
    features: ["Complete odor extraction", "Enzyme-based treatment", "No masking fragrances", "Safe for all pets"],
  },
  {
    icon: "🏢",
    title: "Commercial Cleaning",
    desc: "Offices, retail spaces, churches, and commercial buildings deserve the same quality clean. We work around your business hours and handle high-traffic areas that take a beating. Volume discounts available for recurring service.",
    features: ["Offices & retail spaces", "Flexible scheduling", "High-traffic specialists", "Volume discounts"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #1B2A4A 0%, #2a3f6f 50%, #1B2A4A 100%)",
        padding: "100px 24px 80px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="section-tag" style={{ background: "rgba(204,0,0,0.2)", color: "#fff" }}>Our Services</div>
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

      {/* Services Detail */}
      <section style={{ padding: "88px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {services.map((service, i) => (
            <div key={service.title} style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 56,
              alignItems: "center",
              marginBottom: i < services.length - 1 ? 80 : 0,
              direction: i % 2 === 1 ? "rtl" : "ltr",
            }}>
              {/* Icon card */}
              <div style={{
                background: i % 2 === 0 ? "#F5F5F5" : "linear-gradient(135deg, #1B2A4A, #2a3f6f)",
                borderRadius: 16,
                padding: "60px 40px",
                textAlign: "center",
                direction: "ltr",
              }}>
                <div style={{ fontSize: "5rem", marginBottom: 16 }}>{service.icon}</div>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}>
                  {service.features.map((f) => (
                    <div key={f} style={{
                      background: i % 2 === 0 ? "#fff" : "rgba(255,255,255,0.1)",
                      borderRadius: 8,
                      padding: "10px 14px",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: i % 2 === 0 ? "#1B2A4A" : "#fff",
                    }}>
                      ✓ {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div style={{ direction: "ltr" }}>
                <h2 style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 800,
                  color: "#1B2A4A",
                  marginBottom: 16,
                }}>
                  {service.title}
                </h2>
                <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: 24 }}>
                  {service.desc}
                </p>
                <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
              </div>
            </div>
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
