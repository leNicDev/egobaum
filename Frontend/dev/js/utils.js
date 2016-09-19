function getJSON(path, callback) {
    jQuery.getJSON(path, function(result){
        self.globalJSON = result;
    })
        .done(function() {
            callback();
        })
        .fail(function() {
            console.log( "getJSON error! TODO: Error-Handling" );
        });
}

function getInitJSON(degree, callback) {
    //var path = "/ego/" + self.egoID;
    //var path = "/family/" + self.egoID + '/' + degree;
    var path = "/mock";
    getJSON(path, callback);
}
