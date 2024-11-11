// 01-sort-the-object by values

let obj = { a: 3, b: 1, c: 2 };
console.log(obj);

console.log(" ------------- ");

let entries = Object.entries(obj);
console.log(entries);

for (let i = 0; i < entries.length; i++) {
	for (let j = 0; j < entries.length - 1; j++) {
		if (entries[j][1] > entries[j + 1][1]) {
			// swap
			[entries[i], entries[j]] = [entries[j], entries[i]];
		}
	}
}

console.log(entries);

console.log(" -------------- ");
let sortedObject = Object.fromEntries(entries);
console.log(sortedObject);

console.log(" =================== ");
