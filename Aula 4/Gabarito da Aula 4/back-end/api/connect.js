// connect só é usado para criar a conexão com o banco de dados e puxar ela para o nosso server

// JavaScript Assíncrono
// await async
// FullFilled

import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://camilafank19:iziygroMxF21VmEz@cluster0.tqlgk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// se eu acessar isso e tiver o ip liberado ele vai deixar

const client = new MongoClient(URI);
// MongoClient é uma classe, entao a gente tem que criar uma nova classe e colocar dentro do client
// ainda não tá conectado com o cliente, mas eu instanciei, para que quando eu começar a mexer, ele saiba onmde mexer

export const db = client.db("spotifyAula"); //criei o nosso db
// dentro do () é qual o nome do db que eu quero acessar

// vai encontrar tudo e transformar em array
// const songCollection = await db.collection("songs").find({}).toArray(); // isso eu vou ter que fazer toda vez que eu quiser pegar informação // eu vou fazer isso lá no meu servidor, porque quando eu mandar uma requisição do tipo get pro endpoit songs, eu quero buscar no banco de dados isso aqui
// console.log(songCollection);
