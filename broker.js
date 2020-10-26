var mosca = require('mosca');
var settings = {
		port:1883
		}

var server = new mosca.Server(settings);

server.on('ready', function(){
console.log("Status: Ready\n");
console.log("*Broker siap menerima & mengirim data.\n");
});
