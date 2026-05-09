const express = require('express');
const cors = require('cors');
const app = express();

const conexao = require('./db');

app.use(cors());
app.use(express.json());

/* =========================
   ROTA TESTE
========================= */
app.get('/', (req, res) => {
  res.send("API de Filmes funcionando 🎬");
});

/* =========================
   GET TODOS
========================= */
app.get('/filmes', (req, res) => {

  const sql = "SELECT * FROM filmes";

  conexao.query(sql, (erro, resultado) => {
    if (erro) {
      return res.status(500).json(erro);
    }

    res.json(resultado);
  });

});

/* =========================
   GET POR ID
========================= */
app.get('/filmes/:id', (req, res) => {

  const id = req.params.id;

  const sql = "SELECT * FROM filmes WHERE id = ?";

  conexao.query(sql, [id], (erro, resultado) => {
    if (erro) {
      return res.status(500).json(erro);
    }

    res.json(resultado[0]);
  });

});

/* =========================
   POST
========================= */
app.post('/filmes', (req, res) => {

  const { id, nome, ano, genero, capa } = req.body;

  const sql = `
    INSERT INTO filmes (id, nome, ano, genero, capa)
    VALUES (?, ?, ?, ?, ?)
  `;

  conexao.query(sql, [id, nome, ano, genero, capa], (erro) => {
    if (erro) {
      return res.status(500).json(erro);
    }

    res.send("Filme adicionado ✅");
  });

});

/* =========================
   PUT
========================= */
app.put('/filmes/:id', (req, res) => {

  const id = req.params.id;
  const { nome, ano, genero, capa } = req.body;

  const sql = `
    UPDATE filmes 
    SET nome = ?, ano = ?, genero = ?, capa = ?
    WHERE id = ?
  `;

  conexao.query(sql, [nome, ano, genero, capa, id], (erro) => {
    if (erro) {
      return res.status(500).json(erro);
    }

    res.send("Filme atualizado");
  });

});

/* =========================
   DELETE
========================= */
app.delete('/filmes/:id', (req, res) => {

  const id = req.params.id;

  const sql = "DELETE FROM filmes WHERE id = ?";

  conexao.query(sql, [id], (erro) => {
    if (erro) {
      return res.status(500).json(erro);
    }

    res.send("Filme removido");
  });

});

/* =========================
   SERVER
========================= */
app.listen(3000,"0.0.0.0", () => {
  console.log("Servidor rodando em http://localhost:3000");
});