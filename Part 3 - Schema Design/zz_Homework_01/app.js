var MongoClient = require('mongodb').MongoClient;

var dropLowestHomework = function (scores) {
    var minScore = 100;
    var minIndex = -1;
    var result = [];

    // Iterates to find the lowest homework
    for (var i = 0; i < scores.length; i++) {
        // get vars
        var score = scores[i]['score'];
        var type = scores[i]['type'];

        // If homework and score is lower than the one registered
        if (type === 'homework' && score < minScore) {
            minScore = score;
            minIndex = i;
        }
    }

    // Remove the lowest HW
    for (i = 0; i < scores.length; i++) {
        if (i !== minIndex) result.push(scores[i]);
    }

    // Return the new array
    return result;
};

// Connect and exectue
var db = MongoClient.connect('mongodb://localhost:27017/school', function (err, db) {
    if (err) throw err; // Error

    // Select collection
    var students = db.collection('students');

    // Get all students
    students.find({}).toArray(function (err, docs) {
        if (err) throw err; // Error

        // update each doc by removing lowest score
        for (var i = 0; docs[i] != null; i++) {
            var doc = docs[i];

            doc.scores = dropLowestHomework(doc.scores);

            students.update({'_id': doc._id}, doc, {}, function (err, result) {
                if (err) throw err; // Error

                console.dir('Updated #' + doc._id);
            });

        }
    });
});
