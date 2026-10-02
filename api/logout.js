import { clearSessionCookie, sendJson } from "./_auth.js";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return sendJson(res, 405, { error: "Método não permitido" }, { Allow: "POST" });
  }
  return sendJson(res, 200, { ok: true }, { "Set-Cookie": clearSessionCookie() });
}
