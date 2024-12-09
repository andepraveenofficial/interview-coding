// 02 Pascal Triangle

/*
Pascal Triangle : 
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
*/

/*

    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1

*/

/*
1. How many rows ?
2. Each row columns ?
*/

const num = 5;
console.log(num);
console.log("--------------");

const triangle = [];
for (let i = 0; i < num; i++) {
	const line = [];
	for (let j = 0; j < i + 1; j++) {
		// console.log(j);
		if (j === 0 || j === i) {
			line.push(1);
		} else {
			// line.push("*");
			const aboveLine = triangle[triangle.length - 1];
			const add = aboveLine[j - 1] + aboveLine[j];
			line.push(add);
		}
	}

	console.log(line);
	triangle.push(line);
}

console.log("-----------");
console.log(triangle);

console.log("===================");
