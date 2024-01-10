import { useState } from 'react'

export default function Day14() {
	const [fromUnit, setFromUnit] = useState('')
	const [toUnit, setToUnit] = useState('')
	const [conversionValue, setConversionValue] = useState('')
	const [convertedValue, setConvertedValue] = useState('')
	// You can make use of this object to construct the select elements and the conversion
	const handleFromSelect = (e) => {
		setFromUnit(e.target.value)
	}
	const handleToSelect = (e) => {
		setToUnit(e.target.value)
	}

	const convertFunction = () => {
		// Check if fromUnit, toUnit, and conversionValue are not empty
		if (fromUnit && toUnit && conversionValue) {
			const fromValue = parseFloat(conversionValue)
			const conversionRate =
				conversionRates[fromUnit] / conversionRates[toUnit]
			const finalValue = fromValue * conversionRate
			setConvertedValue(finalValue.toFixed(3))

			// Display the result in the outputValue div
		} else {
			// Handle the case where input is incomplete
			alert('Please select units and enter a value to convert.')
		}
	}
	const conversionRates = {
		centimeters: 1,
		inches: 2.54,
		feet: 30.48,
		meters: 100,
		kilometers: 100000,
		miles: 160934.4
	}

	const units = [
		'centimeters',
		'inches',
		'miles',
		'feet',
		'kilometers',
		'meters'
	]

	return (
		<>
			<div className="flex flex-col justify-center text-center border-2">
				<div className="flex justify-center my-3 space-x-5 text-center select-units">
					<select
						id="fromUnit"
						className="p-3 text-white capitalize bg-green-500 rounded-full outline-none"
						onChange={handleFromSelect}
						value={fromUnit}
					>
						{units.map((unit, index) => (
							<option key={index} className="p-3 bg-green-500">
								{unit}
							</option>
						))}
					</select>
					<select
						name=""
						id="toUnit"
						value={toUnit}
						className="p-3 text-white capitalize bg-blue-500 rounded-full outline-none"
						onChange={handleToSelect}
					>
						{units.map((unit, index) => (
							<option key={index}>{unit}</option>
						))}
					</select>
				</div>
				<div className="text-center input">
					<input
						type="number"
						id="fromValue"
						className="p-2 bg-gray-300 rounded-full outline-none "
						placeholder="Enter Value to Convert"
						onChange={(e) => setConversionValue(e.target.value)}
					/>
				</div>
				<div>
					<button
						id="convert"
						onClick={convertFunction}
						className="p-3 px-4 my-5 font-bold text-white bg-red-500 rounded-full"
					>
						Convert
					</button>
				</div>
				<div id="outputValue" className="bg-gray-200">
					{convertedValue}
				</div>
			</div>
		</>
	)
}
