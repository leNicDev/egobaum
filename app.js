var nano = require('nano')('http://localhost:5984');

/*
// clean up the database we created previously
nano.db.destroy('egobaum', function() {
    // create a new database
    nano.db.create('egobaum', function() {
        // specify the database we are going to use
        var egobaum = nano.use('egobaum');
        // and insert a document in it
        egobaum.insert({ crazy: true }, 'ego', function(err, body, header) {
            if (err) {
                console.log('[egobaum.insert] ', err.message);
                return;
            }
            console.log('you have inserted the ego.')
            console.log(body);
        });
    });
});
*/

// specify the database we are going to use
var egobaum = nano.use('egobaum');

var prompt = require('prompt');

prompt.start();

prompt.get(['name', 'surname', 'sex', 'birthdate'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  name: ' + result.name);
    console.log('  surname: ' + result.surname);
    console.log('  sex: ' + result.sex);
    console.log('  birthdate: ' + result.birthdate);

    insertToDB(result.name, result.surname, result.sex, result.birthdate);
});

function onErr(err) {
    console.log(err);
    return 1;
}

function insertToDB (name, surname, sex, birthdate){
    // and insert a document in it
    egobaum.insert(
        {
            "person": {
                "name": name,
                "surname": surname,
                "sex": sex,
                "birthdate": birthdate,
                "child": {
                },
                "parent": {
                }
            }
        }, function(err, body, header) {
            if (err) {
                console.log('[egobaum.insert] ', err.message);
                return;
            }
            console.log('you have inserted the ego.')
            console.log(body);
        });

}
