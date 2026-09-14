import Reveal from "../Reveal/Reveal.jsx";
import "./Team.css";

const TEAM = [
  {
    name: "[Sócia 1]",
    role: "Gestão da Qualidade",
    formacao: "[Formação]",
    items: ["ISO 9001 · ISO 13485", "Auditorias internas", "CAPA e não conformidades"],
  },
  {
    name: "[Sócia 2]",
    role: "Assuntos Regulatórios",
    formacao: "[Formação]",
    items: ["RDC 665/2022", "Registro de produtos", "Dossiês técnicos"],
  },
  {
    name: "[Sócio 3]",
    role: "Auditorias",
    formacao: "[Formação]",
    items: ["Auditoria 1ª e 2ª parte", "Auditoria baseada em risco", "Gestão de fornecedores"],
  },
  {
    name: "[Sócio 4]",
    role: "Treinamentos",
    formacao: "[Formação]",
    items: ["Treinamentos técnicos", "Metodologias ativas", "In company e online"],
  },
];

export default function Team() {
  return (
    <section id="equipe">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Quem somos</span>
          <h2>Especialistas, uma frente cada, um único interlocutor.</h2>
          <p>Sem ícones decorativos ao lado das fotos — só rosto, nome e a especialidade que resolve o seu problema.</p>
        </Reveal>

        <div className="team-grid">
          {TEAM.map((member) => (
            <Reveal as="article" className="team-member" key={member.name}>
              <div className="team-photo">FOTO REAL 4:5</div>
              <div className="team-info">
                <h4>{member.name}</h4>
                <div className="team-role">{member.role}</div>
                <div className="team-formacao">{member.formacao}</div>
                <ul>
                  {member.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
