import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Elektroinstalace Paseka" },
      { name: "description", content: "Kontaktujte Elektroinstalace Paseka. Telefon +420 777 123 456, e-mail info@elektroinstalace Paseka.cz. Působíme v Praze a okolí." },
      { property: "og:title", content: "Kontakt — Elektroinstalace Paseka" },
      { property: "og:description", content: "Kontaktujte nás telefonicky, e-mailem nebo přes formulář." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-led">Kontakt</span>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mt-4 mb-6 text-balance">
          Pojďme se domluvit.
        </h1>
        <p className="text-lg text-foreground/60 text-pretty">
          Napište nám nebo zavolejte. Konzultace a cenová nabídka jsou vždy zdarma a nezávazné.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Contact info */}
        <div className="lg:col-span-2 space-y-4">
          <a href="tel:+420777123456" className="block rounded-3xl p-8 bg-foreground text-background hover:bg-led transition-colors group">
            <div className="text-xs uppercase tracking-widest text-background/60 mb-3">Telefon</div>
            <div className="text-2xl font-semibold tabular-nums">+420 777 123 456</div>
            <div className="text-sm text-background/70 mt-2">Po–Pá 8:00–18:00 · Havárie 24/7</div>
          </a>
          <a href="mailto:info@elektroprofi.cz" className="block rounded-3xl p-8 bg-led-wash border border-foreground/5 hover:border-led/30 transition-colors">
            <div className="text-xs uppercase tracking-widest text-foreground/60 mb-3">E-mail</div>
            <div className="text-2xl font-semibold">info@Elektroinstalace Paseka.cz</div>
            <div className="text-sm text-foreground/60 mt-2">Odpovídáme do 24 hodin</div>
          </a>
          <div className="rounded-3xl p-8 border border-foreground/10">
            <div className="text-xs uppercase tracking-widest text-foreground/60 mb-3">Adresa</div>
            <div className="text-lg font-medium">ElektroProfi s.r.o.</div>
            <div className="text-foreground/60 mt-1">Vinohradská 1234/56<br/>120 00 Praha 2</div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="lg:col-span-3 rounded-3xl p-8 md:p-10 bg-background border border-foreground/10 shadow-float space-y-5"
        >
          <h2 className="text-2xl font-semibold mb-2">Napište nám</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Jméno" name="name" required />
            <Field label="Telefon" name="phone" type="tel" />
          </div>
          <Field label="E-mail" name="email" type="email" required />
          <div>
            <label className="block text-sm font-medium mb-2">Zpráva</label>
            <textarea
              required
              rows={5}
              className="w-full rounded-2xl border border-foreground/10 bg-background px-4 py-3 text-sm focus:outline-none focus:border-led focus:ring-4 focus:ring-led/15 transition resize-none"
              placeholder="Popište, s čím vám můžeme pomoci…"
            />
          </div>
          <button
            type="submit"
            disabled={sent}
            className="w-full sm:w-auto bg-led text-white px-8 py-4 rounded-full font-medium hover:bg-led-hover transition-colors shadow-glow disabled:opacity-60"
          >
            {sent ? "Zpráva odeslána ✓" : "Odeslat poptávku"}
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-2xl border border-foreground/10 bg-background px-4 py-3 text-sm focus:outline-none focus:border-led focus:ring-4 focus:ring-led/15 transition"
      />
    </div>
  );
}
