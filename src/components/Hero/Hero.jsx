import { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [go, setGo] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setGo(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className={`hero ${go ? "go" : ""}`} id="top">
        <div className="container">
          <div className="hero-copy">
            <span className="hero-kicker">Qualidade · Regulatório · Auditoria · Treinamento</span>
            <h1>
              Sua empresa pronta <span className="grad">para qualquer auditoria.</span>
            </h1>
            <p>
              Auditamos o seu sistema de Gestão da Qualidade nas normas ISO 13485, ISO 9001 e RDC 665/2022
              para fabricantes, importadores e distribuidores de produtos para saúde.
            </p>

            <div className="hero-actions">
              <a href="#normas" className="btn btn-primary btn-lg">
                Agendar uma proposta →
              </a>
            </div>

            <div className="hero-meta">
              <strong>Especialistas dedicados</strong>
              <strong>Anos de experiência somada</strong>
              <strong>Foco na qualidade</strong>
            </div>
          </div>
        </div>
    </section>
  );
}
