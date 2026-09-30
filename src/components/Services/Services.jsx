import Reveal from "../Reveal/Reveal.jsx";
import "./Services.css";

const SERVICES = [
  {
    title: "Gestão da Qualidade",
    description:
      "ISO 13485, ISO 9001 e RDC 665/2022 — Boas Práticas de Fabricação, Armazenamento e Distribuição para fabricantes, importadores e distribuidores de produtos para saúde.",
  },
  {
    title: "Consultoria em Sistemas de Gestão Integrada",
    description:
      "Implantação, adequação, manutenção e melhoria contínua dos processos, com soluções práticas, personalizadas e alinhadas aos requisitos regulatórios e às necessidades do negócio.",
  },
  {
    title: "Assuntos Regulatórios",
    description:
      "Acompanhamento da legislação, interpretação de requisitos e dossiês técnicos para manter sua empresa em conformidade com os órgãos reguladores.",
  },
  {
    title: "Auditorias de 1ª e 2ª Parte",
    description:
      "Auditoria interna e auditoria de fornecedores para identificar não conformidades antes que o auditor externo o faça.",
  },
  {
    title: "Treinamentos",
    description:
      "Capacitação técnica e comportamental para que sua equipe entenda e sustente o sistema de gestão no dia a dia.",
  },
];

export default function Services() {
  return (
    <section className="services" id="servicos">
      <div className="container">
        <Reveal className="section-head">
          <h2>Nossos Serviços</h2>
        </Reveal>

        <div className="card-grid">
          {SERVICES.map((service) => (
            <Reveal as="article" className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
