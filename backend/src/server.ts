import express from 'express';

const app = express();

// Rota = conjunto
// Recurso = Usuario
// Metodos HTTP = GET, POST, PUT, DELETE
// Semântica => 
// GET = Buscar informações
// POST = Criando informação
// PUT = Editar informação
// DELETE = Deletar informação
// Parâmetros = 

app.get('/users', (request, response) => {
  return response.json({ message: 'hello world' });
});

app.listen(3333);

// req /res
// localhost:3333
