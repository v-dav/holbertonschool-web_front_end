//function returning a number of prime numbers between 1 and 100
function countPrimeNumbers() {
	let primeNumbers = 0;
	for (let number = 2; number <= 100; number++) {
		let countDivisions = 0;
		for (let dividor = 1; dividor <= number; dividor++)
			if (number % dividor == 0) {
				countDivisions++;
			}
		if (countDivisions == 2) {
			primeNumbers++;
		}
	}
	return primeNumbers;
}
const startTime = performance.now();
countPrimeNumbers();
const finishTime = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${finishTime - startTime} milliseconds.`);
