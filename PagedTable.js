var table = document.getElementById("MSFTQuotes");
var tableTBody = table.getElementsByTagName("tbody")[0];
var tableRows = tableTBody.getElementsByTagName("tr");
var numTR = tableRows.length;

var cloneTableRows = [];
for (var i = 0; i < numTR; i++) {
    cloneTableRows[i] = tableRows[i].cloneNode(true);
}
var numToDisplay = 10;
var numPages = Math.ceil(numTR / numToDisplay);

var startIndex = null;
var endIndex = null;
var tempTR = [];
var oldChild = tableTBody;

function firstPage() {
    startIndex = 0;
    endIndex = numToDisplay;
    copyFromOrignal(startIndex, endIndex);
    clearOldPage();
    pasteNewPage();
}
function lastPage() {
    startIndex = (numPages - 1) * numToDisplay;
    endIndex = numTR;
    copyFromOrignal(startIndex, endIndex);
    clearOldPage()
    pasteNewPage();
}
function nextPage() {
    //console.log(startIndex, endIndex);
    //console.log(startIndex);
    startIndex = startIndexHandler(startIndex, true);
    //console.log(startIndex);
    endIndex = endIndexHandler(endIndex, true);
    copyFromOrignal(startIndex, endIndex);
    clearOldPage()
    pasteNewPage();
}
function previousPage() {
    startIndex = startIndexHandler(startIndex, false);
    endIndex = endIndexHandler(endIndex, false);
    copyFromOrignal(startIndex, endIndex);
    clearOldPage()
    pasteNewPage();
}

function copyFromOrignal(a, b) {
    var j = 0;
    for (var i = a; i < b; i++) {
        //console.log(i);
        tempTR[j++] = cloneTableRows[i].cloneNode(true);
    }
    //console.log(j);
}

function clearOldPage() {
    table.removeChild(oldChild);
}

function pasteNewPage() {
    var newBody = document.createElement("tbody");
    console.log(endIndex);
    var len = endIndex - startIndex;
    for (var i = 0; i < len; i++) {
        newBody.appendChild(tempTR[i]);
    }
    table.appendChild(newBody);
    oldChild = newBody;
}

function startIndexHandler(a, incr) {
    if (incr) {
        if (a == 0) { return 10; }
        if (a == 10) { return 20; }
        if (a == 20) { return 30; }
        if (a == 30) { return 40; }
        if (a == 40) { return 50; }
        if (a == 50) { return 50;}
    }
    if (!incr) {
        if (a == 0) { return 0; }
        if (a == 10) { return 0; }
        if (a == 20) { return 10; }
        if (a == 30) { return 20; }
        if (a == 40) { return 30; }
        if (a == 50) { return 40; }
        if (a == 60) { return 50; }
    }
}

function endIndexHandler(a, incr) {
    if (incr) {
        if (a == 10) { return 20; }
        if (a == 20) { return 30; }
        if (a == 30) { return 40; }
        if (a == 40) { return 50; }
        if (a == 50) { return numTR };
        if (a == numTR) { return numTR };

    }
    if (!incr) {
        if (a == 10) { return 10; }
        if (a == 20) { return 10; }
        if (a == 30) { return 20; }
        if (a == 40) { return 30; }
        if (a == 50) { return 40; }
        if (a == numTR) { return 50 };

    }
}

window.addEventListener("load", firstPage);
document.getElementById("firstPage").addEventListener("click", firstPage);
document.getElementById("lastPage").addEventListener("click", lastPage);
document.getElementById("nextPage").addEventListener("click", nextPage);
document.getElementById("prevPage").addEventListener("click", previousPage);