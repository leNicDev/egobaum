var express = require('express'),
    app = express(),
    http = require('http'),
    sys = require('util'),
    io = require('socket.io')(http),
    fs = require('fs');

var nano = require('nano')('http://localhost:5984');
var egobaum = nano.use('egobaum');
console.log("CouchDB initialisiert ueber nano verfuegbar");

http.createServer(app);
app.listen(8081, function () {
    console.log('Server gestartet auf localhost:8081');
});

function puts(error, stdout, stderr) { sys.puts(stdout) }

app.use(express.static('Frontend/pub/'));

app.get("/", function(req, res) {
    // put stuff here if server is called with no parameters etc.
});

// first static response
app.get("/mock", function(req, res) {
    var mockJSON = JSON.parse(fs.readFileSync('./mock/firstJSONMock.json', 'utf8'));
    res.json(mockJSON);
});

// only working with lowdb
app.get("/real", function(req, res) {
    var realJSON = db.get('persons')
        .find({ id: 1313 })
        .value()
    res.json(realJSON);
});

// only working with nano implementation
app.get("/ego/:id", function(req,res){
    var user_id = req.param('id');

    egobaum.get(user_id, function(err, body) {
        if (!err) {
            var person = body.person;
            var parents = person.parents;

            res.json(person);
        } else {
            res.json({ bla : err});
        }
    });

});
