"use client";
import Link from "next/link";

export default function Footer() {
  const cities = ["Fresno", "Clovis", "Madera", "Selma", "Sanger", "Reedley", "Kerman", "Fowler", "Tulare", "Visalia"];

  return (
    <footer>
      {/* Main footer */}
      <div style={{ background: "#1B2A4A", padding: "56px 24px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40, marginBottom: 48 }}>

            {/* Brand */}
            <div>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontWeight: 900, fontSize: "1.4rem", color: "#CC0000", letterSpacing: "-0.02em" }}>SPOT ON</div>
                <div style={{ fontWeight: 700, fontSize: "0.8rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em" }}>CARPET & TILE CLEANING</div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: 16 }}>
                Fresno's 5-star carpet, tile, and upholstery cleaning service. Eco-friendly products. Licensed & insured.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <a href="https://www.yelp.com/biz/spot-on-carpet-and-tile-cleaning-fresno" target="_blank" rel="noopener noreferrer"
                  style={{ background: "#CC0000", color: "#fff", padding: "8px 14px", borderRadius: 6, fontSize: "0.82rem", fontWeight: 700, textDecoration: "none" }}>
                  ⭐ Yelp
                </a>
                <a href="https://www.facebook.com/p/Spot-On-CarpetTile-Cleaning-100061523035047/" target="_blank" rel="noopener noreferrer"
                  style={{ background: "#3b5998", color: "#fff", padding: "8px 14px", borderRadius: 6, fontSize: "0.82rem", fontWeight: 700, textDecoration: "none" }}>
                  Facebook
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: 16, fontSize: "1rem" }}>Services</h4>
              {["Carpet Cleaning", "Tile & Grout Cleaning", "Upholstery Cleaning", "Aggregate Cleaning", "Commercial Cleaning", "Pet Stain & Odor Removal"].map((s) => (
                <div key={s} style={{ marginBottom: 8 }}>
                  <Link href="/services" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#CC0000")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>
                    {s}
                  </Link>
                </div>
              ))}
            </div>

            {/* Service Areas */}
            <div>
              <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: 16, fontSize: "1rem" }}>Service Areas</h4>
              {cities.map((city) => (
                <div key={city} style={{ marginBottom: 8 }}>
                  <Link href={`/service-areas/carpet-cleaning-${city.toLowerCase()}`}
                    style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "0.9rem" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#CC0000")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}>
                    {city}
                  </Link>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ color: "#fff", fontWeight: 700, marginBottom: 16, fontSize: "1rem" }}>Contact</h4>
              <div style={{ marginBottom: 12 }}>
                <a href="tel:5597214400" style={{ color: "#CC0000", fontWeight: 700, fontSize: "1.1rem", textDecoration: "none" }}>
                  (559) 721-4400
                </a>
              </div>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", marginBottom: 8 }}>📍 Serving Fresno, CA & surrounding areas</p>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", lineHeight: 1.8 }}>
                <div>Mon–Fri: 7:30 AM – 6:00 PM</div>
                <div>Saturday: 8:00 AM – 1:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
              <div style={{ marginTop: 20 }}>
                <Link href="/contact" className="btn-primary" style={{ fontSize: "0.9rem", padding: "10px 20px" }}>
                  Schedule Now
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
              © {new Date().getFullYear()} Spot On Carpet & Tile Cleaning · Fresno, CA · Licensed & Insured
            </p>
            <div style={{ display: "flex", gap: 20 }}>
              {[["Leave a Review ⭐", "https://www.yelp.com/writeareview/biz/Vzx8bVlmtH-Wkm8dr4xmcw"]].map(([label, href]) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#CC0000")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
