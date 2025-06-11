"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Domov" },
  { href: "/o-nas", label: "O nás" },
  { href: "/blog", label: "Blog" },
  { href: "/poistna-kalkulacka", label: "Poistná kalkulačka" },
  { href: "/danova-kalkulacka", label: "Daňová kalkulačka" },
  { href: "/uverova-kalkulacka", label: "Úverová kalkulačka" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-gray-200"
      style={{ WebkitBackdropFilter: "blur(10px)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-sky-900">
              UniverzálKalkulačka
            </Link>
          </div>
          {/* Nav links */}
          <ul className="flex space-x-6">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-2 rounded-md font-semibold text-sm transition ${
                    pathname === href
                      ? "bg-sky-900 text-white shadow-lg"
                      : "text-sky-900 hover:bg-sky-100 hover:text-sky-900"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

