import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/nav";
import { AdereLogo } from "./ui/AdereLogo";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" aria-label="Adere+, ir para o início">
          <AdereLogo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-primary-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-600 md:inline-flex"
        >
          Fale com a equipe
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-ink md:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          className="border-t border-border bg-white px-6 py-4 md:hidden"
          aria-label="Navegação móvel"
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ink-soft hover:bg-primary-50 hover:text-primary-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
