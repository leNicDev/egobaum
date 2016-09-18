function draw(json) {
    var egoJSON = {};
    egoJSON = json[self.egoID];
    drawEgo(egoJSON);
}


function drawEgo(egoJSON) {
    new Vue({
        el: '#ego',
        data: {
            name: egoJSON.name,
            surname: egoJSON.surname,
            birthdate: egoJSON.birthdate,
            sex: egoJSON.sex
        }
    });
    jQuery('.family-tree').show();
}