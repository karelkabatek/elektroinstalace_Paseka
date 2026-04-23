import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/", label: "Domů" },
  { to: "/o-nas", label: "O nás" },
  { to: "/sluzby", label: "Služby" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav
        className={`w-full max-w-3xl rounded-full border border-foreground/5 px-4 sm:px-6 py-2.5 flex items-center gap-2 sm:gap-6 text-sm font-medium transition-all ${
          scrolled
            ? "bg-background/5 backdrop-blur-xl shadow-[0_8px_30px_rgb(15,23,42,0.06)]"
            : "bg-background/60 backdrop-blur-md"
        }`}
      >
        <Link to="/" className="font-bold tracking-tight text-base flex items-center gap-2 mr-auto">
          <span className="size-2.5 rounded-full bg-led shadow-[0_0_12px_var(--led)]" />
          Elektroinstalace Paseka
        </Link>
        <div className="hidden md:flex items-center gap-7">
          {links.slice(1, -1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-foreground/60 hover:text-led transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/kontakt"
          className="hidden md:inline-flex bg-foreground text-background px-5 py-2.5 rounded-full hover:bg-led transition-colors"
        >
          Konzultace
        </Link>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          className="md:hidden inline-flex size-9 items-center justify-center rounded-full hover:bg-foreground/5"
        >
          <span className="relative block w-4 h-3">
            <span className={`absolute inset-x-0 top-0 h-px bg-foreground transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute inset-x-0 top-1/2 h-px bg-foreground transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute inset-x-0 bottom-0 h-px bg-foreground transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>
      {open && (
        <div className="absolute top-full mt-2 left-4 right-4 md:hidden rounded-3xl border border-foreground/5 bg-background/95 backdrop-blur-xl p-4 flex flex-col gap-1 shadow-float">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-2xl hover:bg-led-wash text-foreground/80"
              activeProps={{ className: "bg-led-wash text-led" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
