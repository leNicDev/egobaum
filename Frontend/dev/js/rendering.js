function initDraw(json) {
    var $row = jQuery(createRow(self.egoID));
    jQuery('.family').append($row);
    drawPerson(self.egoID);

    // draw children
    if (self.globalJSON[self.egoID].child) {
        createChildGeneration(self.egoID);
    }
}

function createChildGeneration(parentID) {
    var $childRow = '';
    var childID = 0;
    jQuery.each(self.globalJSON[parentID].child, function (index, child) {
        childID = self.globalJSON[parentID].child[index];
        if ($childRow === '') {
            $childRow = jQuery(createRow(childID));
            jQuery('#'+parentID).append($childRow);
        } else {
            $childRow.addClass(childID);
        }
        drawPerson(childID);
        //
        createChildGeneration(self.globalJSON[parentID].child[index]);
    });
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