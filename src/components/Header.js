import Button from './Button'
import {useState} from 'react'

const Header = ({ getData }) => {
	const [region, setRegion] = useState('')
	const onSubmit = (e) => {
		e.preventDefault()
		getData(region)
	}

	return (
		<div>
			<form onSubmit={ onSubmit }>
				<input type="text" 
				onChange={ (e) => setRegion(e.target.value)}/>
				<Button />
			</form>
		</div>
	)
}

export default Header;