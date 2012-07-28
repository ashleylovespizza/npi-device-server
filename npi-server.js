// Load the TCP Library
var net = require('net');

var clients = [];

var server = net.createServer(function(c) {
	
	console.log("Connected!");
	clients.push(c);

	console.log(clients.length + " clients connected");

	c.on('end', function() {
		console.log("Later sucker");
	});

	c.on('data', function(data) {
		console.log(data.toString());
		for (i in clients) {
			if (clients[i] != c) {
				clients[i].write(data);
			}
		}
	});

});

server.listen(3034, function() {
	console.log("server started");
});