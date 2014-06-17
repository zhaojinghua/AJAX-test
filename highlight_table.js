var tableRow = document.getElementsByTagName("tr");
var rowNum = tableRow.length;
var pastRowIndex = null;
var pastColor = null;

function hightLight(e) {    
    if (pastRowIndex != null) {
        tableRow[pastRowIndex].bgColor = pastColor;
    }
    pastColor = e.target.parentNode.bgColor;
    pastRowIndex = findIndex(e.target.parentNode);
    e.target.parentNode.bgColor = "DeepSkyBlue";
}

function findIndex(obj) {
    for (var i = 0; i < rowNum; i++) {
        if (tableRow[i] == obj) {
            return i;
        }
    }
}

function striped() {
    for (var i = 0; i < rowNum; i++) {
        tableRow[i].bgColor = (i % 2 == 0) ? "Linen" : "white";
    }
}

window.addEventListener("load", striped);

for (var i = 0; i < rowNum; i++) {
    tableRow[i].addEventListener("mouseover", hightLight);
}

