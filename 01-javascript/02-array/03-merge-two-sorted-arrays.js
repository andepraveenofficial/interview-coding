// 03-merge-two-sorted-arrays

/*
Description :

Merge two sorted arrays into one sorted array.	
*/

const arr1 = [1, 4, 6];
const arr2 = [3, 4, 5, 7];

console.log(arr1, arr2);
console.log("------------");

const mergedArr = [];
while (arr1.length > 0 || arr2.length > 0) {
	if (arr1.length === 0) {
		mergedArr.push(...arr2);
		break;
	}

	if (arr2.length === 0) {
		mergedArr.push(...arr1);
		break;
	}

	if (arr1[0] < arr2[0]) {
		mergedArr.push(arr1.shift());
	} else {
		mergedArr.push(arr2.shift());
	}
}

console.log(mergedArr);

console.log("===========");
