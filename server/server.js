var express = require('express');
var bodyParser = require('body-parser');

const {ObjectID} = require('mongodb'); 

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((docs) => {
		res.send(docs);
	}, (err) => {
		res.status(400).send(err);
	});
});


app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (err) =>{
		res.status(400).send(err);
	});
});


// GET /todos/2111
app.get('/todos/:id', (req, res) => {
	var id = req.params.id;
	if(!ObjectID.isValid(id)){
		res.status(400).send();
	} else {
		Todo.findById(id).then((todo) => {
			if(!todo) {
				//return console.log('Id not found');
				res.status(400).send();
			} else {
				res.send({todo});
			} 			
		}, (err) => {
			res.status(400).send();
		});
	}
	res.send(req.params);
});

app.listen(3000, () => {
	console.log('Started on port 3000');
});

module.exports = {app};