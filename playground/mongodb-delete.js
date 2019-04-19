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
	//deleteMany
	const col = client.db(dbName).collection('Users');
	/*
	col.deleteMany({text:'Eat Lunch'}).then((results) => {
		console.log(results);		
	}, (err) => {
		console.log('Unable to Delete');
	});
	*/
	//deleteOne
	/*
	col.deleteOne({text:'Something to do'}).then((results) => {
		console.log(results);		
	}, (err) => {
		console.log('Unable to Delete');
	});
	*/
	//findOneAndDelete
	/*
	col.findOneAndDelete({text:'Something to do'}).then((results) => {
		console.log(results);		
	}, (err) => {
		console.log('Unable to Delete');
	});
	*/
	const colUsers = client.db(dbName).collection('Users');
	colUsers.deleteMany({name:'Abhijeet'});
	colUsers.deleteOne({name:'Vilas'});
	colUsers.findOneAndDelete({name:'Vinod'});
	client.close();
});