const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

var password = '123abc!';


bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
        // Store hash in your password DB.
        console.log(hash);
    });
});


var hashedPassword = '$2a$10$h681hM2yoUI.7Lb9bdq7eemto8TOrflXaUgoR.cHNe2flRG/6tpoi';


bcrypt.compare('123!', hashedPassword, (err, result) => {
	console.log(result);
});

/*
var data = {
	id: 10
};

var token = jwt.sign(data, '123abc');
console.log('Token: ' + token);
var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);
*/

/*
var message = "I am abhijeet 4";
var hash = SHA256(message).toString();
console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`);

var data = {
	id: 4
};

var token = {
	data,
	hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}




var resultHash = SHA256(JSON.stringify(token.data)+"somesecret").toString();
token.data.id = 5;
token.hash = SHA256(JSON.stringify(token.data)+"somesecret").toString();
if(resultHash === token.hash) {
	console.log('Data was not changed');
} else {
	console.log('Data was changed. Do not trust');
}
*/