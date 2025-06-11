import HeroSection from "../../components/HeroSection";
import PoistnaKalkulackaCard from "../../components/PoistnaKalkulackaCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AdBanner from "../../components/AdBanner"; // ← pridaj

// ----- SEO (Next.js App Router 2024/2025) -----
export const metadata = {
  title: "Poistná kalkulačka | Univerzálna kalkulačka",
  description:
    "Moderná poistná kalkulačka na výpočet poistného, poistných produktov a výhodnosti poistenia. Jednoduchý online nástroj na výber a porovnanie poistenia pre každého.",
  keywords: [
    "poistná kalkulačka",
    "poistné",
    "výpočet poistného",
    "online kalkulačka",
    "poistenie",
    "životné poistenie",
    "poistenie auta",
    "porovnanie poistenia",
    "financie",
    "univerzálna kalkulačka"
  ],
  openGraph: {
    title: "Poistná kalkulačka",
    description:
      "Online poistná kalkulačka pre výpočet a porovnanie poistenia. Vyberte si to najlepšie poistenie jednoducho a rýchlo.",
    url: "https://univerzalkalkulacka.sk/poistna-kalkulacka",
    siteName: "Univerzálna kalkulačka",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Poistná kalkulačka - Univerzálna kalkulačka"
      }
    ],
    locale: "sk_SK",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Poistná kalkulačka",
    description:
      "Výpočet a porovnanie poistného online. Moderný nástroj na poistenie pre každého.",
    images: ["/images/hero.png"]
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
    canonical: "https://univerzalkalkulacka.sk/poistna-kalkulacka"
  }
};
// -----------------------------------------------

export default function PoistnaPage() {
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
        {/* Reklama pod hero sekciou */}
        <AdBanner />
        <PoistnaKalkulackaCard />
      </div>
      <Footer />
    </main>
  );
}

