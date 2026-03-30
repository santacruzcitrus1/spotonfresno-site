import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carpet Cleaning Reedley, CA | Eco-Friendly | (559) 721-4400",
  description:
    "Professional carpet, tile, and upholstery cleaning in Reedley, CA. 5.0 stars, biodegradable products, 80% less water, dries in ~4 hours. Licensed & insured. Call (559) 721-4400.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Spot On Carpet and Tile Cleaning",
  telephone: "(559) 721-4400",
  address: { "@type": "PostalAddress", addressLocality: "Fresno", addressRegion: "CA", postalCode: "93722", addressCountry: "US" },
  areaServed: { "@type": "City", name: "Reedley", sameAs: "https://en.wikipedia.org/wiki/Reedley,_California" },
  openingHours: ["Mo-Fr 07:30-18:00", "Sa 08:00-13:00"],
  priceRange: "$50–$75/room",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "28" },
};

export default function ReedleyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #2a3f6f 50%, #1B2A4A 100%)", padding: "100px 24px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="section-tag" style={{ background: "rgba(204,0,0,0.2)", color: "#fff" }}>Reedley, CA</div>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
            Carpet Cleaning in Reedley<br /><span style={{ color: "#CC0000" }}>The World&apos;s Fruit Basket, Freshly Cleaned</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 36px" }}>
            Reedley — the World&apos;s Fruit Basket — deserves cleaning as fresh as its reputation. Spot On brings biodegradable, low-moisture cleaning to your door.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Schedule Now</Link>
            <a href="tel:5597214400" className="btn-white">📞 (559) 721-4400</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#1B2A4A", marginBottom: 16 }}>Eco-Friendly Cleaning in Reedley</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: 20 }}>
            Reedley is known for its beautiful murals, thriving agriculture, and strong community values. It&apos;s the kind of place where people know their neighbors and support local businesses. When Reedley families need carpet or tile cleaning, Spot On is the local choice that delivers professional results.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: 20 }}>
            We use 100% biodegradable products and a low-moisture method that uses 80% less water than traditional steam cleaning. Your carpets dry in about 4 hours — safe for kids and pets to walk on almost immediately.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1.05rem" }}>
            From homes near the Kings River to businesses downtown, Spot On gives Reedley the same 5-star treatment we bring to every Central Valley community. Fair pricing, honest service, and results you can see.
          </p>
        </div>
      </section>

      <section style={{ background: "#F5F5F5", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-tag">Services in Reedley</div>
            <h2 className="section-title">What We Offer</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { icon: "🏠", title: "Carpet Cleaning", desc: "Deep-clean every fiber. Low-moisture, eco-safe, dry in ~4 hours." },
              { icon: "🔲", title: "Tile & Grout Cleaning", desc: "Restore tile to like-new. Kitchens, bathrooms, entryways." },
              { icon: "🛋️", title: "Upholstery Cleaning", desc: "Couches, chairs, and fabric furniture — gentle yet thorough." },
              { icon: "🏗️", title: "Aggregate Cleaning", desc: "Driveways, patios, walkways — specialized surface care." },
              { icon: "🐾", title: "Pet Stain & Odor Removal", desc: "Complete extraction. No masking, no trace left behind." },
              { icon: "🏢", title: "Commercial Cleaning", desc: "Offices and businesses — flexible scheduling, volume pricing." },
            ].map((s) => (
              <div key={s.title} className="card" style={{ borderTop: "4px solid #CC0000" }}>
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ color: "#1B2A4A", fontWeight: 700, fontSize: "1.05rem", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.92rem" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="section-tag">Why Reedley Chooses Spot On</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 24 }}>
            {["⭐ 5.0 Stars — 28 Yelp Reviews", "🌿 100% Eco-Friendly Products", "💧 80% Less Water Used", "⚡ Dry in ~4 Hours", "✅ Licensed & Insured", "💰 $50–$75 Per Room"].map((item) => (
              <div key={item} style={{ background: "#F5F5F5", borderRadius: 8, padding: "14px 18px", fontWeight: 600, color: "#1B2A4A", fontSize: "0.95rem" }}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, #CC0000, #AA0000)", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, marginBottom: 16 }}>Ready for a Spot On Clean in Reedley?</h2>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: 32 }}>Call Garo today — quick response, fair pricing, guaranteed results.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-white">Get a Free Quote</Link>
            <a href="tel:5597214400" className="btn-primary" style={{ background: "#1B2A4A" }}>📞 (559) 721-4400</a>
          </div>
          <div style={{ marginTop: 24 }}>
            <Link href="/service-areas" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem" }}>← View All Service Areas</Link>
          </div>
        </div>
      </section>
    </>
  );
}
