const {ObjectID} = require('mongodb'); 

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
/*
var id = '6cba8e584b280121b4aaadafs';

if(!ObjectID.isValid(id)){
	console.log('ID not valid');
}

Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos', todos);
});


Todo.findOne({
	_id: id
}).then((todos) => {
	console.log('Todo', todos);
});


Todo.findById(id).then((todo) => {
	if(!todo) {
		return console.log('Id not found');
	}
	console.log('Todo', todo);
}).catch((e) => console.log(e));

*/
id = '5cb99d66c658a85e8c5a218c';

/*
User.findById(id).then((user) => {
	if(!user) {
		return console.log('Id not found');
	}
	console.log('Todo', user);
}).catch((e) => console.log(e));
*/


User.findById(id).then((user) => {
	if(!user) {
		return console.log('Id not found');
	}
	console.log('User', user);
}, (err) => {
	console.log(e);
});

