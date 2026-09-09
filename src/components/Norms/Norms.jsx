import { useEffect, useRef, useState } from "react";
import Reveal from "../Reveal/Reveal.jsx";
import "./Norms.css";

const NORMS = [
  {
    badge: "ISO 9001",
    title: "Gestão da Qualidade",
    description:
      "A ISO 9001 é uma norma internacional que define requisitos para um Sistema de Gestão da Qualidade (SGQ), focada na padronização de processos, satisfação do cliente e melhoria contínua. Ela ajuda empresas a organizarem sua gestão, reduzirem custos e aumentarem a competitividade, sendo aplicável a qualquer segmento ou porte de empresa.",
  },
  {
    badge: "ISO 13485",
    title: "Dispositivos Médicos",
    description:
      "Norma internacional específica para Sistemas de Gestão da Qualidade voltados à indústria de dispositivos médicos, garantindo segurança e eficácia dos produtos ao longo de todo o ciclo de vida, do desenvolvimento à pós-comercialização.",
  },
  {
    badge: "ISO 14001",
    title: "Gestão Ambiental",
    description:
      "Estabelece os requisitos para um Sistema de Gestão Ambiental eficaz, ajudando as empresas a reduzirem seu impacto ambiental, otimizarem recursos e cumprirem exigências legais aplicáveis.",
  },
  {
    badge: "RDC 665/2022",
    title: "Boas Práticas de Fabricação",
    description:
      "Resolução da ANVISA que dispõe sobre as Boas Práticas de Fabricação de produtos para saúde, incluindo dispositivos médicos e materiais correlatos, assegurando qualidade e segurança sanitária.",
  },
  {
    badge: "RDC 48/2013",
    title: "Certificação de Conformidade",
    description:
      "Regulamento da ANVISA que estabelece critérios para a certificação de Boas Práticas de Fabricação (BPF) para fabricantes nacionais e estrangeiros de produtos para saúde.",
  },
];

export default function Norms() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  const goTo = (i) => setIndex((i + NORMS.length) % NORMS.length);

  useEffect(() => {
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % NORMS.length), 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % NORMS.length), 6000);
  };

  return (
    <section id="normas">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Referências técnicas</span>
          <h2>Normas que Abrangemos</h2>
          <p>Conhecimento aprofundado nas principais normas e regulamentos do mercado.</p>
        </Reveal>

        <Reveal className="norms-carousel" onMouseEnter={pause} onMouseLeave={resume}>
          <div className="norms-track-wrap">
            <div className="norms-track" style={{ transform: `translateX(-${index * 100}%)` }}>
              {NORMS.map((norm) => (
                <article className="norm-slide" key={norm.badge}>
                  <span className="norm-badge">{norm.badge}</span>
                  <h3>{norm.title}</h3>
                  <p>{norm.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn" aria-label="Norma anterior" onClick={() => goTo(index - 1)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="carousel-dots">
              {NORMS.map((norm, i) => (
                <button
                  key={norm.badge}
                  className={i === index ? "active" : ""}
                  onClick={() => goTo(i)}
                  aria-label={`Ir para ${norm.badge}`}
                ></button>
              ))}
            </div>

            <button className="carousel-btn" aria-label="Próxima norma" onClick={() => goTo(index + 1)}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
