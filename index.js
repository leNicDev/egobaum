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

app.get("/", function(req, res) {
    res.sendfile('./Frontend/pub/index.html', {root: __dirname });
});

app.get("/css/egobaum.css", function(req, res) {
    res.sendfile('./Frontend/pub/css/egobaum.css', {root: __dirname });
});

app.get("/js/egobaum.js", function(req, res) {
    res.sendfile('./Frontend/pub/js/egobaum.js', {root: __dirname });
});

app.get("/init/:param", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('INIT JSON kommt zurueck');
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
