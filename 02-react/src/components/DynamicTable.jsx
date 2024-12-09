import { useState } from "react";

/*
Matrix : 

[[1,1,1], [1,1,1], [1,1,1]]

1 1 1 
1 1 1
1 1 1



*/

const DynamicTable = () => {
	const [rows, setRows] = useState([
		["", "", "", ""],
		["", "", "", ""],
		["", "", "", ""],
		["", "", "", ""],
		["", "", "", ""],
	]);

	/*
row1 => col1 col2 col3 col4
row2 => col1 col2 col3 col4
row3 => col1 col2 col3 col4
row4 => col1 col2 col3 col4
	*/

	const addRow = () => {
		const updatedRows = [...rows, rows[0]];
		setRows(updatedRows);
	};

	const addColumn = () => {
		const updatedRows = rows.map((row) => [...row, row[0]]);
		setRows(updatedRows);
	};

	const handleCellChange = (rowIndex, columnIndex, value) => {
		// Update the value in the specific cell
		const updatedRows = [...rows];
		updatedRows[rowIndex][columnIndex] = value;
		setRows(updatedRows);
	};

	return (
		<div>
			{/*
			<table border={"2px"}>
				<thead>
					<td>one</td>
					<td>Two</td>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>2</td>
					</tr>
					<tr>
						<td>1</td>
						<td>2</td>
					</tr>
				</tbody>
			</table>

			*/}

			<div style={{ margin: "10px" }}>
				<button onClick={addRow}>Add Row</button>
				<button onClick={addColumn}>Add Column</button>
			</div>

			<table
				border="1"
				style={{ marginTop: "10px", borderCollapse: "collapse" }}
			>
				<thead>
					<tr>
						{rows[0].map((_, index) => (
							<th key={index}>Column {index + 1}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{row.map((cell, columnIndex) => (
								<td key={columnIndex}>
									<input
										type="text"
										value={cell}
										onChange={(e) =>
											handleCellChange(rowIndex, columnIndex, e.target.value)
										}
									/>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DynamicTable;
