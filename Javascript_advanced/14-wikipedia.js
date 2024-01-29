function createElement(data) {
	let paragraph = document.createElement('p');
	paragraph.innerText = data;
	document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
	let request = new XMLHttpRequest();

	request.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
	request.responseType = "json";
	request.send();
	
	request.addEventListener("load", () => {
		let response = request.response;
		let extractText = response.query.pages[21721040].extract;
		callback(extractText);
});
}

queryWikipedia(createElement);
