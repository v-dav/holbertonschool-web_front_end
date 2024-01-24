function StudentHogwarts() {
	let privateScore = 0;
	let name = null;

	function changeScoreBy(points) {
			privateScore += points;
	}

	return {
			setName: function(newName) {
					name = newName;
			},
			rewardStudent: function() {
					changeScoreBy(1);
			},
			penalizeStudent: function() {
					changeScoreBy(-1);
			},
			getScore: function() {
					return `${name}: ${privateScore}`;
			}
	};
}

//harry
const harry = StudentHogwarts();
harry.setName("Harry");
for (let i = 0; i < 4; i++) {
	harry.rewardStudent();
}
console.log(harry.getScore());

//draco
const draco = StudentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
for (let i = 3; i > 0; i--) {
	draco.penalizeStudent();
}
console.log(draco.getScore());
