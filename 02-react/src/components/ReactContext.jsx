import { createContext, useContext, useState } from "react";

const MyContext = createContext({});

const styles = { border: "10px green solid", padding: "10px", margin: "10px" };

const ReactContext = () => {
	const [myName, setMyName] = useState("");

	const contextObject = { name: myName, setName: setMyName };

	return (
		<MyContext.Provider value={contextObject}>
			<div>
				<div>React Context</div>
				<Grand />
			</div>
		</MyContext.Provider>
	);
};

const Grand = () => {
	const context = useContext(MyContext);
	const { name } = context;
	return (
		<div style={styles}>
			<p>Name : {name}</p>
			<div>Grand</div>
			<Parent />
		</div>
	);
};

const Parent = () => {
	return (
		<div style={styles}>
			<div>Parent</div>
			<Child />
		</div>
	);
};

const Child = () => {
	const context = useContext(MyContext);
	const { name, setName } = context;
	return (
		<div style={styles}>
			<input
				type="text"
				onChange={(e) => setName(e.target.value)}
				placeholder="Enter Name"
				value={name}
			/>
			<div>Child</div>
		</div>
	);
};
export default ReactContext;
