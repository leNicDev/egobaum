function draw(json) {
    var $row = jQuery(createRow(self.egoID));
    var $cell = jQuery(createCell(self.egoID));
    $row.append($cell);
    jQuery('.family-tree').append($row);
    drawPerson(self.egoID, json);
}


function drawPerson(cellID, egoJSON) {
    new Vue({
        el: '#' + cellID,
        data: {
            name: egoJSON.name,
            surname: egoJSON.surname,
            birthdate: egoJSON.birthdate,
            sex: egoJSON.sex
        }
    });
    jQuery('.family-tree').show();
}

function createRow(id) {
    return '<div class="row ' + id + '"> </div>';
}

function createCell(id) {
    return '<div id="' + id + '" class="box">{{ name }}{{surname}} <br/> {{ birthdate }} <br/> {{ sex }} </div>';
}