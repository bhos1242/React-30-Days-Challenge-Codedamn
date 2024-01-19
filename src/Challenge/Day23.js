import { useState } from 'react'

export default function Day23() {
	const [number, setNumber] = useState(0)
	const [table, setTable] = useState([])
	const generateMultiplicationTable = () => {
		const num = parseInt(number, 10)

		if (isNaN(num) || num < 0 || num > 1000) {
			alert('Please enter a valid number between 0 and 1000.')
			return
		}
		const newTable = []
		for (let i = 1; i <= 20; i++) {
			newTable.push(number * i)
		}
		setTable(newTable)
	}
	return (
		<>
			<div className="p-3 text-center">
				<h1
					id="heading"
					className="p-2 font-bold text-white bg-blue-400 rounded-md"
				>
					Multiplication Table Generator
				</h1>
				<div>
					<input
						type="number"
						id="number"
						placeholder="Enter number"
						onChange={(e) => setNumber(e.target.value)}
						className="p-3 m-4 text-center bg-gray-200 rounded-full outline-none"
					/>

					<button
						id="generateTable"
						className="p-3 font-bold text-white bg-green-400 rounded-full cursor-pointer hover:bg-green-500"
						onClick={generateMultiplicationTable}
					>
						Generate Table
					</button>
				</div>

				<div id="table">
					{table.length > 0 && (
						<ul id="multiplicationTable">
							{table.map((row, index) => (
								<li key={index}>{row}</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	)
}
