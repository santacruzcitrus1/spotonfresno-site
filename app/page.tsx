"use client";
import Link from "next/link";
import ReviewRotator from "./components/ReviewRotator";
import CityPills from "./components/CityPills";

const services = [
  { icon: "🏠", title: "Carpet Cleaning", desc: "Deep clean that lifts dirt, stains, and allergens from every fiber. Dry in as little as 4 hours." },
  { icon: "🔲", title: "Tile & Grout Cleaning", desc: "Restore your tile to like-new condition. We go where scrubbing can't reach." },
  { icon: "🛋️", title: "Upholstery Cleaning", desc: "Couches, chairs, and sofas cleaned with the same care as your floors." },
  { icon: "🏗️", title: "Aggregate Cleaning", desc: "Specialized cleaning for exposed aggregate surfaces — driveways, patios, and more." },
  { icon: "🐾", title: "Pet Stain & Odor", desc: "We specialize in complete pet stain and odor extraction. No trace left behind." },
  { icon: "🏢", title: "Commercial Cleaning", desc: "We work around your business hours. Offices, buildings, and commercial spaces." },
];

const stats = [
  { value: "5.0★", label: "Yelp Rating" },
  { value: "28+", label: "5-Star Reviews" },
  { value: "80%", label: "Less Water Used" },
  { value: "~4hr", label: "Avg Dry Time" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Spot On Carpet and Tile Cleaning",
  telephone: "(559) 721-4400",
  address: {
    "@type": "PostalAddress",
    streetAddress: "5531 N Avocado Ln",
    addressLocality: "Fresno",
    addressRegion: "CA",
    postalCode: "93722",
    addressCountry: "US",
  },
  areaServed: [
    "Fresno", "Clovis", "Madera", "Selma", "Sanger",
    "Reedley", "Kerman", "Fowler", "Tulare", "Visalia",
  ],
  openingHours: ["Mo-Fr 07:30-18:00", "Sa 08:00-13:00"],
  priceRange: "$50–$75/room",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "28",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ===== HERO ===== */}
      <section style={{
        background: "linear-gradient(135deg, #1B2A4A 0%, #2a3f6f 50%, #1B2A4A 100%)",
        padding: "100px 24px 90px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Background pattern */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(204,0,0,0.12) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04) 0%, transparent 50%)",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", textAlign: "center" }}>
          {/* Badge */}
          <div className="animate-fade-up" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(204,0,0,0.2)", border: "1px solid rgba(204,0,0,0.4)",
            borderRadius: 50, padding: "6px 18px", marginBottom: 28,
          }}>
            <span style={{ color: "#CC0000", fontSize: "1rem" }}>★★★★★</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.85rem", fontWeight: 600 }}>5.0 Rating · 28 Yelp Reviews</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up-delay-1" style={{
            fontSize: "clamp(2.2rem, 6vw, 4rem)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: 8,
            letterSpacing: "-0.02em",
          }}>
            Fresno Born.
          </h1>
          <h1 className="animate-fade-up-delay-2" style={{
            fontSize: "clamp(2.2rem, 6vw, 4rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 8,
            letterSpacing: "-0.02em",
          }}>
            <span style={{ color: "#CC0000" }}>Community Driven.</span>
          </h1>
          <h1 className="animate-fade-up-delay-3" style={{
            fontSize: "clamp(2.2rem, 6vw, 4rem)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: 28,
            letterSpacing: "-0.02em",
          }}>
            Spot On Every Time.
          </h1>

          <p className="animate-fade-up-delay-3" style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            maxWidth: 620,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}>
            Carpet, tile, and upholstery cleaning with biodegradable products — safe for your family, your pets, and the Central Valley we call home.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:5597214400" className="btn-primary" style={{ fontSize: "1.05rem", padding: "15px 36px" }}>
              📞 Call (559) 721-4400
            </a>
            <Link href="/contact" className="btn-white" style={{ fontSize: "1.05rem", padding: "15px 36px" }}>
              Get a Free Quote
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", marginTop: 40 }}>
            {["✅ Licensed & Insured", "🌿 Eco-Friendly Products", "⚡ Next-Day Availability", "💧 Dries in ~4 Hours"].map((badge) => (
              <span key={badge} style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.88rem", fontWeight: 500 }}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section style={{ background: "#CC0000", padding: "28px 24px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, textAlign: "center" }}>
          {stats.map((stat) => (
            <div key={stat.value}>
              <div style={{ color: "#fff", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, lineHeight: 1 }}>{stat.value}</div>
              <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.8rem", fontWeight: 600, marginTop: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section style={{ padding: "88px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-tag">What We Do</div>
            <h2 className="section-title">Cleaning Services You Can Count On</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Every service uses 100% biodegradable, pet-safe products. No harsh chemicals, no heavy water saturation — just results.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {services.map((service) => (
              <div key={service.title} className="card" style={{ 
                background: "#1B2A4A", 
                borderTop: "4px solid #1B2A4A",
                padding: "24px",
                borderRadius: "12px",
                transition: "all 0.3s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 24px 0 rgba(204,0,0,0.6), inset 0 0 24px 0 rgba(204,0,0,0.1)";
                e.currentTarget.style.borderColor = "#CC0000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
                e.currentTarget.style.borderColor = "#1B2A4A";
              }}
              >
                <div style={{ fontSize: "2.4rem", marginBottom: 14 }}>{service.icon}</div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginBottom: 10 }}>{service.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontSize: "0.95rem" }}>{service.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 44 }}>
            <Link href="/services" className="btn-primary" style={{ marginRight: 16 }}>See All Services</Link>
            <Link href="/contact" className="btn-secondary">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      {/* ===== WHO IS GARO? ===== */}
      <section style={{ background: "#F5F5F5", padding: "88px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          {/* Photo placeholder */}
          <div style={{
            background: "#1B2A4A",
            borderRadius: 16,
            height: 420,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "rgba(255,255,255,0.4)",
            fontSize: "0.9rem",
            gap: 12,
          }}>
            <div style={{ fontSize: "4rem" }}>📸</div>
            <span>Photo coming soon</span>
          </div>

          {/* Content */}
          <div>
            <div className="section-tag">The Man Behind Spot On</div>
            <h2 className="section-title">More Than Clean —<br />Built for Fresno</h2>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 20, fontSize: "1.05rem" }}>
              Garo has called Fresno home his entire life. When he launched Spot On Carpet & Tile Cleaning, the mission was clear — serve the same neighbors, families, and community that built this valley.
            </p>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 20, fontSize: "1.05rem" }}>
              Beyond the job, Garo volunteers at church and coaches the Tanya Braves 8th grade football team — giving back to the Central Valley the same way it gave to him.
            </p>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 32, fontSize: "1.05rem" }}>
              When you call Spot On, you're not calling a franchise. You're calling your neighbor.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/about" className="btn-primary">Meet Garo</Link>
              <a href="tel:5597214400" className="btn-secondary">Call (559) 721-4400</a>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .garo-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ===== CREDIBILITY ===== */}
      <section style={{ padding: "88px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-tag">Why Spot On</div>
            <h2 className="section-title">A Better Clean, A Better Way</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
            <div 
              style={{ padding: "36px 32px", background: "linear-gradient(135deg, #1B2A4A, #2a3f6f)", borderRadius: 16, color: "#fff", transition: "all 0.3s ease", cursor: "pointer" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 28px 0 rgba(204,0,0,0.5), inset 0 0 28px 0 rgba(204,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)";
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>🌿</div>
              <h3 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 12 }}>100% Eco-Safe Products</h3>
              <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>
                Every product we use is biodegradable and safe for children, pets, and the environment. No toxic residue — just clean.
              </p>
              <Link href="/eco-safe-cleaning" style={{ display: "inline-block", marginTop: 20, color: "#CC0000", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
                Learn More →
              </Link>
            </div>

            <div 
              style={{ padding: "36px 32px", background: "linear-gradient(135deg, #CC0000, #AA0000)", borderRadius: 16, color: "#fff", transition: "all 0.3s ease", cursor: "pointer" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 28px 0 rgba(204,0,0,0.6), inset 0 0 28px 0 rgba(204,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)";
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>💧</div>
              <h3 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 12 }}>80% Less Water</h3>
              <p style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.7 }}>
                Our low-moisture method uses 80% less water than traditional steam cleaning. Your carpets dry in about 4 hours — not 24.
              </p>
              <Link href="/low-moisture-cleaning" style={{ display: "inline-block", marginTop: 20, color: "#fff", fontWeight: 700, textDecoration: "underline", fontSize: "0.9rem" }}>
                Learn More →
              </Link>
            </div>

            <div 
              style={{ padding: "36px 32px", border: "2px solid #e8e8e8", borderRadius: 16, transition: "all 0.3s ease", cursor: "pointer" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 28px 0 rgba(204,0,0,0.5), inset 0 0 28px 0 rgba(204,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>🏅</div>
              <h3 style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: 12, color: "#1B2A4A" }}>Licensed & Insured</h3>
              <p style={{ color: "#555", lineHeight: 1.7 }}>
                Fully licensed and insured for your peace of mind. We stand behind every job — if it's not right, we make it right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REVIEW ROTATOR ===== */}
      <ReviewRotator />

      {/* ===== SERVICE AREAS PREVIEW ===== */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <div className="section-tag">Where We Work</div>
          <h2 className="section-title">Proudly Serving the Central Valley</h2>
          <p className="section-subtitle" style={{ margin: "0 auto 40px" }}>
            From Fresno to the surrounding communities — Garo brings the same 5-star service to every city he serves.
          </p>
          <CityPills />
          <Link href="/service-areas" className="btn-secondary">View All Service Areas</Link>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section style={{ background: "linear-gradient(135deg, #1B2A4A, #2a3f6f)", padding: "88px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, marginBottom: 16 }}>
            Ready for a Spot On Clean?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", marginBottom: 36, lineHeight: 1.7 }}>
            Call or text Garo today. Quick response, fair pricing, and results that speak for themselves.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:5597214400" className="btn-primary" style={{ fontSize: "1.1rem", padding: "16px 40px" }}>
              📞 Call (559) 721-4400
            </a>
            <Link href="/contact" className="btn-white" style={{ fontSize: "1.1rem", padding: "16px 40px" }}>
              Schedule Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
