import Reveal from "../Reveal/Reveal.jsx";
import "./Processes.css";

const STEPS = [
  {
    title: "Planejamento",
    description:
      "Definimos os objetivos, o escopo e a estratégia da auditoria para garantir um processo organizado e eficiente.",
  },
  {
    title: "Avaliação",
    description:
      "Realizamos uma análise detalhada dos processos, documentos e controles para identificar riscos e oportunidades de melhoria.",
  },
  {
    title: "Documentação",
    description: "Registramos todas as evidências, observações e não conformidades encontradas durante a auditoria.",
  },
  {
    title: "Verificação",
    description:
      "Validamos as informações coletadas e confirmamos a conformidade com normas, regulamentos e procedimentos internos.",
  },
  {
    title: "Certificação",
    description:
      "Emitimos um relatório completo com os resultados da auditoria, recomendações e conclusões para apoiar a tomada de decisões.",
  },
];

export default function Processes() {
  return (
    <section className="process" id="processo">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Como trabalhamos</span>
          <h2>Processo</h2>
          <p>Um método claro, do planejamento à certificação.</p>
        </Reveal>

        <div className="process-steps">
          {STEPS.map((step, i) => (
            <Reveal as="div" className="step" key={step.title}>
              <div className="step-num">{i + 1}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
