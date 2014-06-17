var totalNum = 0;
var tempHTML = "<ul>";
var gCount = 0;

function buildBookmarks(whiTag, parNode) {
    var tempList = document.getElementsByTagName(whiTag);
    totalNum = tempList.length;
    console.log(totalNum);
    for (var i = 0; i < totalNum; i++) {
        setID(tempList[i]);
        tempHTML += genList(tempList[i]);
    }
    tempHTML += "</ul>";
    var newList = document.createElement("div");
    newList.innerHTML = tempHTML;
    parNode.appendChild(newList);

    //parNode.innerHTML = tempHTML;
}

function setID(arrWhiNode) {
    arrWhiNode.setAttribute("id", "bookmark" + gCount);
}

function genList(oneList) {
    return "<li>" + "<a href=" + "#bookmark" + gCount++ + ">" + oneList.innerHTML + "</a>" + "</li>";
}

window.onload = buildBookmarks("h3", document.getElementById("byline"));