// 04-convert-string-to-integer -> without type casting

const str = "12345";
console.log(str, typeof str);
console.log("--------");

// console.log(Number(str));  // Built-in Function

/*
 console.log("a".charCodeAt(0));  // 97
 console.log("0".charCodeAt(0));  // 48
 unicode -> numbers starts from 48
*/

let num = 0;
for (let i = 0; i < str.length; i++) {
	// console.log(str[i]);
	const unicode = str.charCodeAt(i);
	// console.log(unicode);
	const digit = unicode - 48;
	// console.log(digit);

	num = num * 10 + digit;
	// console.log(num);
}

console.log(num, typeof num);

console.log("============");
