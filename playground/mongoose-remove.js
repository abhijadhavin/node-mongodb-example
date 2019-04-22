const {ObjectID} = require('mongodb'); 

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
 
 /*
Todo.deleteMany({}).then((result) => {
	return console.log(result);
});
*/


Todo.findOneAndDelete('5cbdc7195288e6ac02c8dbd5').then((todo) => {
	console.log(todo);
})