import HeroSection from "../../components/HeroSection";
import DanovaKalkulackaCard from "../../components/DanovaKalkulackaCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AdBanner from "../../components/AdBanner"; // ← PRIDAJ tento riadok

// ----- SEO (Next.js App Router 2024/2025) -----
export const metadata = {
  title: "Daňová kalkulačka | Univerzálna kalkulačka",
  description:
    "Rýchla a presná daňová kalkulačka pre fyzické osoby, živnostníkov aj firmy. Spočítajte si svoju daň z príjmu jednoducho online. Najmodernejší výpočet dane na Slovensku.",
  keywords: [
    "daňová kalkulačka",
    "výpočet dane",
    "dane 2024",
    "živnostník",
    "SZČO",
    "firma",
    "daň z príjmu",
    "online kalkulačka",
    "financie",
    "účtovníctvo"
  ],
  openGraph: {
    title: "Daňová kalkulačka",
    description:
      "Vypočítajte si daň z príjmu rýchlo a jednoducho. Univerzálna kalkulačka pre SZČO aj firmy.",
    url: "https://univerzalkalkulacka.sk/danova-kalkulacka",
    siteName: "Univerzálna kalkulačka",
    images: [
      {
        url: "/images/hero.png", // Nahraj obrázok do /public/
        width: 1200,
        height: 630,
        alt: "Daňová kalkulačka - Univerzálna kalkulačka"
      }
    ],
    locale: "sk_SK",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Daňová kalkulačka",
    description:
      "Rýchla a moderná kalkulačka na výpočet dane pre SZČO, firmy aj zamestnancov.",
    images: ["/og-image-danova.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    }
  },
  alternates: {
    canonical: "https://univerzalkalkulacka.sk/danova-kalkulacka"
  }
};
// -----------------------------------------------

export default function DanovaPage() {
  return (
    <main
      className="relative flex flex-col items-center justify-center min-h-screen w-full"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <div className="relative z-10 w-full flex flex-col items-center">
        <HeroSection />
        {/* REKLAMA pod hero sekciou */}
        <AdBanner />
        <DanovaKalkulackaCard />
      </div>
      <Footer />
    </main>
  );
}
