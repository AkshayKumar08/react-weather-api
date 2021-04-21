const Footer = ({ region, lastUpdate }) => {
	return (
		<>
			<div>
				<h4 className="location" >Location: { region }</h4>
			</div>
			
			<div>
				{/*<h4 className="update">Last Updated: {lastUpdate} seconds ago</h4>*/}
			</div>
		</>
	)
}

export default Footer