window.onload = function () {

    console.log("test JS");

    var jsonData = {};

    function getInitJSON(egoID) {
        jQuery.getJSON("/mock", function(result){
            console.log("JSON respond: ");
            console.log(JSON.stringify(result));
            jsonData = result;

            new Vue({
                el: '#app',
                data: {
                    message: jsonData
                }
            });
        });
    }



    getInitJSON(10);
}