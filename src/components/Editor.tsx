import './Editor.css'

export const Editor = ({ placeHolder, onChange, onKeyDown, defaultValue }) => {
	return (
		<textarea
			className="editor"
			placeholder={placeHolder}
			onChange={onChange}
			defaultValue={defaultValue}
		></textarea>
	)
}
