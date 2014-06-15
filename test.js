var request = new XMLHttpRequest();
request.open("GET", "data.txt");
request.onreadystatechange = function () {
	if (request.readyState == 4 && request.status == 200){				
		document.write(request.responseText);
	}
};
request.send();

