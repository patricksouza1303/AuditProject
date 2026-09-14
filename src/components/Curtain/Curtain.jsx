import { useEffect, useState } from "react";
import "./Curtain.css";

const STORAGE_KEY = "auditiso-curtain-seen";

export default function Curtain() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(STORAGE_KEY)) return;
    window.sessionStorage.setItem(STORAGE_KEY, "1");
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div
      className="curtain"
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget) setShow(false);
      }}
    >
      <div className="curtain-mark">
        <svg viewBox="0 0 100 100">
          <circle className="curtain-ring" cx="50" cy="50" r="35" />
          <path className="curtain-check" d="M33 51 L45 63 L68 39" />
        </svg>
        <p>Conformidade verificada</p>
      </div>
    </div>
  );
}
