import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Areas | Central Valley Carpet & Tile Cleaning",
  description:
    "Spot On Carpet & Tile Cleaning serves Fresno, Clovis, Madera, Selma, Sanger, Reedley, Kerman, Fowler, Tulare, and Visalia. Eco-friendly, low-moisture cleaning across the Central Valley. Call (559) 721-4400.",
};

const cities = [
  { name: "Fresno", slug: "carpet-cleaning-fresno", desc: "Our home base. Fresno families trust Spot On for eco-safe carpet and tile cleaning.", pop: "545K+" },
  { name: "Clovis", slug: "carpet-cleaning-clovis", desc: "Just next door. Clovis homes get the same 5-star service Fresno knows and loves.", pop: "120K+" },
  { name: "Madera", slug: "carpet-cleaning-madera", desc: "Serving Madera County with low-moisture cleaning that dries fast and cleans deep.", pop: "67K+" },
  { name: "Selma", slug: "carpet-cleaning-selma", desc: "The Raisin Capital deserves clean carpets. Spot On delivers for Selma families.", pop: "25K+" },
  { name: "Sanger", slug: "carpet-cleaning-sanger", desc: "From residential to commercial, Sanger counts on Spot On for professional cleaning.", pop: "27K+" },
  { name: "Reedley", slug: "carpet-cleaning-reedley", desc: "The World's Fruit Basket gets eco-friendly cleaning from a trusted local pro.", pop: "26K+" },
  { name: "Kerman", slug: "carpet-cleaning-kerman", desc: "Small-town values, professional-grade cleaning. Kerman is Spot On territory.", pop: "16K+" },
  { name: "Fowler", slug: "carpet-cleaning-fowler", desc: "Fowler families get fair pricing and biodegradable products on every job.", pop: "7K+" },
  { name: "Tulare", slug: "carpet-cleaning-tulare", desc: "Extending our reach to Tulare with the same quality clean Fresno trusts.", pop: "68K+" },
  { name: "Visalia", slug: "carpet-cleaning-visalia", desc: "The Gateway to the Sequoias gets Spot On's eco-safe, low-moisture cleaning.", pop: "145K+" },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #1B2A4A 0%, #2a3f6f 50%, #1B2A4A 100%)",
        padding: "100px 24px 80px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="section-tag" style={{ background: "rgba(204,0,0,0.2)", color: "#fff" }}>Service Areas</div>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: 20,
          }}>
            Proudly Serving the<br />
            <span style={{ color: "#CC0000" }}>Central Valley</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 36px" }}>
            From Fresno to Visalia, Garo brings the same 5-star, eco-friendly cleaning to every community he serves.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Schedule Now</Link>
            <a href="tel:5597214400" className="btn-white">📞 (559) 721-4400</a>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section style={{ padding: "88px 24px", background: "#F5F5F5" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {cities.map((city) => (
              <Link key={city.slug} href={`/service-areas/${city.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card" style={{ borderTop: "4px solid #CC0000", height: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                    <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1B2A4A" }}>{city.name}</h2>
                    <span style={{ background: "rgba(204,0,0,0.08)", color: "#CC0000", fontSize: "0.75rem", fontWeight: 700, padding: "4px 10px", borderRadius: 50 }}>
                      Pop. {city.pop}
                    </span>
                  </div>
                  <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: 16 }}>{city.desc}</p>
                  <span style={{ color: "#CC0000", fontWeight: 700, fontSize: "0.9rem" }}>View Details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Services */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div className="section-tag">Every City Gets</div>
          <h2 className="section-title">The Full Spot On Treatment</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginTop: 32 }}>
            {[
              "🏠 Carpet Cleaning",
              "🔲 Tile & Grout Cleaning",
              "🛋️ Upholstery Cleaning",
              "🏗️ Aggregate Cleaning",
              "🐾 Pet Stain & Odor Removal",
              "🏢 Commercial Cleaning",
            ].map((s) => (
              <div key={s} style={{
                background: "#F5F5F5", borderRadius: 10, padding: "16px 20px",
                fontWeight: 600, color: "#1B2A4A", fontSize: "0.95rem",
              }}>
                {s}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 36 }}>
            <Link href="/services" className="btn-secondary">Learn More About Our Services</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #CC0000, #AA0000)", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, marginBottom: 16 }}>
            Not Sure If We Serve Your Area?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: 32 }}>
            Call Garo — if he can get there, he&apos;ll get it clean. We&apos;re always expanding our coverage.
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
