import { useLayoutEffect, useRef, useState } from "react";
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

const EMPTY_FORM = { name: "", company: "", email: "", phone: "", message: "" };

// tempos das animações (ms)
const FADE_MS = 220;
const MOVE_MS = 600;
const CLOSE_MS = 300;

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Norms() {
  const [selected, setSelected] = useState(null);
  const [leaving, setLeaving] = useState(null);
  const [returning, setReturning] = useState(null);
  const [closing, setClosing] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const gridRef = useRef(null);
  const flipFrom = useRef(null);

  const cardEl = (i) => gridRef.current?.querySelector(`[data-norm="${i}"]`);

  // Guarda a posição atual do card para animar até a nova posição depois do render (técnica FLIP)
  const rememberPosition = (i) => {
    flipFrom.current = { index: i, rect: cardEl(i).getBoundingClientRect() };
  };

  const open = (i) => {
    if (selected !== null || leaving !== null) return;
    setForm(EMPTY_FORM);
    setSubmitted(false);

    if (prefersReducedMotion()) {
      setSelected(i);
      return;
    }

    // primeiro os outros cards somem, depois o card escolhido anda até a lateral
    setLeaving(i);
    setTimeout(() => {
      rememberPosition(i);
      setLeaving(null);
      setSelected(i);
    }, FADE_MS);
  };

  const close = () => {
    if (closing) return;
    if (prefersReducedMotion()) {
      setSelected(null);
      return;
    }

    // inverso da abertura: a janela recolhe, o card volta ao lugar e os outros reaparecem
    setClosing(true);
    setTimeout(() => {
      rememberPosition(selected);
      setClosing(false);
      setReturning(selected);
      setSelected(null);
      setTimeout(() => setReturning(null), MOVE_MS + 400);
    }, CLOSE_MS);
  };

  useLayoutEffect(() => {
    const from = flipFrom.current;
    if (!from) return;
    flipFrom.current = null;

    const el = cardEl(from.index);
    const to = el.getBoundingClientRect();
    const dx = from.rect.left - to.left;
    const dy = from.rect.top - to.top;
    if (!dx && !dy) return;

    el.style.transition = "none";
    el.style.transform = `translate(${dx}px, ${dy}px)`;
    el.getBoundingClientRect(); // força o navegador a aplicar a posição inicial
    el.style.transition = `transform ${MOVE_MS}ms cubic-bezier(.16,1,.3,1)`;
    el.style.transform = "";

    const cleanup = () => {
      el.style.transition = "";
      el.removeEventListener("transitionend", cleanup);
    };
    el.addEventListener("transitionend", cleanup);
  }, [selected]);

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(EMPTY_FORM);
  };

  // o último card abre a janela à esquerda; os demais, à direita
  const side = selected === NORMS.length - 1 ? "right" : "left";
  const norm = selected !== null ? NORMS[selected] : null;

  const cardClass = (i) => {
    const classes = ["norm-card"];
    if (selected === i) classes.push("selected");
    if (selected !== null && selected !== i) classes.push("norm-hidden");
    if (leaving !== null && leaving !== i) classes.push("leaving");
    if (returning !== null && returning !== i) classes.push("returning");
    return classes.join(" ");
  };

  return (
    <section id="normas">
      <div className="container">
        <Reveal className="section-head">
          <h2>Normas que Abrangemos</h2>
        </Reveal>

        <div ref={gridRef} className={`norm-cards ${selected !== null ? `open open-${side}` : ""}`}>
          {NORMS.map((n, i) => (
            <Reveal as="article" className={cardClass(i)} key={n.title} data-norm={i}>
              <div className="ring-wrap">
                <div className={`ring-lbl ${n.num.length > 5 ? "long" : ""}`}>
                  <i>{n.kicker}</i>
                  <b>{n.num}</b>
                </div>
              </div>
              <p className="norm-tag">{n.tag}</p>
              <button type="button" className="btn btn-primary btn-block" onClick={() => open(i)}>
                Iniciar agendamento
              </button>
              <a className="norm-link" href={n.officialUrl} target="_blank" rel="noopener noreferrer">
                Mais informações sobre a norma
              </a>
            </Reveal>
          ))}

          {norm && (
            <form className={`norm-booking ${closing ? "closing" : ""}`} key={norm.title} onSubmit={handleSubmit}>
              <button type="button" className="norm-booking-close" onClick={close} aria-label="Fechar">
                ×
              </button>
              <span className="eyebrow">Iniciar agendamento</span>
              <h3>{norm.title}</h3>
              <p className="norm-booking-intro">
                Preencha seus dados e nossa equipe entra em contato para agendar a sua auditoria.
              </p>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="nb-name">Nome</label>
                  <input id="nb-name" type="text" placeholder="Seu nome completo" value={form.name} onChange={handleChange("name")} required />
                </div>
                <div className="field">
                  <label htmlFor="nb-company">Empresa</label>
                  <input id="nb-company" type="text" placeholder="Nome da empresa" value={form.company} onChange={handleChange("company")} required />
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="nb-email">E-mail</label>
                  <input id="nb-email" type="email" placeholder="voce@empresa.com" value={form.email} onChange={handleChange("email")} required />
                </div>
                <div className="field">
                  <label htmlFor="nb-phone">Telefone</label>
                  <input id="nb-phone" type="tel" placeholder="(00) 00000-0000" value={form.phone} onChange={handleChange("phone")} required />
                </div>
              </div>

              <div className="field">
                <label htmlFor="nb-message">Mensagem</label>
                <textarea
                  id="nb-message"
                  placeholder="Conte um pouco sobre a sua empresa e o momento da auditoria"
                  value={form.message}
                  onChange={handleChange("message")}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Enviar solicitação
              </button>

              <div className={`form-success ${submitted ? "show" : ""}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Recebemos seu pedido de agendamento! Nossa equipe entrará em contato em breve.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
