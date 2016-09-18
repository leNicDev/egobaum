function initDraw(json) {
    var $row = jQuery(createRow(self.egoID));
    jQuery('.family').append($row);
    drawPerson(self.egoID);
    // child
    if (self.globalJSON[self.egoID].child) {
        var $childRow = '';
        jQuery.each(self.globalJSON[self.egoID].child, function (index, child) {
            if ($childRow === '') {
                $childRow = jQuery(createRow(self.globalJSON[self.egoID].child[index]));
                jQuery('#'+self.egoID).append($childRow);
            } else {
                $childRow.addClass(self.globalJSON[self.egoID].child[index]);
            }
            drawPerson(self.globalJSON[self.egoID].child[index]);
        });
    }
}


function drawPerson(cellID) {
    var person = '<div id="' + cellID + '" class="box">' + self.globalJSON[cellID].name + ' ' + self.globalJSON[cellID].surname + ' <br/> ' +
        self.globalJSON[cellID].birthdate + ' <br/> ' + self.globalJSON[cellID].sex + ' </div>';
    console.log("person");
    console.log(person);
    console.log("cellID");
    console.log(cellID);

    jQuery('.' + cellID).append(person);
    jQuery('.family').show();
}

function createRow(id) {
    return '<div class="row ' + id + '"> </div>';
}