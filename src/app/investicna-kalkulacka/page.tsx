import HeroSection from "../../components/HeroSection";
import InvesticnaKalkulackaCard from "../../components/InvesticnaKalkulackaCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// ----- SEO (Next.js App Router 2024/2025) -----
export const metadata = {
  title: "Investičná kalkulačka | Univerzálna kalkulačka",
  description:
    "Najmodernejšia online investičná kalkulačka na Slovensku. Vypočítajte si zhodnotenie svojich investícií, úroky, výnosy a dlhodobé investovanie jednoducho a rýchlo.",
  keywords: [
    "investičná kalkulačka",
    "výpočet investície",
    "výnos z investície",
    "úroky",
    "zhodnotenie",
    "financie",
    "online kalkulačka",
    "ETF kalkulačka",
    "peniaze",
    "investovanie"
  ],
  openGraph: {
    title: "Investičná kalkulačka",
    description:
      "Vypočítajte si výnos z investícií, úroky a dlhodobé zhodnotenie. Univerzálna investičná kalkulačka online.",
    url: "https://universalkalkulacka.sk/investicna-kalkulacka",
    siteName: "Univerzálna kalkulačka",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Investičná kalkulačka - Univerzálna kalkulačka"
      }
    ],
    locale: "sk_SK",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Investičná kalkulačka",
    description:
      "Online kalkulačka pre výpočet výnosu z investícií, úrokov a dlhodobého investovania.",
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
    canonical: "https://universalkalkulacka.sk/investicna-kalkulacka"
  }
};
// -----------------------------------------------

export default function InvesticnaPage() {
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
        <InvesticnaKalkulackaCard />
      </div>
      <Footer />
    </main>
  );
}

