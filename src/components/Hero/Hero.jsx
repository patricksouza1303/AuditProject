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
              Realizamos auditorias em Sistemas de Gestão da Qualidade, com foco na avaliação da conformidade
              e na melhoria contínua, conforme os requisitos das normas ISO 13485, RDC 665/2022, ISO 9001 e ISO 22000.
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
