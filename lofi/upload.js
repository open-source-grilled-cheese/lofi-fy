function submitForm() {
	var formElem = document.querySelector("form");
	console.log(formElem);
	var request = new XMLHttpRequest();
	console.log(request);
	// request.open("POST", "new");
	request.open("POST", "lofify");
	request.onreadystatechange = function() {
		if(request.readyState === 4) {
			if(request.status === 200) {
				window.location = '/out.html';
			}
		}
	};
	request.send(new FormData(formElem));
}
