// 04-flat-array

const arr = [1, 2, [3, 4], 5, 6, [7, 8], [9, [10, [11, 12]]]];
console.log(arr);
console.log("------------");

/* -----> method <----- */
const flatArr = arr.flat(Infinity);
console.log(flatArr);

console.log("=================");

/* -----> recursive function <----- */

const flat = (arr) => {
	const output = [];
	for (let i = 0; i < arr.length; i++) {
		if (!Array.isArray(arr[i])) {
			output.push(arr[i]);
		} else {
			const items = flat(arr[i]);
			output.push(...items);
		}
	}
	return output;
};

const flatArray = flat(arr);
console.log(flatArray);

console.log("=============");

/*

flat([[1, 2, [3, 4]], [5, [6, [7, 8]]]])
  ├── flat([1, 2, [3, 4]])
  │    ├── 1
  │    ├── 2
  │    └── flat([3, 4])
  │         ├── 3
  │         └── 4
  └── flat([5, [6, [7, 8]]])
       ├── 5
       └── flat([6, [7, 8]])
            ├── 6
            └── flat([7, 8])
                 ├── 7
                 └── 8
*/
