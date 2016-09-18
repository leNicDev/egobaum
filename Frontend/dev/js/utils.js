function getJSON(path, callback) {
    var jsonData = {};
    jQuery.getJSON(path, function(result){
        jsonData = result;
    })
        .done(function() {
            callback(jsonData);
        })
        .fail(function() {
            console.log( "getJSON error! TODO: Error-Handling" );
        });
}

function getInitJSON(callback) {
    var path = "/ego/" + self.egoID;
    getJSON(path, callback);
}
