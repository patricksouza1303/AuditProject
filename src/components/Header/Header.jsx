import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import "./Header.css";

const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#servicos", label: "Serviços" },
  { href: "#normas", label: "Normas" },
  { href: "#processo", label: "Processo" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
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
        <a href="#top" className="logo">AuditISO</a>

        <nav className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <Link to="/login" className="btn btn-ghost">
            Acesso dos Auditores
          </Link>
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
        <Link to="/login" className="btn btn-primary" onClick={() => setOpen(false)}>
          Acesso dos Auditores
        </Link>
      </div>
    </header>
  );
}
