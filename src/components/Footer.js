const Footer = ({ weather }) => {
	return (
		<>
			<div>
				<h4 className="location" >Location: { weather.region }</h4>
			</div>
			
		</>
	)
}

export default Footer