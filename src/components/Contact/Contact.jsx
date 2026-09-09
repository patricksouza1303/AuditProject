import Reveal from "../Reveal/Reveal.jsx";
import "./Contact.css";

const CONTACT_ITEMS = [
  {
    label: "Telefone",
    value: "(41) 99999-9999",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
          stroke="#fff"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "E-mail",
    value: "contato@auditcompany.com.br",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 6h16v12H4z" stroke="#fff" strokeWidth="1.6" />
        <path d="m4 7 8 6 8-6" stroke="#fff" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    label: "Endereço",
    value: "Curitiba - PR",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" stroke="#fff" strokeWidth="1.6" />
        <circle cx="12" cy="9" r="2.5" stroke="#fff" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contato">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Fale conosco</span>
          <h2>Entre em Contato</h2>
          <p>
            Nossa equipe está preparada para auxiliar sua empresa em todas as etapas da auditoria e
            certificação.
          </p>
        </Reveal>

        <div className="contact-grid">
          {CONTACT_ITEMS.map((item) => (
            <Reveal as="div" className="contact-card" key={item.label}>
              <div className="ci">{item.icon}</div>
              <h4>{item.label}</h4>
              <p>{item.value}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
