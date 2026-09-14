import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const NORM_TAGS = ["ISO 9001", "ISO 13485", "ISO 14001", "RDC 665/2022", "RDC 48/2013"];

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
  const [count, setCount] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setGo(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!go) return;
    const target = 94;
    const start = setTimeout(() => {
      const step = target / 44;
      let c = 0;
      const i = setInterval(() => {
        c += step;
        if (c >= target) {
          c = target;
          clearInterval(i);
        }
        setCount(Math.round(c));
      }, 22);
    }, 2300);
    return () => clearTimeout(start);
  }, [go]);

  return (
    <>
      <section className={`hero ${go ? "go" : ""}`} id="top">
        <div className="hero-grid"></div>
        <div className="container">
          <div className="hero-copy">
            <span className="eyebrow">Qualidade · Regulatório · Auditoria</span>
            <h1>
              Sua empresa <span className="grad">pronta</span> para qualquer auditoria.
            </h1>
            <p>
              Gestão da Qualidade que transforma requisitos em resultados.
              Somos especialistas em Gestão da Qualidade atuando em consultorias, treinamentos e auditorias em sistemas de gestão da qualidade, Normas ISO, Boas Práticas e regulamentações de empresas. Oferecemos atendimento personalizadas para atender às necessidades específicas do seu negócio, transformando em resultados e preparando sua empresa para auditorias e inspeções.
            </p>

            <div className="hero-actions">
              <Link to="/agendar" className="btn btn-primary btn-lg">
                Agendar uma proposta →
              </Link>
              <a href="#servicos" className="btn btn-ghost btn-lg">
                Conhecer serviços
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <strong>+120</strong>
                <span>Empresas certificadas</span>
              </div>
              <div>
                <strong>5</strong>
                <span>Normas e regulamentos</span>
              </div>
              <div>
                <strong>98%</strong>
                <span>Taxa de aprovação</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="chart-card">
              <div className="chart-top">
                <div>
                  <span className="chart-lbl">Aderência aos requisitos</span>
                  <b className="chart-num">{count}%</b>
                </div>
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

      <section className="logo-strip">
        <div className="container">
          <span className="strip-label">Normas e regulamentos que atendemos</span>
          <div className="strip-tags">
            {NORM_TAGS.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
