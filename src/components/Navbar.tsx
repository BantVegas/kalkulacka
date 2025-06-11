"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-gray-200 dark:bg-gray-900/60 dark:border-gray-700"
      style={{ WebkitBackdropFilter: "blur(10px)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-sky-900 dark:text-sky-400">
              UniverzálKalkulačka
            </Link>
          </div>

          {/* Hamburger button - Mobile */}
          <button
            className="md:hidden text-sky-900 dark:text-sky-400 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Nav links desktop */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-2 rounded-md font-semibold text-sm transition ${
                    pathname === href
                      ? "bg-sky-900 text-white shadow-lg"
                      : "text-sky-900 hover:bg-sky-100 hover:text-sky-900 dark:text-sky-400 dark:hover:bg-gray-800"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 dark:bg-gray-900/90 border-t border-gray-200 dark:border-gray-700 backdrop-blur-md">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-md font-semibold text-sm transition ${
                    pathname === href
                      ? "bg-sky-900 text-white shadow-lg"
                      : "text-sky-900 hover:bg-sky-100 hover:text-sky-900 dark:text-sky-400 dark:hover:bg-gray-800"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}


