// 01 Longest Substring Without Repeating Characters

const str = "abcabcb";
console.log(str);
console.log("---------------------");

/* -----> Sliding Window <----- */
let left = 0;
let right = 0;
let maxLength = 0;

const mySet = new Set();
let maxChar = 0;
while (str.length > right) {
	if (!mySet.has(str[right])) {
		mySet.add(str[right]);
		right++;
		if (maxLength < mySet.size) {
			maxLength = mySet.size;
		}
	} else {
		mySet.delete(str[left]);
		left++;
	}

	console.log(mySet);
}

console.log("------------");

console.log(maxLength);

console.log("================");
