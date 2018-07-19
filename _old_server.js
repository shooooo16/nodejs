var http = require('http');
	fs = require('fs');
var settings = require('./settings');
var server = http.createServer();
var msg;
server.on('request', function(req, res) {
	fs.readFile(__dirname + '/public_html/hello.html', 'utf-8', 
		function(err, data){
			if(err){
					res.writeHead(404, {'Content-Type': 'text/plain;charset=utf-8'});
    				res.write("404エラー発生しました");
    				return res.end();
    		}
    		
    		res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
    		res.write(data);
    		res.end();
	});
});
server.listen(settings.port, settings.host);
console.log("server listening ...");
