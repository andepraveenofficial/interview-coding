// Fibonacci Series

let number = 10;

console.log(" -----> For Loop <----- ");

let fibonacci_series = [0, 1];

for (let i = 0; i < number - 2; i++) {
	const add = fibonacci_series[i] + fibonacci_series[i + 1];
	fibonacci_series.push(add);
}

console.log(fibonacci_series);

console.log(" -----> While Loop <----- ");

const series = [0, 1];
while (series.length < number) {
	const add = series[series.length - 1] + series[series.length - 2];
	series.push(add);
}

console.log(series);

console.log("=============");
