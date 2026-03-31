import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why Eco-Friendly Carpet Cleaning Matters for Your Family",
  description:
    "Learn why biodegradable, eco-friendly carpet cleaning products are better for your kids, pets, and indoor air quality. Spot On Carpet & Tile Cleaning in Fresno uses 100% eco-safe products.",
};

export default function BlogPost() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "#1B2A4A",
        padding: "100px 24px 70px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 750, margin: "0 auto" }}>
          
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
            Why Eco-Friendly Carpet Cleaning Matters for Your Family
          </h1>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>March 2026 · 4 min read</div>
        </div>
      </section>

      {/* Article */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 750, margin: "0 auto" }}>
          <p style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.9, marginBottom: 28 }}>
            When you get your carpets cleaned, the last thing you think about is what&apos;s left behind. But the chemicals used in traditional carpet cleaning can linger in your fibers for weeks — and your kids and pets are the ones breathing them in.
          </p>

          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1B2A4A", marginBottom: 12 }}>What &ldquo;Eco-Friendly&rdquo; Actually Means</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 28, fontSize: "1.02rem" }}>
            Not all &ldquo;green&rdquo; products are created equal. At Spot On, eco-friendly means 100% biodegradable products that break down naturally without releasing harmful compounds. No VOCs (volatile organic compounds), no synthetic fragrances, no toxic residue. When we leave, your carpet is clean — not coated in chemicals.
          </p>

          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1B2A4A", marginBottom: 12 }}>Why It Matters for Kids & Pets</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 28, fontSize: "1.02rem" }}>
            Children spend a huge amount of time on the floor — crawling, playing, rolling around. Pets sleep on the carpet. Traditional cleaning chemicals are absorbed through skin contact and inhaled from off-gassing fibers. Biodegradable products eliminate this risk entirely. Your carpet is safe to touch and breathe around from the moment it dries.
          </p>

          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1B2A4A", marginBottom: 12 }}>Indoor Air Quality</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 28, fontSize: "1.02rem" }}>
            The EPA has found that indoor air can be 2-5x more polluted than outdoor air. Your carpet acts like a filter, trapping dust, allergens, and pollutants. Cleaning it with more chemicals adds to the problem. Our eco-safe products remove the trapped contaminants without adding new ones — actually improving your indoor air quality.
          </p>

          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1B2A4A", marginBottom: 12 }}>Better for the Central Valley</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 28, fontSize: "1.02rem" }}>
            Fresno and the Central Valley already deal with some of California&apos;s worst air quality. Adding chemical-heavy cleaning to the mix doesn&apos;t help. Biodegradable products break down harmlessly in the environment. Combined with our low-moisture method that uses 80% less water, it&apos;s a cleaner process from start to finish.
          </p>

          <div style={{
            background: "linear-gradient(135deg, #1B2A4A, #2a3f6f)",
            borderRadius: 12,
            padding: "32px 28px",
            marginBottom: 28,
          }}>
            <h3 style={{ color: "#fff", fontWeight: 800, fontSize: "1.1rem", marginBottom: 12 }}>The Spot On Promise</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {["100% biodegradable products", "Zero toxic residue", "Safe for children & pets", "Improved indoor air quality", "80% less water usage", "Dries in ~4 hours"].map((item) => (
                <div key={item} style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.92rem" }}>✓ {item}</div>
              ))}
            </div>
          </div>

          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 40, fontSize: "1.02rem" }}>
            Eco-friendly carpet cleaning isn&apos;t a marketing gimmick — it&apos;s a better way to care for your home, your family, and your community. And it works just as well (often better) than traditional chemicals.
          </p>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <h3 style={{ color: "#1B2A4A", fontWeight: 800, fontSize: "1.3rem", marginBottom: 16 }}>Want a healthier clean for your home?</h3>
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
