// 05-arm-strong-number

const num = 153;
console.log(num);

console.log("--------------");

const result = num
	.toString()
	.split("")
	.reduce((acc, curr, index, arr) => acc + parseInt(curr) ** arr.length, 0);

if (num === result) {
	console.log("Yes");
} else {
	console.log("No");
}

console.log("=============");
