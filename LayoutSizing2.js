function adaFunc() {
    var deviceWidth = window.innerWidth;
    var large = 768;
    var medium = 480;
    var small = 320;
    var webBody = document.getElementsByTagName("body")[0];
    var first = webBody.firstElementChild.innerHTML;
    //console.log(first);
    for (var i = 0; i < 1; i++) {
        if (deviceWidth >= large) {
            //console.log("hello");
            webBody.className = "bodyNormal";
            continue;
        } else if (deviceWidth >= medium) {
            webBody.className = "bodyMed";
            continue;
        } else {
            webBody.className = "bodySmall";
            continue;
        }
    }
}

window.addEventListener("resize", adaFunc);
window.addEventListener("load", adaFunc);

