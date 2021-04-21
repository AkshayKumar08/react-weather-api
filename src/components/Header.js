import Button from './Button'
import {useState} from 'react'


const Header = ({ fetchData }) => {
	const [region, setRegion] = useState('')
	const onSubmit = (e) => {
		e.preventDefault()
		if(! region){
			alert('Please enter something')
		}
		fetchData(region)
	}

	return (
		<div className="header">
			<div className="my-form">
				<form onSubmit={ onSubmit }>
					<input 
					type="text" 
					onChange={ (e) => setRegion(e.target.value)}/>
					<Button />
				</form>
			</div>
			
		</div>
	)
}

export default Header;