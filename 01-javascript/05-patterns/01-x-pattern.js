// 01 X pattern

/*

*   *
 * *
  *
 * *
*   *

*/

const num = 9;
console.log(num);

console.log("------------");

for (let i = 0; i < num; i++) {
	// console.log(i);
	const line = Array(num).fill(" ");
	line[i] = "*";
	line[num - 1 - i] = "*";

	// console.log(line);
	console.log(line.join(""));
}

console.log("===============");
