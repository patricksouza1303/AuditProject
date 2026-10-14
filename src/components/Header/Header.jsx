import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import "./Header.css";

const NAV_LINKS = [
  { href: "#servicos", label: "Nossos serviços" },
  { href: "#normas", label: "Normas que abrangemos" },
  { href: "#processo", label: "Como atuamos" },
  { href: "#contato", label: "Contatos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <a href="#top" className="logo">
          <span className="logo-check" aria-hidden="true">✓</span>
          4Q-SGI
        </a>

        <nav className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/login" className="header-cta">
            Acesso aos funcionários
          </Link>
          <ThemeToggle />
          <button
            className="nav-toggle"
            aria-label="Abrir menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${open ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <div className="mobile-nav-theme">
          <span>Tema</span>
          <ThemeToggle />
        </div>
        <Link to="/login" onClick={() => setOpen(false)}>
          Acesso para funcionários
        </Link>
      </div>
    </header>
  );
}
