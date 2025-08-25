import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      console.log(`[${new Date().toLocaleTimeString()}] [express] ${logLine}`);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    console.error("Server error:", err);
  });

  // Serve a simple response for non-API routes during development
  app.get("*", (_req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>UEAB Innovation & Entrepreneurship Centre - API Server</title>
      </head>
      <body style="font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px;">
        <h1>🎯 UEAB Innovation & Entrepreneurship Centre - API Server Running</h1>
        <h2>Available API Endpoints:</h2>
        <ul>
          <li><strong>POST /api/biew-registration</strong> - Submit BIEW 2025 registration</li>
          <li><strong>GET /api/admin/biew-registrations</strong> - View all registrations (admin)</li>
          <li><strong>PATCH /api/admin/biew-registrations/:id/status</strong> - Update registration status</li>
          <li><strong>POST /api/contact</strong> - Submit contact form</li>
          <li><strong>POST /api/newsletter</strong> - Subscribe to newsletter</li>
          <li><strong>GET /api/auth/user</strong> - Get current user (authenticated)</li>
        </ul>
        <p><em>Server is running successfully on port 5000</em></p>
      </body>
      </html>
    `);
  });

  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    console.log(`[${new Date().toLocaleTimeString()}] [express] serving on port ${port}`);
  });
})().catch(console.error);