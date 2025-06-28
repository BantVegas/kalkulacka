"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import CalculatorCard from "../components/CalculatorCard";
import Kalkulacka from "../components/kalkulacka";

// --- Hodnotná informačná sekcia pod Hero ---
function InfoSection() {
  return (
    <section className="w-full max-w-2xl mx-auto py-6 px-4 bg-white/40 backdrop-blur-md rounded-xl shadow-md mt-2 mb-6">
      <h2 className="text-xl font-semibold mb-2">O univerzálnej kalkulačke</h2>
      <p className="mb-3 text-base sm:text-lg md:text-xl text-slate-800">
        Univerzálna kalkulačka je moderný slovenský portál na <b>výpočet daní, odvodov, úverov, investícií, poistného aj iných finančných výpočtov</b>. Všetko rýchlo, anonymne, zdarma a podľa aktuálnych zákonov SR.
      </p>
      <p className="mb-2 text-sm sm:text-base text-slate-700">
        Vyber si kalkulačku podľa svojich potrieb, zadaj údaje a zisti výsledok okamžite. Tento portál je určený pre podnikateľov, zamestnancov aj bežných ľudí, ktorí chcú mať jasné čísla vždy po ruke.
      </p>
      <p className="text-xs text-slate-500">
        Výsledky sú orientačné. Ak potrebuješ detailné poradenstvo, kontaktuj účtovníka, banku alebo makléra. V prípade otázok si prečítaj sekciu FAQ alebo nás kontaktuj.
      </p>
    </section>
  );
}

export default function Home() {
  const [pos, setPos] = useState({ left: 0, top: 0 });
  const direction = useRef({ x: 1, y: 1 });
  const speed = 3;
  const kalkWidth = 240;
  const kalkHeight = 330;

  useEffect(() => {
    function move() {
      setPos(prev => {
        let newLeft = prev.left + speed * direction.current.x;
        let newTop = prev.top + speed * direction.current.y;
        const winW = window.innerWidth;
        const winH = window.innerHeight;

        if (newLeft + kalkWidth > winW) {
          newLeft = winW - kalkWidth;
          direction.current.x = -1;
        }
        if (newTop + kalkHeight > winH) {
          newTop = winH - kalkHeight;
          direction.current.y = -1;
        }
        if (newLeft < 0) {
          newLeft = 0;
          direction.current.x = 1;
        }
        if (newTop < 0) {
          newTop = 0;
          direction.current.y = 1;
        }
        return { left: newLeft, top: newTop };
      });
    }
    const interval = setInterval(move, 16);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleResize() {
      setPos(prev => {
        const winW = window.innerWidth;
        const winH = window.innerHeight;
        let left = prev.left;
        let top = prev.top;
        if (left + kalkWidth > winW) left = winW - kalkWidth;
        if (top + kalkHeight > winH) top = winH - kalkHeight;
        if (left < 0) left = 0;
        if (top < 0) top = 0;
        return { left, top };
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main
      className="relative flex flex-col items-center min-h-screen w-full"
      style={{
        backgroundImage: "url('/images/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navbar */}
      <div className="w-full relative z-20">
        <Navbar />
      </div>

      {/* SVG kalkulačka v pozadí */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-screen h-screen z-0"
        style={{ overflow: "hidden" }}
        aria-hidden="true"
      >
        <Kalkulacka left={pos.left} top={pos.top} />
      </div>

      {/* Obsah */}
      <div
        className="
          relative 
          z-10 
          w-full 
          flex 
          flex-col 
          items-center 
          px-4 
          py-6 
          max-w-screen-lg
          mx-auto
          sm:px-6 
          md:px-10
        "
      >
        <HeroSection />
        <InfoSection />
        <CalculatorCard />
      </div>

      {/* Footer */}
      <div className="w-full relative z-20">
        <Footer />
      </div>
    </main>
  );
}


