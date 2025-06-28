import HeroSection from "../../components/HeroSection";
import DanovaKalkulackaCard from "../../components/DanovaKalkulackaCard";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AdBanner from "../../components/AdBanner";

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
        url: "/images/hero.png",
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

// ---------- Info sekcia (pod Hero) -------------
function InfoSection() {
  return (
    <section className="w-full max-w-2xl mx-auto py-6 px-4 bg-white/70 backdrop-blur rounded-xl shadow-md mt-2 mb-6">
      <h2 className="text-xl font-semibold mb-2">O Daňovej kalkulačke</h2>
      <p className="mb-3">
        Naša daňová kalkulačka vám umožní <b>rýchlo a presne vypočítať daň z príjmu</b> pre fyzické osoby, SZČO aj firmy podľa aktuálnej legislatívy (2024). Stačí vyplniť základné údaje a systém okamžite zobrazí predbežnú daňovú povinnosť.
      </p>
      <p className="mb-2">
        <b>Pre koho je kalkulačka vhodná?</b> Pre podnikateľov, živnostníkov, zamestnancov aj účtovníkov, ktorí chcú mať jasno v daňových povinnostiach bez zdĺhavého študovania zákonov. 
      </p>
      <p className="mb-2">
        Výsledky slúžia na informatívne účely a pomôžu vám lepšie plánovať svoje financie. Ak potrebujete detailnú daňovú analýzu, odporúčame kontaktovať účtovníka alebo daňového poradcu.
      </p>
      <p className="text-sm text-slate-500">
        V prípade otázok si prečítajte sekciu <a href="#faq" className="underline text-indigo-600">FAQ</a> nižšie alebo nás kontaktujte emailom.
      </p>
    </section>
  );
}
// ---------- FAQ sekcia ------------------------
function FAQSection() {
  return (
    <section
      id="faq"
      className="w-full max-w-2xl mx-auto py-8 px-4 bg-white/70 backdrop-blur rounded-xl shadow-md mt-10 mb-16"
    >
      <h2 className="text-xl font-semibold mb-4">Často kladené otázky (FAQ)</h2>
      <ul className="space-y-6">
        <li>
          <b>Pre koho je daňová kalkulačka určená?</b>
          <p>
            Kalkulačka je vhodná pre SZČO, zamestnancov, firmy aj každého, kto si chce rýchlo overiť daňovú povinnosť podľa platnej legislatívy SR.
          </p>
        </li>
        <li>
          <b>Je výpočet záväzný?</b>
          <p>
            Výsledok je orientačný a slúži len na informatívne účely. Pri podávaní daňového priznania odporúčame vždy skontrolovať údaje a poradiť sa s odborníkom.
          </p>
        </li>
        <li>
          <b>Môžem použiť kalkulačku aj pre rok 2025?</b>
          <p>
            Kalkulačka je pravidelne aktualizovaná podľa najnovších zákonov. Po vydaní nových sadzieb a zmien ju vždy prispôsobíme aktuálnemu roku.
          </p>
        </li>
        <li>
          <b>Kto vidí moje údaje?</b>
          <p>
            Vaše údaje nie sú ukladané ani poskytované tretím stranám. Výpočet prebieha anonymne priamo v prehliadači.
          </p>
        </li>
        <li>
          <b>Chýba vám tu otázka?</b>
          <p>
            Kontaktujte nás a radi ju doplníme.
          </p>
        </li>
      </ul>
    </section>
  );
}

// -------------- Stránka ----------------------
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
        <InfoSection />
        <AdBanner />
        <DanovaKalkulackaCard />
        <FAQSection />
      </div>
      <Footer />
    </main>
  );
}
