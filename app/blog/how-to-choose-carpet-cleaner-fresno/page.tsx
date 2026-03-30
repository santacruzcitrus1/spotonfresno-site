import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Choose a Carpet Cleaner in Fresno: 7 Things to Look For",
  description:
    "Not all carpet cleaners are created equal. Learn 7 key things to look for when choosing a carpet cleaner in Fresno, CA — from licensing to eco-friendly products.",
};

const tips = [
  { num: "1", title: "Check for a Valid License & Insurance", body: "Any legitimate carpet cleaner in Fresno should be licensed and insured. This protects your home in case of accidental damage. If they can't show you proof, walk away." },
  { num: "2", title: "Ask About Their Cleaning Method", body: "Traditional steam cleaning soaks your carpet and takes 24+ hours to dry — creating conditions for mold growth. Low-moisture methods use 80% less water and dry in about 4 hours. Always ask." },
  { num: "3", title: "Read Real Reviews (Not Just Stars)", body: "A 5-star rating is great, but read what people actually say. Look for specific comments about professionalism, timeliness, and results. Spot On has 28 five-star reviews on Yelp with detailed, genuine feedback." },
  { num: "4", title: "Ask What Products They Use", body: "Many cleaners use harsh chemicals that leave toxic residue in your carpet fibers — residue your kids and pets roll around on. Ask if products are biodegradable and eco-safe. If they can't tell you what's in the bottle, that's a red flag." },
  { num: "5", title: "Get a Clear, Written Estimate", body: "Avoid companies that give a lowball phone quote and then upsell on-site. A good cleaner will ask about room sizes, condition, and give you an honest per-room estimate upfront. Most rooms should run $50–$75." },
  { num: "6", title: "Local > National Chain", body: "A local Fresno cleaner has a reputation to protect in their own community. National franchises rotate staff and prioritize volume. Local means accountability." },
  { num: "7", title: "Look for Community Involvement", body: "A carpet cleaner who coaches youth football and volunteers at church is someone who cares about more than just your wallet. Community involvement signals a business owner who's invested in Fresno's future." },
];

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
          <div className="section-tag" style={{ background: "rgba(204,0,0,0.2)", color: "#fff" }}>Guides</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 16 }}>
            How to Choose a Carpet Cleaner in Fresno: 7 Things to Look For
          </h1>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>March 2026 · 5 min read</div>
        </div>
      </section>

      {/* Article */}
      <section style={{ padding: "64px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 750, margin: "0 auto" }}>
          <p style={{ color: "#555", fontSize: "1.1rem", lineHeight: 1.9, marginBottom: 32 }}>
            Searching for &ldquo;carpet cleaning Fresno&rdquo; returns dozens of options. Some are great. Some will leave your carpets wetter than they started. Here&apos;s how to tell the difference before you spend a dollar.
          </p>

          {tips.map((tip) => (
            <div key={tip.num} style={{ marginBottom: 36 }}>
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{
                  width: 44, height: 44, minWidth: 44,
                  borderRadius: "50%",
                  background: "#CC0000",
                  color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 900, fontSize: "1.1rem",
                }}>
                  {tip.num}
                </div>
                <div>
                  <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1B2A4A", marginBottom: 8 }}>{tip.title}</h2>
                  <p style={{ color: "#555", lineHeight: 1.8, fontSize: "1.02rem" }}>{tip.body}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Conclusion */}
          <div style={{
            background: "#F5F5F5",
            borderRadius: 12,
            padding: "32px 28px",
            borderLeft: "4px solid #CC0000",
            marginTop: 48,
          }}>
            <h3 style={{ color: "#1B2A4A", fontWeight: 800, fontSize: "1.15rem", marginBottom: 12 }}>The Bottom Line</h3>
            <p style={{ color: "#555", lineHeight: 1.8 }}>
              The best carpet cleaner in Fresno isn&apos;t the cheapest — it&apos;s the one that shows up on time, uses safe products, gives you an honest price, and stands behind the work. That&apos;s what Spot On is built on.
            </p>
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <h3 style={{ color: "#1B2A4A", fontWeight: 800, fontSize: "1.3rem", marginBottom: 16 }}>Ready to see the Spot On difference?</h3>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">Schedule Now</Link>
              <a href="tel:5597214400" className="btn-secondary">Call (559) 721-4400</a>
            </div>
          </div>

          {/* Back */}
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/blog" style={{ color: "#CC0000", fontWeight: 600, textDecoration: "none" }}>← Back to Blog</Link>
          </div>
        </div>
      </section>
    </>
  );
}
