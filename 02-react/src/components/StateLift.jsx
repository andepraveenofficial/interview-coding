import { useState } from "react";

const Label = ({ text }) => {
	return (
		<div>
			<h2>Name: {text}</h2>
		</div>
	);
};
const TextBox = ({ text, setText }) => {
	return (
		<div>
			<input
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Enter your name"
			/>
		</div>
	);
};

const StateLift = () => {
	const [text, setText] = useState("");
	return (
		<div>
			<Label text={text} />
			<TextBox text={text} setText={setText} />
		</div>
	);
};

TextBox.props = {
	text: String,
	setText: () => {},
};

export default StateLift;
