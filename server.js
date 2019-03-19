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
  {id: 1, name: "Create Layout",  date: new Date(), status: status[1]},
  {id: 2, name: "Create Crud",  date: new Date(), status: status[2] },
  {id: 3, name: "Modify to modules",  date: new Date(), status: status[4]}
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

app.delete('/list/:id', function(req, res) {
  var todoListRemoved = todoList.filter(function(item) {
    return item.id != req.params.id;
  });
  res.json(todoListRemoved);
  return;
});

app.put('/list/:id', function(req, res) {
  for (var item in todoList) {
     if (todoList[item].id == req.params.id) {
        console.log(req.body.id);
        todoList[item].status = status[status.findIndex( x => x.id == req.body.id )];
        break; //Stop this loop, we found it!
     }
   }
  res.json(todoList);
  return;
});

app.post('/list', function(req, res) {
  req.body.status = status[status.findIndex( x => x.id == req.body.status )];
  todoList.push(req.body);
  res.json(true);
});

app.get('/status', function(req, res) {
  res.json(status);
});

app.listen(4000);