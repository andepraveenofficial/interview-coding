// 02-remove-duplicates

/* -----> Set Data Structure <----- */
const arr = [1, 2, 3, 3, 4, 5, 5, 5];
console.log(arr);

console.log("-------------");

const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

console.log("===============");

/* -----> Method <----- */

const uniqueList = [];
arr.forEach((item) => !uniqueList.includes(item) && uniqueList.push(item));
console.log(uniqueList);

console.log("=============");

/* -----> loop <----- */
const output = [];
for (let i = 0; i < arr.length; i++) {
	if (!output.includes(arr[i])) {
		output.push(arr[i]);
	}
}

console.log(output);

console.log("=============");
