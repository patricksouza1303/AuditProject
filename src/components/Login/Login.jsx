import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [status, setStatus] = useState("Entrar");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() && password.length >= 4) {
      setError(false);
      setStatus("Entrando...");
      setTimeout(() => setStatus("Acesso liberado ✓"), 700);
    } else {
      setError(true);
    }
  };

  const handleForgot = (e) => {
    e.preventDefault();
    alert("Entre em contato com o administrador para redefinir sua senha.");
  };

  return (
    <div className="auth-page">
      <Link to="/" className="auth-back">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Voltar ao site
      </Link>

      <ThemeToggle className="auth-theme-toggle" />

      <div className="auth-card">
        <Link to="/" className="logo">
          <span className="logo-mark">A</span>
          AuditISO
        </Link>

        <div className="auth-head">
          <h1>Acesso dos Auditores</h1>
          <p>Entre com suas credenciais para acessar o painel de auditorias.</p>
        </div>

        <div className={`auth-error ${error ? "show" : ""}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 8v5M12 16h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          E-mail ou senha inválidos.
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="auditor@auditcompany.com.br"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="field">
            <div className="field-between">
              <label htmlFor="password">Senha</label>
              <a href="#" className="link-muted" onClick={handleForgot}>
                Esqueceu a senha?
              </a>
            </div>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="checkbox-row">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Manter-me conectado</label>
          </div>

          <button type="submit" className="btn btn-primary btn-block btn-lg">
            {status}
          </button>
        </form>

        <div className="auth-divider">acesso restrito</div>

        <p className="auth-footer-text">
          Ainda não tem acesso? <a href="#contato-login">Solicite ao administrador</a>
        </p>
      </div>
    </div>
  );
}
