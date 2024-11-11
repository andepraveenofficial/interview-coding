// 02-palindrome

/* -----> method <----- */
const word = "madam";
console.log(word);
console.log("----------");

const reversedWord = word.split("").reverse().join("");

if (word === reversedWord) {
	console.log("Yes");
} else {
	console.log("No");
}

console.log("================");
/* -----> for loop <----- */
console.log(word);
console.log("-------------");

let output = "Yes";
for (let i = 0; i < parseInt(word.length / 2); i++) {
	// console.log(word[i]);
	// console.log(word[word.length - 1 - i]);
	if (word[i] !== word[word.length - 1 - i]) {
		output = "No";
		break;
	}
}

console.log(output);

console.log("=============");
