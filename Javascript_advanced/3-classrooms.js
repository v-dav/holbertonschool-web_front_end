function createClassRoom(numbersOfStudents) {
	function studentSeat(seat) {
		return function () { return seat };
	}

	let students = [];
	let i = 0;

	while (i < numbersOfStudents) {
		i++;
		students.push(studentSeat(i));
	}

	return students;
}

const classRoom = createClassRoom(10);
