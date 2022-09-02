import React, { useState } from 'react'
import { Editor } from './components/Editor'

import './App.css'
import { Console } from './components/console'

export default function App() {
	const [input, setInput] = useState('')

	return (
		<div className="App">
			<Editor
				placeHolder="Type your code here..."
				onChange={(e) => setInput(e.target.value)}
			/>
			<Console></Console>
		</div>
	)
}
