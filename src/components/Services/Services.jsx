import Reveal from "../Reveal/Reveal.jsx";
import "./Services.css";

const SERVICES = [
  {
    tone: "tone-1",
    color: "#17A2A2",
    title: "Gestão da Qualidade",
    description:
      "ISO 13485, ISO 9001 e RDC 665/2022 — Boas Práticas de Fabricação, Armazenamento e Distribuição para fabricantes, importadores e distribuidores de produtos para saúde.",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 3 6v6c0 5 4 8 9 10 5-2 9-5 9-10V6l-9-4Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 12.5l2 2 4-4.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    tone: "tone-2",
    color: "#2F6FA8",
    title: "Consultoria em Sistemas de Gestão Integrada",
    description:
      "Implantação, adequação, manutenção e melhoria contínua dos processos, com soluções práticas, personalizadas e alinhadas aos requisitos regulatórios e às necessidades do negócio.",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" />
        <path
          d="M12 3v2.5M12 18.5V21M4.5 12H2M22 12h-2.5M6 6l1.7 1.7M16.3 16.3 18 18M6 18l1.7-1.7M16.3 7.7 18 6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    tone: "tone-3",
    color: "#D4A73C",
    title: "Assuntos Regulatórios",
    description:
      "Acompanhamento da legislação, interpretação de requisitos e dossiês técnicos para manter sua empresa em conformidade com os órgãos reguladores.",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3v18M12 6l-6 1.5L4.5 12a3 3 0 0 0 6 0L9 7.5M12 6l6 1.5L19.5 12a3 3 0 0 1-6 0L15 7.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 20h12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tone: "tone-1",
    color: "#17A2A2",
    title: "Auditorias de 1ª e 2ª Parte",
    description:
      "Auditoria interna e auditoria de fornecedores para identificar não conformidades antes que o auditor externo o faça.",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="10.5" cy="10.5" r="6.5" stroke={color} strokeWidth="2" />
        <path d="M20 20l-4.3-4.3" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tone: "tone-2",
    color: "#2F6FA8",
    title: "Treinamentos",
    description:
      "Capacitação técnica e comportamental para que sua equipe entenda e sustente o sistema de gestão no dia a dia.",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M2 8.5 12 4l10 4.5-10 4.5L2 8.5Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <path d="M6 10.7v4.3c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="services" id="servicos">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">O que fazemos</span>
          <h2>Nossos Serviços</h2>
          <p>Soluções completas em auditoria para proteger, organizar e valorizar a sua empresa.</p>
        </Reveal>

        <div className="card-grid">
          {SERVICES.map((service) => (
            <Reveal as="article" className="service-card" key={service.title}>
              <div className={`service-icon ${service.tone}`}>{service.icon(service.color)}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
