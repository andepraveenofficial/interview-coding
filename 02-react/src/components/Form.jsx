import React, { useState } from "react";

const Form = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const userDetails = { username, password };
		console.log(userDetails);
	};

	return (
		<div
			style={{
				boxShadow: "0 0 10px black",
				padding: "10px",
				width: "300px",
				borderRadius: "10px",
			}}
		>
			<form onSubmit={handleSubmit}>
				<div style={{ padding: "10px" }}>
					<label htmlFor="username">UserName : </label>
					<input
						name="username"
						type="text"
						placeholder="Enter Username"
						onChange={(e) => setUsername(e.target.value)}
						value={username}
					/>
				</div>
				<div style={{ padding: "10px" }}>
					<label htmlFor="password">Password : </label>
					<input
						name="password"
						type="password"
						placeholder="Enter Password"
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Form;
