var express = require('express');
var bodyParser = require('body-parser');


var app = express();


var urlencodedParser = bodyParser.urlencoded({
  extended: true
});

var contatos = [
	{nome: "RAFAel de mattos", telefone: "9999-2222", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
	{nome: "SANDRA DE LIMA", telefone: "9999-3333", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
	{nome: "jonny underwood", telefone: "9999-9999", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
];
var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 20},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 40},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 39},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 41},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 29}
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', urlencodedParser, function(req, res) {
  res.send(contatos);
});

app.post('/novo/contato', urlencodedParser, function(req, res) {
  contatos.push(req.body);
  res.send(true);
});

app.get('/operadoras', urlencodedParser, function(req, res) {
  res.send(operadoras);
});