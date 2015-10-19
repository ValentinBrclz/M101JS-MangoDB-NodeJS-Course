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
    cons = require('consolidate'),
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
var db = new Db('course', mongoclient);

// Handle only the root
app.get('/', function (req, res) {
    db.collection('hello_mongo_express').findOne({}, function (err, doc) {
        res.render('hello', doc);
    });
});

// Handle all other routes -> 404
app.get('*', function (req, res) {
    res.send("Page not found", 404);
});

//----

// Open DB
db.open(function (err, mongoclient) {
    if (err)
        throw err;

    // Listening (http)
    app.listen(port);
    console.log("Express server started on port " + port)
});
