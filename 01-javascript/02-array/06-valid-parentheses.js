// 06-valid-parentheses

const parentheses = "{}[]()";
console.log(parentheses);

console.log("--------------");

const opening = "{[(";
const closing = ")]}";

const obj = {
	"{": "}",
	"[": "]",
	"(": ")",
};

const stack = [];
let output = "Yes";
for (let i = 0; i < parentheses.length; i++) {
	// console.log(parentheses[i]);
	if (opening.includes(parentheses[i])) {
		stack.push(parentheses[i]);
	} else {
		const peek = stack[stack.length - 1];
		if (obj[peek] === parentheses[i]) {
			stack.pop();
		} else {
			output = "No";
			break;
		}
	}
}

if (parentheses.length === 1) {
	output = "No";
}

console.log(output);
console.log("============");
