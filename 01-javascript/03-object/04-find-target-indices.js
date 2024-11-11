// 04-find-target-indices

let arr = [2, 17, 7, 6];
let target = 9;

const obj = {};

for (let i = 0; i < arr.length; i++) {
	const diff = target - arr[i];

	if (obj[arr[i]] !== undefined) {
		console.log(obj[arr[i]], i); // 0 2
	}

	obj[diff] = i;
}

console.log("===================");
