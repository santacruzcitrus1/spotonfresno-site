"use client";
import { useState, useEffect } from "react";
import { reviews } from "../data/reviews";

export default function ReviewRotator() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goToNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
      setAnimating(false);
    }, 300);
  };

  const goToPrev = () => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
      setAnimating(false);
    }, 300);
  };

  const r = reviews[current];

  return (
    <section style={{ background: "#F5F5F5", padding: "80px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <div className="section-tag">What Customers Are Saying</div>
        <h2 className="section-title" style={{ marginBottom: 48 }}>Fresno Trusts Spot On</h2>

        {/* Review card */}
        <div style={{
          background: "#fff",
          borderRadius: 16,
          padding: "48px 48px 40px",
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
          position: "relative",
          opacity: animating ? 0 : 1,
          transform: animating ? "translateY(8px)" : "translateY(0)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          minHeight: 280,
        }}>
          {/* Quote mark */}
          <div style={{ fontSize: "5rem", color: "#CC0000", lineHeight: 1, marginBottom: -16, fontFamily: "Georgia, serif", opacity: 0.15, position: "absolute", top: 20, left: 32 }}>"</div>

          {/* Stars */}
          <div style={{ fontSize: "1.4rem", marginBottom: 20, color: "#CC0000" }}>★★★★★</div>

          {/* Review text */}
          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "#444",
            lineHeight: 1.8,
            marginBottom: 28,
            fontStyle: "italic",
          }}>
            "{r.text}"
          </p>

          {/* Reviewer */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#1B2A4A", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>
              {r.name[0]}
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontWeight: 700, color: "#1B2A4A", fontSize: "0.95rem" }}>{r.name}</div>
              <div style={{ color: "#888", fontSize: "0.82rem" }}>{r.location} · {r.date}</div>
            </div>
            <div style={{ marginLeft: 8, background: "#CC0000", color: "#fff", fontSize: "0.72rem", fontWeight: 700, padding: "3px 9px", borderRadius: 4 }}>
              Yelp ★ 5.0
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, marginTop: 32 }}>
          <button onClick={goToPrev} style={{ width: 40, height: 40, borderRadius: "50%", border: "2px solid #1B2A4A", background: "transparent", cursor: "pointer", fontSize: "1.1rem", color: "#1B2A4A", display: "flex", alignItems: "center", justifyContent: "center" }}>
            ‹
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: 8 }}>
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === current ? "#CC0000" : "#ddd",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>

          <button onClick={goToNext} style={{ width: 40, height: 40, borderRadius: "50%", border: "2px solid #1B2A4A", background: "transparent", cursor: "pointer", fontSize: "1.1rem", color: "#1B2A4A", display: "flex", alignItems: "center", justifyContent: "center" }}>
            ›
          </button>
        </div>

        {/* Review CTAs */}
        <div style={{ marginTop: 40, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://www.yelp.com/writeareview/biz/Vzx8bVlmtH-Wkm8dr4xmcw" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Leave a Review on Yelp ⭐
          </a>
          <a href="https://www.yelp.com/biz/spot-on-carpet-and-tile-cleaning-fresno" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            See All 28 Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
