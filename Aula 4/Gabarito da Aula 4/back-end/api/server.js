// API significa Application Programming Interface

// Temos vários tipos de requisição:
// POST, GET, PUT, DELETE -> palavras chaves que tem para requisição

// CRUD -> Create, Read, Update, Delete -> como manuseia banco de dados

import express from "express"; // é uma função: então esse express vai trazer toda uma aplicação para dentro de uma variável

// Middleware: uma função que acontece no meio do caminho: atua entre a escuta da api e efetivamente a requisição -> ele trata a requisição antes de ela chegar // também trata a resposta
import cors from "cors";

import { db } from "./connect.js";

const app = express(); // to pegando tudo o que a função express tem (todo o poder da função express) e jogando dentro da vriável app
// vou gerenciar toda a API a partir dessa variável

const PORT = 3000;

app.use(cors());

// instrução para quando a API receber uma requisição do tipo GET:
// tem que passar duas informações: a primeira é qual endereço a gente quer mapear
// quando falamos de API, não falamos mais de "path", que é o caminho: a gente fala de "endpoint"
// Endpoint é uma rota que pode ser acessada dentro de uma API
// A segunda informação que tem que passar é uma função
app.get("/", (request, response) => {
  response.send("Olá, Mundo!");
});
// Quando a API receber uma requisição do tipo GET nesse Endpoint ('/'), ela vai executar uma arrow function que tem dois parâmetros: request e response
// request é o pedido que está sendo feito
// a resposta é o que eu vou enviar por meio da API (eu digo para ela o que eu vou enviar)

// aqui eu quero entregar o json com todos os artistas:
// quando eu acessar esse endpoint, ele vai pegar o artistArray e jogar na tela
app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});
// toda vez que eu uso o await dentro de uma função, eu tenho que chamar essa função de assíncrona, pois é a forma do js entender que dentro da função tem alguma coisa assíncrona e ela vai precisar esperar

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});

// a api tá olhando na porta 3001. quando chega requisição, ela responde o que a gente quer
// agora falta a gente fazer a requisição no front
