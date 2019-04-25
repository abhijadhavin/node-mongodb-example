#!/usr/bin/env node
'use strict';

require('./config/config');

const _=require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

const {ObjectID} = require('mongodb'); 

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');


var app = express();
const port = process.env.PORT || 3000;

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
				res.status(404).send();
			} else {			
				res.send({todo});			
			}
		}, (err) => {
			res.status(400).send();
		});
	}
	//res.send(id);
});

app.delete('/todos/:id', (req, res) => {
	var id = req.params.id;
	if(!ObjectID.isValid(id)){
		res.status(400).send();
	} else {
		Todo.findOneAndDelete(id).then((todo) => {
			if(!todo) {				
				res.status(404).send();
			} else {			
				res.send({todo});			
			}
		})	
	}	
});


app.patch('/todos/:id', (req, res) => {
	var id = req.params.id;
	var body = _.pick(req.body, ['text', 'complated']);
	if(!ObjectID.isValid(id)){
		return res.status(400).send();
	} else {
		if(_.isBoolean(body.complated) && body.complated) {
			body.completedAt = new Date().getTime();
		} else {
			body.complated = false;
			body.completedAt = null
		}
		Todo.findOneAndUpdate(id, {$set:body}, {new:true}).then((todo) => {
			if(!todo){
				return res.status(404).send();
			}
			res.send({todo});
		}).catch((e) => {
			res.status(404).send();
		});

	}
});


//POST /users

app.post('/users', (req, res) => {
	var body = _.pick(req.body, ['email', 'password']);
	var user = new User(body);

	user.save().then(() => {		
		return user.generateAuthToken();
	}).then((token) => {
		res.header('x-auth', token).send(user);
	}).catch((e) => {		
		res.send(e);
	});
});

app.listen(port, () => {
	console.log(`Started on port ${port}`);
});

module.exports = {app};