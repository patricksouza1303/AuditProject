import Reveal from "../Reveal/Reveal.jsx";
import "./Norms.css";

const NORMS = [
  {
    num: "9001",
    kicker: "ISO",
    title: "ISO 9001",
    tag: "Sistema de Gestão da Qualidade",
    desc: "Apoio especializado na implantação, adequação e estruturação do Sistema de Gestão da Qualidade, documentando os requisitos da ISO 9001 em processos eficientes, controlados e orientados à melhoria contínua.",
    deliverables: [
      "Diagnóstico e gap analysis",
      "Documentação e processos",
      "Auditoria interna",
      "Preparação para certificação",
    ],
  },
  {
    num: "13485",
    kicker: "ISO",
    title: "ISO 13485",
    tag: "Dispositivos médicos",
    desc: "Estruturamos e adequamos o Sistema de Gestão da Qualidade aos requisitos da ISO 13485, com foco na conformidade, segurança dos produtos e controle dos processos.",
    deliverables: [
      "Gestão de risco (ISO 14971)",
      "Controle de projeto e design",
      "Validação de processos",
      "Rastreabilidade e pós-mercado",
    ],
  },
  {
    num: "665",
    kicker: "RDC 2022",
    title: "RDC 665/2022",
    tag: "Boas Práticas · ANVISA",
    desc: "Adequação dos processos aos requisitos da RDC 665/2022, promovendo conformidade regulatória, controle dos processos e fortalecimento do Sistema de Gestão da Qualidade.",
    deliverables: [
      "Adequação às BPF/BPD",
      "Dossiê e petições",
      "Simulado de inspeção",
      "Suporte durante a inspeção",
    ],
  },
];

export default function Norms() {
  return (
    <section id="normas">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Referências técnicas</span>
          <h2>Normas que Abrangemos</h2>
          <p>Conhecimento aprofundado nas principais normas e regulamentos do mercado.</p>
        </Reveal>

        <div className="norm-cards">
          {NORMS.map((norm) => (
            <Reveal as="article" className="norm-card" key={norm.title}>
              <div className="ring-wrap">
                <div className="ring-lbl">
                  <b>{norm.num}</b>
                  <i>{norm.kicker}</i>
                </div>
              </div>
              <h3>{norm.title}</h3>
              <span className="norm-tag">{norm.tag}</span>
              <p className="norm-desc">{norm.desc}</p>
              <ul className="norm-deliver">
                {norm.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#orcamento" className="btn btn-primary btn-block">
                Saiba mais →
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
