const Day13_code = `
export default function App() {
	const [billAmount, setBillAmount] = useState(0)
	const [tipPercentage, setTipPercentage] = useState(0)
	const [totalAmount, setTotalAmount] = useState(0)
	const [error, setError] = useState('')

	const calculateTotalAmount = () => {
		const parsedBillAmount = parseFloat(billAmount)
		const parsedTipPercentage = parseFloat(tipPercentage)

		if (
			isNaN(parsedBillAmount) ||
			isNaN(parsedTipPercentage) ||
			parsedTipPercentage < 1
		) {
			setError(
				'Please enter valid numbers for Bill Amount and Tip Percentage.'
			)
			setTotalAmount(0)
		} else {
			const tipAmount = (parsedBillAmount * parsedTipPercentage) / 100
			const total = parsedBillAmount + tipAmount
			setTotalAmount(total)
			setError('')
		}
	}
	return (
		<>
			<div className="flex-col text-center d-flex align-center">
				<input
					type="number"
					id="billAmount"
					placeholder="Enter Bill Amount Here"
					className="p-4 my-3 bg-gray-200 rounded-full outline-none border-3"
					onChange={(e) => setBillAmount(e.target.value)}
				/>
				<input
					type="number"
					id="tipPercent"
					placeholder="Enter the tip percentage"
					className="p-4 bg-gray-200 rounded-full outline-none border-3"
					onChange={(e) => setTipPercentage(e.target.value)}
				/>
				<button
					id="calculate"
					className="flex p-4 my-4 font-bold text-white bg-green-500 rounded-full"
					onClick={calculateTotalAmount}
				>
					Calculate Tip
				</button>
				<div id="totalAmount">{totalAmount}</div>
			</div>
		</>
	)
}
`;

export default Day13_code;
