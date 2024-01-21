import { useState } from 'react'

const MS_PER_DAY = 1000 * 60 * 60 * 24
export default function Day25() {
	const [date, setDate] = useState('')
	const [error, setError] = useState('')
	const [daysUntil, setDaysUntil] = useState('')
	const findDays = () => {
		const currentDate = new Date()
		const selectedDate = new Date(date)

		if (selectedDate <= currentDate) {
			setError('Error: Past Date Entered')
		} else {
			const diffInMilliseconds = selectedDate - currentDate
			const daysDiff = Math.ceil(diffInMilliseconds / MS_PER_DAY)
			setDaysUntil(daysDiff)
			setError('')
		}
	}

	return (
		<>
			<div className="p-4 text-center">
				<div id="input">
					<input
						type="date"
						id="datePicker"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						className="p-3 bg-green-400 rounded-full"
					/>
				</div>
				<div id="button">
					<button
						id="findDays"
						className="p-3 m-2 bg-red-400 rounded-full hover:bg-red-500"
						onClick={findDays}
					>
						Find Days
					</button>
				</div>
				<div id="error">{error}</div>
				{daysUntil && <span id="daysLeft">{daysUntil}</span>}
			</div>
		</>
	)
}
