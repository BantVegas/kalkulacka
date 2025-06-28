import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// ----- SEO (Next.js App Router 2024/2025) -----
export const metadata = {
  title: "O nás | Univerzálna kalkulačka",
  description:
    "Zistite viac o projekte Univerzálna kalkulačka – kto sme, prečo vznikol tento web a kto ho vyvíja. Moderné kalkulačky pre každého na Slovensku.",
  keywords: [
    "o nás",
    "univerzálna kalkulačka",
    "o projekte",
    "Martin Lukáč",
    "WebAppMaster",
    "finančné kalkulačky",
    "online nástroje",
    "kalkulačka",
    "slovenský projekt"
  ],
  openGraph: {
    title: "O nás | Univerzálna kalkulačka",
    description:
      "Univerzálna kalkulačka je slovenský projekt, ktorý prináša moderné a spoľahlivé kalkulačky pre každého. Viac o autorovi a histórii webu.",
    url: "https://univerzalkalkulacka.sk/o-nas",
    siteName: "Univerzálna kalkulačka",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "O nás - Univerzálna kalkulačka"
      }
    ],
    locale: "sk_SK",
    type: "profile"
  },
  twitter: {
    card: "summary_large_image",
    title: "O nás | Univerzálna kalkulačka",
    description:
      "Kto stojí za Univerzálnou kalkulačkou? Zoznámte sa s našim projektom a tímom.",
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
    canonical: "https://univerzalkalkulacka.sk/o-nas"
  }
};
// -----------------------------------------------

export default function ONasPage() {
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
      <section className="relative z-10 w-full flex flex-col items-center pt-24 pb-16">
        <div className="max-w-2xl w-full p-8 rounded-3xl bg-white/70 dark:bg-gray-900/70 shadow-2xl backdrop-blur-xl border border-white/40 ring-2 ring-sky-200/60 mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-sky-800 dark:text-sky-200">O nás</h1>
          <p className="mb-4 text-lg">
            <b>Univerzálna kalkulačka</b> je slovenský projekt pre všetkých, ktorí si chcú rýchlo a jednoducho vypočítať čistú mzdu, daň, výhodnosť investície, úver či poistné – online, zadarmo a s moderným UX.
          </p>
          <p className="mb-4 text-base text-gray-700 dark:text-gray-200">
            Naším cieľom je sprístupniť aktuálne prepočty podľa legislatívy SR, v maximálne zrozumiteľnej a prehľadnej forme.  
            Nepotrebujete žiadne tabuľky ani excel – stačí pár klikov a viete na čom ste.
          </p>
          <p className="mb-2 text-base text-gray-700 dark:text-gray-200">
            Tento web vyvíja <b>Martin Lukáč</b> (WebAppMaster.sk)<br/>
            <span className="text-sm text-gray-500">Bratislava, Doležalova 15c, 82104 • 0950 889 523 • webappmaster@webappmaster.sk</span>
          </p>
          <div className="mt-8 flex justify-end">
            <span className="text-sky-600 dark:text-sky-400 font-semibold">Sme tu pre vás!</span>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
