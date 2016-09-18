window.onload = function () {
    var self = this;
    self.egoID = 'fdd0e7bc69efb8736e4555873900404f';
    self.nextID = '';

    function jsonUpToDate(jsonData) {
        initDraw(jsonData);
    }


    // initial function for the first run
    function init() {
        // get initial JSON and
        getInitJSON(jsonUpToDate);
    }

    init();
}