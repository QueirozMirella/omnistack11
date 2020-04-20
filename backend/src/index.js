const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * métodos HTTP:
 * GET: buscar/listar uma informação do back-end
 * POST: criar uma informação no back-end
 * PUT: alterar uma informação no back-end
 * DELETE: deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetro
  * Query Params: parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
  * Route Params: parâmetros usados para identificar recursos
  * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

