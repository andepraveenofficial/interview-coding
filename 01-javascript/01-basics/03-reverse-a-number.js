// 03-reverse-a-number

let num = 153;
console.log(num);
console.log("----------");

/*
// Get Last Digit
const digit  = num % 10  
console.log(digit);

// Delete Last Digit
const newNum = num / 10
console.log(parseInt(newNum)); 
*/

let reversedNum = 0;
while (num > 0) {
	const lastDigit = num % 10; // Remainder
	reversedNum = reversedNum * 10 + lastDigit;
	num = parseInt(num / 10); // Remove Last Digit
	// console.log(reversedNum);
}

console.log(reversedNum);

console.log("============");
