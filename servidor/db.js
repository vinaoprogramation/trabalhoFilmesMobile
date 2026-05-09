const mysql = require('mysql2');

const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '31415122448', 
  database: 'filmes_db'
});

conexao.connect((erro) => {
  if (erro) {
    console.log("Erro ao conectar:", erro);
  } else {
    console.log("Conectado ao MySQL ✅");
  }
});

module.exports = conexao;