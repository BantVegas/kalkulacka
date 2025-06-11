"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Domov", href: "/" },
  { label: "O nás", href: "/o-nas" },
  { label: "Blog", href: "/blog" },
  { label: "Poistná kalkulačka", href: "/poistna-kalkulacka" },
  { label: "Daňová kalkulačka", href: "/danova-kalkulacka" },
  { label: "Úverová kalkulačka", href: "/uverova-kalkulacka" },
  { label: "Investičná kalkulačka", href: "/investicna-kalkulacka" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="
      sticky top-0 left-0 w-full z-50
      bg-white/80 dark:bg-gray-900/70
      border-b border-white/40 dark:border-gray-800/60
      shadow-lg
      backdrop-blur-xl
      ">
      <div className="mx-auto px-2 sm:px-4 py-2 flex items-center justify-between max-w-6xl">
        {/* Logo alebo názov */}
        <div className="flex items-center gap-2 select-none">
          <span className="text-3xl md:text-2xl drop-shadow-sm">🧮</span>
          <span className="text-lg sm:text-2xl font-extrabold tracking-tight text-sky-700 dark:text-sky-300 whitespace-nowrap">UniverzálKalkulačka</span>
        </div>
        {/* Navigačné linky */}
        <div
          className="
            flex gap-1 sm:gap-2 md:gap-3
            overflow-x-auto
            scrollbar-thin
            scrollbar-thumb-sky-300/60 scrollbar-track-transparent
            pl-1
            [-webkit-overflow-scrolling:touch]
          "
          style={{ maxWidth: "100vw" }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                px-3 md:px-4 py-2 rounded-xl font-medium text-sm md:text-base transition-all
                whitespace-nowrap border border-white/40 dark:border-gray-800/70 shadow
                hover:scale-105 hover:bg-sky-100/80 hover:shadow-lg
                ${
                  pathname === link.href
                    ? "bg-sky-200 text-indigo-900 dark:bg-sky-800/90 dark:text-white font-bold ring-2 ring-sky-400/40"
                    : "bg-white/70 dark:bg-gray-900/40 text-sky-700 dark:text-indigo-200"
                }
              `}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
