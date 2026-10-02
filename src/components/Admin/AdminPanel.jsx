import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";
import "../Login/Login.css";
import "./Admin.css";

export default function AdminPanel() {
  const [session, setSession] = useState(undefined); // undefined = verificando
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/me", { credentials: "same-origin" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => setSession(data))
      .catch(() => setSession(null));
  }, []);

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST", credentials: "same-origin" }).catch(() => {});
    navigate("/admin", { replace: true });
  };

  if (session === null) return <Navigate to="/admin" replace />;

  return (
    <div className="auth-page">
      <ThemeToggle className="auth-theme-toggle" />

      {session === undefined ? (
        <div className="auth-card admin-loading">Verificando sessão...</div>
      ) : (
        <div className="auth-card admin-panel">
          <Link to="/" className="logo">
            <span className="logo-mark">A</span>
            4Q-SGI
          </Link>
          <div className="auth-head">
            <h1>Página de adm em construção</h1>
            <p>
              Conectado como <strong>{session.user}</strong>.
            </p>
          </div>
          <button type="button" className="btn btn-primary btn-block btn-lg" onClick={handleLogout}>
            Sair
          </button>
        </div>
      )}
    </div>
  );
}
