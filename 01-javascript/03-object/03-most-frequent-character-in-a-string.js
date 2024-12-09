// 03-most-frequent-character-in-a-string

/*
    If multiple characters have the same frequency, return any one of them.
*/

const str = "abbaccbddddccca";
console.log(str);

console.log("--------------");

const obj = {};
let maxRepeatChar = null;
for (let i = 0; i < str.length; i++) {
	// console.log(i);
	if (!obj[str[i]]) {
		obj[str[i]] = 1;
	} else {
		obj[str[i]]++;
	}

	if (maxRepeatChar === null) {
		maxRepeatChar = str[i];
	}

	if (obj[str[i]] > obj[maxRepeatChar]) {
		maxRepeatChar = str[i];
	}
}

console.log(obj);
console.log(maxRepeatChar);

console.log("==============");

/* -----> Most Frequent Word in a Sentence <----- */

const sentence = "the quick brown fox jumps over the lazy dog the quick";
const wordsArray = sentence.split(" ");

const output = {};
let mostFrequentWord = null;
for (let word of wordsArray) {
	output[word] = output[word] === undefined ? 1 : output[word] + 1;
	if (!mostFrequentWord) {
		mostFrequentWord = word;
	} else {
		if (output[word] > output[mostFrequentWord]) {
			mostFrequentWord = word;
		}
	}
}

console.log(output);
console.log(mostFrequentWord);

console.log("=============");
