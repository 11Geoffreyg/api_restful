const express = require ('express');
const app = express();
const fs = require ("fs");

/*
Method > listUsers
*/
app.get('/mistUsers', function(req, res){
	fs.readFile(_dirname + "/" + "users.json", 'utf8', function(err, data){
		console.log(data);
		res.send(data);
	});
})

let server = app.listen(8081, function (){
	let host = server.address().address
	let port = server.address().port
	console.log("launch API restful with the following URI http://%s:%s", host, port)
})