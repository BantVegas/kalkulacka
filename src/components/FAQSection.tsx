// components/FAQSection.jsx
export default function FAQSection() {
  return (
    <section
      id="faq"
      className="w-full max-w-2xl mx-auto py-8 px-4 bg-white/70 backdrop-blur rounded-xl shadow-md mt-10 mb-16"
    >
      <h2 className="text-xl font-semibold mb-4">Často kladené otázky (FAQ)</h2>
      <ul className="space-y-6">
        <li>
          <b>Pre koho je daňová kalkulačka určená?</b>
          <p>
            Kalkulačka je vhodná pre SZČO, zamestnancov, firmy aj každého, kto si chce rýchlo overiť daňovú povinnosť podľa platnej legislatívy SR.
          </p>
        </li>
        <li>
          <b>Je výpočet záväzný?</b>
          <p>
            Výsledok je orientačný a slúži len na informatívne účely. Pri podávaní daňového priznania odporúčame vždy skontrolovať údaje a poradiť sa s odborníkom.
          </p>
        </li>
        <li>
          <b>Môžem použiť kalkulačku aj pre rok 2025?</b>
          <p>
            Kalkulačka je pravidelne aktualizovaná podľa najnovších zákonov. Po vydaní nových sadzieb a zmien ju vždy prispôsobíme aktuálnemu roku.
          </p>
        </li>
        <li>
          <b>Kto vidí moje údaje?</b>
          <p>
            Vaše údaje nie sú ukladané ani poskytované tretím stranám. Výpočet prebieha anonymne priamo v prehliadači.
          </p>
        </li>
        <li>
          <b>Chýba vám tu otázka?</b>
          <p>
            Kontaktujte nás a radi ju doplníme.
          </p>
        </li>
      </ul>
    </section>
  );
}
