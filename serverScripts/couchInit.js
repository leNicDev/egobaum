var CouchDB = require('couch-db').CouchDB;
server = new CouchDB('http://localhost:5984');
var db = server.database('egobaum');
console.log("CouchDB initialisiert -------------------------------");