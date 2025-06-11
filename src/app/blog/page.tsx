import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const clanky = [
  {
    slug: "ako-sa-vypocita-cista-a-hruba-mzda",
    title: "Ako sa vypočíta čistá a hrubá mzda?",
    category: "Mzda",
    date: "2025-06-02",
    image: "/images/hero.png",
    perex: "Prehľad čistých a hrubých miezd s praktickými výpočtami a príkladmi pre rok 2025.",
    content: (
      <>
        <p>
          Hrubá mzda je základ, ktorý je uvedený v pracovnej zmluve a z ktorého zamestnávateľ odvádza povinné poistné a daň z príjmu fyzických osôb.
        </p>
        <p>
          Čistá mzda je suma, ktorú zamestnanec dostane na účet po zdanení a odvedení poistného. Vypočítava sa na základe platných legislatívnych pravidiel.
        </p>
      </>
    ),
  },
  {
    slug: "ako-funguje-poistenie-na-slovensku",
    title: "Ako funguje poistenie na Slovensku?",
    category: "Poistenie",
    date: "2025-06-01",
    image: "/images/hero.png",
    perex: "Základy povinného a dobrovoľného poistenia na Slovensku s praktickými radami.",
    content: (
      <>
        <p>
          Poistenie zahŕňa povinné aj dobrovoľné typy, ktoré slúžia na ochranu majetku a zdravia. Každý typ má svoje špecifiká a podmienky.
        </p>
        <p>
          Pri výbere je dôležité zvážiť rozsah krytia, spoluúčasť a ceny poistného.
        </p>
      </>
    ),
  },
  {
    slug: "ako-na-spravny-vyber-uveru",
    title: "Ako na správny výber úveru?",
    category: "Úvery",
    date: "2025-06-03",
    image: "/images/hero.png",
    perex: "Tipy na výber úveru podľa potrieb, s dôrazom na poplatky a splátky.",
    content: (
      <>
        <p>
          Úver je finančný záväzok, preto je kľúčové porozumieť jeho podmienkam, vrátane úrokovej sadzby a poplatkov.
        </p>
        <p>
          Dôležité je tiež zvážiť výšku splátok vzhľadom na svoj rozpočet.
        </p>
      </>
    ),
  },
  {
    slug: "ako-zacat-investovat",
    title: "Ako začať investovať bezpečne a efektívne?",
    category: "Investovanie",
    date: "2025-06-04",
    image: "/images/hero.png",
    perex: "Základy investovania pre začiatočníkov aj pokročilých.",
    content: (
      <>
        <p>
          Vytvorte si finančnú rezervu a naučte sa diverzifikovať investície pre minimalizáciu rizika.
        </p>
        <p>
          Pravidelné investovanie pomáha vybudovať dlhodobý majetok.
        </p>
      </>
    ),
  },
  {
    slug: "ako-usetrit-na-daniach",
    title: "Ako ušetriť na daniach legálne?",
    category: "Dane",
    date: "2025-06-05",
    image: "/images/hero.png",
    perex: "Praktické tipy na legálne daňové úspory pre SZČO a zamestnancov.",
    content: (
      <>
        <p>
          Využívajte dostupné daňové bonusy, nezdaniteľné časti a príspevky na dôchodok.
        </p>
        <p>
          Dodržiavanie zákona je najlepší spôsob, ako sa vyhnúť problémom.
        </p>
      </>
    ),
  }
];

// Badge štýl podľa kategórie
const badgeClass = (category: string) =>
  category === "Poistenie" ? "bg-blue-200 text-blue-800" :
  category === "Mzda" ? "bg-emerald-100 text-emerald-800" :
  category === "Úvery" ? "bg-orange-100 text-orange-700" :
  category === "Investovanie" ? "bg-indigo-100 text-indigo-800" :
  category === "Dane" ? "bg-yellow-100 text-yellow-800" :
  "bg-gray-200 text-gray-700";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main
        className="min-h-screen bg-cover bg-center py-12"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <section className="max-w-6xl mx-auto px-4 bg-white/90 rounded-2xl p-6 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {clanky.slice(0, 3).map((clanok) => (
              <article
                key={clanok.slug}
                className="rounded-xl border border-neutral-300 p-6 bg-white shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${badgeClass(clanok.category)}`}
                  >
                    {clanok.category}
                  </span>
                  <time
                    className="text-xs text-neutral-500"
                    dateTime={clanok.date}
                  >
                    {new Date(clanok.date).toLocaleDateString("sk-SK", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                  {clanok.title}
                </h2>
                <p className="text-neutral-700 text-base mb-4">{clanok.perex}</p>
                <div className="prose prose-sm max-w-none text-gray-800 dark:text-gray-700">
                  {clanok.content}
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clanky.slice(3).map((clanok) => (
              <article
                key={clanok.slug}
                className="rounded-xl border border-neutral-300 p-6 bg-white shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider ${badgeClass(clanok.category)}`}
                  >
                    {clanok.category}
                  </span>
                  <time
                    className="text-xs text-neutral-500"
                    dateTime={clanok.date}
                  >
                    {new Date(clanok.date).toLocaleDateString("sk-SK", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                  {clanok.title}
                </h2>
                <p className="text-neutral-700 text-base mb-4">{clanok.perex}</p>
                <div className="prose prose-sm max-w-none text-gray-800 dark:text-gray-700">
                  {clanok.content}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
