const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const ADMIN_KEY = process.env.ADMIN_KEY || "aderp-demo";

const dataDir = path.join(__dirname, "data");
const dataFile = path.join(dataDir, "clicks.json");

fs.mkdirSync(dataDir, { recursive: true });

function readClicks() {
  try {
    return JSON.parse(fs.readFileSync(dataFile, "utf8"));
  } catch {
    return { total: 0 };
  }
}

function writeClicks(data) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/buy-click", (req, res) => {
  const data = readClicks();
  data.total += 1;
  data.lastClick = new Date().toISOString();
  writeClicks(data);

  // The project intentionally does not process a real purchase.
  res.status(503).json({
    ok: false,
    message: "Compra indisponível no momento. Este site é um protótipo do ADERP."
  });
});

app.get("/api/stats", (req, res) => {
  if (req.query.key !== ADMIN_KEY) {
    return res.status(401).json({ error: "Não autorizado." });
  }
  res.json(readClicks());
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

app.listen(PORT, () => {
  console.log(`ADERP rodando em http://localhost:${PORT}`);
  console.log(`Painel: http://localhost:${PORT}/admin?key=${ADMIN_KEY}`);
});
