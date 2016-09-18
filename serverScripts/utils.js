console.log("create JS-Folder");
var mkdirp = require('mkdirp');
mkdirp('./Frontend/pub/js/', function(res) {
    console.log("JS Folders created -------------------------------");
}, function(err){
    console.log('Folder not created!!!');
    console.warn(err);
});