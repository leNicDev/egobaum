window.onload = function () {
    var self = this;
    //self.egoID = 'fdd0e7bc69efb8736e4555873900404f';
    //self.egoID = '0b25d53ddd83594de9a839892c003cfa';  // Familie Tisch
    self.egoID = '0b25d53ddd83594de9a839892c00801a';  // CHAOS
    self.globalJSON = {};
    self.nextID = '';
    self.degree = 1;


    // initial function for the first run
    function init() {
        // get initial JSON with degree
        getInitJSON(degree, initDraw);
    }

    init();
}