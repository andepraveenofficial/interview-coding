// 01 prime number

/* -----> Check Prime Number <----- */
const num = 53;
console.log(num);

console.log("--------------");

let factors = 0;
for (let i = 1; i <= num; i++) {
	// console.log(i);
	if (num % i === 0) {
		if (factors > 2) {
			break;
		}
		factors++;
	}
}

if (factors === 2) {
	console.log("Yes");
} else {
	console.log("No");
}

console.log("==============");

/* -----> Check list of Prime Number <----- */

const number = 100;
console.log(number);
console.log("------------");

function checkPrime(num) {
	let factors = 0;
	for (let i = 1; i <= num; i++) {
		// console.log(i);
		if (num % i === 0) {
			if (factors > 2) {
				break;
			}
			factors++;
		}
	}

	if (factors === 2) {
		return "Yes";
	} else {
		return "No";
	}
}

const primeNumbers = [];
for (let i = 1; i <= 100; i++) {
	const result = checkPrime(i);
	// console.log(result);
	if (result === "Yes") {
		primeNumbers.push(i);
	}
}

console.log(primeNumbers);

console.log("==================");
