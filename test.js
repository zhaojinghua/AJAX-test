var request = new XMLHttpRequest();
request.open("GET", "data.json");
request.onreadystatechange = function () {
	if (request.readyState == 4 && request.status == 200){
			var items = JSON.parse(request.responseText);				
			console.log(items[4].bio);
	}
};
request.send();

