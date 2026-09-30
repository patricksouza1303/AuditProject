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
          <h2>Quem Somos</h2>
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
