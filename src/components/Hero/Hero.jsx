import { useEffect, useState } from "react";
import "./Hero.css";

const BARS = [
  { h: 28, d: "0.05s" },
  { h: 41, d: "0.17s" },
  { h: 55, d: "0.29s" },
  { h: 68, d: "0.41s" },
  { h: 82, d: "0.53s" },
  { h: 94, d: "0.65s" },
];

const POINTS = [
  { left: 8.3, top: 74, d: "1.3s" },
  { left: 24.9, top: 62, d: "1.42s" },
  { left: 41.6, top: 49, d: "1.54s" },
  { left: 58.2, top: 37, d: "1.66s" },
  { left: 74.9, top: 25, d: "1.78s" },
  { left: 91.5, top: 14, d: "1.9s", big: true },
];

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
            <span className="hero-kicker">Qualidade · Regulatório · Auditoria</span>
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

          <div className="hero-visual">
            <div className="chart-card">
              <div className="chart-top">
                <span className="chart-lbl">Aderência aos requisitos</span>
                <span className="chart-badge">▲ +66 pts</span>
              </div>
              <div className="plot">
                <div className="bars">
                  {BARS.map((bar, i) => (
                    <i key={i} style={{ "--h": `${bar.h}%`, "--d": bar.d }}></i>
                  ))}
                </div>
                <svg viewBox="0 0 430 230" preserveAspectRatio="none">
                  <polyline
                    className="trend"
                    points="35.8,171.2 107.4,143.9 179,114.5 250.6,87.2 322.2,57.8 393.8,32.6"
                  />
                </svg>
                {POINTS.map((pt, i) => (
                  <span
                    key={i}
                    className={`pt ${pt.big ? "big" : ""}`}
                    style={{ left: `${pt.left}%`, top: `${pt.top}%`, "--d": pt.d }}
                  ></span>
                ))}
              </div>
              <div className="xaxis">
                <span>Diagnóstico</span>
                <span>Plano</span>
                <span>Adequação</span>
                <span>Documentos</span>
                <span>Auditoria</span>
                <span>Certificação</span>
              </div>
              <div className="chart-foot">
                <span><i></i> Gap analysis concluído</span>
                <span><i></i> 0 não conformidades maiores</span>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
