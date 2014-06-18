var tempTable = document.getElementsByTagName("table")[0];
var tempTableBody = tempTable.getElementsByTagName("tbody")[0];
var tempTableTR = tempTableBody.getElementsByTagName("tr");
//console.log(tempTableTR);
var numTR = tempTableTR.length;
var newTR = [];
var gbCol = 1;
var condition = true;

for (var i = 0; i < numTR; i++) {
    newTR[i] = tempTableTR[i].cloneNode(true);
}

function callback(a, b) {
    var col1 = a.getElementsByTagName("TD")[gbCol];
    var col2 = b.getElementsByTagName("TD")[gbCol];

    // now get the text node for each col
    var text1 = col1.firstChild.data;
    var text2 = col2.firstChild.data;

    // now that we have the text nodes, do the sorting
    if (text1 < text2)
        return 1;
    else if (text1 > text2)
        return -1;
    else return 0;
}


function sortTR() {
    newTR.sort(callback);
    if (condition) {
        tempTable.removeChild(tempTableBody);

        var newtbody = document.createElement("tbody");

        for (var i = 0; i < numTR; i++) {
            newtbody.appendChild(newTR[i]);
        }

        tempTable.appendChild(newtbody);
        condition = false;
    }
}

window.addEventListener("click", sortTR);







