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

          {/* Amber tribute */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 20, marginBottom: 20, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M8 0C5.5 0 3.5 2 3.5 4.5C3.5 6.5 4.7 8.2 6.5 9.1L2 14.5C1 15.8 0.5 17.3 0.5 18.8C0.5 20.6 1.9 22 3.7 22C4.9 22 6 21.3 6.6 20.2L8 17.8L9.4 20.2C10 21.3 11.1 22 12.3 22C14.1 22 15.5 20.6 15.5 18.8C15.5 17.3 15 15.8 14 14.5L9.5 9.1C11.3 8.2 12.5 6.5 12.5 4.5C12.5 2 10.5 0 8 0Z" fill="#E8A0BF"/>
            </svg>
            <span style={{ color: "#E8A0BF", fontSize: "0.82rem", fontStyle: "italic", letterSpacing: "0.06em", fontWeight: 600 }}>
              Amber Strong
            </span>
            <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M8 0C5.5 0 3.5 2 3.5 4.5C3.5 6.5 4.7 8.2 6.5 9.1L2 14.5C1 15.8 0.5 17.3 0.5 18.8C0.5 20.6 1.9 22 3.7 22C4.9 22 6 21.3 6.6 20.2L8 17.8L9.4 20.2C10 21.3 11.1 22 12.3 22C14.1 22 15.5 20.6 15.5 18.8C15.5 17.3 15 15.8 14 14.5L9.5 9.1C11.3 8.2 12.5 6.5 12.5 4.5C12.5 2 10.5 0 8 0Z" fill="#E8A0BF"/>
            </svg>
          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>
              © {new Date().getFullYear()} Spot On Carpet & Tile Cleaning · Fresno, CA · Licensed & Insured · Built by{" "}
              <a href="https://emberseo.ai" target="_blank" rel="noopener noreferrer"
                style={{ color: "#CC0000", textDecoration: "none", fontWeight: 600 }}>
                Ember SEO
              </a>
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
