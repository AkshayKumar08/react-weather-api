const Section = ({ curTemp, minTemp, maxTemp, weather }) =>{

	return (
		<div>
			<div className="temp center">
				<h1>{parseInt(curTemp)}°C</h1>
			</div>
			<div className="temp center">
				<h3>{minTemp}°C / {maxTemp}°C</h3>
			</div>
			<div className="temp center">
				<h3>{weather}</h3>
			</div>
		</div>
	)
}

export default Section	