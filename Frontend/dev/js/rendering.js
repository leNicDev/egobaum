function initDraw(json) {
    var $row = jQuery(createRow(self.egoID));
    jQuery('.family').append($row);
    drawPerson(self.egoID, json);
}


function drawPerson(cellID, egoJSON) {
    var person = '<div id="' + cellID + '" class="box">' + egoJSON.name + ' ' + egoJSON.surname + ' <br/> ' + egoJSON.birthdate +
        ' <br/> ' + egoJSON.sex + ' </div>';
    jQuery('.' + cellID).append(person);
    jQuery('.family').show();
}

function createRow(id) {
    return '<div class="row ' + id + '"> </div>';
}