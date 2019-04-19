//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'TodoApp';



// Connect using MongoClient
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connect to MongoDB server');
	/*
	const col = client.db(dbName).collection('createNew');	
	col.find({_id: new ObjectID('5cb97aa6e461504e4d412b62')}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos');
	});
	*/

	/*
	col.find().count().then((count) => {
		console.log(`Todos Count: ${count}`);
		//console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos');
	});
	*/
	const col = client.db(dbName).collection('Users');
	col.find({name:'Abhijeet'}).toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos');
	});
	client.close();
});