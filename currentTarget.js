function hide(e){
  e.currentTarget.style.visibility = "hidden";
  // When this function is used as an event handler: this === e.currentTarget
  //event.currentTarget is interesting to use when attaching the same event handler to several elements.
  //That is when there is on event handler currentTarget is target. 
}

var ps = document.getElementsByTagName('p');

for(var i = 0; i < ps.length; i++){
  ps[i].addEventListener('click', hide, false);
}

// click around and make paragraphs disappear