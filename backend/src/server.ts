import express from 'express';
import './database/connection';

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
// Query Params = Busca, filtro, paginação ex: http://localhost:3333/users?search=teste podendo ser concatenado com : ;
// Route Params = Identificar um recurso ex: http://localhost/3333/users/i ;
// Body = Corpo da requisição para enviar dados especificos ex: Formularios ;

app.get('/users', (request, response) => {
  return response.json({ message: 'hello world' });
});

// req /res
// localhost:3333
app.listen(3333);

// Driver nativo = SQLtie 3 permite executar as Querys do banco de dados ;
// Query builder =  knex.js contrutor de querys em javascript ;
// ORM = Uma classe que simboliza um tabela no banco de dados. (relacionamento de objeto e tabela) ;
