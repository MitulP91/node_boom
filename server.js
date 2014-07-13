var express = require("express");
var app = express();
var http = require('http').Server(app);
var socketio = require("socket.io")(http);

global.mongoose  = require('mongoose');

//connect to database
global.db = mongoose.connect('mongodb://localhost/boomroom');

//config
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
	console.log("listening on port 8000");
})

