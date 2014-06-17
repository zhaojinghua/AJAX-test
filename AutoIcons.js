function appendIcons() {
    var tempNode = document.getElementsByTagName("li");
    var tempNodeLength = tempNode.length;
    for (var i = 0; i < tempNodeLength; i++) {
        var tempString = tempNode[i].firstChild.getAttribute("href");
        //console.log(tempString);
        if (tempString) {
            if (detectPdf(tempString)) {
                var icon = document.createElement("img");
                icon.setAttribute("src", "small_pdf_icon.gif");
                tempNode[i].firstChild.appendChild(icon);
            }
        }
    }
}

function detectPdf(p1) {
    if ( (p1.lastIndexOf("pdf")) != -1) {
        return true;
    } else {
        return false;
    }
}

window.onload = appendIcons();