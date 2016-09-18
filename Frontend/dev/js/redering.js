function draw(json) {
    var egoJSON = {};
    egoJSON = json[self.egoID];
    drawEgo(egoJSON);
}


function drawEgo(egoJSON) {
    new Vue({
        el: '#app',
        data: {
            message: JSON.stringify(egoJSON)
        }
    });
}