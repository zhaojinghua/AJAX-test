var request = new XMLHttpRequest();
request.open("GET", "data.xml");
request.onreadystatechange = function () {
	if (request.readyState == 4 && request.status == 200){
		for (var i = 0; i < 5; i++){				
			console.log(request.responseXML.getElementsByTagName('name')[i]);
		}

	}
};
request.send();

