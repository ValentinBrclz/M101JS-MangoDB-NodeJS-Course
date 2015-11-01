var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function (err, db) {
    if (err) throw err; // Error

    // Get cursor
    var weather = db.collection('data');
    var cursor = weather.find({});

    // Sort
    cursor.sort([['State', 1], ['Temperature', -1]]);

    // Iterates
    var actualState;
    var operator = {'$set': {'month_high': true}};
    cursor.each(function (err, doc) {
        if (err) throw err; // Error

        // Close if null
        if (doc == null) {
            return;
        }

        // If the states change, this is the highest temperature
        // DEBUG
        console.dir(doc["State"] + " with Temp = " + doc["Temperature"]);
        if (actualState != doc["State"]) {
            // Update
            var query = {_id: doc["_id"]};

            db.collection('data').update(query, operator, function (err, updated) {
                if (err) throw err; // Error

                console.dir("Updated " + updated + " document: _id=" + doc["_id"] + " for " + doc["State"]);

            });

            // Set new state
            actualState = doc["State"];
        }

    });
});
