/**
 * Created by Valentin Brclz
 * Github Profile: https://github.com/ValentinBrclz
 * Date: 14/10/2015
 * Project: M101JS-MongoDB-NodeJS-Course
 * Licence: See LICENCE in root directory
 */
var express = require('express'),
    app = express(),
    port = 8080;

// Handle only the root
app.get('/', function (req, res) {
    res.send("Hello World !");
});

// Handle all other routes -> 404
app.get('*', function (req, res) {
    res.send("Page not found", 404);
});

// Listening
app.listen(port);
console.log("Express server started on port " + port)