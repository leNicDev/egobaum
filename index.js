var express = require('express'),
    app = express(),
    http = require('http'),
    sys = require('util'),
    io = require('socket.io')(http),
    fs = require('fs');

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
