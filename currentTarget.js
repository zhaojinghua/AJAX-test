function hide(e){
  e.currentTarget.style.visibility = "hidden";
  // When this function is used as an event handler: this === e.currentTarget
}

var ps = document.getElementsByTagName('p');

for(var i = 0; i < ps.length; i++){
  ps[i].addEventListener('click', hide, false);
}

// click around and make paragraphs disappear