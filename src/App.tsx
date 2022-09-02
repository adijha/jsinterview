import React, { useState } from 'react'
import { Editor } from './components/Editor'

import './App.css'
import { Console } from './components/console'

export default function App() {
	const [input, setInput] = useState('')
	const defaultCode = `console.log("abba harmonium bajate hai")`
	
	function runCode(params: type) {
		var fnparams = [1, 2, 3]
		console.log('first')
		const fn = window[defaultCode]
		if (typeof fn === 'function') fn.apply(null, fnparams)
	}

	return (
		<div className="App">
			<div className="container">
				<Editor
					placeHolder="Type your code here..."
					onChange={(e) => setInput(e.target.value)}
					defaultValue={defaultCode}
				/>
				<Console></Console>
			</div>
			<button
				onClick={runCode}
				type="button"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
			>
				Run Javascript using browser v8
			</button>
		</div>
	)
}
