"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/service-areas", label: "Service Areas" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header style={{ background: "#fff", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", position: "sticky", top: 0, zIndex: 999 }}>
      {/* Top bar */}
      <div style={{ background: "#1B2A4A", padding: "8px 24px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", gap: "4px 0" }}>
        <a href="tel:5597214400" style={{ color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.03em" }}>
          📞 Call or Text: (559) 721-4400
        </a>
        <span className="nav-hours" style={{ color: "rgba(255,255,255,0.5)", margin: "0 16px" }}>|</span>
        <span className="nav-hours" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.85rem" }}>Mon–Fri 7:30AM–6PM · Sat 8AM–1PM</span>
      </div>
      <style>{`
        @media (max-width: 500px) {
          .nav-hours { display: none !important; }
        }
      `}</style>

      {/* Main nav */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontWeight: 900, fontSize: "1.4rem", color: "#CC0000", letterSpacing: "-0.02em" }}>SPOT ON</span>
            <span style={{ fontWeight: 700, fontSize: "0.85rem", color: "#1B2A4A", letterSpacing: "0.1em" }}>CARPET & TILE CLEANING</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 6 }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ color: "#1B2A4A", textDecoration: "none", fontWeight: 600, fontSize: "0.92rem", padding: "8px 12px", borderRadius: 6, transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#CC0000"; e.currentTarget.style.background = "rgba(204,0,0,0.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#1B2A4A"; e.currentTarget.style.background = "transparent"; }}
            >
              {link.label}
            </Link>
          ))}
          <a href="/contact" className="btn-primary" style={{ marginLeft: 8, padding: "9px 20px", fontSize: "0.9rem" }}>
            Get Free Quote
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none" }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          <div style={{ width: 24, height: 2, background: "#1B2A4A", marginBottom: 5, borderRadius: 2 }} />
          <div style={{ width: 24, height: 2, background: "#1B2A4A", marginBottom: 5, borderRadius: 2 }} />
          <div style={{ width: 24, height: 2, background: "#1B2A4A", borderRadius: 2 }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "#fff", borderTop: "1px solid #eee", padding: "16px 24px" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ display: "block", color: "#1B2A4A", textDecoration: "none", fontWeight: 600, fontSize: "1rem", padding: "12px 0", borderBottom: "1px solid #f0f0f0" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a href="/contact" className="btn-primary" style={{ display: "block", textAlign: "center", marginTop: 16 }}>
            Get Free Quote
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
