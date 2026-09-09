import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="logo">
              <span className="logo-mark">A</span>
              AuditISO
            </a>
            <p>
              Auditoria e certificação especializada para empresas que querem transformar
              conformidade em vantagem competitiva.
            </p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h5>Navegação</h5>
              <a href="#top">Home</a>
              <a href="#servicos">Serviços</a>
              <a href="#normas">Normas</a>
              <a href="#processo">Processo</a>
            </div>
            <div className="footer-col">
              <h5>Empresa</h5>
              <a href="#contato">Contato</a>
              <a href="#orcamento">Orçamento</a>
              <Link to="/login">Acesso dos Auditores</Link>
            </div>
            <div className="footer-col">
              <h5>Contato</h5>
              <p>(41) 99999-9999</p>
              <p>contato@auditcompany.com.br</p>
              <p>Curitiba - PR</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} AuditISO. Todos os direitos reservados.</span>
          <span>Conformidade que Vende.</span>
        </div>
      </div>
    </footer>
  );
}
