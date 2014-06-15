for (var i = 0; i < 10; i++){
	
	var request = new XMLHttpRequest();
	request.open("GET", "data.txt", false);
	request.send();
	document.write(request.responseText);
	
	
}