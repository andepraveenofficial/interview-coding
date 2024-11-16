import React, { useState } from "react";

const hardData = [
	{
		id: 1,
		item: "first",
	},
	{
		id: 2,
		item: "second",
	},
	{
		id: 3,
		item: "third",
	},
];

const TodoList = () => {
	const [todoList, setTodoList] = useState(hardData);
	const [text, setText] = useState("");

	// Methods
	const handleAddTodo = () => {
		const newTodo = {
			id: new Date(),
			item: text,
		};

		const updatedTodoList = [...todoList, newTodo];
		setTodoList(updatedTodoList);
		setText("");
	};

	const handleDelete = (todoId) => {
		const filteredList = todoList.filter((todo) => todo.id !== todoId);
		setTodoList(filteredList);
	};

	return (
		<div>
			<div>
				<input
					type="text"
					placeholder="Enter Todo"
					onChange={(event) => {
						setText(event.target.value);
					}}
					value={text}
				/>
				<button onClick={handleAddTodo}>Add Todo</button>
			</div>
			<ul>
				{todoList.map((todo) => (
					<li key={todo.id}>
						<span>{todo.item}</span>
						<button
							onClick={() => handleDelete(todo.id)}
							style={{ margin: "10px" }}
						>
							delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
