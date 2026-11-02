import { readJsonBody, sendJson } from "./_auth.js";

const RECIPIENT = process.env.AGENDAMENTO_EMAIL_TO || "patrick_souza1303@hotmail.com";
// O remetente de teste da Resend só entrega para o e-mail dono da conta.
const SENDER = process.env.AGENDAMENTO_EMAIL_FROM || "Agendamento <onboarding@resend.dev>";

const MAX_FIELD = 200;
const MAX_MESSAGE = 5000;

const clean = (value, max = MAX_FIELD) => String(value ?? "").trim().slice(0, max);

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

  // Campo invisível para pessoas: se veio preenchido, foi um robô. Responde ok e não envia nada.
  if (body?.website) return sendJson(res, 200, { ok: true });

  const norm = clean(body?.norm);
  const name = clean(body?.name);
  const company = clean(body?.company);
  const email = clean(body?.email);
  const phone = clean(body?.phone);
  const message = clean(body?.message, MAX_MESSAGE);
  const areas = Array.isArray(body?.areas) ? body.areas.map((a) => clean(a)).filter(Boolean) : [];

  if (!name || !company || !phone || !areas.length || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return sendJson(res, 400, { error: "Preencha todos os campos obrigatórios" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY não configurada");
    return sendJson(res, 500, { error: "Envio indisponível" });
  }

  const text = [
    `Nome: ${name}`,
    `Empresa: ${company}`,
    `E-mail: ${email}`,
    `Telefone: ${phone}`,
    `Área: ${areas.join(", ")}`,
    `Norma: ${norm}`,
    `Mensagem: ${message}`,
  ].join("\n");

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: SENDER,
        to: [RECIPIENT],
        reply_to: email,
        subject: "Pedido de agendamento",
        text,
      }),
    });
    if (!r.ok) {
      console.error("Resend recusou o envio", r.status, await r.text());
      return sendJson(res, 502, { error: "Falha ao enviar" });
    }
  } catch (err) {
    console.error("Erro ao chamar a Resend", err);
    return sendJson(res, 502, { error: "Falha ao enviar" });
  }

  return sendJson(res, 200, { ok: true });
}
