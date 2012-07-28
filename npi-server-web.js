var http = require ('http'),
	sys  = require ('sys'),
	nodeStatic = require('node-static/lib/node-static');


//var NPIListener = require('./lib/npilistener');

var port = process.env.PORT || 8000;

var server = http.createServer(function(request, response) {
	var file = new nodeStatic.Server('./public', {
		cache: false
	});

	request.addListener('end', function() {
		file.serve(request,response);
		
	})
});

server.listen(port, function(){

  console.log("Listening on " + port);
});
