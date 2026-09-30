import { useState } from "react";
import Reveal from "../Reveal/Reveal.jsx";
import "./Processes.css";

// Geometria do anel PDCA (viewBox 500x500, centro em 250,250)
const R_OUT = 200;
const R_IN = 90;
const GAP = 4; // metade do espaço entre os segmentos
const ARROW_OUT = 172;
const ARROW_IN = 116;
const ARROW_MID = 144;
const ARROW_TIP = 26;

// Um quadrante com seta na saída e encaixe na entrada, do topo (0°) até a direita (90°).
// Os demais segmentos são o mesmo formato rotacionado.
const SEGMENT_PATH = (() => {
  const c = 250;
  const pt = (x, y) => `${(c + x).toFixed(2)},${(c + y).toFixed(2)}`;
  const outY = Math.sqrt(R_OUT ** 2 - GAP ** 2);
  const inY = Math.sqrt(R_IN ** 2 - GAP ** 2);
  return [
    `M${pt(GAP, -outY)}`,
    `A${R_OUT},${R_OUT} 0 0,1 ${pt(outY, -GAP)}`,
    `L${pt(ARROW_OUT, -GAP)}`,
    `L${pt(ARROW_MID, -GAP + ARROW_TIP)}`,
    `L${pt(ARROW_IN, -GAP)}`,
    `L${pt(inY, -GAP)}`,
    `A${R_IN},${R_IN} 0 0,0 ${pt(GAP, -inY)}`,
    `L${pt(GAP, -ARROW_IN)}`,
    `L${pt(GAP + ARROW_TIP, -ARROW_MID)}`,
    `L${pt(GAP, -ARROW_OUT)}`,
    "Z",
  ].join(" ");
})();

const LETTER_RADIUS = 145;
const DOTS_RADIUS = 228;
const REG_RADIUS = 268;
const REG_CIRCUMFERENCE = 2 * Math.PI * REG_RADIUS;
const REG_TEXT = "ASSUNTOS REGULATÓRIOS · ".repeat(5);
const POP_DISTANCE = 10;

const SEGMENTS = [
  { key: "plan", letter: "P", color: "#F7A04A", rotate: 270 },
  { key: "do", letter: "D", color: "#23AEC0", rotate: 0 },
  { key: "check", letter: "C", color: "#1A80BE", rotate: 90 },
  { key: "act", letter: "A", color: "#EE5D55", rotate: 180 },
].map((seg) => {
  const angle = ((seg.rotate + 45) * Math.PI) / 180;
  const sin = Math.sin(angle);
  const cos = Math.cos(angle);
  return {
    ...seg,
    lx: 250 + LETTER_RADIUS * sin,
    ly: 250 - LETTER_RADIUS * cos,
    // deslocamento do segmento ativo para fora do círculo
    dx: `${(POP_DISTANCE * sin).toFixed(2)}px`,
    dy: `${(-POP_DISTANCE * cos).toFixed(2)}px`,
  };
});

const DATA = {
  plan: {
    eyebrow: "PLAN · Planejar",
    title: "Consultoria em Sistemas de Gestão da Qualidade",
    desc: "Apoiamos sua empresa na implantação, adequação, manutenção e melhoria contínua dos processos.",
    items: [
      "Diagnóstico e Gap Analysis",
      "Implantação de Sistemas de Gestão (ISO 9001, ISO 13485, entre outros)",
      "Gestão de riscos",
      "Mapeamento e melhoria de processos",
      "Documentação e padronização",
      "Acompanhamento e sustentação do sistema",
    ],
  },
  do: {
    eyebrow: "DO · Executar",
    title: "Execução dos Processos e Requisitos",
    desc: "Implementamos as ações planejadas com foco na eficiência e conformidade.",
    items: [
      "Estruturação de processos",
      "Adequação a requisitos normativos e regulatórios",
      "Controle de documentos",
      "Gestão de mudanças",
      "Monitoramento de indicadores",
      "Engajamento das equipes",
    ],
  },
  check: {
    eyebrow: "CHECK · Verificar",
    title: "Auditorias de 1ª e 2ª Parte",
    desc: "Avaliamos a conformidade dos processos e identificamos oportunidades de melhoria.",
    items: [
      "Auditorias internas (1ª parte)",
      "Auditorias de fornecedores e parceiros (2ª parte)",
      "Auditorias de processos e sistemas",
      "Relatórios claros e objetivos",
      "Planos de ação e acompanhamento",
    ],
  },
  act: {
    eyebrow: "ACT · Agir",
    title: "Treinamentos",
    desc: "Desenvolvemos pessoas e fortalecemos a cultura da qualidade.",
    items: [
      "Sistemas de Gestão da Qualidade",
      "Normas ISO (9001, 13485, e outras aplicáveis)",
      "Boas Práticas",
      "Auditorias",
      "Ferramentas da Qualidade",
      "Treinamentos personalizados presenciais ou online",
    ],
  },
  reg: {
    eyebrow: "Contexto · Todo o ciclo",
    title: "Assuntos Regulatórios",
    desc: "Apoiamos sua empresa no atendimento aos requisitos regulatórios aplicáveis ao seu segmento.",
    items: [
      "Acompanhamento da legislação",
      "Interpretação de requisitos regulatórios",
      "Dossiês técnicos e submissões",
      "Adequação às Boas Práticas e normas aplicáveis",
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
          <h2>Como Trabalhamos</h2>
        </Reveal>

        <Reveal className="pdca">
          <div className="wheel">
            <svg viewBox="-40 -40 580 580">
              <defs>
                <path id="regpath" d={`M250,${250 - REG_RADIUS} a${REG_RADIUS},${REG_RADIUS} 0 1,1 -0.01,0`} />
              </defs>
              <g
                className={`reg-ring ${active === "reg" ? "on" : ""}`}
                onClick={() => setActive("reg")}
                onMouseEnter={() => setActive("reg")}
              >
                <circle className="reg-band" cx="250" cy="250" r={REG_RADIUS} />
                <text className="reg-text">
                  <textPath href="#regpath" textLength={REG_CIRCUMFERENCE - 1} lengthAdjust="spacing">
                    {REG_TEXT}
                  </textPath>
                </text>
              </g>
              <circle className="dots-ring" cx="250" cy="250" r={DOTS_RADIUS} />
              {SEGMENTS.map((seg, i) => (
                <g
                  key={seg.key}
                  className={`seg-group ${active === seg.key ? "on" : ""} ${active !== seg.key && active !== "reg" ? "dim" : ""}`}
                  style={{ "--i": i, "--dx": seg.dx, "--dy": seg.dy }}
                  onClick={() => setActive(seg.key)}
                  onMouseEnter={() => setActive(seg.key)}
                >
                  <path className="seg" d={SEGMENT_PATH} fill={seg.color} transform={`rotate(${seg.rotate} 250 250)`} />
                  <text className="seg-letter" x={seg.lx} y={seg.ly}>
                    {seg.letter}
                  </text>
                </g>
              ))}
            </svg>
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
