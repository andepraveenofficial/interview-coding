import React from "react";

const NormalComponent = () => {
	return <div>NormalComponent</div>;
};

export const HOC = (Component) => {
	const WrappedComponent = () => (
		<div style={{ color: "orange", backgroundColor: "green", padding: "10px" }}>
			<Component />
		</div>
	);
	return WrappedComponent;
};

export default NormalComponent;
