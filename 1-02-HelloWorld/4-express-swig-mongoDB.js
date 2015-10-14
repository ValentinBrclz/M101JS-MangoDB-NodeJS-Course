/**
 * Created by Valentin Brclz
 * Github Profile: https://github.com/ValentinBrclz
 * Date: 14/10/2015
 * Project: M101JS-MongoDB-NodeJS-Course
 * Licence: See LICENCE in root directory
 */
var express = require('express'),
    app = express(),
    port = 8080,
    cons = require('consolidate')
MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

// Html renderer
app.engine('html', cons.swig); // use swig
app.set('view engine', 'html'); // set the view engine
app.set('views', __dirname + "/views"); // where to find the views

// Create a MongoClient-object containing the conneection information
var mongoclient = new MongoClient(
    new Server(
        'localhost',
        27017,
        {'native_parser': true}
    )
);

// Stopped at 2:14 of the video
// TODO finish the video

// Handle only the root
app.get('/', function (req, res) {
    res.render('hello', {'name': 'Swig'}); // Call the view "hello"
});

// Handle all other routes -> 404
app.get('*', function (req, res) {
    res.send("Page not found", 404);
});

// Listening
app.listen(port);
console.log("Express server started on port " + port)