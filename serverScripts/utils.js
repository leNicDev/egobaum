console.log("create JS-Folder");
var mkdirp = require('mkdirp');
mkdirp('./Frontend/pub/js/', function(err) {
    // TODO on error
    console.log('Folder not created!!!');
});
console.log("JS Folders created -------------------------------");
