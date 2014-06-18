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
    if (endIndex < numTR) {
        console.log(startIndex, endIndex);
        startIndex += 10;
        endIndex += 10;
        copyFromOrignal(startIndex, endIndex);
        clearOldPage()
        pasteNewPage();
    }
}
function previousPage() {
    if (startIndex >= 10) {
        startIndex -= 10;
        endIndex -= 10;
        copyFromOrignal(startIndex, endIndex);
        clearOldPage()
        pasteNewPage();
    }
}

function copyFromOrignal(a, b) {
    var j = 0;
    for (var i = a; i < b; i++) {
        console.log(i);
        tempTR[j++] = cloneTableRows[i].cloneNode(true);
    }
    //console.log(j);
}

function clearOldPage() {
    table.removeChild(oldChild);
}

function pasteNewPage() {
    var newBody = document.createElement("tbody");
    for (var i = 0; i < numToDisplay; i++) {
        newBody.appendChild(tempTR[i]);
    }
    table.appendChild(newBody);
    oldChild = newBody;
}

window.addEventListener("load", firstPage);
document.getElementById("firstPage").addEventListener("click", firstPage);
document.getElementById("lastPage").addEventListener("click", lastPage);
document.getElementById("nextPage").addEventListener("click", nextPage);
document.getElementById("prevPage").addEventListener("click", previousPage);