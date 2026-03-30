"use client";
import Link from "next/link";

const cities = ["Fresno", "Clovis", "Madera", "Selma", "Sanger", "Reedley", "Kerman", "Fowler", "Tulare", "Visalia"];

export default function CityPills() {
  return (
    <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}>
      {cities.map((city) => (
        <Link
          key={city}
          href={`/service-areas/carpet-cleaning-${city.toLowerCase()}`}
          style={{
            padding: "10px 20px",
            background: "#F5F5F5",
            borderRadius: 50,
            color: "#1B2A4A",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "0.9rem",
            transition: "all 0.2s",
            border: "2px solid transparent",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#CC0000"; e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#F5F5F5"; e.currentTarget.style.color = "#1B2A4A"; }}
        >
          {city}
        </Link>
      ))}
    </div>
  );
}
