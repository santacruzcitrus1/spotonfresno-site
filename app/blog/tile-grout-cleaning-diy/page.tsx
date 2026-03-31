import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tile & Grout Cleaning: What You Can DIY (and When to Call a Pro)",
  description:
    "Learn which tile and grout cleaning tasks you can handle yourself and when it's time to call a professional. Tips from Spot On Carpet & Tile Cleaning in Fresno, CA.",
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
            Tile & Grout Cleaning: What You Can DIY (and When to Call a Pro)
          </h1>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>March 2026 · 4 min read</div>
        </div>
      </section>

      {/* Article */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 750, margin: "0 auto" }}>
          <p style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.9, marginBottom: 32 }}>
            Tile floors are durable, but grout lines are a magnet for dirt, grime, and mildew. The good news? Some maintenance is easy to do yourself. The key is knowing when DIY stops working and professional cleaning starts.
          </p>

          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1B2A4A", marginBottom: 12 }}>What You Can Do Yourself</h2>

          <div style={{ background: "#F5F5F5", borderRadius: 12, padding: "28px 24px", marginBottom: 28 }}>
            <h3 style={{ color: "#CC0000", fontWeight: 700, fontSize: "1rem", marginBottom: 12 }}>✅ Weekly Maintenance</h3>
            <ul style={{ color: "#555", lineHeight: 2, paddingLeft: 20, fontSize: "1rem" }}>
              <li>Sweep or vacuum tile floors 2-3 times per week to prevent grit buildup</li>
              <li>Mop with warm water and a pH-neutral cleaner (avoid bleach on colored grout)</li>
              <li>Wipe up spills immediately — grout is porous and absorbs stains</li>
            </ul>
          </div>

          <div style={{ background: "#F5F5F5", borderRadius: 12, padding: "28px 24px", marginBottom: 28 }}>
            <h3 style={{ color: "#CC0000", fontWeight: 700, fontSize: "1rem", marginBottom: 12 }}>✅ Monthly Deep Clean (DIY)</h3>
            <ul style={{ color: "#555", lineHeight: 2, paddingLeft: 20, fontSize: "1rem" }}>
              <li>Make a paste with baking soda and water, apply to grout lines</li>
              <li>Spray white vinegar over the paste — let it fizz for 5 minutes</li>
              <li>Scrub with a stiff brush (old toothbrush works for small areas)</li>
              <li>Rinse thoroughly and dry with a clean cloth</li>
            </ul>
          </div>

          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1B2A4A", marginBottom: 12, marginTop: 36 }}>When to Call a Pro</h2>
          <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 20, fontSize: "1.02rem" }}>
            DIY works for surface-level maintenance. But grout is porous — over time, dirt and bacteria penetrate deeper than any scrub brush can reach. Here are the signs it&apos;s time to call a professional:
          </p>

          <div style={{ display: "grid", gap: 16, marginBottom: 32 }}>
            {[
              { icon: "🟤", title: "Grout has changed color", desc: "If your grout was white and is now brown, grey, or black — the staining is too deep for DIY." },
              { icon: "🦠", title: "Mold or mildew smell", desc: "If you can see or smell mold in grout lines, especially in bathrooms, professional extraction is needed." },
              { icon: "🧽", title: "Scrubbing doesn't help", desc: "If you've tried baking soda, vinegar, and commercial cleaners with no improvement — the dirt is embedded." },
              { icon: "📏", title: "Large areas", desc: "Scrubbing a full kitchen floor on your hands and knees isn't practical. Pros have equipment that covers large areas efficiently." },
              { icon: "🏠", title: "Before sealing", desc: "If you want to seal your grout (highly recommended), it needs to be professionally cleaned first for the seal to bond properly." },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ fontSize: "1.6rem", minWidth: 32 }}>{item.icon}</div>
                <div>
                  <div style={{ fontWeight: 700, color: "#1B2A4A", marginBottom: 4 }}>{item.title}</div>
                  <div style={{ color: "#555", lineHeight: 1.7, fontSize: "0.95rem" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: "#F5F5F5",
            borderRadius: 12,
            padding: "32px 28px",
            borderLeft: "4px solid #CC0000",
            marginTop: 40,
          }}>
            <h3 style={{ color: "#1B2A4A", fontWeight: 800, fontSize: "1.1rem", marginBottom: 12 }}>Pro Tip from Garo</h3>
            <p style={{ color: "#555", lineHeight: 1.8 }}>
              &ldquo;The biggest mistake homeowners make is using too much water on tile floors. Water seeps into grout and sits there. That&apos;s how you get mold. Our low-moisture method cleans the grout without soaking it — it&apos;s the same reason we use it on carpet.&rdquo;
            </p>
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <h3 style={{ color: "#1B2A4A", fontWeight: 800, fontSize: "1.3rem", marginBottom: 16 }}>Need your tile & grout professionally cleaned?</h3>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Schedule Now</Link>
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
