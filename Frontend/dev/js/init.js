window.onload = function () {

    function jsonUpToDate(jsonData) {
        draw(jsonData);
    }


    // initial function for the first run
    function init() {
        // get initial JSON and
        getInitJSON(10, jsonUpToDate);
    }

    init();
}