import { checkCredentials, createSessionCookie, readJsonBody, sendJson } from "./_auth.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return sendJson(res, 405, { error: "Método não permitido" }, { Allow: "POST" });
  }

  let body;
  try {
    body = await readJsonBody(req);
  } catch {
    return sendJson(res, 400, { error: "Requisição inválida" });
  }

  const { user = "", password = "" } = body || {};
  if (!checkCredentials(user, password)) {
    return sendJson(res, 401, { error: "Usuário ou senha inválidos" });
  }

  return sendJson(res, 200, { user }, { "Set-Cookie": createSessionCookie(user) });
}
