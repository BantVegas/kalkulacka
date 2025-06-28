"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      className="
        flex flex-col items-center justify-center text-center 
        px-4 sm:px-6 md:px-8
        py-8 sm:py-14 md:py-20 
        w-full
        bg-white/40 backdrop-blur-md
        rounded-2xl shadow-xl
        mx-auto
        max-w-full
        sm:max-w-3xl
      "
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="
          text-2xl xs:text-3xl sm:text-4xl md:text-6xl 
          font-extrabold 
          bg-gradient-to-r from-sky-700 via-indigo-500 to-fuchsia-500 
          bg-clip-text text-transparent drop-shadow-lg
          px-2 sm:px-0
          leading-tight sm:leading-tight md:leading-none
          max-w-full sm:max-w-3xl
        "
        initial={{ letterSpacing: "0.05em" }}
        animate={{ letterSpacing: "0.12em" }}
        transition={{ delay: 0.2, duration: 1.2 }}
      >
        Univerzálna finančná kalkulačka
      </motion.h1>
      <motion.p
        className="mt-5 text-base xs:text-lg sm:text-xl md:text-2xl max-w-2xl text-slate-800 font-medium"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        Vypočítajte si <b>daň z príjmu, odvody, úver, hypotéku či investície</b> rýchlo a bez zbytočných komplikácií. Jednoduché a presné kalkulačky pre podnikateľov, zamestnancov, SZČO aj firmy na Slovensku.
      </motion.p>
      <motion.p
        className="mt-3 text-sm xs:text-base sm:text-lg max-w-2xl text-slate-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <b>Všetko zdarma, bez registrácie a vždy podľa aktuálnej legislatívy (2024).</b> 
        Stačí vyplniť základné údaje a získate spoľahlivý výpočet pre vaše finančné rozhodnutia. 
      </motion.p>
      <motion.ul
        className="mt-5 text-left max-w-2xl text-slate-700 text-sm xs:text-base sm:text-lg space-y-1.5 px-2 sm:px-0"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.7 }}
      >
        <li>
          <b>✔️ Rýchly výpočet dane</b> pre SZČO, živnostníkov aj zamestnancov
        </li>
        <li>
          <b>✔️ Hypotekárna a úverová kalkulačka</b> s mesačnými splátkami
        </li>
        <li>
          <b>✔️ Investičná kalkulačka</b> pre pravidelné aj jednorazové investície
        </li>
        <li>
          <b>✔️ Presné výsledky</b> podľa najnovších zákonov
        </li>
      </motion.ul>
      <motion.p
        className="mt-6 text-xs xs:text-sm sm:text-base text-slate-500 max-w-xl"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.7 }}
      >
        <b>Tip:</b> Potrebujete poradiť? Prečítajte si naše návody nižšie alebo si pozrite{" "}
        <a href="#faq" className="underline text-indigo-600">často kladené otázky (FAQ)</a>.
      </motion.p>
    </motion.section>
  );
}


