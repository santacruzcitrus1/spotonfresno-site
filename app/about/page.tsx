import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Garo & Spot On Carpet Cleaning | Fresno, CA",
  description:
    "Meet Garo A., the lifelong Fresno resident behind Spot On Carpet & Tile Cleaning. Community-driven, eco-friendly cleaning. Coaching youth football, volunteering at church, and cleaning carpets the right way.",
};

const timeline = [
  { icon: "🏠", title: "Lifelong Fresno Resident", desc: "Born and raised in the Central Valley. Garo knows these neighborhoods because they're his neighborhoods." },
  { icon: "🧹", title: "Founded Spot On", desc: "Launched Spot On Carpet & Tile Cleaning to bring honest, eco-friendly cleaning to Fresno families." },
  { icon: "🏈", title: "Youth Football Coach", desc: "Coaches the Tanya Braves 8th grade football team — investing in the next generation." },
  { icon: "⛪", title: "Church Volunteer", desc: "Active volunteer at his church, giving back to the community that raised him." },
  { icon: "⭐", title: "28 Five-Star Reviews", desc: "5.0 stars on Yelp. Every single review is 5 stars — no exceptions." },
];

const values = [
  { icon: "🤝", title: "Honest & Transparent", desc: "No hidden fees. No upsells. What we quote is what you pay." },
  { icon: "🌿", title: "Eco-Friendly First", desc: "100% biodegradable products, safe for children, pets, and our valley." },
  { icon: "💧", title: "Water-Conscious", desc: "80% less water than traditional steam. California's water matters." },
  { icon: "✅", title: "Licensed & Insured", desc: "Fully licensed, fully insured. Your home is in safe hands." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #1B2A4A 0%, #2a3f6f 50%, #1B2A4A 100%)",
        padding: "100px 24px 80px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="section-tag" style={{ background: "rgba(204,0,0,0.2)", color: "#fff" }}>About Us</div>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: 20,
          }}>
            Meet Garo — Your Neighbor,<br />
            <span style={{ color: "#CC0000" }}>Your Cleaning Pro</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
            Fresno born, Fresno raised. When you call Spot On, you're not calling a franchise — you're calling family.
          </p>
        </div>
      </section>

      {/* Garo's Story */}
      <section style={{ padding: "88px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          {/* Photo placeholder */}
          <div style={{
            background: "#1B2A4A",
            borderRadius: 16,
            height: 450,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            color: "rgba(255,255,255,0.4)",
            fontSize: "0.9rem",
            gap: 12,
          }}>
            <div style={{ fontSize: "5rem" }}>📸</div>
            <span>Garo&apos;s photo coming soon</span>
          </div>

          {/* Content */}
          <div>
            <div className="section-tag">The Owner</div>
            <h2 className="section-title">Built on Trust,<br />Not Advertising</h2>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: 20 }}>
              Garo didn&apos;t start Spot On because he saw a business opportunity. He started it because he knew Fresno families deserved better — better products, better service, and a cleaner who actually cares about the result.
            </p>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: 20 }}>
              As a lifelong Fresno resident, Garo has deep roots in this community. He coaches the Tanya Braves 8th grade football team, volunteers at his church, and treats every home he enters like it&apos;s his own.
            </p>
            <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: 32 }}>
              Every product he uses is biodegradable and eco-safe. His low-moisture method uses 80% less water than traditional steam cleaning and dries in about 4 hours. It&apos;s better for your carpet, better for your family, and better for the valley.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Schedule Now</Link>
              <a href="tel:5597214400" className="btn-secondary">Call (559) 721-4400</a>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: "#F5F5F5", padding: "88px 24px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-tag">The Journey</div>
            <h2 className="section-title">More Than a Business</h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{
              position: "absolute",
              left: 24,
              top: 0,
              bottom: 0,
              width: 3,
              background: "linear-gradient(to bottom, #CC0000, #1B2A4A)",
              borderRadius: 2,
            }} />

            {timeline.map((item, i) => (
              <div key={item.title} style={{
                display: "flex",
                gap: 24,
                marginBottom: i < timeline.length - 1 ? 40 : 0,
                position: "relative",
              }}>
                {/* Dot */}
                <div style={{
                  width: 48,
                  height: 48,
                  minWidth: 48,
                  borderRadius: "50%",
                  background: "#fff",
                  border: "3px solid #CC0000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  zIndex: 1,
                }}>
                  {item.icon}
                </div>

                {/* Content */}
                <div className="card" style={{ flex: 1 }}>
                  <h3 style={{ color: "#1B2A4A", fontWeight: 700, fontSize: "1.1rem", marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ color: "#555", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "88px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-tag">Our Values</div>
            <h2 className="section-title">What We Stand For</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
            {values.map((val) => (
              <div key={val.title} className="card" style={{ textAlign: "center", borderTop: "4px solid #CC0000" }}>
                <div style={{ fontSize: "2.8rem", marginBottom: 16 }}>{val.icon}</div>
                <h3 style={{ color: "#1B2A4A", fontWeight: 700, fontSize: "1.05rem", marginBottom: 10 }}>{val.title}</h3>
                <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.95rem" }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section style={{ background: "#1B2A4A", padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 800, marginBottom: 28 }}>Business Hours</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 360, margin: "0 auto 32px" }}>
            {[
              ["Mon – Fri", "7:30 AM – 6:00 PM"],
              ["Saturday", "8:00 AM – 1:00 PM"],
              ["Sunday", "Closed"],
            ].map(([day, hours]) => (
              <div key={day} style={{ display: "contents" }}>
                <div style={{ color: "rgba(255,255,255,0.7)", textAlign: "left", fontWeight: 600 }}>{day}</div>
                <div style={{ color: "#fff", textAlign: "right", fontWeight: 700 }}>{hours}</div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary">Schedule Now</Link>
            <a href="tel:5597214400" className="btn-white">📞 (559) 721-4400</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #CC0000, #AA0000)", padding: "72px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, marginBottom: 16 }}>
            Ready to Experience the Spot On Difference?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: 32 }}>
            Call or text Garo today for a free estimate. Quick response, honest pricing, guaranteed results.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-white">Get a Free Quote</Link>
            <a href="tel:5597214400" className="btn-primary" style={{ background: "#1B2A4A" }}>📞 Call Now</a>
          </div>
        </div>
      </section>
    </>
  );
}
