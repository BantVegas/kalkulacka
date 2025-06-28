import HeroSection from "../../components/HeroSection";
import UverovaKalkulackaCard from "../../components/UverovaKalkulackaCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AdBanner from "../../components/AdBanner";

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
    url: "https://univerzalkalkulacka.sk/uverova-kalkulacka",
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
    canonical: "https://univerzalkalkulacka.sk/uverova-kalkulacka"
  }
};
// -----------------------------------------------

// Hodnotná info sekcia pod Hero
function InfoSection() {
  return (
    <section className="w-full max-w-2xl mx-auto py-6 px-4 bg-white/70 backdrop-blur-md rounded-xl shadow-md mt-2 mb-6">
      <h2 className="text-xl font-semibold mb-2">O úverovej kalkulačke</h2>
      <p className="mb-3">
        Úverová kalkulačka vám umožní <b>prehľadne vypočítať splátky úveru, hypotéky alebo pôžičky</b> podľa vami zadaných parametrov. Okamžite získate informáciu o výške mesačnej splátky aj o celkovej preplatenej sume.
      </p>
      <p className="mb-2">
        Nástroj využijú záujemcovia o hypotekárny úver, spotrebný úver, pôžičku na auto či konsolidáciu. Výsledky vám pomôžu lepšie plánovať splácanie a porovnať ponuky bánk.
      </p>
      <p className="text-sm text-slate-500">
        Výpočty sú informatívne a nezohľadňujú všetky možné poplatky banky či poistenie. Pre záväznú ponuku kontaktujte svoju banku.
      </p>
    </section>
  );
}

// FAQ sekcia pre úvery a hypotéky
const uveroveOtazky = [
  {
    question: "Na aké úvery je kalkulačka vhodná?",
    answer: "Kalkulačka umožňuje výpočet splátok pre hypotéky, spotrebné úvery, pôžičky na auto, refinancovanie aj iné bežné bankové úvery.",
  },
  {
    question: "Prečo je výsledok iba orientačný?",
    answer: "Každá banka má vlastné poplatky, individuálne úroky a ďalšie podmienky. Výsledok je informatívny – pre záväznú ponuku odporúčame osloviť priamo banku.",
  },
  {
    question: "Zohľadňuje kalkulačka aj poplatky a poistenie?",
    answer: "Výpočet nezohľadňuje jednorazové poplatky (napr. za spracovanie úveru) ani poistenie úveru. Pre kompletnú ponuku odporúčame konzultáciu s finančným poradcom.",
  },
  {
    question: "Môžem kalkulačku použiť aj pre fixný aj variabilný úrok?",
    answer: "Áno, stačí zadať priemerný úrok, ktorý vám banka ponúkla. Pri zmene úroku v budúcnosti sa môže výška splátky zmeniť.",
  },
  {
    question: "Kto vidí moje údaje?",
    answer: "Údaje nie sú ukladané ani poskytované tretím stranám. Výpočet prebieha anonymne priamo vo vašom prehliadači.",
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
        {uveroveOtazky.map((item, idx) => (
          <li key={idx}>
            <b>{item.question}</b>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

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
        <InfoSection />
        <AdBanner />
        <UverovaKalkulackaCard />
        <FAQSection />
      </div>
      <Footer />
    </main>
  );
}
