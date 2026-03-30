import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Serving the Fresno Community: More Than Just Clean Carpets",
  description:
    "Garo and Spot On Carpet & Tile Cleaning are invested in Fresno. From coaching youth football to volunteering at church — learn how Spot On gives back to the Central Valley.",
};

export default function BlogPost() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #1B2A4A 0%, #2a3f6f 50%, #1B2A4A 100%)",
        padding: "100px 24px 70px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 750, margin: "0 auto" }}>
          <div className="section-tag" style={{ background: "rgba(204,0,0,0.2)", color: "#fff" }}>Community</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
            Serving the Fresno Community: More Than Just Clean Carpets
          </h1>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>March 2026 · 3 min read</div>
        </div>
      </section>

      {/* Article */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 750, margin: "0 auto" }}>
          <p style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.9, marginBottom: 28 }}>
            For Garo, Spot On Carpet & Tile Cleaning was never just about starting a business. It was about building something meaningful in the community that raised him. Fresno isn&apos;t just where he works — it&apos;s home.
          </p>

          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1B2A4A", marginBottom: 12 }}>Coaching the Next Generation 🏈</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 28, fontSize: "1.02rem" }}>
            When he&apos;s not making carpets spotless, Garo coaches the Tanya Braves 8th grade football team. For him, coaching isn&apos;t just about winning games — it&apos;s about mentoring young athletes, teaching discipline and teamwork, and showing kids in the Central Valley that people in their community believe in them.
          </p>

          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1B2A4A", marginBottom: 12 }}>Faith & Service ⛪</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 28, fontSize: "1.02rem" }}>
            Garo is an active volunteer at his church, where he gives his time to support the congregation and serve the broader community. It&apos;s this foundation of faith and service that shapes how he runs his business — with honesty, humility, and genuine care for every customer.
          </p>

          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1B2A4A", marginBottom: 12 }}>Lifelong Fresno Roots 🌴</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 28, fontSize: "1.02rem" }}>
            Garo didn&apos;t move to Fresno for a job. He was born here, raised here, and chose to build his life and business right here. When you call Spot On, you&apos;re calling someone who knows your neighborhoods, your schools, and your community firsthand. You&apos;re calling a neighbor.
          </p>

          <div style={{
            background: "linear-gradient(135deg, #1B2A4A, #2a3f6f)",
            borderRadius: 12,
            padding: "36px 32px",
            marginBottom: 28,
            textAlign: "center",
          }}>
            <div style={{ fontSize: "2.4rem", marginBottom: 12 }}>🤝</div>
            <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.15rem", marginBottom: 12 }}>
              &ldquo;When you support local, you&apos;re not just getting a service — you&apos;re investing in your own community.&rdquo;
            </h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>— Garo A., Owner of Spot On</p>
          </div>

          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1B2A4A", marginBottom: 12 }}>How Business Meets Community</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 16, fontSize: "1.02rem" }}>
            Every decision Garo makes at Spot On reflects his commitment to Fresno:
          </p>
          <ul style={{ color: "#555", lineHeight: 2, paddingLeft: 20, marginBottom: 28, fontSize: "1rem" }}>
            <li><strong>Eco-friendly products</strong> — protecting the Central Valley&apos;s air and water quality</li>
            <li><strong>Low-moisture cleaning</strong> — conserving water in a drought-prone region</li>
            <li><strong>Fair, honest pricing</strong> — because Fresno families deserve transparency</li>
            <li><strong>Supporting local youth</strong> — coaching the next generation of Fresno athletes</li>
            <li><strong>Service over sales</strong> — building relationships, not transactions</li>
          </ul>

          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 40, fontSize: "1.02rem" }}>
            When you hire Spot On, you&apos;re supporting more than a cleaning company. You&apos;re supporting youth football, church volunteering, eco-conscious business, and a lifelong Fresno resident who puts community first.
          </p>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <h3 style={{ color: "#1B2A4A", fontWeight: 800, fontSize: "1.3rem", marginBottom: 16 }}>Ready to support local?</h3>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Get a Free Quote</Link>
              <a href="tel:5597214400" className="btn-secondary">Call (559) 721-4400</a>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/blog" style={{ color: "#CC0000", fontWeight: 600, textDecoration: "none" }}>← Back to Blog</Link>
          </div>
        </div>
      </section>
    </>
  );
}
