function submitForm() {
	// var formData = $("#formdata").serializeArray();
	// console.log(document.getElementById("customFile").files[0]);
	// console.log(JSON.stringify(document.getElementById("customFile").files[0]))
	// formData.push(document.getElementById("customFile").files[0]);
	// var d = JSON.stringify(formData);
	// console.log(d);
	// $.ajax({
	// 	type: "POST",
	// 	url: "/lofify",
	// 	data: d,
	// 	success: () => {},
	// 	dataType: "json",
	// 	contentType: "application/json"
	// });
	 var formElem = document.querySelector("form");
	 console.log(formElem);
	 var request = new XMLHttpRequest();
	 console.log(request);
	 request.open("POST", "new"); // changed from lofi to test
	 request.send(new FormData(formElem));
}
