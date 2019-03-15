var express = require('express');
var bodyParser = require('body-parser');
var morgan  = require("morgan");
var app = express();

app.use(bodyParser.json());

var status = [
	{ id: 1, name: "Initiated" },
	{ id: 2, name: "Executing" },
	{ id: 3, name: "Paused" },
	{ id: 4, name: "Pending" },
	{ id: 5, name: "Finished" }
];

var todoList = [
  {id: 1, name: "Create Layout",  data: new Date(), status: status[1]},
  {id: 2, name: "Create Crud",  data: new Date(), status: status[2] },
  {id: 3, name: "Modify to modules",  data: new Date(), status: status[4]}
];

app.use(morgan("dev"));
app.use(express.static("./"));

app.get("/", function(req, res) {
    res.sendFile("./index.html"); //index.html file of your angularjs application
});

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/list', function(req, res) {
  res.json(todoList);
});

app.get('/list/:id', function(req, res) {
  todoList.forEach(function (item) {
  	if (todoList.id == req.params.id) {
  		res.json(item);
  		return;
  	}
  });
  res.status(404).end();
});

app.post('/list', function(req, res) {
  todoList.push(req.body);
  res.json(true);
});

app.get('/status', function(req, res) {
  res.json(status);
});

app.listen(4000);