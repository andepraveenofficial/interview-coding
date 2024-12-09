// 05-array-parts

const arr = [1, 2, 3, 4, 5];
console.log(arr);

console.log("--------------");

const arrParts = [];
for (let mainIndex = 0; mainIndex < arr.length; mainIndex++) {
	const mainPart = arr.slice(0, mainIndex + 1);
	// console.log(mainPart);
	for (let subIndex = 0; subIndex < mainPart.length; subIndex++) {
		const subPart = mainPart.slice(subIndex, mainPart.length);
		console.log(subPart);
		arrParts.push(subPart);
	}
	console.log("---------");
}

console.log(arrParts);

console.log("===============");

/*
Approach : Array Parts

[ 1, 2, 3, 4, 5 ] -> 15 parts
----------
[ 1 ]
[ 1, 2 ]
[ 1, 2, 3 ]
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4, 5 ]
----------
[ 2 ]
[ 2, 3 ]
[ 2, 3, 4 ]
[ 2, 3, 4, 5 ]
----------
[ 3 ]
[ 3, 4 ]
[ 3, 4, 5 ]
----------
[ 4 ]
[ 4, 5 ]
----------
[ 5 ]
----------
*/
