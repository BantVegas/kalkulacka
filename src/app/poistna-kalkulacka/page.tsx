import HeroSection from "../../components/HeroSection";
import PoistnaKalkulackaCard from "../../components/PoistnaKalkulackaCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AdBanner from "../../components/AdBanner";

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

// Info sekcia pod Hero
function InfoSection() {
  return (
    <section className="w-full max-w-2xl mx-auto py-6 px-4 bg-white/70 backdrop-blur-md rounded-xl shadow-md mt-2 mb-6">
      <h2 className="text-xl font-semibold mb-2">O Poistnej kalkulačke</h2>
      <p className="mb-3">
        Táto poistná kalkulačka vám umožní <b>rýchlo a jednoducho porovnať rôzne typy poistenia</b> a vypočítať orientačné poistné podľa vašich parametrov. Využijete ju pri výbere životného, úrazového, cestovného alebo poistenia auta.
      </p>
      <p className="mb-2">
        Nástroj je vhodný pre každého, kto chce ušetriť čas a získať prehľad o možnostiach poistenia na slovenskom trhu – bez nutnosti osobnej návštevy poisťovne.
      </p>
      <p className="text-sm text-slate-500">
        Výsledky kalkulačky sú orientačné a závisia od konkrétnych podmienok poisťovne. Pre finálnu ponuku odporúčame kontaktovať vybranú poisťovňu alebo makléra.
      </p>
    </section>
  );
}

// FAQ sekcia na mieru
const poistneOtazky = [
  {
    question: "Aké typy poistenia môžem počítať v tejto kalkulačke?",
    answer: "Kalkulačka umožňuje orientačný výpočet pre životné poistenie, poistenie auta, úrazové poistenie, cestovné poistenie aj iné produkty podľa vašej potreby.",
  },
  {
    question: "Je výsledok kalkulácie záväzný?",
    answer: "Nie, výsledok je informatívny. Každá poisťovňa môže mať vlastné podmienky a cenníky, preto odporúčame overiť si finálnu cenu priamo v poisťovni.",
  },
  {
    question: "Ukladá sa niekde môj výpočet alebo údaje?",
    answer: "Nie, všetky údaje sú spracované anonymne len pre potreby výpočtu. Neuchovávame ani neposkytujeme žiadne informácie tretím stranám.",
  },
  {
    question: "Kto mi poradí s výberom poistenia?",
    answer: "Na základe výsledku si môžete porovnať produkty rôznych poisťovní. Pre detailné poradenstvo sa môžete obrátiť na certifikovaného poisťovacieho makléra.",
  },
  {
    question: "Ako často je kalkulačka aktualizovaná?",
    answer: "Snažíme sa ju pravidelne aktualizovať podľa zmien na trhu a dostupných informácií. Ak natrafíte na chybu, kontaktujte nás.",
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
        {poistneOtazky.map((item, idx) => (
          <li key={idx}>
            <b>{item.question}</b>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

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
        <InfoSection />
        <AdBanner />
        <PoistnaKalkulackaCard />
        <FAQSection />
      </div>
      <Footer />
    </main>
  );
}

