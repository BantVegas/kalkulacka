import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// --- SEO metadata (Next.js App Router) ---
export const metadata = {
  title: "Blog | Univerzálna kalkulačka",
  description:
    "Blog plný praktických článkov o výpočtoch miezd, daní, poistenia, investovania a úverov. Vzdelávajte sa s nami vo svete financií a kalkulačiek.",
  keywords: [
    "blog",
    "financie",
    "výpočty",
    "kalkulačka",
    "mzda",
    "dane",
    "poistenie",
    "úver",
    "investovanie",
    "články",
    "praktické tipy",
    "slovenský blog"
  ],
  openGraph: {
    title: "Blog | Univerzálna kalkulačka",
    description:
      "Prečítajte si najnovšie články o mzdách, daniach, poistení, úveroch a investovaní. Univerzálna kalkulačka radí a vzdeláva.",
    url: "https://universalkalkulacka.sk/blog",
    siteName: "Univerzálna kalkulačka",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Blog - Univerzálna kalkulačka"
      }
    ],
    locale: "sk_SK",
    type: "blog"
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Univerzálna kalkulačka",
    description:
      "Najnovšie články o financiách, kalkulačkách a užitočných tipoch pre každého.",
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
    canonical: "/blog",
  }
};

// --- Typ článku ---
type Clanok = {
  slug: string;
  title: string;
  perex: string;
  date: string;
  category: string;
};

const clanky: Clanok[] = [
  {
    slug: "ako-sa-vypocita-cista-a-hruba-mzda",
    title: "Ako sa vypočíta čistá a hrubá mzda?",
    perex: "Kompletný prehľad čistých a hrubých miezd, výpočty na mieru.",
    date: "2.6.2025",
    category: "Mzda"
  },
  {
    slug: "ako-funguje-poistenie-na-slovensku",
    title: "Ako funguje poistenie na Slovensku?",
    perex: "Čo je potrebné vedieť o povinnom aj dobrovoľnom poistení.",
    date: "1.6.2025",
    category: "Poistenie"
  },
  {
    slug: "ako-na-spravny-vyber-uveru",
    title: "Ako na správny výber úveru?",
    perex: "Praktické tipy, na čo si dať pozor pred podpisom zmluvy.",
    date: "3.6.2025",
    category: "Úvery"
  },
  {
    slug: "ako-zacat-investovat",
    title: "Ako začať investovať bezpečne a efektívne?",
    perex: "Investujte rozumne – základy pre začiatočníkov aj pokročilých.",
    date: "4.6.2025",
    category: "Investovanie"
  },
  {
    slug: "ako-usetrit-na-daniach",
    title: "Ako ušetriť na daniach legálne?",
    perex: "Daňové tipy a optimalizácia pre SZČO aj zamestnancov.",
    date: "5.6.2025",
    category: "Dane"
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-50 dark:bg-[#131820] py-12">
        <section className="max-w-3xl mx-auto px-4">
          <div className="grid gap-5">
            {clanky.map((clanok) => (
              <Link
                key={clanok.slug}
                href={`/blog/${clanok.slug}`}
                className="block rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition p-6 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">{clanok.category}</span>
                  <span className="text-xs text-neutral-400">{clanok.date}</span>
                </div>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-700 transition">{clanok.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-300 mt-2 text-sm">{clanok.perex}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


