// 06-longest-sub-string

const str = "abcabcbd";
console.log(str);
console.log("---------------------");

// Sliding Window Technique

let left = 0;
let right = 0;

let check = "";
let output = "";
while (right < str.length) {
	if (!check.includes(str[right])) {
		check += str[right];
		if (check.length > output.length) {
			output = check;
		}
		right++;
	} else {
		check = check.slice(1);
		left++;
	}
}

console.log(output);
