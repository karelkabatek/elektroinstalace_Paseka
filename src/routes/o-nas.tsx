import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nás — Elektroinstalace Paseka" },
      { name: "description", content: "Jsme tým certifikovaných elektrikářů s 12+ lety praxe. Specializujeme se na moderní elektroinstalace a smart home." },
      { property: "og:title", content: "O nás — Elektroinstalace Paseka" },
      { property: "og:description", content: "Tým certifikovaných elektrikářů s 12+ lety praxe." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Kvalita bez kompromisů", d: "Používáme pouze ověřené komponenty od předních výrobců a každou realizaci podrobíme přísné kontrole." },
  { t: "Transparentní ceny", d: "Cenovou nabídku připravíme předem a v průběhu projektu nepřidáváme žádné skryté položky." },
  { t: "Termíny, které platí", d: "Dodržujeme dohodnuté termíny. Pokud se cokoliv změní, dáme vám vědět s předstihem." },
  { t: "Záruka a servis", d: "Na naši práci poskytujeme prodlouženou záruku a stálý servis pro klid duše." },
];

function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-led">O nás</span>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mt-4 mb-6 text-balance">
          Elektrikáři, kteří myslí jako architekti.
        </h1>
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto text-pretty">
          Elektroinstalace Paseka je rodinná firma s více než 12 lety zkušeností. Spojujeme řemeslnou preciznost s moderními technologiemi a přinášíme elektroinstalace, na které je radost se dívat.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-20">
        {values.map((v) => (
          <div key={v.t} className="rounded-3xl p-8 bg-led-wash/50 border border-foreground/5">
            <h3 className="text-xl font-semibold mb-3">{v.t}</h3>
            <p className="text-foreground/70 leading-relaxed">{v.d}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl bg-foreground text-background p-10 md:p-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="text-5xl font-semibold tabular-nums">12+</div>
            <div className="mt-2 text-background/60 text-sm uppercase tracking-wider">Let na trhu</div>
          </div>
          <div>
            <div className="text-5xl font-semibold tabular-nums">450+</div>
            <div className="mt-2 text-background/60 text-sm uppercase tracking-wider">Spokojených klientů</div>
          </div>
          <div>
            <div className="text-5xl font-semibold tabular-nums">8</div>
            <div className="mt-2 text-background/60 text-sm uppercase tracking-wider">Členů týmu</div>
          </div>
        </div>
      </div>
    </div>
  );
}
