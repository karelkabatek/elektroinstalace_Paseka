import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elektroinstalace Paseka — Moderní elektroinstalace pro váš domov" },
      { name: "description", content: "Projektujeme a realizujeme chytré elektroinstalace, smart home, slaboproud a revize. Praha a celá ČR." },
      { property: "og:title", content: "Elektroinstalace Paseka — Moderní elektroinstalace" },
      { property: "og:description", content: "Chytré elektroinstalace, smart home, revize. Čistá práce a moderní technologie." },
    ],
  }),
  component: Index,
});

const services = [
  { n: "01", t: "Chytrá domácnost", d: "Integrace osvětlení, stínění a vytápění do jednoho ekosystému ovládaného z mobilu." },
  { n: "02", t: "Rezidenční rozvody", d: "Kompletní instalace pro novostavby i rekonstrukce. Precizní práce a čisté provedení." },
  { n: "03", t: "Slaboproud & sítě", d: "Datová infrastruktura, kamerové systémy a zabezpečení objektů bez viditelných kabelů." },
];

const stats = [
  { v: "12+", l: "Let praxe" },
  { v: "450", l: "Realizací" },
  { v: "24/7", l: "Havarijní servis" },
  { v: "100%", l: "Čistá práce" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative px-6 pb-20 overflow-hidden flex items-center min-h-[calc(100vh-7rem)]">
        <div
          aria-hidden
          className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-led-wash rounded-full blur-[140px] -z-10"
        />
        <div className="w-full max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text vlevo */}
          <div className="flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-background border border-foreground/10 shadow-sm mb-8">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-led opacity-60" />
                <span className="relative inline-flex rounded-full size-2 bg-led" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-foreground/70 uppercase">
                Systémy nové generace
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-balance mb-6">
              Neviditelná energie,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-led to-cyan-500">
                dokonalý prostor.
              </span>
            </h1>

            <p className="text-lg text-foreground/60 max-w-[55ch] text-pretty mb-8">
              Projektujeme a realizujeme moderní elektroinstalace, které přirozeně splynou s vaším interiérem. Čistá práce, chytré technologie a absolutní spolehlivost.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/kontakt" className="bg-led text-white px-8 py-4 rounded-full font-medium hover:bg-led-hover transition-colors shadow-glow text-center">
                Poptat instalaci
              </Link>
              <Link to="/sluzby" className="bg-background text-foreground px-8 py-4 rounded-full font-medium border border-foreground/10 hover:border-foreground/25 shadow-sm transition-all text-center">
                Naše služby
              </Link>
            </div>
          </div>

          {/* Obrázek vpravo */}
          <div className="rounded-[2.5rem] bg-led-wash p-3 shadow-float border border-background relative lg:justify-self-end w-full">
            <div className="rounded-[2rem] overflow-hidden">
              <img
                src={heroImg}
                alt="Moderní LED osvětlení v interiéru"
                width={1600}
                height={900}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-foreground/10 py-12">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground tabular-nums">{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-foreground/50">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-[50ch]">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Inteligentní řešení infrastruktury</h2>
            <p className="text-foreground/60 text-pretty">
              Od základních rozvodů po komplexní automatizaci. Precizní inženýring s důrazem na detail.
            </p>
          </div>
          <Link to="/sluzby" className="text-led font-medium hover:text-foreground transition-colors flex items-center gap-2 shrink-0">
            Všechny služby <span className="text-lg leading-none">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.n} className="bg-background rounded-3xl p-8 border border-foreground/5 shadow-sm hover:shadow-float transition-all duration-300 group">
              <div className="size-12 rounded-2xl bg-led-wash text-led flex items-center justify-center mb-8 border border-led/10 group-hover:scale-105 transition-transform">
                <span className="font-medium text-lg">{s.n}</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 tracking-tight">{s.t}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="rounded-[2.5rem] bg-gradient-to-br from-led to-cyan-500 px-8 md:px-16 py-16 md:py-20 text-white relative overflow-hidden">
          <div aria-hidden className="absolute -top-32 -right-32 size-96 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Plánujete projekt?</h2>
            <p className="text-white/80 text-lg mb-8">
              Nezávazná konzultace zdarma. Ozveme se vám do 24 hodin.
            </p>
            <Link to="/kontakt" className="inline-flex bg-white text-led px-8 py-4 rounded-full font-semibold hover:bg-foreground hover:text-white transition-colors">
              Kontaktujte nás
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

