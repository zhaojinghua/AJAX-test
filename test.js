var request = new XMLHttpRequest();
request.open("GET", "data.txt");
request.onreadystatechange = function () {
	if (request.readyState == 4 && request.status == 200){				
		var modify = document.getElementById("update");
		modify.innerHTML = request.responseText;
	}
};
request.send();

