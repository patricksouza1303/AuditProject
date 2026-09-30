import Reveal from "../Reveal/Reveal.jsx";
import "./Norms.css";

const NORMS = [
  {
    num: "9001",
    kicker: "ISO",
    title: "ISO 9001",
    tag: "Sistemas de gestão da qualidade",
    officialUrl: "https://www.iso.org/standard/62085.html",
  },
  {
    num: "13485",
    kicker: "ISO",
    title: "ISO 13485",
    tag: "Produtos para saúde — Sistemas de gestão da qualidade",
    officialUrl: "https://www.iso.org/standard/59752.html",
  },
  {
    num: "665/2022",
    kicker: "RDC",
    title: "RDC 665/2022",
    tag: "Boas Práticas de Fabricação (BPF) para produtos médicos e para diagnóstico de uso in vitro",
    officialUrl: "https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2022/rdc-665-de-2022",
  },
];

export default function Norms() {
  return (
    <section id="normas">
      <div className="container">
        <Reveal className="section-head">
          <h2>Normas que Abrangemos</h2>
        </Reveal>

        <div className="norm-cards">
          {NORMS.map((norm) => (
            <Reveal as="article" className="norm-card" key={norm.title}>
              <div className="ring-wrap">
                <div className={`ring-lbl ${norm.num.length > 5 ? "long" : ""}`}>
                  <i>{norm.kicker}</i>
                  <b>{norm.num}</b>
                </div>
              </div>
              <p className="norm-tag">{norm.tag}</p>
              <a href="#orcamento" className="btn btn-primary btn-block">
                Iniciar agendamento →
              </a>
              <a className="norm-link" href={norm.officialUrl} target="_blank" rel="noopener noreferrer">
                Mais informações sobre a norma →
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
