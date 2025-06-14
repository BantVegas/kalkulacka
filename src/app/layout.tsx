import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Google fonty (Roboto, Roboto Mono)
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Univerzálna finančná kalkulačka – mzda, dane, úver, poistenie, investície",
  description:
    "Online kalkulačka zadarmo. Vypočítajte si čistú mzdu, dane, úver, poistenie alebo investície na jednom mieste. Vždy aktuálne podľa legislatívy SR.",
  keywords:
    "kalkulačka, univerzálna kalkulačka, mzda, čistá mzda, daňová kalkulačka, úverová kalkulačka, investičná kalkulačka, poistenie, financie, Slovensko, výpočet",
  openGraph: {
    title: "Univerzálna finančná kalkulačka",
    description:
      "Online kalkulačka zadarmo. Vypočítajte si čistú mzdu, dane, úver, poistenie alebo investície na jednom mieste. Vždy aktuálne podľa legislatívy SR.",
    url: "https://univerzalkalkulacka.sk",
    siteName: "Univerzálna Kalkulačka",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Univerzálna Kalkulačka",
      },
    ],
    locale: "sk_SK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Univerzálna finančná kalkulačka",
    description:
      "Online kalkulačka zadarmo. Vypočítajte si čistú mzdu, dane, úver, poistenie alebo investície na jednom mieste. Vždy aktuálne podľa legislatívy SR.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <head>
        {/* Google AdSense script priamo v <head> */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8005465650143173"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}


