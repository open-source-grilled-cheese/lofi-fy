function submitForm() {
	var formElem = document.querySelector("form");
	console.log(formElem);
	var request = new XMLHttpRequest();
	console.log(request);
	request.open("POST", "lofify");
	request.send(new FormData(formElem));
}
