function draw(json) {
    drawPerson(json);
}


function drawPerson(egoJSON) {
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