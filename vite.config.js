import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Executa as funções de /api no dev local, imitando as Serverless Functions da Vercel.
function vercelApiDev() {
  return {
    name: "vercel-api-dev",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith("/api/")) return next();
        const match = req.url.match(/^\/api\/([a-z0-9-]+)\/?(\?.*)?$/i);
        if (!match) {
          // Não deixa o Vite servir o código-fonte de /api (ex.: _auth.js).
          res.statusCode = 404;
          return res.end("Not found");
        }
        try {
          const mod = await server.ssrLoadModule(`/api/${match[1]}.js`);
          await mod.default(req, res);
        } catch (err) {
          if (err?.code === "ERR_LOAD_URL" || /Failed to load url/.test(err?.message)) {
            res.statusCode = 404;
            return res.end("Not found");
          }
          console.error(err);
          res.statusCode = 500;
          res.end("Erro interno");
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), vercelApiDev()],
});
