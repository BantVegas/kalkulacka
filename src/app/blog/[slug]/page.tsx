import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import Image from "next/image";

// ==========================
// KOMPLETNÁ DATABÁZA ČLÁNKOV
// ==========================
const clanky = [
  {
    slug: "ako-sa-vypocita-cista-a-hruba-mzda",
    title: "Ako sa vypočíta čistá a hrubá mzda?",
    category: "Mzda",
    date: "2025-06-02",
    image: "/images/hero.png",
    perex: "Kompletný prehľad čistých a hrubých miezd, výpočty na mieru.",
    content: (
      <>
        <p>
          Hrubá mzda je základ, ktorý je uvedený v pracovnej zmluve a z ktorého zamestnávateľ odvádza povinné poistné a daň z príjmu fyzických osôb. Čistá mzda je suma, ktorú zamestnanec reálne dostane na účet po zdanení a odvedení poistného. Výpočet je zásadne ovplyvnený legislatívou platnou pre aktuálny rok.
        </p>
        <p><b>Postup výpočtu čistej mzdy v roku 2025:</b></p>
        <ol className="list-decimal list-inside mb-3 pl-3">
          <li>Od hrubej mzdy sa odpočítajú odvody zamestnanca (sociálne a zdravotné poistenie, cca 13,4 % z hrubej mzdy).</li>
          <li>Znížený základ dane sa ďalej upraví o nezdaniteľnú časť na daňovníka (v roku 2025 je to 410,73 € mesačne).</li>
          <li>Výsledok je základ dane, z ktorého sa vyráta daň z príjmu (19 % do určitej hranice, nad 25 %).</li>
          <li>Ak zamestnanec má deti, môže uplatniť daňový bonus na dieťa (v roku 2025 až do výšky 140 € mesačne na dieťa).</li>
        </ol>
        <p><b>Príklad:</b><br/>
          Hrubá mzda: 1 500 €<br/>
          Odvody: 201 €<br/>
          Nezdaniteľná časť: 410,73 €<br/>
          Daň: 129,9 €<br/>
          Čistá mzda: cca 1 169 €
        </p>
        <blockquote className="border-l-4 border-emerald-400 pl-4 my-4 text-emerald-700 bg-emerald-50 rounded-lg">
          „Vždy si kontroluj výplatnú pásku. Ak nesedia odvody alebo bonusy, rieš to priamo s mzdovým účtovníkom. Každý rok sa pravidlá menia!“
        </blockquote>
        <p>
          Výpočet čistej mzdy je základ pre plánovanie osobného rozpočtu. Ak potrebuješ istotu, využívaj online kalkulačky na výpočet čistej mzdy alebo sa poraď s profesionálom.
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
    perex: "Čo je potrebné vedieť o povinnom aj dobrovoľnom poistení.",
    content: (
      <>
        <p>
          Poistenie je základný prvok finančného zabezpečenia. Na Slovensku poznáme povinné poistenia (zdravotné, sociálne, PZP) a dobrovoľné (havarijné, úrazové, cestovné a ďalšie). Každý typ poistenia má špecifické podmienky, sumy, výluky aj zodpovednosti.
        </p>
        <p>
          Pri výbere poistenia si vždy over podmienky v zmluve a pripoistenia. Nespoliehaj sa na najnižšiu cenu – najdôležitejšia je skutočná výška krytia, spoluúčasť, pripoistenia a jednoduchosť likvidácie škody.
        </p>
        <ul className="list-disc list-inside my-3 pl-3">
          <li>Povinné poistenie (PZP, zdravotné, sociálne)</li>
          <li>Dobrovoľné poistenie (cestovné, životné, havarijné...)</li>
        </ul>
        <p>
          Najčastejšie chyby: slabé limity, zlá spoluúčasť, zabudnuté pripoistenia (napr. zodpovednosť za škodu).
        </p>
        <blockquote className="border-l-4 border-blue-400 pl-4 my-4 text-blue-700 bg-blue-50 rounded-lg">
          „Dobre nastavené poistenie vie zachrániť rozpočet aj psychickú pohodu.“
        </blockquote>
        <p>
          Ak máš otázky ohľadom konkrétneho typu poistenia alebo potrebuješ poradiť, kontaktuj odborníka – dobrá rada ti môže ušetriť tisíce.
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
    perex: "Praktické tipy, na čo si dať pozor pred podpisom zmluvy.",
    content: (
      <>
        <p>
          Úver je záväzok na roky – vždy zváž, čo je naozaj výhodné. Pred podpisom zmluvy si skontroluj úrokovú sadzbu, RPSN, podmienky splácania a poplatky za predčasné splatenie.
        </p>
        <ul className="list-disc list-inside my-3 pl-3">
          <li>Hypotéka – na bývanie, štandardne najnižší úrok</li>
          <li>Spotrebný úver – na auto, elektroniku, iné výdavky</li>
          <li>Kreditná karta – len na krátkodobé preklenutie</li>
        </ul>
        <p>
          Najčastejšie chyby: nevhodná výška splátky, nereálny príjem, chýbajúce poistenie schopnosti splácať.
        </p>
        <blockquote className="border-l-4 border-orange-400 pl-4 my-4 text-orange-700 bg-orange-50 rounded-lg">
          „Dobré úverové rozhodnutie = istota pokojného spánku!“
        </blockquote>
        <p>
          Pred podpisom vždy rátaj rezervu pre prípad výpadku príjmu a prečítaj si všetky zmluvné podmienky do poslednej strany.
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
    perex: "Investujte rozumne – základy pre začiatočníkov aj pokročilých.",
    content: (
      <>
        <p>
          Prvým krokom je vytvoriť si finančnú rezervu na nečakané situácie. Až potom začni investovať – nikdy nie na dlh a nikdy nie bez základných znalostí.
        </p>
        <ul className="list-disc list-inside my-3 pl-3">
          <li>Začni s ETF fondmi alebo indexovými fondmi</li>
          <li>Diverzifikuj – nikdy nedaj všetko do jedného koša</li>
          <li>Pravidelné investovanie (mesačne) je cesta k úspechu</li>
        </ul>
        <p>
          Pozor na sľuby „rýchleho zbohatnutia“ – ak ti niekto garantuje vysoký zisk bez rizika, ide o podvod.
        </p>
        <blockquote className="border-l-4 border-indigo-400 pl-4 my-4 text-indigo-700 bg-indigo-50 rounded-lg">
          „Investovanie je maratón, nie šprint.“
        </blockquote>
        <p>
          Sleduj poplatky, nepanikár pri poklese trhu a pravidelne sa vzdelávaj. Ak nevieš kde začať, obráť sa na nezávislého finančného poradcu.
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
    perex: "Daňové tipy a optimalizácia pre SZČO aj zamestnancov.",
    content: (
      <>
        <p>
          Daňový systém ponúka viacero možností, ako si legálne znížiť daň. Najznámejšie sú daňové bonusy na deti, nezdaniteľná časť, príspevky na dôchodok či rôzne odpočítateľné položky.
        </p>
        <ul className="list-disc list-inside my-3 pl-3">
          <li>Daňové bonusy na deti (ročne stovky eur úspory)</li>
          <li>Príspevky na III. pilier alebo DDS</li>
          <li>Nezdaniteľná časť základu dane</li>
          <li>Podpora bývania – úroky z hypotéky</li>
        </ul>
        <p>
          Najviac ušetria tí, ktorí plánujú dane vopred a majú poriadne podklady. Nikdy nevymýšľaj „obchádzky“, najlepší trik je dodržať zákon.
        </p>
        <blockquote className="border-l-4 border-yellow-400 pl-4 my-4 text-yellow-700 bg-yellow-50 rounded-lg">
          „Najlepší daňový trik je dodržať zákon – všetko ostatné je riziko!“
        </blockquote>
        <p>
          Ak chceš optimalizovať dane, poraď sa so skúseným účtovníkom a použi daňovú kalkulačku.
        </p>
      </>
    ),
  }
];

// ========================
// BADGE štýl podľa kategórie
// ========================
const badgeClass = (category: string) =>
  category === "Poistenie" ? "bg-blue-200 text-blue-800" :
  category === "Mzda" ? "bg-emerald-100 text-emerald-800" :
  category === "Úvery" ? "bg-orange-100 text-orange-700" :
  category === "Investovanie" ? "bg-indigo-100 text-indigo-800" :
  category === "Dane" ? "bg-yellow-100 text-yellow-800" :
  "bg-gray-200 text-gray-700";

// ===========================
// STATIC PARAMS PRE BUILD
// ===========================
export function generateStaticParams() {
  return clanky.map((c) => ({ slug: c.slug }));
}
export const dynamicParams = false;

// ===========================
// SILNÉ SEO pomocou generateMetadata
// ===========================
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = clanky.find((c) => c.slug === params.slug);

  if (!article) {
    return {
      title: "Článok nenájdený | Univerzálna Kalkulačka",
      description: "Požadovaný článok sa nenašiel.",
      robots: "noindex, nofollow",
    };
  }

  // Dynamická canonical adresa
  const url = `https://universalkalkulacka.sk/blog/${article.slug}`;

  return {
    title: `${article.title} | Univerzálna Kalkulačka`,
    description: article.perex,
    keywords: [
      article.category,
      "kalkulačka",
      "financie",
      "mzda",
      "dane",
      "poistenie",
      "úvery",
      "investovanie",
      ...article.slug.split("-"),
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.perex,
      type: "article",
      publishedTime: article.date,
      url,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      siteName: "Univerzálna Kalkulačka",
      locale: "sk_SK",
      authors: ["Martin Lukáč"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.perex,
      images: [article.image],
      creator: "@webappmaster",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

// ============================
// HLAVNÝ KOMPONENT STRÁNKY
// ============================
export default function BlogArticlePage({
  params,
}: {
  params: { slug: string }
}) {
  const article = clanky.find((c) => c.slug === params.slug);

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="flex items-center justify-center min-h-[60vh]">
          <span className="text-3xl text-red-500 font-semibold">
            Článok nebol nájdený.
          </span>
        </main>
        <Footer />
      </>
    );
  }

  // Rich Schema (article) JSON-LD pre maximálne SEO
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.date,
    image: article.image,
    author: {
      "@type": "Person",
      name: "Martin Lukáč",
      url: "https://webappmaster.sk",
    },
    publisher: {
      "@type": "Organization",
      name: "Univerzálna Kalkulačka",
      logo: {
        "@type": "ImageObject",
        url: "https://universalkalkulacka.sk/images/hero.png",
      },
    },
    description: article.perex,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://universalkalkulacka.sk/blog/${article.slug}`,
    },
  };

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen flex flex-col items-center justify-start px-2 py-12"
        style={{
          background: "radial-gradient(circle at 70% 10%, #f1f7ff 60%, #e0e7ef 100%)",
        }}
      >
        {/* JSON-LD schema.org pre SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <article
          className="max-w-2xl w-full bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl p-8 mx-auto backdrop-blur-lg border border-white/40 relative overflow-hidden"
          itemScope
          itemType="https://schema.org/Article"
        >
          {/* Obrázok v záhlaví */}
          <div className="w-full h-44 rounded-2xl overflow-hidden mb-7 flex items-center justify-center bg-gradient-to-br from-blue-100 via-indigo-100 to-sky-50">
            {article.image ? (
              <Image
                src={article.image}
                alt={article.title}
                className="object-cover w-full h-full rounded-2xl"
                width={800}
                height={176}
                priority
                itemProp="image"
              />
            ) : (
              <span className="text-7xl">📝</span>
            )}
          </div>
          {/* Kategória a dátum */}
          <div className="flex items-center mb-5">
            <span className={`inline-block px-4 py-1 rounded-full mr-3 text-sm font-semibold ${badgeClass(article.category)}`} itemProp="articleSection">
              {article.category}
            </span>
            <time className="text-gray-400 text-sm" itemProp="datePublished" dateTime={article.date}>
              {new Date(article.date).toLocaleDateString("sk-SK", { year: "numeric", month: "long", day: "numeric" })}
            </time>
          </div>
          {/* Názov */}
          <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-sky-700 via-indigo-600 to-sky-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight" itemProp="headline">
            {article.title}
          </h1>
          {/* Perex */}
          <div className="mb-6 text-lg font-medium text-gray-700 dark:text-gray-200" itemProp="description">
            {article.perex}
          </div>
          {/* Obsah článku */}
          <div className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200" itemProp="articleBody">
            {article.content}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

