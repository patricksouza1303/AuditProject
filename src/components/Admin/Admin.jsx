import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import "../Login/Login.css";
import "./Admin.css";

export default function Admin() {
  const [session, setSession] = useState(undefined); // undefined = verificando
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/me", { credentials: "same-origin" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => setSession(data))
      .catch(() => setSession(null));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const r = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ user, password }),
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) {
        setError(data.error || "Não foi possível entrar.");
        return;
      }
      navigate("/admin/painel", { replace: true });
    } catch {
      setError("Falha de conexão com o servidor.");
    } finally {
      setLoading(false);
    }
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

      {session === undefined ? (
        <div className="auth-card admin-loading">Verificando sessão...</div>
      ) : session ? (
        <Navigate to="/admin/painel" replace />
      ) : (
        <div className="auth-card">
          <Link to="/" className="logo">
            <span className="logo-mark">A</span>
            4Q-SGI
          </Link>

          <div className="auth-head">
            <h1>Área do Administrador</h1>
            <p>Entre com seu usuário e senha de administrador.</p>
          </div>

          <div className={`auth-error ${error ? "show" : ""}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 8v5M12 16h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            {error}
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="admin-user">Usuário</label>
              <input
                id="admin-user"
                type="text"
                autoComplete="username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="admin-password">Senha</label>
              <input
                id="admin-password"
                type="password"
                placeholder="••••••••"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <div className="auth-divider">acesso restrito</div>
        </div>
      )}
    </div>
  );
}
