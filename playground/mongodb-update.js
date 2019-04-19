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
	col.findOneAndUpdate({
		_id : new ObjectID("5cb98997928972d7c66b9227")
	}, {
		$set: {
			completed: false
		}
	}, {
		returnOrigin: false
	});
	*/ 
	const col = client.db(dbName).collection('Users');	 
	col.findOneAndUpdate({
		_id : new ObjectID("5cb98ea7928972d7c66b933f")
	}, {
		$set: {
			name: 'Abhijeet'
		},
		$inc: {
			age:1
		}
	}, {
		returnOrigin: false
	});
	//client.close();
});