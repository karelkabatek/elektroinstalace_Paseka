import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Služby — ElektroProfi" },
      { name: "description", content: "Kompletní elektroinstalace, smart home, slaboproud, revize, fotovoltaika a havarijní servis 24/7." },
      { property: "og:title", content: "Služby — ElektroProfi" },
      { property: "og:description", content: "Elektroinstalace, smart home, revize, fotovoltaika a havarijní servis." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { n: "01", t: "Kompletní elektroinstalace", d: "Návrh a realizace silnoproudých rozvodů pro novostavby, rekonstrukce a komerční prostory.", items: ["Rozvaděče", "Zásuvkové okruhy", "Osvětlení", "Bleskosvody"] },
  { n: "02", t: "Smart home & automatizace", d: "Chytré domácnosti s integrací Loxone, KNX a Tuya. Ovládání z mobilu i hlasem.", items: ["Loxone / KNX", "Scény osvětlení", "Stínění", "Vytápění"] },
  { n: "03", t: "Slaboproud & datové sítě", d: "Strukturovaná kabeláž, Wi-Fi pokrytí, kamerové systémy a zabezpečení objektů.", items: ["Datové sítě", "Wi-Fi mesh", "CCTV", "EZS / EPS"] },
  { n: "04", t: "Revize a měření", d: "Výchozí i pravidelné revize elektrických zařízení dle platných norem.", items: ["Výchozí revize", "Pravidelné revize", "Měření", "Termovize"] },
  { n: "05", t: "Fotovoltaika", d: "Návrh, instalace a servis FVE na klíč včetně bateriových úložišť a wallboxů.", items: ["FVE na klíč", "Baterie", "Wallbox", "Dotace"] },
  { n: "06", t: "Havarijní servis 24/7", d: "Nonstop pohotovost pro výpadky, zkraty a poruchy. Rychlý zásah do 90 minut v Praze.", items: ["Pohotovost 24/7", "Diagnostika", "Opravy", "Údržba"] },
];

function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-led">Co nabízíme</span>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mt-4 mb-6 text-balance">
          Komplexní služby pod jednou střechou.
        </h1>
        <p className="text-lg text-foreground/60 text-pretty">
          Od jednoho vypínače po kompletní automatizaci budovy. Vždy s garancí kvality a férovou cenou.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.n} className="bg-background rounded-3xl p-8 border border-foreground/5 shadow-sm hover:shadow-float hover:-translate-y-1 transition-all duration-300 group flex flex-col">
            <div className="flex items-start justify-between mb-8">
              <div className="size-12 rounded-2xl bg-led-wash text-led flex items-center justify-center border border-led/10">
                <span className="font-medium">{s.n}</span>
              </div>
              <span className="text-foreground/30 group-hover:text-led group-hover:translate-x-1 transition-all">→</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 tracking-tight">{s.t}</h3>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6">{s.d}</p>
            <ul className="mt-auto flex flex-wrap gap-2">
              {s.items.map((i) => (
                <li key={i} className="text-xs px-3 py-1.5 rounded-full bg-led-wash/60 text-foreground/70 border border-foreground/5">
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-foreground/60 mb-6">Nenašli jste přesně to, co hledáte?</p>
        <Link to="/kontakt" className="inline-flex bg-led text-white px-8 py-4 rounded-full font-medium hover:bg-led-hover shadow-glow transition-colors">
          Domluvte si konzultaci
        </Link>
      </div>
    </div>
  );
}
