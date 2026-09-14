import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import Reveal from "../Reveal/Reveal.jsx";
import "./Agendamento.css";

const PROFILES = ["Todos", "Fabricante", "Importador", "Distribuidor", "Laboratório", "Transportador", "Armazenagem"];

const NORMS = [
  {
    num: "9001",
    kicker: "ISO",
    title: "ISO 9001",
    tag: "Sistemas de gestão da qualidade",
    profiles: ["Fabricante", "Importador", "Distribuidor", "Laboratório", "Transportador", "Armazenagem"],
    officialUrl: "https://www.iso.org/standard/62085.html",
  },
  {
    num: "13485",
    kicker: "ISO",
    title: "ISO 13485",
    tag: "Produtos para saúde — Sistemas de gestão da qualidade",
    profiles: ["Fabricante", "Importador", "Distribuidor", "Laboratório"],
    officialUrl: "https://www.iso.org/standard/59752.html",
  },
  {
    num: "665/2022",
    kicker: "RDC",
    title: "RDC 665/2022",
    tag: "Boas Práticas de Fabricação (BPF) para produtos médicos e para diagnóstico de uso in vitro",
    profiles: ["Fabricante", "Importador", "Distribuidor", "Transportador", "Armazenagem"],
    officialUrl: "https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2022/rdc-665-de-2022",
  },
];

const EMPTY_FORM = { name: "", company: "", email: "", phone: "", message: "" };

export default function Agendamento() {
  const [profile, setProfile] = useState("Todos");
  const [selectedNorm, setSelectedNorm] = useState(NORMS[0].title);
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const visibleNorms = profile === "Todos" ? NORMS : NORMS.filter((n) => n.profiles.includes(profile));

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleStart = (title) => {
    setSelectedNorm(title);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(EMPTY_FORM);
  };

  return (
    <div className="book-page">
      <div className="book-topbar">
        <Link to="/" className="book-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Voltar ao site
        </Link>
        <Link to="/" className="logo">
          <span className="logo-mark">A</span>
          AuditISO
        </Link>
        <ThemeToggle />
      </div>

      <section className="book-hero">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Agendar uma proposta</span>
            <h1>Agende uma proposta</h1>
            <p>Escolha sua próxima auditoria selecionando a norma abaixo:</p>
          </Reveal>

          <div className="book-filters">
            {PROFILES.map((p) => (
              <button
                key={p}
                type="button"
                className={`book-filter-pill ${profile === p ? "on" : ""}`}
                onClick={() => setProfile(p)}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="book-carousel">
            {visibleNorms.map((norm) => (
              <Reveal as="article" className="book-card" key={norm.title}>
                <div className="book-card-num">
                  <b>{norm.num}</b>
                  <i>{norm.kicker}</i>
                </div>
                <h3>{norm.title}</h3>
                <p className="book-card-tag">{norm.tag}</p>
                <button type="button" className="btn btn-primary btn-block" onClick={() => handleStart(norm.title)}>
                  Iniciar agendamento →
                </button>
                <a
                  className="book-card-link"
                  href={norm.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mais informações sobre a norma →
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="book-form-section" ref={formRef}>
        <div className="container">
          <Reveal as="form" className="quote-form book-form" onSubmit={handleSubmit}>
            <h3>Preencha seus dados</h3>

            <div className="field">
              <label htmlFor="b-norm">Norma de interesse</label>
              <select id="b-norm" value={selectedNorm} onChange={(e) => setSelectedNorm(e.target.value)}>
                {NORMS.map((norm) => (
                  <option key={norm.title} value={norm.title}>
                    {norm.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="b-name">Nome</label>
                <input
                  id="b-name"
                  type="text"
                  placeholder="Seu nome completo"
                  value={form.name}
                  onChange={handleChange("name")}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="b-company">Empresa</label>
                <input
                  id="b-company"
                  type="text"
                  placeholder="Nome da empresa"
                  value={form.company}
                  onChange={handleChange("company")}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="b-email">E-mail</label>
                <input
                  id="b-email"
                  type="email"
                  placeholder="voce@empresa.com"
                  value={form.email}
                  onChange={handleChange("email")}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="b-phone">Telefone</label>
                <input
                  id="b-phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="b-message">Mensagem</label>
              <textarea
                id="b-message"
                placeholder="Conte um pouco sobre a sua empresa e o momento da auditoria"
                value={form.message}
                onChange={handleChange("message")}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-block btn-lg">
              Inicie o agendamento →
            </button>

            <div className={`form-success ${submitted ? "show" : ""}`}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Recebemos seu pedido de agendamento! Nossa equipe entrará em contato em breve.
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
