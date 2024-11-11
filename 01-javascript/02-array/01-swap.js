// 01-swap

/* -----> swapping with temporary variable <----- */
const arr = ["first", 2, 3, 4, "last"];
console.log(arr); // [ 'first', 2, 3, 4, 'last' ]

console.log("-----------");
const temp = arr[0];
arr[0] = arr[4];
arr[4] = temp;

console.log(arr); // [ 'last', 2, 3, 4, 'first' ]

console.log("================");

/* -----> swapping without temp variable <----- */
const myArray = ["first", 2, 3, 4, "last"];
console.log(myArray); // [ 'first', 2, 3, 4, 'last' ]
console.log("---------");

[myArray[0], myArray[4]] = [myArray[4], myArray[0]];
console.log(myArray); // [ 'last', 2, 3, 4, 'first' ]

console.log("==============");
