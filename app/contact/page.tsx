import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "../components/AnimateIn";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote | (559) 721-4400",
  description:
    "Contact Spot On Carpet & Tile Cleaning for a free quote. Call (559) 721-4400 or fill out our form. Serving Fresno, Clovis, Madera, and the Central Valley. Mon-Fri 7:30AM-6PM, Sat 8AM-1PM.",
};

export default function ContactPage() {
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
            Let&apos;s Get Your Home<br />
            <span style={{ color: "#CC0000" }}>Spot On Clean</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 550, margin: "0 auto" }}>
            Call, text, or send us a message. Garo personally responds to every inquiry — usually within an hour.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{ padding: "88px 24px", background: "#fff" }}>
        <div className="grid-2col" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
          {/* Left: Contact Info */}
          <AnimateIn direction="left">
          <div>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1B2A4A", marginBottom: 28 }}>Get In Touch</h2>

            {/* Phone */}
            <div style={{ display: "flex", gap: 16, marginBottom: 28 }}>
              <div style={{
                width: 56, height: 56, minWidth: 56,
                borderRadius: 12, background: "rgba(204,0,0,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.6rem",
              }}>📞</div>
              <div>
                <div style={{ fontWeight: 700, color: "#1B2A4A", marginBottom: 4 }}>Phone</div>
                <a href="tel:5597214400" style={{ color: "#CC0000", fontWeight: 700, fontSize: "1.2rem", textDecoration: "none" }}>
                  (559) 721-4400
                </a>
                <div style={{ color: "#888", fontSize: "0.85rem", marginTop: 4 }}>Call or text anytime</div>
              </div>
            </div>

            {/* Hours */}
            <div style={{ display: "flex", gap: 16, marginBottom: 28 }}>
              <div style={{
                width: 56, height: 56, minWidth: 56,
                borderRadius: 12, background: "rgba(204,0,0,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.6rem",
              }}>🕐</div>
              <div>
                <div style={{ fontWeight: 700, color: "#1B2A4A", marginBottom: 4 }}>Business Hours</div>
                <div style={{ color: "#555", lineHeight: 1.8 }}>
                  Mon – Fri: 7:30 AM – 6:00 PM<br />
                  Saturday: 8:00 AM – 1:00 PM<br />
                  Sunday: Closed
                </div>
              </div>
            </div>

            {/* Location */}
            <div style={{ display: "flex", gap: 16, marginBottom: 40 }}>
              <div style={{
                width: 56, height: 56, minWidth: 56,
                borderRadius: 12, background: "rgba(204,0,0,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.6rem",
              }}>📍</div>
              <div>
                <div style={{ fontWeight: 700, color: "#1B2A4A", marginBottom: 4 }}>Service Area</div>
                <div style={{ color: "#555", lineHeight: 1.8 }}>
                  Fresno, Clovis, Madera, Selma, Sanger,<br />
                  Reedley, Kerman, Fowler, Tulare, Visalia<br />
                  <Link href="/service-areas" style={{ color: "#CC0000", fontWeight: 600, textDecoration: "none" }}>
                    View All Service Areas →
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <a href="tel:5597214400" className="btn-primary" style={{ fontSize: "1.1rem", padding: "16px 40px" }}>
              📞 Call (559) 721-4400
            </a>
          </div>
          </AnimateIn>

          {/* Right: Form */}
          <AnimateIn direction="right" delay={150}>
          <div className="card-dark" style={{ padding: 40 }}>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: 8 }}>Request a Free Quote</h3>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", marginBottom: 28 }}>
              Fill out the form below and Garo will get back to you within 1 business hour.
            </p>

            <form action="https://formspree.io/f/placeholder" method="POST">
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: 6, fontSize: "0.9rem" }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  style={{
                    width: "100%", padding: "12px 16px", border: "2px solid #e8e8e8",
                    borderRadius: 8, fontSize: "1rem", outline: "none",
                    fontFamily: "inherit",
                  }}
                  placeholder="Your name"
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: 6, fontSize: "0.9rem" }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  style={{
                    width: "100%", padding: "12px 16px", border: "2px solid #e8e8e8",
                    borderRadius: 8, fontSize: "1rem", outline: "none",
                    fontFamily: "inherit",
                  }}
                  placeholder="(559) 000-0000"
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: 6, fontSize: "0.9rem" }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  style={{
                    width: "100%", padding: "12px 16px", border: "2px solid #e8e8e8",
                    borderRadius: 8, fontSize: "1rem", outline: "none",
                    fontFamily: "inherit",
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <label style={{ display: "block", fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: 6, fontSize: "0.9rem" }}>
                  Service Needed
                </label>
                <select
                  name="service"
                  style={{
                    width: "100%", padding: "12px 16px", border: "2px solid #e8e8e8",
                    borderRadius: 8, fontSize: "1rem", outline: "none",
                    fontFamily: "inherit", background: "#fff",
                  }}
                >
                  <option value="">Select a service...</option>
                  <option value="carpet">Carpet Cleaning</option>
                  <option value="tile">Tile &amp; Grout Cleaning</option>
                  <option value="upholstery">Upholstery Cleaning</option>
                  <option value="aggregate">Aggregate Cleaning</option>
                  <option value="pet">Pet Stain &amp; Odor Removal</option>
                  <option value="commercial">Commercial Cleaning</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={{ display: "block", fontWeight: 600, color: "rgba(255,255,255,0.9)", marginBottom: 6, fontSize: "0.9rem" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  style={{
                    width: "100%", padding: "12px 16px", border: "2px solid #e8e8e8",
                    borderRadius: 8, fontSize: "1rem", outline: "none",
                    fontFamily: "inherit", resize: "vertical",
                  }}
                  placeholder="Tell us about the job — rooms, square footage, any special concerns..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", fontSize: "1.05rem", padding: "15px", cursor: "pointer" }}
              >
                Send My Free Quote Request
              </button>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", textAlign: "center", marginTop: 12 }}>
                No spam, no pressure. Just an honest estimate.
              </p>
            </form>
          </div>
          </AnimateIn>
        </div>
      </section>

      {/* Map / Why Choose Us */}
      <section style={{ background: "#F5F5F5", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <div className="section-tag">Why Fresno Families Choose Us</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24, marginTop: 32 }}>
            {[
              { icon: "⭐", text: "5.0 Stars, 28 Reviews" },
              { icon: "🌿", text: "Eco-Friendly Products" },
              { icon: "💧", text: "80% Less Water" },
              { icon: "⚡", text: "Dries in ~4 Hours" },
              { icon: "✅", text: "Licensed & Insured" },
              { icon: "💰", text: "$50–$75 Per Room" },
            ].map((item) => (
              <div key={item.text} style={{
                background: "#fff",
                borderRadius: 12,
                padding: "24px 20px",
                textAlign: "center",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}>
                <div style={{ fontSize: "2rem", marginBottom: 10 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, color: "#1B2A4A", fontSize: "0.95rem" }}>{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
