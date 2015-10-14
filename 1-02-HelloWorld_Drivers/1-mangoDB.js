/**
 * Created by Valentin Brclz
 * Github Profile: https://github.com/ValentinBrclz
 * Date: 14/10/2015
 * Project: M101JS-MongoDB-NodeJS-Course
 * Licence: See LICENCE in root directory
 */
var MongoClient = require('mongodb').MongoClient;

// Open the connection to the local server
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    // Throw an error if there is one
    if(err) throw err;

    // Find one document in the collection (async)
    db.collection('coll').findOne({}, function(err, doc) {

        // Throw an error if there is one
        if(err) throw err;

        // Print the result
        console.dir(doc);

        // Close the DB
        db.close();
    });

    // Log the call
    console.dir("called: findOne!");
});
