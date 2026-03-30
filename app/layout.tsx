import type { Metadata } from "next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Spot On Carpet & Tile Cleaning | Fresno, CA | (559) 721-4400",
    template: "%s | Spot On Carpet & Tile Cleaning | Fresno, CA",
  },
  description:
    "Fresno's top-rated carpet, tile, and upholstery cleaning service. 5.0 stars, eco-friendly products, 80% less water. Licensed & insured. Call (559) 721-4400.",
  keywords: [
    "carpet cleaning Fresno",
    "tile cleaning Fresno",
    "upholstery cleaning Fresno",
    "eco friendly carpet cleaning",
    "Spot On Carpet Fresno",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Spot On Carpet & Tile Cleaning",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: "'Inter', system-ui, -apple-system, sans-serif", background: "#fff", color: "#1B2A4A" }}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
