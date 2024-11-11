// 05 Deepest Nested Key in a JS Object

const obj = {
	level1: {
		level2: {
			level3: {
				level4: "This is the deepest value at level4",
			},
		},
	},
	anotherKey: "Not the deepest",
};

// console.log(obj);
console.log(JSON.stringify(obj, null, 3));
console.log(" ------------- ");

function nestedKey(data) {
	if (typeof data === "object") {
		const mainKey = Object.keys(data)[0];
		console.log(mainKey);
		console.log(JSON.stringify(data[mainKey], null, 2));
		console.log("-----------");
		nestedKey(data[mainKey]);
	} else {
		console.log("No more nested keys");
		console.log("--------------");
		console.log(data);
	}
}

nestedKey(obj);

console.log("=================");
