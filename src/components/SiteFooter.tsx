import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/5 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4 text-sm">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-bold text-base mb-3">
            <span className="size-2.5 rounded-full bg-led shadow-[0_0_12px_var(--led)]" />
            Elektroinstalace Paseka
          </div>
          <p className="text-foreground/60 max-w-sm">
            Moderní elektroinstalace pro domácnosti, firmy a developery. Čistá práce, certifikovaní technici, spolehlivý servis.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Navigace</h4>
          <ul className="space-y-2 text-foreground/60">
            <li><Link to="/o-nas" className="hover:text-led">O nás</Link></li>
            <li><Link to="/sluzby" className="hover:text-led">Služby</Link></li>
            <li><Link to="/kontakt" className="hover:text-led">Kontakt</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Kontakt</h4>
          <ul className="space-y-2 text-foreground/60">
            <li>+420 777 555 145</li>
            <li>info@elektroinstalacepaseka.cz</li>
            <li>třebíč · celá ČR</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-foreground/5 py-6 text-center text-xs text-foreground/50">
        © {new Date().getFullYear()} Elektroinstalace Paseka s.r.o. — Všechna práva vyhrazena.
      </div>
    </footer>
  );
}
