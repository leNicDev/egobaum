window.onload = function () {
    var self = this;
    self.egoID = 1313;

    function jsonUpToDate(jsonData) {
        draw(jsonData);
    }


    // initial function for the first run
    function init() {
        // get initial JSON and
        getInitJSON(jsonUpToDate);
    }

    init();
}