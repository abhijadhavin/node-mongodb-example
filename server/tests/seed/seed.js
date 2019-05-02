const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
		_id: userOneId,
		email: 'addd@gmail.com',
		password: 'asdad@13',
		tokens: [{
			access: 'auth',
			token: jwt.sign({_id: userOneId, access:'auth' }, 'abc123').toString()
		}]
	}, {
		_id: userTwoId,
		email: 'jen@gmail.com',
		password: 'userTwoPassword'
	}
];



const todos = [{
	_id: new ObjectID(),
	'text': 'First test todo'
}, {
	_id: new ObjectID(),
	text: 'second test todo',
	complated: true,
	completedAt: 3333
}];

const populateTodos = (done) => {
	Todo.deleteMany({}).then(() => {
		return Todo.insertMany(todos);
	}).then(() => done());
};

const populateUsers = (done) => {
	User.deleteMany({}).then(() => {
		//return User.insertMany(todos);
		var userOne = new User(users[0]).save();
		var userTwo = new User(users[1]).save();
		return Promise.all([userOne, userTwo]);
	}).then(() => done());
};



module.exports = {todos, populateTodos, users, populateUsers}