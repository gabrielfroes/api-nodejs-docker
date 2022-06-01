var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get("/", (req, res, next) => {
  res.json(
    `Seja bem vindo ao VPS rodando Node.JS pelo Docker na porta ${port}`
  );
});

app.get("/cdfs", (req, res, next) => {
  res.json(["Gabriel Fróes", "Vanessa Weber"]);
});
