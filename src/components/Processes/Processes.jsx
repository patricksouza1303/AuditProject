import { useState } from "react";
import Reveal from "../Reveal/Reveal.jsx";
import "./Processes.css";

const SEGMENTS = [
  { key: "plan", color: "#2E86AB", rotate: -180, x: "94px", y: "126px", side: "left" },
  { key: "do", color: "#5FAD41", rotate: -90, x: "94px", y: "126px", side: "right" },
  { key: "check", color: "#E8A33D", rotate: 0, x: "88px", y: "172px", side: "right-bottom" },
  { key: "act", color: "#1F4E6B", rotate: 90, x: "98px", y: "172px", side: "left-bottom" },
];

const DATA = {
  plan: {
    eyebrow: "PLAN · Planejar",
    title: "Consultoria em Sistemas de Gestão",
    desc: "Estruturamos o sistema antes de qualquer auditoria bater na porta. Diagnóstico, plano e cronograma com responsáveis definidos.",
    items: [
      "Diagnóstico e gap analysis",
      "Implantação de SGQ (ISO 9001, ISO 13485)",
      "Gestão de riscos",
      "Mapeamento e melhoria de processos",
      "Documentação e padronização",
    ],
  },
  do: {
    eyebrow: "DO · Executar",
    title: "Execução dos processos e requisitos",
    desc: "Colocamos o plano em prática junto com a sua equipe — não entregamos manual e vamos embora.",
    items: [
      "Estruturação de processos",
      "Adequação a requisitos normativos",
      "Controle de documentos",
      "Gestão de mudanças",
      "Monitoramento de indicadores",
    ],
  },
  check: {
    eyebrow: "CHECK · Verificar",
    title: "Auditorias de 1ª e 2ª parte",
    desc: "Encontramos o problema antes do auditor externo encontrar. Relatório objetivo, sem jargão inútil.",
    items: [
      "Auditoria interna (1ª parte)",
      "Auditoria de fornecedores (2ª parte)",
      "Auditoria baseada em risco",
      "Simulado de inspeção ANVISA",
      "Relatórios e planos de ação",
    ],
  },
  act: {
    eyebrow: "ACT · Agir",
    title: "Treinamentos e cultura da qualidade",
    desc: "O sistema só se sustenta quando as pessoas entendem o porquê. É aqui que o ciclo se fecha e recomeça.",
    items: [
      "Treinamentos técnicos e comportamentais",
      "Normas ISO 9001, 13485 e aplicáveis",
      "Boas Práticas",
      "Ferramentas da qualidade",
      "In company ou online",
    ],
  },
  reg: {
    eyebrow: "Anel externo · Contexto",
    title: "Assuntos Regulatórios",
    desc: "Não é uma etapa do ciclo — é o ambiente em que o ciclo inteiro opera. Muda a legislação, muda tudo lá dentro.",
    items: [
      "Acompanhamento da legislação",
      "Interpretação de requisitos regulatórios",
      "Dossiês técnicos e submissões",
      "Adequação às Boas Práticas",
      "Suporte em inspeções e órgãos reguladores",
    ],
  },
};

export default function Processes() {
  const [active, setActive] = useState("plan");
  const d = DATA[active];

  return (
    <section className="process" id="processo">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Como trabalhamos</span>
          <h2>Processo</h2>
          <p>Clique em uma etapa do ciclo — ou no anel externo — para ver o que fazemos nela.</p>
        </Reveal>

        <Reveal className="pdca">
          <div className="wheel">
            <svg viewBox="0 0 500 500">
              <defs>
                <path id="ringpath" d="M250,250 m0,-206 a206,206 0 1,1 -0.1,0" />
              </defs>
              <circle
                className={`outer-ring-2 ${active === "reg" ? "on" : ""}`}
                onClick={() => setActive("reg")}
                onMouseEnter={() => setActive("reg")}
                cx="250" cy="250" r="206"
              />
              <g className="ringtext">
                <text>
                  <textPath href="#ringpath" startOffset="0">
                    ASSUNTOS REGULATÓRIOS · O CONTEXTO QUE ENVOLVE TODO O CICLO · ASSUNTOS REGULATÓRIOS · O CONTEXTO QUE ENVOLVE TODO O CICLO ·{" "}
                  </textPath>
                </text>
              </g>
              <circle className="outer-ring" cx="250" cy="250" r="182" />
              {SEGMENTS.map((seg) => (
                <circle
                  key={seg.key}
                  className={`seg ${active === seg.key ? "on" : ""}`}
                  onClick={() => setActive(seg.key)}
                  onMouseEnter={() => setActive(seg.key)}
                  cx="250" cy="250" r="132"
                  stroke={seg.color}
                  strokeDasharray="197 633"
                  transform={`rotate(${seg.rotate} 250 250)`}
                />
              ))}
              <circle className="hub" cx="250" cy="250" r="98" />
            </svg>
            <div className="wlabel" style={{ top: "126px", left: "94px" }}>PLAN<small>PLANEJAR</small></div>
            <div className="wlabel" style={{ top: "126px", right: "94px" }}>DO<small>EXECUTAR</small></div>
            <div className="wlabel" style={{ bottom: "172px", right: "88px" }}>CHECK<small>VERIFICAR</small></div>
            <div className="wlabel" style={{ bottom: "172px", left: "98px" }}>ACT<small>AGIR</small></div>
            <div className="whub"><b>PDCA</b><span>Melhoria contínua</span></div>
            <button
              className={`reg-pill ${active === "reg" ? "on" : ""}`}
              onClick={() => setActive("reg")}
              onMouseEnter={() => setActive("reg")}
            >
              ⚖ Assuntos Regulatórios
            </button>
          </div>

          <div className="panel" key={active}>
            <span className="eyebrow">{d.eyebrow}</span>
            <h3>{d.title}</h3>
            <p>{d.desc}</p>
            <ul>
              {d.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
