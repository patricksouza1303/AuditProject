import Reveal from "../Reveal/Reveal.jsx";
import "./Services.css";

const SERVICES = [
  {
    tone: "tone-1",
    color: "#6353e6",
    title: "Auditoria Tributária",
    description:
      "Exame das demonstrações contábeis (balanço, DRE) para garantir que refletem a real situação da empresa, assegurando conformidade com as normas contábeis.",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 19h16M6 19V9m5 10V5m5 14v-7" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tone: "tone-2",
    color: "#2f8577",
    title: "Auditoria Independente",
    description:
      "Realizada por terceiros para emitir um parecer (opinião) isento sobre a precisão das informações para investidores e credores.",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="2" />
        <path d="M12 8v4l3 2" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tone: "tone-3",
    color: "#c07a3a",
    title: "Auditoria de Sistemas / TI",
    description:
      "Avaliação da segurança, integridade e eficiência dos sistemas de informação e dados financeiros.",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="12" rx="2" stroke={color} strokeWidth="2" />
        <path d="M8 20h8" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tone: "tone-1",
    color: "#6353e6",
    title: "Auditoria Interna",
    description:
      "Avaliação da eficiência da gestão, controle de custos e conformidade operacional com procedimentos internos.",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16v16H4z" stroke={color} strokeWidth="2" />
        <path d="M8 9h8M8 13h5" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tone: "tone-2",
    color: "#2f8577",
    title: "Auditoria Operacional",
    description:
      "Focada na melhoria da eficiência, eficácia e economicidade das operações da empresa, buscando reduzir desperdícios.",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l6-6 4 4 8-8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    tone: "tone-3",
    color: "#c07a3a",
    title: "Gestão de Riscos",
    description: "Identificação e mapeamento de riscos operacionais, financeiros ou reputacionais.",
    icon: (color) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 3 6v6c0 5 4 8 9 10 5-2 9-5 9-10V6l-9-4Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
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
