import React from "react";
import CounterApp from "./components/CounterApp";
import TodoApp from "./components/TodoApp";
import Accordion from "./components/Accordion";
import StateLift from "./components/StateLift";
import ReactContext from "./components/ReactContext";
import NormalComponent, { HOC } from "./components/NormalComponent";
import DynamicTable from "./components/DynamicTable";
import Form from "./components/Form";

const HigherOrderComponent = HOC(NormalComponent);

const App = () => {
	return (
		<div>
			{/* <CounterApp/> */}
			{/* <TodoApp /> */}
			{/* <Accordion /> */}
			{/* <StateLift /> */}
			{/* <ReactContext /> */}
			{/*<NormalComponent />
			<HigherOrderComponent />*/}
			{/* <DynamicTable /> */}
			<Form />
		</div>
	);
};

export default App;
