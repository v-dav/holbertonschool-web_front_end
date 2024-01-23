// A function to show the lexical scoping

function welcome(firstName, lastName) {
	let fullName = firstName + " " + lastName;
	function displayFullName() {
		alert('Welcome ' + fullName + ' !');
	}
	displayFullName();
}
