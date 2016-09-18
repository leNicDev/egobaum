var nano = require('nano')('http://localhost:5984');

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
