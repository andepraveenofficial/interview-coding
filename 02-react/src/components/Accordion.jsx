import React, { useState } from "react";

const dummyList = [
	{
		id: 1,
		summary: "first",
		details: "I am first",
		isOpen: false,
	},
	{
		id: 2,
		summary: "second",
		details: "I am second",
		isOpen: false,
	},
	{
		id: 3,
		summary: "third",
		details: "I am third",
		isOpen: false,
	},
];

const Accordion = () => {
	const [accordionList, setAccordionList] = useState(dummyList);

	const handleAccordion = (itemId) => {
		console.log(itemId);
		const updatedAccordionList = accordionList.map((item) =>
			item.id === itemId
				? { ...item, isOpen: !item.isOpen }
				: { ...item, isOpen: false }
		);

		setAccordionList(updatedAccordionList);
	};

	return (
		<div>
			{accordionList.map((item) => (
				<div
					key={item.id}
					style={{
						border: "10px solid green",
						padding: "10px",
						margin: "10px",
						boxShadow: "0 0 10px black",
					}}
					onClick={() => handleAccordion(item.id)}
				>
					<h2>
						{item.summary}
						{item.isOpen ? "⬇️" : "➡️"}
					</h2>
					{item.isOpen && <p>{item.details}</p>}
				</div>
			))}
		</div>
	);
};

export default Accordion;
