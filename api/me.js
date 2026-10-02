import { getSession, sendJson } from "./_auth.js";

export default function handler(req, res) {
  const session = getSession(req);
  if (!session) return sendJson(res, 401, { error: "Não autenticado" });
  return sendJson(res, 200, { user: session.user });
}
