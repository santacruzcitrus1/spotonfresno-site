import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";

export const metadata: Metadata = {
  title: "About Garo & Spot On Carpet Cleaning | Fresno, CA",
  description:
    "Meet Garo A., the lifelong Fresno resident behind Spot On Carpet & Tile Cleaning. Community-driven, eco-friendly cleaning. Coaching youth football, volunteering at Holy Trinity Armenian Church.",
};

const timeline = [
  { icon: "🏠", title: "Lifelong Fresno Resident", desc: "Born and raised in the Central Valley. Garo knows these neighborhoods because they're his neighborhoods." },
  { icon: "🧹", title: "Founded Spot On", desc: "Launched Spot On Carpet & Tile Cleaning to bring honest, eco-friendly cleaning to Fresno families." },
  { icon: "🏈", title: "Youth Football Coach", desc: "Coaches the Tenaya Braves 8th grade football team — investing in the next generation of Central Valley athletes." },
  { icon: "⛪", title: "Holy Trinity Armenian Church", desc: "Active volunteer at Holy Trinity Armenian Church, serving his congregation and the broader Fresno community." },
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
            Meet Garo — Your Neighbor,<br />
            <span style={{ color: "#CC0000" }}>Your Cleaning Pro</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
            Fresno born, Fresno raised. When you call Spot On, you&apos;re not calling a franchise — you&apos;re calling family.
          </p>
        </div>
      </section>

      {/* Garo's Story — team photo ghosted in background */}
      <section style={{
        padding: "88px 24px",
        backgroundColor: "#fff",
        backgroundImage: "url(/spotonfresno-site/garo-bulldogs-flag.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        position: "relative",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(255,255,255,0.55)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", position: "relative", zIndex: 1 }}>

          {/* Content — left column so Garo (right in bg photo) stays visible */}
          <AnimateIn direction="left">
          <div>
            <div className="section-tag">The Owner</div>
            <h2 className="section-title">Built on Trust,<br />Not Advertising</h2>
            <p style={{ color: "#333", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: 20 }}>
              Garo didn&apos;t start Spot On because he saw a business opportunity. He started it because he knew Fresno families deserved better — better products, better service, and a cleaner who actually cares about the result.
            </p>
            <p style={{ color: "#333", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: 20 }}>
              As a lifelong Fresno resident, Garo has deep roots in this community. He coaches the Tenaya Braves 8th grade football team, volunteers at Holy Trinity Armenian Church, and treats every home he enters like it&apos;s his own.
            </p>
            <p style={{ color: "#333", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: 32 }}>
              Every product he uses is biodegradable and eco-safe. His low-moisture method uses 80% less water than traditional steam cleaning and dries in about 4 hours. It&apos;s better for your carpet, better for your family, and better for the valley.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Schedule Now</Link>
              <a href="tel:5597214400" className="btn-secondary">Call (559) 721-4400</a>
            </div>
          </div>
          </AnimateIn>

          {/* Family photo card — right column covers Amber side of bg photo */}
          <AnimateIn direction="right" delay={150}>
          <div style={{
            borderRadius: 16,
            overflow: "hidden",
            height: 450,
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          }}>
            <img
              src="/spotonfresno-site/garo-family.jpg"
              alt="Garo and his family"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
          </AnimateIn>
        </div>
      </section>

      {/* Holy Trinity Church section — photo left, text right (alternating from story section) */}
      <section style={{ background: "#1B2A4A", padding: "88px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          {/* Church photo — left */}
          <AnimateIn direction="left">
          <div style={{
            borderRadius: 16,
            overflow: "hidden",
            height: 420,
            boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
          }}>
            <img
              src="/spotonfresno-site/holy-trinity-church.jpg"
              alt="Garo volunteering at Holy Trinity Armenian Church"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
          </AnimateIn>

          {/* Content — right */}
          <AnimateIn direction="right" delay={150}>
          <div>
            <div className="section-tag" style={{ background: "rgba(204,0,0,0.25)", color: "#CC0000" }}>Faith & Community</div>
            <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginBottom: 20 }}>
              Giving Back at<br />Holy Trinity Armenian Church
            </h2>
            <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.8, fontSize: "1.05rem", marginBottom: 20 }}>
              Faith is at the center of who Garo is. As an active volunteer at Holy Trinity Armenian Church in Fresno, he gives his time to serve the congregation and the broader community — the same community he cleans carpets for every day.
            </p>
            <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.8, fontSize: "1.05rem" }}>
              When you hire Spot On, you&apos;re supporting more than a cleaning company. You&apos;re supporting a family man, a football coach, and a churchgoer who pours himself into this valley.
            </p>
          </div>
          </AnimateIn>
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
              <AnimateIn key={item.title} direction="up" delay={i * 80}>
              <div style={{
                display: "flex",
                gap: 24,
                marginBottom: i < timeline.length - 1 ? 40 : 0,
                position: "relative",
              }}>
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
                <div className="card-dark" style={{ flex: 1 }}>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
              </AnimateIn>
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
            {values.map((val, i) => (
              <AnimateIn key={val.title} direction="up" delay={i * 80}>
              <div className="card-dark" style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.8rem", marginBottom: 16 }}>{val.icon}</div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", marginBottom: 10 }}>{val.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.7, fontSize: "0.95rem" }}>{val.desc}</p>
              </div>
              </AnimateIn>
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
