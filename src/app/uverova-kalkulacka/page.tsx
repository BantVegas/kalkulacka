import HeroSection from "../../components/HeroSection";
import UverovaKalkulackaCard from "../../components/UverovaKalkulackaCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// ----- SEO (Next.js App Router 2024/2025) -----
export const metadata = {
  title: "Úverová kalkulačka | Univerzálna kalkulačka",
  description:
    "Spočítajte si splátky úveru, hypotéky alebo pôžičky rýchlo a jednoducho. Najmodernejšia úverová kalkulačka online pre výpočet mesačných splátok a celkového preplatenia.",
  keywords: [
    "úverová kalkulačka",
    "výpočet úveru",
    "hypotéka kalkulačka",
    "splátky",
    "online kalkulačka",
    "pôžička",
    "úver",
    "financie",
    "bankové produkty",
    "preplatenie úveru",
    "mesačná splátka"
  ],
  openGraph: {
    title: "Úverová kalkulačka",
    description:
      "Vypočítajte si úver, pôžičku alebo hypotéku online. Prehľadná kalkulačka na výpočet splátok a celkového preplatenia.",
    url: "https://universalkalkulacka.sk/uverova-kalkulacka",
    siteName: "Univerzálna kalkulačka",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Úverová kalkulačka - Univerzálna kalkulačka"
      }
    ],
    locale: "sk_SK",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Úverová kalkulačka",
    description:
      "Online výpočet úveru, splátok a preplatenia. Kalkulačka pre hypotéky, úvery a pôžičky.",
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
    canonical: "https://universalkalkulacka.sk/uverova-kalkulacka"
  }
};
// -----------------------------------------------

export default function UverovaPage() {
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
        <UverovaKalkulackaCard />
      </div>
      <Footer />
    </main>
  );
}
