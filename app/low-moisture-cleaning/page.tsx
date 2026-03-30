import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Low-Moisture Carpet Cleaning | 80% Less Water | Dry in 4 Hours",
  description:
    "Spot On uses low-moisture carpet cleaning that uses 80% less water than steam cleaning. Carpets dry in about 4 hours, not 24. Better for your carpet, your home, and California's water. Fresno, CA.",
};

const comparisons = [
  { feature: "Water Usage", traditional: "Heavy — soaks padding", spotOn: "80% less water" },
  { feature: "Dry Time", traditional: "24–48 hours", spotOn: "~4 hours" },
  { feature: "Mold Risk", traditional: "High (wet padding)", spotOn: "Virtually zero" },
  { feature: "Carpet Wear", traditional: "Accelerated fiber damage", spotOn: "Gentle on fibers" },
  { feature: "Re-soiling", traditional: "Common (residue attracts dirt)", spotOn: "No sticky residue" },
  { feature: "Eco Impact", traditional: "High water waste", spotOn: "Water-conscious" },
];

export default function LowMoisturePage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #1B2A4A 0%, #2a3f6f 50%, #1B2A4A 100%)",
        padding: "100px 24px 80px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="section-tag" style={{ background: "rgba(204,0,0,0.2)", color: "#fff" }}>Our Method</div>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: 20,
          }}>
            80% Less Water.<br />
            <span style={{ color: "#CC0000" }}>Dry in ~4 Hours.</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 36px" }}>
            Our low-moisture cleaning method outperforms traditional steam in every way — less water, faster drying, cleaner results.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Schedule Now</Link>
            <a href="tel:5597214400" className="btn-white">📞 (559) 721-4400</a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "88px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-tag">How It Works</div>
            <h2 className="section-title">The Science Behind Low-Moisture Cleaning</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
            {[
              { step: "1", title: "Pre-Treatment", desc: "We apply an eco-safe pre-treatment that breaks down dirt and stains at the molecular level — before any cleaning begins.", icon: "🧪" },
              { step: "2", title: "Low-Moisture Extraction", desc: "Using controlled moisture, we lift dirt from deep in the fibers without saturating the carpet or padding. 80% less water than steam cleaning.", icon: "💧" },
              { step: "3", title: "Fast Dry", desc: "Because we use so little water, your carpet is dry and ready to walk on in approximately 4 hours — not 24 to 48.", icon: "⚡" },
            ].map((item) => (
              <div key={item.step} style={{ textAlign: "center" }}>
                <div style={{
                  width: 72, height: 72,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #CC0000, #AA0000)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: "2rem",
                }}>
                  {item.icon}
                </div>
                <div style={{
                  background: "#CC0000", color: "#fff",
                  width: 28, height: 28, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "-36px auto 16px", position: "relative", zIndex: 1,
                  fontWeight: 900, fontSize: "0.8rem",
                }}>
                  {item.step}
                </div>
                <h3 style={{ color: "#1B2A4A", fontWeight: 700, fontSize: "1.1rem", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.95rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ background: "#F5F5F5", padding: "88px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-tag">Comparison</div>
            <h2 className="section-title">Low-Moisture vs. Traditional Steam</h2>
          </div>

          <div style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
            {/* Header */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#1B2A4A", padding: "16px 24px" }}>
              <div style={{ color: "rgba(255,255,255,0.7)", fontWeight: 700, fontSize: "0.85rem" }}>Feature</div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontWeight: 700, fontSize: "0.85rem", textAlign: "center" }}>Traditional Steam</div>
              <div style={{ color: "#CC0000", fontWeight: 700, fontSize: "0.85rem", textAlign: "center" }}>Spot On Method</div>
            </div>
            {/* Rows */}
            {comparisons.map((row, i) => (
              <div key={row.feature} style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                padding: "16px 24px",
                background: i % 2 === 0 ? "#fff" : "#fafafa",
                borderBottom: "1px solid #eee",
              }}>
                <div style={{ fontWeight: 700, color: "#1B2A4A", fontSize: "0.92rem" }}>{row.feature}</div>
                <div style={{ color: "#888", fontSize: "0.9rem", textAlign: "center" }}>{row.traditional}</div>
                <div style={{ color: "#CC0000", fontWeight: 700, fontSize: "0.9rem", textAlign: "center" }}>{row.spotOn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* California Water */}
      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "3.5rem", marginBottom: 20 }}>🌾</div>
          <h2 className="section-title">Built for California</h2>
          <p style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 600, margin: "0 auto 20px" }}>
            In the Central Valley, water isn&apos;t just a resource — it&apos;s a lifeline. Our 80% reduction in water usage means we can deliver a professional clean without wasting the water California needs most.
          </p>
          <p style={{ color: "#888", fontSize: "0.95rem" }}>
            Better for your carpet. Better for your home. Better for the valley.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #CC0000, #AA0000)", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, marginBottom: 16 }}>
            Experience the Low-Moisture Difference
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: 32 }}>
            Call Garo today for a cleaning that dries faster, lasts longer, and uses less water.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-white">Get a Free Quote</Link>
            <a href="tel:5597214400" className="btn-primary" style={{ background: "#1B2A4A" }}>📞 (559) 721-4400</a>
          </div>
        </div>
      </section>
    </>
  );
}
