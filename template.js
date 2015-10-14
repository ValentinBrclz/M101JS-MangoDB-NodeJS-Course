/**
 * Created by Valentin Brclz
 * Github Profile: https://github.com/ValentinBrclz
 * Date: 14/10/2015
 * Project: M101JS-MongoDB-NodeJS-Course
 * Licence: See LICENCE in root directory
 */
var http = require('http');

// Create http server and handle the response
var server = http.createServer(function (request, response) {
    // Header
    response.writeHead(200, {"Content-Type": "text/plain"});

    // Content
    response.end("Hello World\n");
});

// Listen on port 8000 and start
server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
