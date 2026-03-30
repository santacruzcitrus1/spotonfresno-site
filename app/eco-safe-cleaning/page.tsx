import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eco-Safe Cleaning Products | Biodegradable & Pet-Safe",
  description:
    "Spot On Carpet & Tile Cleaning uses 100% biodegradable, eco-safe cleaning products. Safe for children, pets, and the Central Valley environment. Zero toxic residue. Fresno, CA.",
};

export default function EcoSafePage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #1B2A4A 0%, #2a3f6f 50%, #1B2A4A 100%)",
        padding: "100px 24px 80px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="section-tag" style={{ background: "rgba(204,0,0,0.2)", color: "#fff" }}>Eco-Safe</div>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: 20,
          }}>
            100% Biodegradable.<br />
            <span style={{ color: "#CC0000" }}>Zero Toxic Residue.</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 36px" }}>
            Every product we use breaks down naturally and is safe for children, pets, and the environment. No exceptions.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Schedule Now</Link>
            <a href="tel:5597214400" className="btn-white">📞 (559) 721-4400</a>
          </div>
        </div>
      </section>

      {/* Why Eco-Safe */}
      <section style={{ padding: "88px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-tag">Why It Matters</div>
            <h2 className="section-title">What Traditional Cleaners Leave Behind</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Most carpet cleaning companies use chemical-heavy products that leave residue in your fibers. Your family walks on it, breathes it, and absorbs it through skin contact.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            {/* Traditional */}
            <div style={{ background: "#F5F5F5", borderRadius: 16, padding: "40px 32px" }}>
              <h3 style={{ color: "#CC0000", fontWeight: 800, fontSize: "1.2rem", marginBottom: 20 }}>❌ Traditional Cleaning</h3>
              <div style={{ display: "grid", gap: 14 }}>
                {[
                  "Synthetic chemicals in carpet fibers",
                  "VOCs released into indoor air",
                  "Toxic residue absorbed through skin",
                  "Harsh fragrances masking chemicals",
                  "Contaminants washed into groundwater",
                  "24+ hours to dry (mold risk)",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ color: "#CC0000", fontWeight: 700 }}>✗</span>
                    <span style={{ color: "#555", fontSize: "0.95rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Spot On */}
            <div style={{ background: "linear-gradient(135deg, #1B2A4A, #2a3f6f)", borderRadius: 16, padding: "40px 32px" }}>
              <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem", marginBottom: 20 }}>✅ Spot On Eco-Safe</h3>
              <div style={{ display: "grid", gap: 14 }}>
                {[
                  "100% biodegradable products",
                  "Zero VOCs or toxic off-gassing",
                  "Safe for children and pets immediately",
                  "No synthetic fragrances",
                  "Environmentally responsible disposal",
                  "Dry in ~4 hours (80% less water)",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ color: "#CC0000", fontWeight: 700 }}>✓</span>
                    <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ background: "#F5F5F5", padding: "88px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-tag">Benefits</div>
            <h2 className="section-title">Better for Everyone</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { icon: "👶", title: "Safe for Children", desc: "Kids play on the floor constantly. Our products leave zero toxic residue — safe from the moment it dries." },
              { icon: "🐾", title: "Safe for Pets", desc: "Dogs and cats sleep on your carpet. Eco-safe means no chemicals that could irritate their skin or harm them if ingested." },
              { icon: "🌬️", title: "Better Air Quality", desc: "No VOCs means cleaner indoor air. Your home actually smells better — not just chemically masked." },
              { icon: "🌎", title: "Better for the Planet", desc: "Biodegradable products break down naturally. Nothing harmful enters the soil or water supply." },
              { icon: "💧", title: "Water Conservation", desc: "Combined with our 80% less water method, we're reducing both chemical and water waste." },
              { icon: "✅", title: "Just as Effective", desc: "Eco-safe doesn't mean weaker. Our products lift deep stains, odors, and allergens — without the chemicals." },
            ].map((item) => (
              <div key={item.title} className="card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.8rem", marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ color: "#1B2A4A", fontWeight: 700, fontSize: "1.05rem", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.95rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #CC0000, #AA0000)", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, marginBottom: 16 }}>
            Your Family Deserves a Healthier Clean
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: 32 }}>
            Call Garo today for eco-safe carpet and tile cleaning in Fresno and the Central Valley.
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
