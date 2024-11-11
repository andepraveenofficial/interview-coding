// 01 Factorial

const num = 5;
console.log(num);

console.log("-------------");

/* -----> for-loop <----- */

let result = 1;
for (let i = 1; i <= num; i++) {
	// console.log(i);
	result *= i;
}

console.log(result);

console.log("================");

/* -----> Recursive Function <----- */

const findFact = (num) => {
	//   console.log(num);

	if (num === 1) {
		// Base Condition
		return num;
	}

	// Recursive Call
	const result = num * findFactorial(num - 1);
	return result;
};

const output = findFact(num);
console.log(output);

console.log("=============");
