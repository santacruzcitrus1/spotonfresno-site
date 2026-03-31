import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../../components/AnimateIn";

export const metadata: Metadata = {
  title: "Carpet Cleaning Selma, CA | Eco-Friendly | (559) 721-4400",
  description:
    "Professional carpet, tile, and upholstery cleaning in Selma, CA. 5.0 stars, biodegradable products, 80% less water, dries in ~4 hours. Licensed & insured. Call (559) 721-4400.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Spot On Carpet and Tile Cleaning",
  telephone: "(559) 721-4400",
  address: { "@type": "PostalAddress", addressLocality: "Fresno", addressRegion: "CA", postalCode: "93722", addressCountry: "US" },
  areaServed: { "@type": "City", name: "Selma", sameAs: "https://en.wikipedia.org/wiki/Selma,_California" },
  openingHours: ["Mo-Fr 07:30-18:00", "Sa 08:00-13:00"],
  priceRange: "$50–$75/room",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "28" },
};

export default function SelmaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section style={{ background: "#1B2A4A", padding: "100px 24px 80px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
            Carpet Cleaning in Selma<br /><span style={{ color: "#CC0000" }}>The Raisin Capital&apos;s Cleaning Pro</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 36px" }}>
            Known as the Raisin Capital of the World, Selma is a tight-knit community that values local business. Spot On is proud to serve Selma with honest, eco-friendly cleaning.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Schedule Now</Link>
            <a href="tel:5597214400" className="btn-white">📞 (559) 721-4400</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#1B2A4A", marginBottom: 16 }}>Carpet Cleaning for Selma Families</h2>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: 20 }}>
            Selma&apos;s rich agricultural heritage and strong community spirit make it one of the Central Valley&apos;s most welcoming cities. Families here work hard and deserve a carpet cleaner who respects their home and their time. That&apos;s exactly what Spot On delivers.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: 20 }}>
            Our low-moisture method cleans deep without soaking your carpet. Using 80% less water than steam cleaning, your floors dry in about 4 hours — not overnight. All products are biodegradable and safe for the whole family, including pets.
          </p>
          <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1.05rem" }}>
            From residential homes to local businesses on Floral Avenue, Spot On provides Selma with professional cleaning at fair prices. $50–$75 per room, no hidden fees, no upsells — just results.
          </p>
        </div>
      </section>

      <section style={{ background: "#F5F5F5", padding: "72px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div className="section-tag">Services in Selma</div>
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
            ].map((s, i) => (
              <AnimateIn key={s.title} direction="up" delay={i * 80}>
              <div className="card-dark">
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>{s.icon}</div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontSize: "0.92rem" }}>{s.desc}</p>
              </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "72px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="section-tag">Why Selma Chooses Spot On</div>
          <div className="grid-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 24 }}>
            {["⭐ 5.0 Stars — 28 Yelp Reviews", "🌿 100% Eco-Friendly Products", "💧 80% Less Water Used", "⚡ Dry in ~4 Hours", "✅ Licensed & Insured", "💰 $50–$75 Per Room"].map((item) => (
              <div key={item} style={{ background: "#F5F5F5", borderRadius: 8, padding: "14px 18px", fontWeight: 600, color: "#1B2A4A", fontSize: "0.95rem" }}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, #CC0000, #AA0000)", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, marginBottom: 16 }}>Ready for a Spot On Clean in Selma?</h2>
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
