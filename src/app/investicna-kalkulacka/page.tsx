import HeroSection from "../../components/HeroSection";
import InvesticnaKalkulackaCard from "../../components/InvesticnaKalkulackaCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AdBanner from "../../components/AdBanner";

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
    url: "https://univerzalkalkulacka.sk/investicna-kalkulacka",
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
    canonical: "https://univerzalkalkulacka.sk/investicna-kalkulacka"
  }
};
// -----------------------------------------------

// ----- Info sekcia pod Hero -----
function InfoSection() {
  return (
    <section className="w-full max-w-2xl mx-auto py-6 px-4 bg-white/70 backdrop-blur-md rounded-xl shadow-md mt-2 mb-6">
      <h2 className="text-xl font-semibold mb-2">O Investičnej kalkulačke</h2>
      <p className="mb-3">
        Naša investičná kalkulačka vám umožní <b>rýchlo a prehľadne vypočítať budúce zhodnotenie investícií</b>. Stačí zadať výšku investície, úrokovú mieru, dobu investovania a kalkulačka automaticky vypočíta predpokladaný výnos.
      </p>
      <p className="mb-2">
        Kalkulačka je vhodná pre každého, kto si chce porovnať jednorazové aj pravidelné investovanie, úroky, ETF fondy alebo iné formy zhodnocovania úspor. Výsledky vám pomôžu lepšie plánovať vlastné finančné ciele.
      </p>
      <p className="text-sm text-slate-500">
        Výpočty sú orientačné a nezohľadňujú všetky poplatky, dane alebo infláciu. Pre presnejšie plánovanie investícií odporúčame poradiť sa s finančným poradcom.
      </p>
    </section>
  );
}

// ----- FAQ sekcia -----
const investicneOtazky = [
  {
    question: "Aké typy investícií môžem počítať v tejto kalkulačke?",
    answer: "Kalkulačka je vhodná pre výpočet jednorazových aj pravidelných investícií, ETF fondy, sporenie, dlhopisy, akcie alebo iné produkty s pravidelným úročením.",
  },
  {
    question: "Započítava kalkulačka aj dane a poplatky?",
    answer: "Výpočty sú orientačné a nepočítajú s konkrétnymi poplatkami ani zdanením. Pre finálny výnos je potrebné odpočítať poplatky za správu, zdanenie a prípadne infláciu.",
  },
  {
    question: "Je výpočet záväzný?",
    answer: "Nie, výsledok je informatívny a nezohľadňuje všetky reálne faktory na trhu. Odporúčame pred investovaním kontaktovať finančného poradcu.",
  },
  {
    question: "Ako často sa údaje aktualizujú?",
    answer: "Kalkulačka je pravidelne aktualizovaná podľa najnovších pravidiel a sadzieb. Snažíme sa udržiavať ju vždy aktuálnu.",
  },
  {
    question: "Kto vidí moje údaje?",
    answer: "Vaše údaje nie sú ukladané ani poskytované tretím stranám. Výpočet prebieha anonymne priamo v prehliadači.",
  },
];

function FAQSection() {
  return (
    <section
      id="faq"
      className="w-full max-w-2xl mx-auto py-8 px-4 bg-white/70 backdrop-blur-md rounded-xl shadow-md mt-10 mb-16"
    >
      <h2 className="text-xl font-semibold mb-4">Často kladené otázky (FAQ)</h2>
      <ul className="space-y-6">
        {investicneOtazky.map((item, idx) => (
          <li key={idx}>
            <b>{item.question}</b>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

// --------- Stránka ----------
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
        <InfoSection />
        <AdBanner />
        <InvesticnaKalkulackaCard />
        <FAQSection />
      </div>
      <Footer />
    </main>
  );
}
