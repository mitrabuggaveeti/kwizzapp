// send qriginal quiz questions and attempted quiz questions and evaluate the totalScore

const ComputeResult = (questions, attempted) => {
	let totalScore = 0
	attempted.forEach((question) => {
		const realQues = questions.find((x) => x.id === question.id)
		const correctOptions = realQues.options.filter((op) => op.isCorrect)

		if (correctOptions.length < 1) return 0

		const attemptedOptions = question.selectedOptions
		if (realQues.optionType === 'check') {
			const weightage = 1 / correctOptions.length
			let qScore = 0
			if (correctOptions.length < question.selectedOptions.length) {
				qScore -=
					(question.selectedOptions.length - correctOptions.length) * weightage
			}
			question.selectedOptions.forEach((selectedOp) => {
				const correct = correctOptions.find((op) => op.text === selectedOp)
				if (correct !== undefined) qScore += weightage
			})
			qScore < 0 ? (totalScore += 0) : (totalScore += qScore)
			console.log('Score : ', totalScore)
		} else if (realQues.optionType === 'radio') {
			if (correctOptions[0].text === attemptedOptions[0]) {
				totalScore++
			}
		}
	})
	return totalScore === 0 ? totalScore : totalScore.toFixed(2)
}

const q1 = [
	{
		id: 3,
		title: 'question 01',
		optionType: 'check',
		options: [
			{ text: 'option 01', isCorrect: false },
			{ text: 'option 02', isCorrect: true },
			{ text: 'option 03', isCorrect: false },
			{ text: 'option 04', isCorrect: true },
		],
	},
	{
		id: 2,
		title: 'question 01',
		optionType: 'radio',
		options: [
			{ text: 'option 01', isCorrect: false },
			{ text: 'option 02', isCorrect: false },
			{ text: 'option 03', isCorrect: false },
			{ text: 'option 04', isCorrect: true },
		],
	},
	{
		id: 1,
		title: 'question 01',
		optionType: 'check',
		options: [
			{ text: 'option 01', isCorrect: false },
			{ text: 'option 02', isCorrect: true },
			{ text: 'option 03', isCorrect: false },
			{ text: 'option 04', isCorrect: true },
		],
	},
	{
		id: 4,
		title: 'question 03',
		optionType: 'radio',
		options: [
			{ text: 'option 01', isCorrect: false },
			{ text: 'option 02', isCorrect: true },
			{ text: 'option 03', isCorrect: false },
			{ text: 'option 04', isCorrect: false },
		],
	},
]

const q2 = [
	{
		id: 3,
		title: 'question 01',
		optionType: 'check',
		selectedOptions: ['option 01', 'option 02', 'option 04'],
	},
	{
		id: 2,
		title: 'question 01',
		optionType: 'radio',
		selectedOptions: ['option 02'],
	},
	{
		id: 1,
		title: 'question 01',
		optionType: 'check',
		selectedOptions: ['option 02', 'option 04'],
	},
	{
		id: 4,
		title: 'question 03',
		optionType: 'radio',
		selectedOptions: ['option 02'],
	},
]

// console.log(ComputeResult(q1, q2))

module.exports = ComputeResult
