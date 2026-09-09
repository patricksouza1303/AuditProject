import "./Hero.css";

const NORM_TAGS = ["ISO 9001", "ISO 13485", "ISO 14001", "RDC 665/2022", "RDC 48/2013"];

export default function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-grid"></div>
        <div className="container">
          <div className="hero-copy">
            <span className="eyebrow">Certificação &amp; Compliance</span>
            <h1>
              Conformidade que <span className="grad">Vende</span>
            </h1>
            <p>
              Auditoria especializada em ISO 13485, ISO 9001, ISO 14001, RDC 665/2022 e RDC
              48/2013. Aumente sua credibilidade e acesse novos mercados.
            </p>

            <div className="hero-actions">
              <a href="#orcamento" className="btn btn-primary btn-lg">
                Solicitar seu orçamento
              </a>
              <a href="#servicos" className="btn btn-ghost btn-lg">
                Conhecer serviços
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <strong>+120</strong>
                <span>Empresas certificadas</span>
              </div>
              <div>
                <strong>5</strong>
                <span>Normas e regulamentos</span>
              </div>
              <div>
                <strong>98%</strong>
                <span>Taxa de aprovação</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="float-card c1">
              <div className="fc-title">Score de Conformidade</div>
              <div className="fc-value">94%</div>
              <div className="fc-bar">
                <i style={{ width: "94%" }}></i>
              </div>
              <div className="badge-row">
                <span className="badge" style={{ background: "rgba(255,255,255,.25)", color: "#fff" }}>
                  ISO 9001
                </span>
                <span className="badge" style={{ background: "rgba(255,255,255,.25)", color: "#fff" }}>
                  ISO 14001
                </span>
              </div>
            </div>

            <div className="float-card c2">
              <div className="fc-title">Não conformidades resolvidas</div>
              <div className="fc-value">37 / 37</div>
              <div className="fc-bar">
                <i style={{ width: "100%" }}></i>
              </div>
            </div>

            <div className="float-card c3">
              <div className="fc-title">Próxima auditoria</div>
              <div className="fc-value">12 dias</div>
            </div>
          </div>
        </div>
      </section>

      <section className="logo-strip">
        <div className="container">
          <span className="strip-label">Normas e regulamentos que atendemos</span>
          <div className="strip-tags">
            {NORM_TAGS.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
