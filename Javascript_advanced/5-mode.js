function changeMode(size, weight, transform, background, color) {
	return function () {
		document.body.style.fontSize = size;
		document.body.style.fontWeight = weight;
		document.body.style.textTransform = transform;
		document.body.style.backgroundColor = background;
		document.body.style.color = color;
	}
}

function main() {
	const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
	const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
	const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

	const paragraph = document.createElement('p');
	paragraph.innerText = "Welcome Holberton!";
	document.body.appendChild(paragraph);

	const spookyButton = document.createElement("button");
	spookyButton.innerText = "Spooky";
	document.body.appendChild(spookyButton);
	spookyButton.addEventListener("click", spooky);

	const darkButton = document.createElement("button");
	darkButton.innerText = "Dark Mode";
	document.body.appendChild(darkButton);
	darkButton.addEventListener("click", darkMode);

	const screamButton = document.createElement("button");
	screamButton.innerText = "Scream Mode";
	document.body.appendChild(screamButton);
	screamButton.addEventListener("click", screamMode);
}

main();
