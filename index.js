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
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("INITIALES HALLO :-)");
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
