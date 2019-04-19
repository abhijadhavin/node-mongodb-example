//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'TodoApp';



// Connect using MongoClient
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  	// Create a collection we want to drop later
  	const col = client.db(dbName).collection('createNew');
  	// Insert a bunch of documents
  	/*
  	col.insert([
  			{'text': 'Something to do', 'complated':false }, 
  			{'text': 'Something to do1', 'complated':false }, 
  			{'text': 'Something to do2', 'complated':false }  			
		], {w:1}, function(err, result) {		
		if(err) {
			console.log('Unable to insert todo', err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));			 
  	});
  	*/
  	client.db(dbName).collection('Users').insertOne({  	 
  		name: 'Abhijeet', 
  		age: 35, 
  		location: 'pune'
  	}, (err, result) => {
  		if(err) {
			console.log('Unable to insert todo', err);
		}
		console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));	
  	});
  	client.close();
});