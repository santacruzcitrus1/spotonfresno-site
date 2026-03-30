import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Carpet & Tile Cleaning Tips | Fresno, CA",
  description:
    "Expert carpet and tile cleaning tips from Spot On Carpet & Tile Cleaning in Fresno. Learn about eco-friendly cleaning, DIY grout care, choosing a carpet cleaner, and more.",
};

const posts = [
  {
    slug: "how-to-choose-carpet-cleaner-fresno",
    title: "How to Choose a Carpet Cleaner in Fresno: 7 Things to Look For",
    excerpt: "Not all carpet cleaners are created equal. Here's what separates the pros from the pretenders in the Fresno market.",
    date: "March 2026",
    readTime: "5 min read",
    tag: "Guides",
  },
  {
    slug: "eco-friendly-carpet-cleaning",
    title: "Why Eco-Friendly Carpet Cleaning Matters for Your Family",
    excerpt: "Biodegradable products aren't just better for the planet — they're better for your kids, pets, and indoor air quality.",
    date: "March 2026",
    readTime: "4 min read",
    tag: "Eco-Friendly",
  },
  {
    slug: "tile-grout-cleaning-diy",
    title: "Tile & Grout Cleaning: What You Can DIY (and When to Call a Pro)",
    excerpt: "Some grout maintenance is easy. But when do you really need professional help? Here's how to know.",
    date: "March 2026",
    readTime: "4 min read",
    tag: "Tips",
  },
  {
    slug: "serving-fresno-community",
    title: "Serving the Fresno Community: More Than Just Clean Carpets",
    excerpt: "From coaching youth football to volunteering at church, here's how Spot On gives back to the Central Valley.",
    date: "March 2026",
    readTime: "3 min read",
    tag: "Community",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #1B2A4A 0%, #2a3f6f 50%, #1B2A4A 100%)",
        padding: "100px 24px 80px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="section-tag" style={{ background: "rgba(204,0,0,0.2)", color: "#fff" }}>Blog</div>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: 20,
          }}>
            Cleaning Tips &<br />
            <span style={{ color: "#CC0000" }}>Expert Advice</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 550, margin: "0 auto" }}>
            Practical advice from the team that&apos;s been keeping Fresno homes clean for years.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ padding: "88px 24px", background: "#F5F5F5" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="card" style={{ height: "100%", borderTop: "4px solid #CC0000", display: "flex", flexDirection: "column" }}>
                  <div style={{
                    display: "inline-block",
                    background: "rgba(204,0,0,0.08)",
                    color: "#CC0000",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 50,
                    marginBottom: 14,
                    width: "fit-content",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}>
                    {post.tag}
                  </div>
                  <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1B2A4A", lineHeight: 1.3, marginBottom: 12 }}>
                    {post.title}
                  </h2>
                  <p style={{ color: "#555", lineHeight: 1.7, fontSize: "0.95rem", flex: 1 }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 20, paddingTop: 16, borderTop: "1px solid #eee" }}>
                    <span style={{ color: "#888", fontSize: "0.8rem" }}>{post.date}</span>
                    <span style={{ color: "#CC0000", fontWeight: 700, fontSize: "0.85rem" }}>Read More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #CC0000, #AA0000)", padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "1.8rem", fontWeight: 900, marginBottom: 16 }}>
            Have a Cleaning Question?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 28 }}>
            Garo&apos;s happy to help — even if you&apos;re not ready to book yet. Call and ask anything.
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
