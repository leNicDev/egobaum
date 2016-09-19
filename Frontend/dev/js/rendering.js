function initDraw(json) {
    var $row = jQuery(createRow(self.egoID));
    jQuery('.family').append($row);
    drawPerson(self.egoID);
    // child
    if (self.globalJSON[self.egoID].child) {
        var $childRow = '';
        var childID = 0;
        jQuery.each(self.globalJSON[self.egoID].child, function (index, child) {
            childID = self.globalJSON[self.egoID].child[index];
            if ($childRow === '') {
                $childRow = jQuery(createRow(childID));
                jQuery('#'+self.egoID).append($childRow);
            } else {
                $childRow.addClass(childID);
            }
            drawPerson(childID);
        });
    }
}


function drawPerson(cellID) {
    var actualPerson = self.globalJSON[cellID];
    var person = '<div id="' + cellID + '" class="box">' + actualPerson.name + ' ' + actualPerson.surname + ' <br/> ' +
        actualPerson.birthdate + ' <br/> ' + actualPerson.sex + ' </div>';
    jQuery('.' + cellID).append(person);
    jQuery('.family').show();
}

function createRow(id) {
    return '<div class="row ' + id + '"> </div>';
}