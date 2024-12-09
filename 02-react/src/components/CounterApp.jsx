import { useEffect, useState } from "react";

const CounterApp = () => {
	console.log("CounterApp");
	const [counter, setCounter] = useState(() => {
		let savedCount = localStorage.getItem("counter");

		if (!savedCount) {
			localStorage.setItem("counter", JSON.stringify(0));
		}

		savedCount = localStorage.getItem("counter");
		return JSON.parse(savedCount);
	});

	useEffect(() => {
		localStorage.setItem("counter", JSON.stringify(counter));
	}, [counter]);

	return (
		<div>
			<button onClick={() => setCounter((pre) => pre - 1)}>-</button>
			<span>{counter}</span>
			<button onClick={() => setCounter((pre) => pre + 1)}>+</button>
		</div>
	);
};

export default CounterApp;
