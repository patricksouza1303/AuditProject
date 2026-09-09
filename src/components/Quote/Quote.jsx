import { useState } from "react";
import Reveal from "../Reveal/Reveal.jsx";
import "./Quote.css";

const FEATURES = [
  {
    title: "Diagnóstico Inicial",
    description: "Análise das necessidades da sua empresa.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Atendimento Especializado",
    description: "Consultores experientes durante todo o processo.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Proposta Personalizada",
    description: "Soluções desenvolvidas de acordo com sua realidade.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const EMPTY_FORM = { name: "", company: "", email: "", phone: "", message: "" };

export default function Quote() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(EMPTY_FORM);
  };

  return (
    <section className="quote-section" id="orcamento">
      <div className="container">
        <Reveal className="quote-copy">
          <span className="eyebrow">Vamos conversar</span>
          <h2>Solicite seu orçamento</h2>
          <p>
            Nossa equipe está preparada para entender as necessidades da sua empresa e elaborar
            uma proposta personalizada para auditorias, certificações e implementação de sistemas
            de gestão.
          </p>

          <div className="quote-features">
            {FEATURES.map((feature) => (
              <div className="quote-feature" key={feature.title}>
                <div className="qf-icon">{feature.icon}</div>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal as="form" className="quote-form" onSubmit={handleSubmit}>
          <h3>Preencha seus dados</h3>

          <div className="form-row">
            <div className="field">
              <label htmlFor="q-name">Nome</label>
              <input
                id="q-name"
                type="text"
                placeholder="Seu nome completo"
                value={form.name}
                onChange={handleChange("name")}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="q-company">Empresa</label>
              <input
                id="q-company"
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
              <label htmlFor="q-email">E-mail</label>
              <input
                id="q-email"
                type="email"
                placeholder="voce@empresa.com"
                value={form.email}
                onChange={handleChange("email")}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="q-phone">Telefone</label>
              <input
                id="q-phone"
                type="tel"
                placeholder="(00) 00000-0000"
                value={form.phone}
                onChange={handleChange("phone")}
                required
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="q-message">Mensagem</label>
            <textarea
              id="q-message"
              placeholder="Conte um pouco sobre a norma ou certificação de interesse"
              value={form.message}
              onChange={handleChange("message")}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-block btn-lg">
            Solicitar orçamento
          </button>

          <div className={`form-success ${submitted ? "show" : ""}`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Recebemos seus dados! Nossa equipe entrará em contato em breve.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
