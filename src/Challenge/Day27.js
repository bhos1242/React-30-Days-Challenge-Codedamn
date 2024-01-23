import { useState, useEffect } from 'react'

export default function Day27() {
	const [nameList, setNameList] = useState([])
	const [input, setInput] = useState('')
	const [pickedName, setPickedName] = useState(null)
	const [pickedList, setPickedList] = useState([])

	useEffect(() => {
		console.log('Updated Names:', nameList)
	}, [nameList])

	const handleSubmit = (e) => {
		e.preventDefault()
		setNameList((prevNames) => [...prevNames, input])
		setInput('')
	}

	const handleInput = (e) => {
		setInput(e.target.value)
	}

	const pickName = () => {
		if (nameList.length > 0) {
			const selectedName =
				nameList[Math.floor(Math.random() * nameList.length)]
			setPickedName(selectedName)
			setPickedList((prevPickedList) => [...prevPickedList, selectedName])
		}
	}

	return (
		<>
			<div className="flex flex-col space-y-4 text-center">
				<h1
					id="heading"
					className="p-3 text-3xl font-bold text-center text-green-600"
				>
					Game: Raffle Draw
				</h1>
				<div id="input-div">
					<form action="submit" onSubmit={handleSubmit}>
						<input
							type="text"
							id="nameInput"
							value={input}
							placeholder="Enter Name"
							onChange={handleInput}
							className="p-3 text-lg font-bold text-center bg-gray-300 rounded-full outline-none focus:ring-2 focus:ring-green-500"
						/>
					</form>
				</div>
				<div id="nameList">
					{nameList.map((playerName, index) => (
						<>
							<span className="name" key={index}>
								{playerName}
							</span>
							<br></br>
						</>
					))}
				</div>
				<div className="btn">
					<button
						id="pick"
						onClick={pickName}
						className="p-3 text-white transition-transform transform bg-green-400 rounded-full cursor-pointer hover:bg-green-500 active:scale-95"
					>
						Pick a Name
					</button>
				</div>
				{pickedName && (
					<div id="nameDialog" className="modal">
						<div className="modal-content">
							<span
								className="close"
								onClick={() => setPickedName(null)}
							>
								&times;
							</span>
							<p className="text-lg font-bold text-green-600">
								Picked Name: {pickedName}
							</p>
						</div>
					</div>
				)}
				{pickedList.length > 0 && (
					<div id="pickedList">
						{pickedList.map((pickedName, index) => (
							<>
								<span className="name" key={index}>
									{pickedName}
								</span>
								<br></br>
							</>
						))}
					</div>
				)}
			</div>
		</>
	)
}
